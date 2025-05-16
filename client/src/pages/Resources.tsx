import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants } from '@/lib/animations';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Bookmark, Download, ExternalLink, Calendar } from 'lucide-react';
import { useState } from "react";

// Define sector type
const sectorList = ["Chemical", "Education", "Government", "Textile"] as const;
type Sector = typeof sectorList[number];

const caseStudiesBySector: Record<Sector, { company: string; title: string; description: string }[]> = {
  Chemical: [
    {
      company: "Bhatia Chemicals",
      title: "Bhatia Chemicals: Digital Transformation",
      description: "Bhatia Chemicals improved process efficiency and compliance with digital solutions, automating key workflows and reducing operational costs by 25%. Their adoption of cloud-based systems enabled real-time monitoring and better regulatory adherence."
    },
    {
      company: "Spectrum",
      title: "Spectrum: Scaling Operations",
      description: "Spectrum leveraged cloud technology to scale their chemical manufacturing operations, achieving seamless integration between departments and faster product delivery. Their case demonstrates the power of digital infrastructure in manufacturing."
    }
  ],
  Education: [
    {
      company: "St. Xaviers School",
      title: "St. Xaviers School: Smart Classrooms",
      description: "St. Xaviers School adopted smart classroom solutions to enhance student engagement, resulting in improved learning outcomes and interactive teaching methods. Their digital journey set a new standard for modern education."
    },
    {
      company: "Unaati School",
      title: "Unaati School: Digital Administration",
      description: "Unaati School streamlined administration with integrated digital tools, reducing paperwork and enabling efficient communication between staff, students, and parents."
    },
    {
      company: "MTB College",
      title: "MTB College: Campus Management",
      description: "MTB College implemented campus management software for better resource allocation, real-time attendance tracking, and enhanced campus security. Their digital transformation improved both academic and administrative operations."
    }
  ],
  Government: [
    {
      company: "Indian Coast Guard",
      title: "Indian Coast Guard: Secure Data Management",
      description: "Indian Coast Guard enhanced security and data management with cloud solutions, ensuring confidential information is protected and accessible only to authorized personnel. Their case highlights the importance of cybersecurity in government operations."
    }
  ],
  Textile: [
    {
      company: "Pratibha Textiles",
      title: "Pratibha Textiles: Smart Automation for Growth",
      description: "Pratibha Textiles revolutionized their production line with advanced automation, resulting in a 30% increase in output, reduced manual errors, and significant cost savings. Their digital transformation journey set a new benchmark in the textile industry."
    },
    {
      company: "Prayagraj Textiles",
      title: "Prayagraj Textiles: Digital Transformation Success",
      description: "Prayagraj Textiles embraced digital tools for inventory and workflow management, leading to improved efficiency, real-time tracking, and enhanced product quality. Their case highlights the impact of technology in traditional manufacturing."
    }
  ]
};

export default function Resources() {
  const [selectedSector, setSelectedSector] = useState<Sector>("Chemical");

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Resources & Knowledge Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Explore our library of guides, webinars, and case studies to help you get the most out of our products.
          </motion.p>
        </div>

        {/* Resources Tabs */}
        <Tabs defaultValue="guides" className="mb-20">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          </TabsList>
          
          {/* Guides Tab */}
          <TabsContent value="guides">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Getting Started with Busy Solutions Accounting",
                  description: "A beginner's guide to setting up and using Busy Solutions accounting software for your business.",
                  category: "Busy Solutions",
                  time: "10 min read",
                  url: "https://www.busy.in/"
                },
                {
                  title: "Microsoft Azure: Cloud Migration Guide",
                  description: "Learn the best practices for migrating your business to Microsoft Azure cloud services.",
                  category: "MS Azure",
                  time: "15 min read",
                  url: "https://azure.microsoft.com/"
                },
                {
                  title: "Tally Solutions Prime Advanced Features",
                  description: "Unlock the full potential of Tally Solutions Prime with these advanced features and tips.",
                  category: "Tally Solutions",
                  time: "12 min read",
                  url: "https://tallysolutions.com/"
                },
                {
                  title: "Zoho CRM Implementation Guide",
                  description: "A step-by-step guide to implementing Zoho CRM for your sales and marketing teams.",
                  category: "Zoho",
                  time: "20 min read",
                  url: "https://www.zoho.com/crm/"
                },
                {
                  title: "GST Compliance with Busy Solutions",
                  description: "Navigate GST regulations and ensure compliance using Busy Solutions accounting software.",
                  category: "Busy Solutions",
                  time: "8 min read",
                  url: "https://www.busy.in/"
                },
                {
                  title: "Data Backup & Recovery in Azure",
                  description: "Best practices for setting up robust backup and recovery systems in Microsoft Azure.",
                  category: "MS Azure",
                  time: "14 min read",
                  url: "https://azure.microsoft.com/en-us/solutions/backup/"
                }
              ].map((guide, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {guide.category}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            {guide.time}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">{guide.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">{guide.description}</p>
                        <Button
                          asChild
                          variant="link"
                          className="text-primary p-0 justify-start"
                        >
                          <a
                            href={guide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Webinars & Events Tab */}
          <TabsContent value="webinars">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center"
            >
              <div className="w-full max-w-7xl mx-auto mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center gap-2">
                  <Video className="h-7 w-7 text-primary" />
                  Upcoming Webinars & Events
                </h2>
                <p className="text-gray-600">
                  Join our live webinars and events to learn from industry experts and stay ahead with the latest trends.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <iframe
                  src="https://event.agtpl.in"
                  title="AGT Events"
                  className="w-full max-w-7xl h-[800px] rounded-xl border-0 shadow-lg"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full max-w-7xl mx-auto mt-6 text-center">
                <a
                  href="https://event.agtpl.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
                >
                  Explore All Events
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* Case Studies Tab */}
          <TabsContent value="case-studies">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Case Studies by Sector</h2>
              <p className="text-gray-600">Explore real-world success stories from different industries and sectors.</p>
            </div>
            {/* Sector Button Selector */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
              {sectorList.map(sector => (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(sector)}
                  className={`px-6 py-2 rounded-full font-semibold border transition-colors duration-200
                    ${selectedSector === sector
                      ? 'bg-primary text-white shadow-lg border-primary'
                      : 'bg-white text-primary border-primary/30 hover:bg-primary/10'}`}
                >
                  {sector}
                </button>
              ))}
            </div>
            {/* Enhanced Case Studies by Sector */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 overflow-x-auto md:overflow-visible px-1"
              style={{scrollSnapType: 'x mandatory'}}
            >
              {(caseStudiesBySector[selectedSector] || []).map((caseStudy, index) => (
                <motion.div key={index} variants={itemVariants} className="min-w-[320px] md:min-w-0 flex-1" style={{scrollSnapAlign: 'start'}}>
                  <Card className="relative h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-white group flex flex-col">
                    {/* Colored Left Accent */}
                    <div className="absolute left-0 top-0 h-full w-2 bg-yellow-400 rounded-l-2xl" />
                    {/* Card Header */}
                    <div className="flex items-center gap-3 px-6 pt-6 pb-2">
                      {/* Logo Placeholder */}
                      <div className="bg-primary/20 text-primary font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg shadow-sm border-2 border-primary/30">
                        {caseStudy.company.split(' ').map(w => w[0]).join('').slice(0,2)}
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="font-semibold text-primary text-base">{caseStudy.company}</span>
                        <span className="text-xs text-yellow-800 bg-yellow-100 rounded px-2 py-0.5 w-fit mt-1">{selectedSector}</span>
                      </div>
                    </div>
                    <CardContent className="flex flex-col flex-1 pt-2 pb-6 px-6">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors text-left">{caseStudy.title}</h3>
                      <p className="text-gray-700 text-sm mb-4 flex-1 text-left">{caseStudy.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

      </div>
    </motion.div>
  );
}