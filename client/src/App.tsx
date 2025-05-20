import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/loading-screen";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import { LoadingProvider } from "@/contexts/LoadingContext";

// Lazy load less frequently accessed pages to improve initial load time
const ContactPage = lazy(() => import("@/pages/Contact"));
const AboutPage = lazy(() => import("@/pages/About"));
const ResourcesPage = lazy(() => import("@/pages/Resources"));
const LoginPage = lazy(() => import("@/pages/Login"));
const SignupPage = lazy(() => import("@/pages/Signup"));
const ProductsPage = lazy(() => import("@/pages/Products"));

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center">
      <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<PageLoader />}>
        <Switch key={location}>
          <Route path="/" component={Home} />
          <Route path="/product/:slug">
            {(params) => <ProductDetail slug={params.slug} />}
          </Route>
          <Route path="/product/:slug/:subslug">
            {(params) => <ProductDetail slug={`${params.slug}/${params.subslug}`} />}
          </Route>
          <Route path="/products" component={ProductsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/resources" component={ResourcesPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <LoadingProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          {loading ? (
            <LoadingScreen />
          ) : (
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <Router />
              </main>
              <Footer />
              <WhatsAppFloat />
            </div>
          )}
        </TooltipProvider>
      </QueryClientProvider>
    </LoadingProvider>
  );
}

export default App;
