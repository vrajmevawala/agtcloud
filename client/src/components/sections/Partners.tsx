import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import busyLogo from "@/assets/partners/busy.jpg";
import dellLogo from "@/assets/partners/dell.png";
import godaddyLogo from "@/assets/partners/godaddy.png";
import sandiskLogo from "@/assets/partners/sandisk.png.png";
import appleLogo from "@/assets/partners/apple.png";
import acerLogo from "@/assets/partners/acer.png";
import sonyLogo from "@/assets/partners/sony.png";
import dlinkLogo from "@/assets/partners/dlink.png";
import asusLogo from "@/assets/partners/asus.png";
import panasonicLogo from "@/assets/partners/panasonic.png";
import zohoLogo from "@/assets/partners/zoho.png";
import ciscoLogo from "@/assets/partners/cisco.png";
import hikvisionLogo from "@/assets/partners/hikvision.png";
import lenovoLogo from "@/assets/partners/lenovo.png";
import hpLogo from "@/assets/partners/hp.png";
import epsonLogo from "@/assets/partners/epson.png";
import lgLogo from "@/assets/partners/lg.png";
import tallyLogo from "@/assets/partners/tally-logo.png";

// Partner logos
const partners = [
  { name: "Busy Solutions", logo: busyLogo },
  { name: "Dell", logo: dellLogo },
  { name: "GoDaddy", logo: godaddyLogo },
  { name: "SanDisk", logo: sandiskLogo },
  { name: "Apple", logo: appleLogo },
  { name: "Acer", logo: acerLogo },
  { name: "Sony", logo: sonyLogo },
  { name: "D-Link", logo: dlinkLogo },
  { name: "Asus", logo: asusLogo },
  { name: "Panasonic", logo: panasonicLogo },
  { name: "Zoho", logo: zohoLogo },
  { name: "Cisco", logo: ciscoLogo },
  { name: "Hikvision", logo: hikvisionLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "HP", logo: hpLogo },
  { name: "Epson", logo: epsonLogo },
  { name: "LG", logo: lgLogo },
  { name: "Tally Solutions", logo: tallyLogo },
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
              <span key={idx} className="mx-12 inline-flex items-center justify-center">
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