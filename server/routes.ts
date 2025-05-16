import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { productController } from "./controllers/productController";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/products", productController.getAllProducts);
  app.get("/api/products/:slug", productController.getProductBySlug);
  
  // Content Routes
  app.get("/api/content/hero", (req, res) => {
    res.json({
      title: "Empower Your Business with Cloud Solutions",
      description: "AccessGlobal Technology provides comprehensive cloud services and business software solutions to streamline your operations and accelerate growth.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Watch Demo",
      secondaryButtonLink: "/demo"
    });
  });
  
  app.get("/api/content/cta", (req, res) => {
    res.json({
      title: "Ready to Transform Your Business?",
      description: "Join thousands of businesses that are optimizing their operations and accelerating growth with our cloud solutions.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Free consultation and personalized recommendations for your business."
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
