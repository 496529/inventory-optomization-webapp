import { pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const employeesTable = pgTable("employees", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  gender: text("gender").notNull(),
  contact: text("contact").notNull(),
  dob: text("dob").notNull(),
  doj: text("doj").notNull(),
  password: text("password").notNull(),
  utype: text("utype").notNull().default("Employee"),
  address: text("address").notNull(),
  salary: text("salary").notNull(),
});

export const insertEmployeeSchema = createInsertSchema(employeesTable).omit({ id: true });
export type InsertEmployee = z.infer<typeof insertEmployeeSchema>;
export type Employee = typeof employeesTable.$inferSelect;
