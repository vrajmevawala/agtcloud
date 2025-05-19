import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGooglePlay, FaApple, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showAltNumber, setShowAltNumber] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAltNumber((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 opacity-20 blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 opacity-20 blur-3xl -ml-40 -mb-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/">
              <Logo variant="white" className="h-16 mb-2" />
            </Link>
            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              Empowering businesses with innovative cloud solutions and software services for over 6 years.
            </p>
            <div className="flex space-x-5 mt-8">
              <a href="https://www.linkedin.com/company/agtglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white hover:bg-primary/30 transition-colors duration-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-primary">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white hover:bg-primary/30 transition-colors duration-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-primary">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.facebook.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white hover:bg-primary/30 transition-colors duration-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-primary">
                <FaFacebookF size={18} />
              </a>
              <a href="https://twitter.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-gray-400 hover:text-white hover:bg-primary/30 transition-colors duration-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-primary">
                <FaXTwitter size={18} />
              </a>
              <a href="https://www.youtube.com/@agtplin" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white hover:bg-primary/30 transition-colors duration-300 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-primary">
                <FaYoutube size={20} />
              </a>
            </div>
            {/* App Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://play.google.com/store/apps/details?id=com.yourcompany.app" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store" className="bg-gray-800 hover:bg-primary/80 transition-colors duration-300 cursor-pointer h-10 w-32 flex items-center justify-center rounded-lg border border-gray-700 hover:border-primary">
                <FaGooglePlay className="h-6 w-6 mr-2" />
                <span className="text-xs text-white font-semibold">Google Play</span>
              </a>
              <a href="https://apps.apple.com/app/idXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store" className="bg-gray-800 hover:bg-primary/80 transition-colors duration-300 cursor-pointer h-10 w-32 flex items-center justify-center rounded-lg border border-gray-700 hover:border-primary">
                <FaApple className="h-6 w-6 mr-2" />
                <span className="text-xs text-white font-semibold">App Store</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Products
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/product/tally">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Tally Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/product/busy">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Busy</span>
                </Link>
              </li>
              <li>
                <Link href="/product/ms-azure">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">MS Azure</span>
                </Link>
              </li>
              <li>
                <Link href="/product/zoho">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Zoho</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Cloud Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Resources
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/webinars">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Webinars</span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Case Studies</span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Support Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-8 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">Dr. Jamasji Building, Opp. Lalbhai Contractor Complex, Beside Parsi Library, Nanpura, Surat, Gujarat 395001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a
                  href={showAltNumber ? "tel:+919558803148" : "tel:0261-3117799"}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <span
                    key={showAltNumber ? "alt" : "main"}
                    className="transition-opacity duration-500 opacity-100"
                  >
                    {showAltNumber ? "+91 9558803148" : "0261-3117799"}
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                <a href="mailto:info@agtglobal.in" className="text-gray-400 hover:text-white transition duration-300">info@agtglobal.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-6 md:mb-0 text-center">
              <span>CopyRight 2025 All right reserved</span>
              <br />
              <span>AccessGlobal Technology Private Limited (AGT)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
