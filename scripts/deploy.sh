#!/bin/bash

# Docker build & deployment script

if [ -f ".env.deploy" ]; then
    source .env.deploy
else
    echo "❌ .env.deploy file not found"
    echo "Create .env.deploy with your configuration first"
    exit 1
fi

if [ -n "$APP_NAME" ] && [ "$(echo "$APP_NAME" | tr -d ' ')" != "" ]; then
    # APP_NAME is provided and not empty/whitespace-only
    IMAGE_NAME="${REGISTRY_URL:-ghcr.io}/${GITHUB_USERNAME}/${REPO_NAME}/${APP_NAME}"
else
    # APP_NAME is empty or contains only whitespace, skip the trailing slash
    IMAGE_NAME="${REGISTRY_URL:-ghcr.io}/${GITHUB_USERNAME}/${REPO_NAME}"
fi

GIT_COMMIT=$(git rev-parse --short HEAD)
GIT_COMMIT_FULL=$(git rev-parse HEAD)
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
GIT_MESSAGE=$(git log -1 --pretty=%s)
GIT_AUTHOR=$(git log -1 --pretty=%an)
GIT_DATE=$(git log -1 --pretty=%ci)
GITHUB_COMMIT_URL="https://github.com/${GITHUB_USERNAME}/${REPO_NAME}/commit/${GIT_COMMIT_FULL}"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

echo "Starting deployment process..."
echo "Image: ${IMAGE_NAME}:latest"
echo "Commit: ${GIT_COMMIT}"
echo "Message: ${GIT_MESSAGE}"
echo "Author: ${GIT_AUTHOR}"

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Continue deployment? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

# Login to registry
echo "🔐 Logging into ${REGISTRY_URL:-ghcr.io}..."
if ! echo "$GITHUB_TOKEN" | docker login "${REGISTRY_URL:-ghcr.io}" -u "$GITHUB_USERNAME" --password-stdin; then
    echo "❌ Failed to login to ${REGISTRY_URL:-ghcr.io}"
    echo "Make sure GITHUB_TOKEN is set in .env.deploy"
    exit 1
fi

# Cleanup old images
export GH_TOKEN="${GITHUB_TOKEN}"
export GH_PAGER=""
echo "🧹 Cleaning up old GHCR images..."

# Get all version IDs and created dates
versions_json=$(gh api "users/${GITHUB_USERNAME}/packages/container/${REPO_NAME}/versions" \
  -H "Accept: application/vnd.github+json" \
  --paginate)

total_versions=$(echo "$versions_json" | jq length)

if [ "$total_versions" -le "$IMAGES_TO_KEEP" ]; then
  echo "📦 Only $total_versions images found — no cleanup needed."
  return
fi

echo "📦 Found $total_versions images. Keeping $IMAGES_TO_KEEP most recent..."

# Get the oldest ones to delete (desc)
versions_to_delete=$(echo "$versions_json" | jq -r "sort_by(.created_at) | .[0:$(($total_versions - $IMAGES_TO_KEEP))] | .[].id")

for version_id in $versions_to_delete; do
  echo "🗑️ Deleting image version ID: $version_id"
  gh api -X DELETE "users/${GITHUB_USERNAME}/packages/container/${REPO_NAME}/versions/${version_id}" \
    -H "Accept: application/vnd.github+json"
  echo "✅ Deleted version $version_id"
done

# Build and push image to registry
echo "Building Docker image..."
docker buildx build \
    --platform "${BUILD_PLATFORM:-linux/amd64}" \
    --tag "${IMAGE_NAME}:latest" \
    --tag "${IMAGE_NAME}:${GIT_COMMIT}" \
    --tag "${IMAGE_NAME}:${TIMESTAMP}" \
    --label "org.opencontainers.image.source=https://github.com/${GITHUB_USERNAME}/${REPO_NAME}" \
    --label "org.opencontainers.image.description=${APP_DESCRIPTION:-Coolify Application}" \
    --label "org.opencontainers.image.licenses=MIT" \
    --label "org.opencontainers.image.title=${APP_NAME}" \
    --label "org.opencontainers.image.vendor=${GITHUB_USERNAME}" \
    --label "org.opencontainers.image.created=$(date -u +'%Y-%m-%dT%H:%M:%SZ')" \
    --label "org.opencontainers.image.revision=${GIT_COMMIT_FULL}" \
    --label "org.opencontainers.image.version=${GIT_COMMIT}" \
    --label "org.opencontainers.image.url=${GITHUB_COMMIT_URL}" \
    --label "git.commit.sha=${GIT_COMMIT_FULL}" \
    --label "git.commit.short=${GIT_COMMIT}" \
    --label "git.commit.message=${GIT_MESSAGE}" \
    --label "git.commit.author=${GIT_AUTHOR}" \
    --label "git.commit.date=${GIT_DATE}" \
    --label "git.branch=${GIT_BRANCH}" \
    --label "git.repository=https://github.com/${GITHUB_USERNAME}/${REPO_NAME}" \
    --push \
    .

if [ $? -ne 0 ]; then
    echo "❌ Docker build failed"
    exit 1
fi

echo "✅ Docker image built and pushed successfully!"

# Trigger Coolify deployment
if [ -n "$COOLIFY_WEBHOOK_URL" ]; then
    echo "🔄 Triggering Coolify deployment..."
    
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$COOLIFY_WEBHOOK_URL" \
      -H "Authorization: Bearer ${COOLIFY_API}")
    
    if [ "$HTTP_CODE" -eq 200 ] || [ "$HTTP_CODE" -eq 201 ]; then
        echo "✅ Coolify deployment triggered successfully!"
    else
        echo "⚠️  Failed to trigger Coolify deployment (HTTP $HTTP_CODE)"
        echo "You may need to manually trigger deployment in Coolify"
    fi
else
    echo "⚠️  COOLIFY_WEBHOOK_URL not configured"
    echo "Add it to .env.deploy for automatic deployment triggering"
fi

echo ""
echo "🎉 Deployment process completed!"
echo ""
echo "Deployment Details:"
echo "   📦 Image: ${IMAGE_NAME}:latest"
echo "   🔖 Commit URL: ${GITHUB_COMMIT_URL}"
echo "   🕐 Timestamp: ${TIMESTAMP}"
echo "   🌐 Registry: ${REGISTRY_URL:-ghcr.io}"
echo ""
echo "📊 Coolify dashboard: ${COOLIFY_URL}"
echo ""
