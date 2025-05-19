import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play } from "lucide-react";
import slide1 from "@/assets/hero/ele1.png";
import slide2 from "@/assets/hero/ele2.png";
import slide3 from "@/assets/hero/ele3.png";
import slide4 from "@/assets/hero/ele4.png";
import { useState, useEffect, useRef } from "react";
import ScheduleDemoModal from "@/components/sections/ScheduleDemoModal";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const images = [slide1, slide2, slide3, slide4];
const IMAGE_SLIDE_INTERVAL = 3500;
const VIDEO_SRC = "/bg-video.mp4";
const VIDEO_POSTER = "/bg-video-poster.jpg";

const Hero = ({
  title,
  description,
  image,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmall = windowWidth < 640;
  const isMedium = windowWidth >= 640 && windowWidth < 1024;

  const circleStyle = {
    position: "absolute" as const,
    bottom: isSmall ? "-30px" : isMedium ? "-40px" : "-50px",
    right: isSmall ? "-60px" : isMedium ? "-80px" : "-100px",
    width: isSmall ? "250px" : isMedium ? "400px" : "700px",
    height: isSmall ? "250px" : isMedium ? "400px" : "700px",
    backgroundColor: "#FF0000",
    borderRadius: "50%",
    zIndex: -1,
  };

  const sliderSize = {
    width: isSmall ? 280 : isMedium ? 400 : 600,
    height: isSmall ? 180 : isMedium ? 280 : 400,
    position: "relative" as const,
    overflow: "hidden",
    borderRadius: "1.5rem",
  };

  const dotSize = isSmall ? 10 : 14;
  const dotMargin = isSmall ? 4 : 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 100;
    const rotateY = (x / rect.width) * 100;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const container = imageContainerRef.current;
    if (container) {
      container.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section className="text-black pt-36 pb-16 md:pt-40 md:pb-24 h-screen overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={VIDEO_POSTER}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-4 relative z-10">
        <div className="absolute top-0 right-0 opacity-10 w-64 h-64 rounded-full bg-yellow-400 blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 opacity-10 w-96 h-96 rounded-full bg-yellow-400 blur-3xl -ml-48 -mb-48"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight relative inline-block"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl mb-8 text-slate-500 max-w-xl"
            >
              {description}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link href={primaryButtonLink}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-[#FFCC00] text-gray-800 hover:bg-white hover:text-primary font-medium text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  {primaryButtonText}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-600 text-red-600 bg-white hover:bg-red-600 hover:border-red-600 hover:text-white font-medium text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                onClick={() => setShowDemoModal(true)}
              >
                <i className="bx bx-calendar-alt"></i>
                <span>Book Appointment</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="z-10 flex flex-col items-center justify-center relative"
          >
            <div style={circleStyle}></div>

            {/* 3D Animated Image Slider */}
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                ...sliderSize,
                transformStyle: "preserve-3d",
                perspective: "1000px",
                transition: "transform 0.2s ease-out",
              }}
              className="hover:scale-150 transition-all duration-300"
            >
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`Hero Slide ${idx + 1}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "110%",
                    height: "110%",
                    objectFit: "contain",
                    opacity: idx === currentIndex ? 1 : 0,
                    transition: "opacity 0.7s ease",
                    backfaceVisibility: "hidden",
                  }}
                />
              ))}
            </div>

            {/* Selector Dots */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: dotSize,
                    height: dotSize,
                    borderRadius: "50%",
                    margin: `0 ${dotMargin}px`,
                    background: idx === currentIndex ? "#FFCC00" : "#fff",
                    border: "2px solid #FFCC00",
                    opacity: idx === currentIndex ? 1 : 0.5,
                    transition: "background 0.3s, opacity 0.3s",
                    cursor: "pointer",
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ScheduleDemoModal open={showDemoModal} onClose={() => setShowDemoModal(false)} title="Schedule a Demo" />
      <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100px",
        background: "linear-gradient(to top, white, rgba(255,255,255,0))",
        zIndex: 5,
        pointerEvents: "none",
      }}
    />
    </section>
  );
};

export default Hero;