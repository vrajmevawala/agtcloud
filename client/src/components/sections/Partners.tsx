import { motion } from "framer-motion";
import busyLogo from "@/assets/partners/busy.jpg";
import zohoLogo from "@/assets/partners/zoho.png";
import azureLogo from "@/assets/partners/Azure.png";
import tallyLogo from "@/assets/partners/tally-logo.png";
import microsoftLogo from "@/assets/partners/microsoft.png";

// Partner logos
const partners = [
  { name: "Busy Solutions", logo: busyLogo },
  { name: "Azure", logo: azureLogo },
  { name: "Zoho", logo: zohoLogo },
  { name: "Tally Solutions", logo: tallyLogo },
  { name: "Microsoft", logo: microsoftLogo },
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading technology providers to offer you the best solutions for your business needs.
          </p>
        </motion.div>


        {/* Marquee for partner logos */}
        <div className="overflow-hidden whitespace-nowrap group">
          <div className="inline-block animate-marquee group-hover:[animation-play-state:paused]">
            {partners.concat(partners).map((partner, idx) => (
              <span key={idx} className="mx-20 inline-flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-16 object-contain transition-all duration-300"
                  style={{ minWidth: '128px' }}
                />
              </span>
            ))}
          </div>
        </div>
        {/* End Marquee for partner logos */}
      </div>
    </section>
  );
};

export default Partners;