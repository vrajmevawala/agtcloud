import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 1 second on first load
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Set up the interval for showing/hiding
    const interval = setInterval(() => {
      setIsVisible(true);
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 7000); // Total cycle is 7 seconds (5 seconds visible + 2 seconds hidden)

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/919558803148?text=Hi%2C%20I'm%20interested%20in%20your%20cloud%20services!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-20 left-6 z-50 flex items-center gap-4 bg-[#25D366] text-white px-4 py-2 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors duration-300 text-xl font-bold sm:px-4 sm:py-2 px-3 py-3 sm:bottom-20 bottom-6 sm:left-6 left-3"
          style={{ boxShadow: '0 8px 32px 0 rgba(34, 139, 34, 0.25)' }}
        >
          <FaWhatsapp className="text-2xl sm:text-2xl text-xl" />
          <span className="font-semibold text-lg md:text-xl hidden sm:inline">Contact Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat; 