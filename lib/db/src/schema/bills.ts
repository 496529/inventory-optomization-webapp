import { pgTable, serial, text, real, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const billsTable = pgTable("bills", {
  id: serial("id").primaryKey(),
  billNo: text("bill_no").notNull(),
  customerName: text("customer_name").notNull(),
  contact: text("contact").notNull(),
  items: jsonb("items").notNull().$type<{ name: string; price: number; qty: number; total: number }[]>(),
  billAmount: real("bill_amount").notNull(),
  discount: real("discount").notNull().default(0),
  netPay: real("net_pay").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertBillSchema = createInsertSchema(billsTable).omit({ id: true });
export type InsertBill = z.infer<typeof insertBillSchema>;
export type Bill = typeof billsTable.$inferSelect;
