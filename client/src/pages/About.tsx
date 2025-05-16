import { motion } from 'framer-motion';
import { pageVariants, fadeInUpVariants } from '@/lib/animations';
import { Briefcase, Users, Award, TrendingUp } from 'lucide-react';
import bihagImg from '@/assets/bihagImg.png';
import darshanImg from '@/assets/darshanImg.png';
import agtImg from '@/assets/team.jpg';

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4">

         {/* Our Team */}
         <h2 className="text-3xl text-decoration-line: underline decoration-red-500 font-bold text-center mb-6">Our Lead</h2>
        <div className="flex flex-row items-center gap-20 justify-center">
            <div className="relative z-10 flex flex-col items-center">
            <img
              src={bihagImg}
              alt="Bihag Desai"
              className="w-64 h-64 object-cover object-center rounded-full border-8 border-white shadow-xl mb-6"
              style={{ marginTop: '2rem' }}
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 drop-shadow-lg">Bihag Desai</h2>
            <p className="text-md font-semibold text-gray-700 mb-6">Director</p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
            <img
              src={darshanImg}
              alt="Darshan Desai"
              className="w-64 h-64 object-cover object-center rounded-full border-8 border-white shadow-xl mb-6"
              style={{ marginTop: '2rem' }}
            />
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 drop-shadow-lg">Darshan Desai</h2>
            <p className="text-md font-semibold text-gray-700 mb-6">Director</p>
            </div>
        </div>
        <div className="flex flex-row items-center gap-20 justify-center mb-24">
        <div className="relative z-10 flex flex-col items-center">
            <p className="text-gray-700 max-w-2xl text-center text-s">
              AGT committed to bringing our clients the most cutting-edge information & ideas. AGT is the industry leaders in hitting the mark with our sizzling tips & professional guidance before & after Customer's investment, Customer will be one
            </p>
        </div>
        </div>
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl text-decoration-line: underline decoration-red-500 font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2019, AGT began as a small team with a big vision - to help businesses leverage technology for growth and efficiency. What started as a local IT services company has evolved into a comprehensive cloud solutions provider serving clients across the globe.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been defined by our commitment to innovation, quality, and customer success. As cloud technologies evolved, we positioned ourselves at the forefront of this revolution, partnering with industry leaders like  Tally, Microsoft, Zoho, and Busy to bring the best solutions to our clients.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped thousands of businesses transform their operations through technology, and we continue to expand our offerings to meet the changing needs of the market.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src={agtImg} 
              alt="AGT Global Team" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-decoration-line: underline decoration-red-500 font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at AGT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' success and build lasting relationships based on trust and mutual growth.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the solutions we provide to the support we deliver.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace change and continuously innovate to bring the latest technologies and solutions to our clients.
              </p>
            </motion.div>
            

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and the highest ethical standards.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
