import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { pageVariants } from '@/lib/animations';

export default function Contact() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions about our products or services? Our team is here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <a 
                href="https://www.google.co.in/maps/place/AccessGlobal+Technology+Private+Limited/@21.1892901,72.8101211,16.24z/data=!4m6!3m5!1s0x3be04f68fbbc83af:0x26b8f6c0a09d18e0!8m2!3d21.1897307!4d72.8130786!16s%2Fg%2F11pc9yyq73?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 hover:bg-primary/20 transition-colors duration-300"
              >
                <MapPin className="h-8 w-8 text-primary" />
              </a>
              <h3 className="font-bold text-xl mb-4">Visit Us</h3>
              <p className="text-gray-600">
              Dr. Jamasji Building, Opp. Lalbhai Contractor Complex, Beside Parsi Library, Nanpura, Surat, Gujarat 395001
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Call Us</h3>
              <p className="text-gray-600 mb-2">
                Sales: +91-9558803148
              </p>
              <p className="text-gray-600">
                Support: 0261-3117799
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <a href="mailto:info@agtglobal.in"><Mail  className="h-8 w-8 text-primary" /></a>
              </div>
              <h3 className="font-bold text-xl mb-4">Email Us</h3>
              <a href="mailto:info@agtglobal.in" className="text-gray-600">
                info@agtglobal.in
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8">Inquiry</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input type="email" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input  className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input  className="w-full" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <Textarea placeholder="How can we help you?" className="w-full min-h-[150px]" />
              </div>
              <div className='flex justify-center'>
              <Button size="lg" className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Send className="h-5 w-5" /> Send Message
              </Button>
              </div>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}