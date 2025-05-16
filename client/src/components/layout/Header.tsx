import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Logo } from "@/components/ui/logo";
import { MegaMenu } from "@/components/ui/mega-menu";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import userLogo from "@/assets/user.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAltNumber, setShowAltNumber] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    // Check for logged in user
    const user = localStorage.getItem('currentUser');
    setCurrentUser(user ? JSON.parse(user) : null);
  }, [location]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAltNumber((prev) => !prev);
    }, 2000); // Change every 1.2 seconds
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    window.location.href = '/';
  };
  
  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <a href="mailto:support@agtglobal.in" className="text-sm text-gray-600 hover:text-primary transition duration-300 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span className="hidden sm:inline">info@agtglobal.in</span>
            </a>
            <a
              href={showAltNumber ? "tel:+919558803148" : "tel:0261-3117799"}
              className="text-sm text-gray-600 hover:text-primary transition duration-300 flex items-center"
            >
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span
                key={showAltNumber ? "alt" : "main"}
                className="hidden sm:inline transition-opacity duration-500 opacity-100"
              >
                {showAltNumber ? "+91 9558803148" : "0261-3117799"}
              </span>
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/agtglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://www.instagram.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="https://www.facebook.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="https://twitter.com/agtplin" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                <FaXTwitter size={14} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="h-9 md:h-12" />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {/* Products Dropdown */}
            <MegaMenu />
            
            {/* Resources */}
            <Link href="/resources">
              <span className="nav-link font-medium text-gray-800 hover:text-primary transition duration-300 cursor-pointer relative group">
                Resources
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </Link>
            
            {/* About Us */}
            <Link href="/about">
              <span className="nav-link font-medium text-gray-800 hover:text-primary transition duration-300 cursor-pointer relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </Link>
            
            {/* Contact Us */}
            <Link href="/contact">
              <span className="nav-link font-medium text-gray-800 hover:text-primary transition duration-300 cursor-pointer relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
        

          </div>

          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white shadow-lg fixed top-[97px] left-0 right-0 z-50 max-h-[calc(100vh-97px)] overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                <li className="py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-lg text-gray-800">Products</span>
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </div>
                  <ul className="pl-4 mt-3 space-y-3">
                    <li><Link href="/product/busy"><span className="block py-2 text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Busy Solutions</span></Link></li>
                    <li><Link href="/product/tally"><span className="block py-2 text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Tally Solutions</span></Link></li>
                    <li><Link href="/product/ms-azure"><span className="block py-2 text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">MS Azure</span></Link></li>
                    <li><Link href="/product/zoho"><span className="block py-2 text-gray-600 hover:text-primary transition-colors duration-300 cursor-pointer">Zoho</span></Link></li>
                  </ul>
                </li>
                <li className="py-3 border-b border-gray-100">
                  <Link href="/resources">
                    <span className="font-semibold text-lg block text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">Resources</span>
                  </Link>
                </li>
                <li className="py-3 border-b border-gray-100">
                  <Link href="/about">
                    <span className="font-semibold text-lg block text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">About Us</span>
                  </Link>
                </li>
                <li className="py-3 border-b border-gray-100">
                  <Link href="/contact">
                    <span className="font-semibold text-lg block text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
