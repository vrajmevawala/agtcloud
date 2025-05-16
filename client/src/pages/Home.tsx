import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import HomeFeatures from "@/components/sections/HomeFeatures";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CallToAction from "@/components/sections/CallToAction";
import { Helmet } from "react-helmet";

type HeroData = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
};

type CtaData = {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  note?: string;
};

const Home = () => {
  const { data: heroData } = useQuery<HeroData>({
    queryKey: ["/api/content/hero"],
    staleTime: Infinity,
  });

  const { data: ctaData } = useQuery<CtaData>({
    queryKey: ["/api/content/cta"],
    staleTime: Infinity,
  });

  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
      {/* Faded Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/bg-video-poster.jpg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Main Content Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Helmet>
          <title>AccessGlobal Technology - Cloud Service Provider</title>
          <meta 
            name="description" 
            content="AGT provides cloud services and business software solutions featuring products from Busy Solutions, Tally Solutions, MS Azure and Zoho. Empower your business with our technology solutions."
          />
          <meta property="og:title" content="AccessGlobal Technology - Cloud Service Provider" />
          <meta property="og:description" content="AGT provides cloud services and business software solutions featuring Busy Solutions, Tally Solutions, MS Azure and Zoho." />
          <meta property="og:type" content="website" />
        </Helmet>
        <Hero
          title={heroData?.title || "Empower Your Business with Cloud Solutions"}
          description={heroData?.description || "AccessGlobal Technology provides comprehensive cloud services and business software solutions to streamline your operations and accelerate growth."}
          image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=720"
          primaryButtonText={heroData?.primaryButtonText || "Get Started"}
          primaryButtonLink={heroData?.primaryButtonLink || "/contact"}
          secondaryButtonText={heroData?.secondaryButtonText || "Book Appointment"}
          secondaryButtonLink={heroData?.secondaryButtonLink || "/demo"}
        />
        <Products />
        <HomeFeatures />
        <Testimonials />
        <Partners />
        <CallToAction
          title={ctaData?.title || "Ready to Transform Your Business?"}
          description={ctaData?.description || "Join thousands of businesses that are optimizing their operations and accelerating growth with our cloud solutions."}
          primaryButtonText={ctaData?.primaryButtonText || "Get Started"}
          primaryButtonLink={ctaData?.primaryButtonLink || "/contact"}
          secondaryButtonText={ctaData?.secondaryButtonText || "Book Appointment"}
          secondaryButtonLink={ctaData?.secondaryButtonLink || "/demo"}
          note={ctaData?.note || "Free consultation and personalized recommendations for your business."}
        />
      </motion.div>
    </div>
  );
};

export default Home;
