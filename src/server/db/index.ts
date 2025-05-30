import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/utils/env";
import { user } from "@/server/db/schema";

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(env.DATABASE_URL, { prepare: false });

export const db = drizzle(client, { schema: { user } });
