FROM node:18-slim

WORKDIR /app

# Install dependencies required for native modules
# RUN apt-get update && apt-get install -y \
#   python3 \
#   make \
#   g++ \
#   libusb-1.0-0-dev \
#   && rm -rf /var/lib/apt/lists/*

# Enable corepack for pnpm
RUN corepack enable

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY .npmrc ./

# Install pnpm
RUN npm install -g corepack@0.24.1 && corepack enable

# Install dependencies but skip postinstall scripts for problematic packages
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source code
COPY . .

# Build the application (this should work without native dependencies)
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
