// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  // index,
  // integer,
  pgTableCreator,
  text,
  timestamp,
  uuid,
  // varchar,
  // pgEnum,
  // jsonb,
} from "drizzle-orm/pg-core";

/*
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `razor-tools-sol_${name}`);

// Using single-project schema instead.
// export const createTable = pgTableCreator((name) => `${name}`);

// Ensure profile.id is populated with auth.users.id in server actions
export const user = createTable("profile", {
  id: uuid("id").primaryKey().notNull(),
  license: text("license").notNull().unique(),
  license_active: boolean("license_active").notNull().default(true),
  notify: boolean("notify").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`now()`)
    .notNull(),
  deletedAt: timestamp("deleted_at", { withTimezone: true }),
});
