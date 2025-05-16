import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";
import ScheduleDemoModal from "@/components/sections/ScheduleDemoModal";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  note?: string;
}

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  note
}: CallToActionProps) => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-red-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="font-bold text-3xl md:text-4xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
            variant="secondary"
            className="border-2 border-white text-black hover:bg-[#FFCC00] hover:text-gray-800 hover:border-[#FFCC00] font-medium text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            onClick={() => setShowDemoModal(true)}
          >
            <i className="bx bx-calendar-alt"></i>
            <span className="ml-2">Book Appointment</span>
          </Button>
        </motion.div>
        {note && (
          <motion.p 
            className="text-sm mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {note}
          </motion.p>
        )}
      </div>
      <ScheduleDemoModal open={showDemoModal} onClose={() => setShowDemoModal(false)} title="Schedule a Demo" />
    </section>
  );
};

export default CallToAction;
