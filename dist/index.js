// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/data/products.ts
var products = [
  {
    id: 2,
    slug: "tally",
    name: "Tally Solutions",
    title: "Comprehensive Business Management Solution",
    description: "Complete business solution for accounting, inventory management, and GST compliance designed for Indian businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Financial Accounting",
        description: "Powerful accounting features with multi-location and multi-currency support.",
        icon: "dollar-sign"
      },
      {
        title: "Inventory Management",
        description: "Comprehensive inventory tracking with batch and serial number management.",
        icon: "package"
      },
      {
        title: "Statutory Compliance",
        description: "Built-in compliance for GST, TDS, and other Indian tax requirements.",
        icon: "shield"
      },
      {
        title: "Business Intelligence",
        description: "Advanced reporting and analytics for informed decision-making.",
        icon: "bar-chart-2"
      }
    ],
    pricing: {
      title: "Tally Pricing Plans",
      description: "Select the ideal Tally solution for your business requirements.",
      plans: []
    },
    testimonials: [
      {
        quote: "Tally has been the backbone of our financial operations for years. The transition to GST was seamless thanks to Tally's features.",
        author: "Sunil Mehta",
        role: "CEO, XYZ Enterprises",
        rating: 5,
        initials: "SM"
      }
    ],
    cta: {
      title: "Ready to Optimize Your Business Operations?",
      description: "Join over a million businesses that rely on Tally for their financial and inventory management.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Expert support and implementation services available."
    }
  },
  {
    id: 3,
    slug: "ms-azure",
    name: "MS Azure",
    title: "Power Your Digital Transformation",
    description: "Flexible cloud platform for building, testing, deploying, and managing applications with global scale and reliability.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Cloud Infrastructure",
        description: "Scalable and secure infrastructure with global data center coverage.",
        icon: "server"
      },
      {
        title: "App Development",
        description: "Comprehensive tools for building and deploying applications in the cloud.",
        icon: "code"
      },
      {
        title: "Data Services",
        description: "Powerful database solutions with built-in intelligence and analytics.",
        icon: "database"
      },
      {
        title: "AI and Machine Learning",
        description: "Advanced AI capabilities to build intelligent applications at scale.",
        icon: "cpu"
      }
    ],
    pricing: {
      title: "MS Azure Pricing",
      description: "Flexible pay-as-you-go pricing with options for reserved instances.",
      plans: []
    },
    testimonials: [
      {
        quote: "Moving our infrastructure to Azure through AGT was the best decision we made. We've seen significant cost savings and improved performance.",
        author: "Priya Sharma",
        role: "CTO, Tech Innovations",
        rating: 5,
        initials: "PS"
      }
    ],
    cta: {
      title: "Ready to Move to the Cloud?",
      description: "Accelerate your cloud journey with our expert Azure implementation services.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Consultation",
      secondaryButtonLink: "/demo",
      note: "Free cloud readiness assessment available."
    }
  },
  {
    id: 1,
    slug: "busy",
    name: "Busy Solutions",
    title: "Streamline Your Finance & Inventory Management",
    description: "Comprehensive accounting and inventory management software designed specifically for Indian businesses with complete GST compliance.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "Accounting",
        description: "Complete financial accounting with multi-currency support and automated bank reconciliation.",
        icon: "calculator"
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking with batch management and barcode integration.",
        icon: "box"
      },
      {
        title: "GST Compliance",
        description: "Fully GST-compliant with automatic tax calculation and e-filing capabilities.",
        icon: "file-text"
      },
      {
        title: "Payroll",
        description: "Comprehensive payroll management with tax calculation and statutory compliance.",
        icon: "credit-card"
      }
    ],
    pricing: {
      title: "Busy Pricing Plans",
      description: "Choose the right Busy plan for your business needs.",
      plans: []
    },
    testimonials: [
      {
        quote: "Busy has completely transformed our accounting processes. The GST compliance features alone save us countless hours every month.",
        author: "Rajesh Kumar",
        role: "Finance Director, ABC Corporation",
        rating: 5,
        initials: "RK"
      }
    ],
    cta: {
      title: "Ready to Transform Your Finance Operations?",
      description: "Join thousands of businesses that are streamlining their accounting and inventory management with Busy.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Free consultation and personalized recommendations for your business."
    }
  },
  {
    id: 4,
    slug: "zoho",
    name: "Zoho",
    title: "Unified Business Operating System",
    description: "Integrated suite of over 40 business applications for sales, marketing, support, and operations.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720",
    features: [
      {
        title: "CRM & Sales",
        description: "Complete customer relationship management with sales automation.",
        icon: "users"
      },
      {
        title: "Marketing",
        description: "End-to-end marketing platform with campaign management and analytics.",
        icon: "send"
      },
      {
        title: "Finance",
        description: "Comprehensive accounting and financial management applications.",
        icon: "briefcase"
      },
      {
        title: "HR & Collaboration",
        description: "Tools for HR management, productivity, and team collaboration.",
        icon: "headphones"
      }
    ],
    pricing: {
      title: "Zoho Pricing",
      description: "All-in-one pricing for access to the complete Zoho suite of applications.",
      plans: []
    },
    testimonials: [
      {
        quote: "Zoho has transformed how we operate. Having all our tools in one integrated system has improved efficiency across all departments.",
        author: "Vikram Singh",
        role: "Operations Manager, Global Solutions",
        rating: 4.5,
        initials: "VS"
      }
    ],
    cta: {
      title: "Ready for an Integrated Business Solution?",
      description: "Experience the power of having all your business applications in one unified platform.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Schedule a Demo",
      secondaryButtonLink: "/demo",
      note: "Personalized implementation and training available."
    }
  }
];

// server/controllers/productController.ts
var productController = {
  getAllProducts: (req, res) => {
    res.json(products);
  },
  getProductBySlug: (req, res) => {
    const { slug } = req.params;
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return res.status(404).json({ message: `Product with slug '${slug}' not found` });
    }
    res.json(product);
  }
};

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", productController.getAllProducts);
  app2.get("/api/products/:slug", productController.getProductBySlug);
  app2.get("/api/content/hero", (req, res) => {
    res.json({
      title: "Empower Your Business with Cloud Solutions",
      description: "AccessGlobal Technology provides comprehensive cloud services and business software solutions to streamline your operations and accelerate growth.",
      primaryButtonText: "Get Started",
      primaryButtonLink: "/contact",
      secondaryButtonText: "Watch Demo",
      secondaryButtonLink: "/demo"
    });
  });
  app2.get("/api/content/cta", (req, res) => {
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
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __dirname = path.dirname(fileURLToPath(import.meta.url));
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
import { fileURLToPath as fileURLToPath2 } from "url";
var __dirname2 = path2.dirname(fileURLToPath2(import.meta.url));
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(__dirname2, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
import open from "open";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 3e3;
  server.listen(port, () => {
    log(`serving on port ${port}`);
    const url = `http://localhost:${port}`;
    log(`App running at: ${url}`);
    open(url);
  });
})();
