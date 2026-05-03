import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  supplier: text("supplier").notNull(),
  name: text("name").notNull(),
  price: text("price").notNull(),
  qty: text("qty").notNull(),
  status: text("status").notNull().default("Available"),
});

export const insertProductSchema = createInsertSchema(productsTable).omit({ id: true });
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof productsTable.$inferSelect;
