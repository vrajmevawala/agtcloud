import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGooglePlay, FaApple, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MapPin, Phone, Mail, Copyright, X } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showAltNumber, setShowAltNumber] = useState(false);
  const [showSupportPopup, setShowSupportPopup] = useState(false);

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

      {/* Support Center Popup */}
      {showSupportPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-gray-900">Support Center</h3>
              <button
                onClick={() => setShowSupportPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-4">
              <iframe
                src="https://support.agtpl.in/"
                className="w-full h-[70vh] border-0"
                title="Support Center"
              />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-left justify-left">
                <div className="flex flex-col items-center">
                  <Logo variant="white" className="h-16 mb-2 mx-auto" />
                  <span className="text-white font-bold">Since 2019</span>
                </div>
              </div>
            </Link>
            <p className="mt-6 text-gray-400 max-w-md leading-relaxed">
              Empowering businesses with innovative cloud solutions and software services for over {new Date().getFullYear() - 2019} years.
            </p>
            <div className="flex space-x-5 mt-8 mb-6">
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
            <span className="mt-6 gap-2">
              <span className="text-sm text-gray-400 font-bold">Download App:</span>
              <span className="text-sm text-gray-400 mt-2"> AGT Events for Attendees</span>


              <div className="flex space-x-4 mt-3">
                <a href="https://play.google.com/store/apps/details?id=com.agt.eventattendees&hl=en_IN" target="_blank" rel="noopener noreferrer" aria-label="Google Play Store" className="bg-gray-800 hover:bg-primary/80 transition-colors duration-300 cursor-pointer h-10 w-32 flex items-center justify-center rounded-lg border border-gray-700 hover:border-primary">
                  <FaGooglePlay className="h-6 w-6 mr-2" />
                  <span className="text-xs text-white font-semibold">Play Store</span>
                </a>
                <a href="https://apps.apple.com/in/app/agt-event-for-attendees/id6504627862" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store" className="bg-gray-800 hover:bg-primary/80 transition-colors duration-300 cursor-pointer h-10 w-32 flex items-center justify-center rounded-lg border border-gray-700 hover:border-primary">
                  <FaApple className="h-6 w-6 mr-2" />
                  <span className="text-xs text-white font-semibold">App Store</span>
                </a>
              </div>
            </span>
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
                <Link href="/product/agt-cloud">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">AGT Cloud</span>
                </Link>
              </li>
              <li>
                <Link href="/product/busy">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Busy Solutions</span>
                </Link>
              </li>
              <li>
                <Link href="/product/ms-azure">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">MS Azure</span>
                </Link>
              </li>
              <li>
                <Link href="/product/zoho">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Zoho Solutions</span>
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
                <Link href="/resources?tab=guides">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Guides</span>
                </Link>
              </li>
              <li>
                <Link href="/resources?tab=webinars">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Webinars</span>
                </Link>
              </li>
              <li>
                <Link href="/resources?tab=case-studies">
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Case Studies</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://support.agtpl.in/portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <span className="text-gray-400 hover:text-white transition-all duration-300 cursor-pointer block hover:translate-x-1">Support Center</span>
                </a>
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
            <p className="text-gray-400 mb-6 md:mb-0 text-center flex flex-col items-center gap-2">
              <span className="flex items-center gap-2">
                <Copyright className="h-4 w-4 inline-block" />
                <span> Copyright {new Date().getFullYear()} All rights reserved</span>
              </span>
              <span className="block mt-2">AccessGlobal Technology Private Limited (AGT)</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
