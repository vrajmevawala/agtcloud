import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users Table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name"),
  email: text("email"),
  role: text("role").default("user"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  email: true,
  role: true,
});

// Products Table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  features: json("features").notNull().$type<ProductFeature[]>(),
  pricing: json("pricing").notNull().$type<{
    title: string;
    description: string;
    plans: PricingPlan[];
  }>(),
  testimonials: json("testimonials").notNull().$type<Testimonial[]>(),
  cta: json("cta").notNull().$type<{
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    note?: string;
  }>(),
});

export const insertProductSchema = createInsertSchema(products).pick({
  slug: true,
  name: true,
  title: true,
  description: true,
  image: true,
  features: true,
  pricing: true,
  testimonials: true,
  cta: true,
});

// Inquiries Table
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  message: text("message").notNull(),
  product: text("product"),
  createdAt: text("created_at").notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  message: true,
  product: true,
});

// Type Definitions
export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  popular: boolean;
  buttonText: string;
  features: PricingFeature[];
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
  initials: string;
}

// Export Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;
