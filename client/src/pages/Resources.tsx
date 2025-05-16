import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants } from '@/lib/animations';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Bookmark, Download, ExternalLink, Calendar } from 'lucide-react';

export default function Resources() {
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
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="webinars">Webinars</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
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
                  time: "10 min read"
                },
                {
                  title: "Microsoft Azure: Cloud Migration Guide",
                  description: "Learn the best practices for migrating your business to Microsoft Azure cloud services.",
                  category: "MS Azure",
                  time: "15 min read"
                },
                {
                  title: "Tally Solutions Prime Advanced Features",
                  description: "Unlock the full potential of Tally Solutions Prime with these advanced features and tips.",
                  category: "Tally Solutions",
                  time: "12 min read"
                },
                {
                  title: "Zoho CRM Implementation Guide",
                  description: "A step-by-step guide to implementing Zoho CRM for your sales and marketing teams.",
                  category: "Zoho",
                  time: "20 min read"
                },
                {
                  title: "GST Compliance with Busy Solutions",
                  description: "Navigate GST regulations and ensure compliance using Busy Solutions accounting software.",
                  category: "Busy Solutions",
                  time: "8 min read"
                },
                {
                  title: "Data Backup & Recovery in Azure",
                  description: "Best practices for setting up robust backup and recovery systems in Microsoft Azure.",
                  category: "MS Azure",
                  time: "14 min read"
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
                        <Button variant="link" className="text-primary p-0 justify-start">
                          Read Guide <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Webinars Tab */}
          <TabsContent value="webinars">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Zoho: All-in-One Business Suite",
                  description: "Learn how Zoho can integrate all your business processes in one cohesive platform.",
                  date: "June 15, 2023",
                  duration: "45 minutes"
                },
                {
                  title: "Microsoft Azure for Small Businesses",
                  description: "Discover how small businesses can leverage Azure cloud services without breaking the bank.",
                  date: "July 22, 2023",
                  duration: "60 minutes"
                },
                {
                  title: "Tally Solutions vs Busy Solutions: Choosing the Right Accounting Software",
                  description: "A comparative analysis to help you select the right accounting software for your business needs.",
                  date: "August 10, 2023",
                  duration: "50 minutes"
                }
              ].map((webinar, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="bg-gray-200 h-48"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-primary/80 rounded-full p-4">
                            <Video className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {webinar.date}
                          </span>
                          <span className="text-sm text-gray-500">
                            {webinar.duration}
                          </span>
                        </div>
                        <h3 className="font-bold text-xl mb-3">{webinar.title}</h3>
                        <p className="text-gray-600 mb-6">{webinar.description}</p>
                        <Button variant="outline" className="w-full">
                          Watch Webinar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Case Studies Tab */}
          <TabsContent value="case-studies">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "How ABC Manufacturing Streamlined Operations with Busy Solutions",
                  description: "ABC Manufacturing reduced accounting errors by 85% and saved 20 hours per week after implementing Busy Solutions accounting software.",
                  industry: "Manufacturing",
                  product: "Busy Solutions"
                },
                {
                  title: "XYZ Retail's Cloud Transformation with Azure",
                  description: "XYZ Retail migrated their entire IT infrastructure to Azure, resulting in 40% cost savings and improved scalability.",
                  industry: "Retail",
                  product: "MS Azure"
                },
                {
                  title: "PQR Services Boosts Sales with Zoho CRM",
                  description: "Learn how PQR Services increased their sales conversion rate by 60% after implementing Zoho CRM.",
                  industry: "Professional Services",
                  product: "Zoho"
                },
                {
                  title: "LMN Distributors Optimizes Inventory with Tally Solutions",
                  description: "LMN Distributors achieved real-time inventory tracking and reduced stockouts by 75% with Tally Solutions.",
                  industry: "Distribution",
                  product: "Tally Solutions"
                }
              ].map((caseStudy, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {caseStudy.product}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {caseStudy.industry}
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                      <Button variant="link" className="text-primary p-0 justify-start">
                        Read Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Downloads Tab */}
          <TabsContent value="downloads">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Busy Solutions Implementation Checklist",
                  description: "A comprehensive checklist to ensure smooth implementation of Busy Solutions accounting software.",
                  type: "PDF",
                  size: "2.4 MB"
                },
                {
                  title: "Azure Migration Assessment Template",
                  description: "Template to assess your current infrastructure and plan your Azure migration.",
                  type: "XLSX",
                  size: "1.8 MB"
                },
                {
                  title: "Tally Solutions Data Import Guide",
                  description: "Step-by-step guide for importing your existing data into Tally Solutions.",
                  type: "PDF",
                  size: "3.2 MB"
                },
                {
                  title: "Zoho CRM Setup Workbook",
                  description: "Interactive workbook to plan and customize your Zoho CRM implementation.",
                  type: "PDF",
                  size: "5.1 MB"
                },
                {
                  title: "Cloud Computing ROI Calculator",
                  description: "Calculate your potential return on investment from moving to cloud services.",
                  type: "XLSX",
                  size: "1.5 MB"
                },
                {
                  title: "Data Security Best Practices",
                  description: "Guidelines for ensuring data security across all our software solutions.",
                  type: "PDF",
                  size: "2.7 MB"
                }
              ].map((download, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
                        <FileText className="h-12 w-12 mx-auto mb-2 text-primary" />
                        <span className="text-sm font-medium">{download.type} • {download.size}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3">{download.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow">{download.description}</p>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary to-red-700 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-white/90 mb-0">
                Stay updated with the latest guides, webinars, and tips from our experts.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow rounded-md px-4 py-3 border-0" 
                />
                <Button className="bg-white text-primary hover:bg-gray-100 px-6">
                  <Bookmark className="mr-2 h-4 w-4" /> Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}