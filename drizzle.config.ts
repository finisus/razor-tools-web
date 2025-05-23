import { type Config } from "drizzle-kit";
import { env } from "@/utils/env";

// For multi-project schema, add tablesFilter
// export default {
//   schema: "./src/server/db/schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: env.DATABASE_URL,
//   },
//   tablesFilter: ["vault-cannabis_*"],
// } satisfies Config;

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["razor-tools-sol_*"],
} satisfies Config;
