import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const LoadingScreen = () => {
  // Controls for the animated triangle
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      points: [
        "50,90 90,90 10,90", // start: flat at base
        "50,10 90,90 10,90"  // end: full triangle
      ],
      transition: { duration:0.7, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <div className="fixed inset-0 bg-red-600 flex items-center justify-center z-[9999]">
      <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Animated fill */}
        <motion.polygon
          initial={{ points: "50,90 90,90 10,90" }}
          animate={controls}
          fill="#FFCC00"
        />
      </svg>
    </div>
  );
};

export default LoadingScreen;