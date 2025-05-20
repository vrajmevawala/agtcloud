import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants } from '@/lib/animations';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Video, Bookmark, Download, ExternalLink, Calendar } from 'lucide-react';
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Accounting1 from '@/assets/Guides/Accounting1.png';
import Accounting2 from '@/assets/Guides/Accounting2.png';
import Accounting3 from '@/assets/Guides/Accounting3.png';
import Accounting4 from '@/assets/Guides/Accounting4.png';
import Accounting5 from '@/assets/Guides/Accounting5.png';
import Accounting6 from '@/assets/Guides/Accounting6.png';
import BhatiaLogo from '@/assets/case-studies/bhatia.png';
import SpectrumLogo from '@/assets/case-studies/spectrum.png';
import ModheshwariLogo from '@/assets/case-studies/modheshwari.png';
import AtulLogo from '@/assets/case-studies/atul.png';
import UnnatiSchoolLogo from '@/assets/case-studies/unnatiSchool.png';
import StXaviersLogo from '@/assets/case-studies/stXaviers.png';
import ShubhGroupLogo from '@/assets/case-studies/shubhGroup.png';
import SahyogImagingLogo from '@/assets/case-studies/sahyogImaging.png';
import PratibhaLogo from '@/assets/case-studies/pratibha.png';
import NavyugCollegeLogo from '@/assets/case-studies/navyugCollege.png';
import NauLogo from '@/assets/case-studies/nau.png';
import MTBCollegeLogo from '@/assets/case-studies/mtbCollege.png';
import MendasPharmaLogo from '@/assets/case-studies/mendasPharma.png';
import LourdesConventLogo from '@/assets/case-studies/lourdesConvent.png';
import KottexLogo from '@/assets/case-studies/kottex.png';
import InTekrawalaLogo from '@/assets/case-studies/inTekrawala.png';
import IcgLogo from '@/assets/case-studies/icg.png';
import HappyHomeLogo from '@/assets/case-studies/happyHome.png';
import DndInfraLogo from '@/assets/case-studies/dndInfra.png';
import ApexImagingLogo from '@/assets/case-studies/apexImaging.png';
import ApexHealthcareLogo from '@/assets/case-studies/apexHealthcare.png';

// Define sector type
const sectorList = ["Education", "Medical", "Chemical", "Government", "Textile", "FMCG", "Real Estate"] as const;
type Sector = typeof sectorList[number];

const caseStudiesBySector: Record<Sector, { company: string; title: string; description: string; location: string; logo?: string }[]> = {
  Chemical: [
    {
      company: "Bhatia Color Chem Limited",
      title: "Bhatia Color Chem Limited: Digital Transformation",
      description: "Bhatia Color Chem Limited improved process efficiency and compliance with digital solutions, automating key workflows and reducing operational costs by 25%. Their adoption of cloud-based systems enabled real-time monitoring and better regulatory adherence.",
      location: "Surat",
      logo: BhatiaLogo
    },
    {
      company: "Spectrum",
      title: "Spectrum: Scaling Operations",
      description: "Spectrum leveraged cloud technology to scale their chemical manufacturing operations, achieving seamless integration between departments and faster product delivery. Their case demonstrates the power of digital infrastructure in manufacturing.",
      location: "Palsana, Surat",
      logo: SpectrumLogo
    },
    {
      company: "Modheshwari Chemical",
      title: "Modheshwari Chemical: Digital Adoption",
      description: "Modheshwari Chemical enhanced their chemical processes and compliance through digital transformation, improving efficiency and traceability.",
      location: "Ankleshwar",
      logo: ModheshwariLogo
    },
    {
      company: "Atul Chemicals",
      title: "Atul Chemicals: Process Optimization",
      description: "Atul Chemicals adopted cloud-based solutions to optimize their chemical production and ensure regulatory compliance.",
      location: "Vapi",
      logo: AtulLogo
    }
  ],
  Education: [
    {
      company: "Lourdes Convent School",
      title: "Lourdes Convent School: Digital Learning",
      description: "Lourdes Convent School integrated digital learning platforms to enhance student-teacher interaction and streamline academic processes.",
      location: "Athwalines, Surat",
      logo: LourdesConventLogo
    },
    {
      company: "I N Tekrawala School",
      title: "I N Tekrawala School: Technology in Education",
      description: "I N Tekrawala School adopted technology-driven solutions for better classroom management and student engagement.",
      location: "Adajan, Surat",
      logo: InTekrawalaLogo
    },
    {
      company: "Navyug College",
      title: "Navyug College: Modern Campus Solutions",
      description: "Navyug College implemented modern campus management systems for improved administration and student services.",
      location: "Rander Road, Surat",
      logo: NavyugCollegeLogo
    },
    {
      company: "Unaati School",
      title: "Unaati School: Digital Administration",
      description: "Unaati School streamlined administration with integrated digital tools, reducing paperwork and enabling efficient communication between staff, students, and parents.",
      location: "Surat",
      logo: UnnatiSchoolLogo
    },
    {
      company: "St. Xaviers School",
      title: "St. Xaviers School: Smart Classrooms",
      description: "St. Xaviers School adopted smart classroom solutions to enhance student engagement, resulting in improved learning outcomes and interactive teaching methods. Their digital journey set a new standard for modern education.",
      location: "Surat",
      logo: StXaviersLogo
    },
    {
      company: "MTB College",
      title: "MTB College: Campus Management",
      description: "MTB College implemented campus management software for better resource allocation, real-time attendance tracking, and enhanced campus security. Their digital transformation improved both academic and administrative operations.",
      location: "Surat",
      logo: MTBCollegeLogo
    }
  ],
  Medical: [
    {
      company: "Sahyog MRI",
      title: "Sahyog MRI: Digital Imaging",
      description: "Sahyog MRI adopted advanced digital imaging solutions for faster and more accurate diagnostics.",
      location: "Ring Road, Surat",
      logo: SahyogImagingLogo
    },
    {
      company: "Super Sahyog MRI",
      title: "Super Sahyog MRI: Healthcare Technology",
      description: "Super Sahyog MRI implemented healthcare technology to streamline patient management and imaging workflows.",
      location: "Surat",
      logo: SahyogImagingLogo
    },
    {
      company: "Apex Imaging",
      title: "Apex Imaging: Diagnostic Excellence",
      description: "Apex Imaging leveraged digital tools to enhance diagnostic accuracy and patient care.",
      location: "Surat",
      logo: ApexImagingLogo
    },
    {
      company: "Mendas Pharma",
      title: "Mendas Pharma: Pharma Digitalization",
      description: "Mendas Pharma adopted digital solutions for better inventory and compliance management.",
      location: "Surat",
      logo: MendasPharmaLogo
    },
    {
      company: "Apex Healthcare",
      title: "Apex Healthcare: Patient-Centric Solutions",
      description: "Apex Healthcare used digital platforms to improve patient engagement and streamline healthcare services.",
      location: "Surat",
      logo: ApexHealthcareLogo
    }
  ],
  Government: [
    {
      company: "Indian Coast Guard",
      title: "Indian Coast Guard: Secure Data Management",
      description: "Indian Coast Guard enhanced security and data management with cloud solutions, ensuring confidential information is protected and accessible only to authorized personnel. Their case highlights the importance of cybersecurity in government operations.",
      location: "Gujarat",
      logo: IcgLogo
    },
    {
      company: "NAU - Navsari Agriculture University",
      title: "NAU: Agricultural Digitalization",
      description: "NAU implemented digital solutions for agricultural research, data management, and outreach.",
      location: "Navsari",
      logo: NauLogo
    }
  ],
  Textile: [
    {
      company: "Pratibha Textiles",
      title: "Pratibha Textiles: Smart Automation for Growth",
      description: "Pratibha Textiles revolutionized their production line with advanced automation, resulting in a 30% increase in output, reduced manual errors, and significant cost savings. Their digital transformation journey set a new benchmark in the textile industry.",
      location: "Surat",
      logo: PratibhaLogo
    },
    {
      company: "Prayagraj Textiles",
      title: "Prayagraj Textiles: Digital Transformation Success",
      description: "Prayagraj Textiles embraced digital tools for inventory and workflow management, leading to improved efficiency, real-time tracking, and enhanced product quality. Their case highlights the impact of technology in traditional manufacturing.",
      location: "Surat",
      logo: undefined
    },
    {
      company: "Kottex Industries",
      title: "Kottex Industries: Textile Innovation",
      description: "Kottex Industries adopted innovative digital solutions to streamline textile production and quality control.",
      location: "Surat",
      logo: KottexLogo
    },
    {
      company: "Perfect Yarn",
      title: "Perfect Yarn: Yarn Management",
      description: "Perfect Yarn implemented digital inventory and production management for improved efficiency and traceability.",
      location: "Surat",
      logo: undefined
    }
  ],
  FMCG: [
    {
      company: "Krishna Sales Corporation",
      title: "Krishna Sales Corporation: FMCG Digitalization",
      description: "Krishna Sales Corporation adopted digital tools for supply chain and sales management in the FMCG sector.",
      location: "Surat",
      logo: undefined
    },
    {
      company: "R C Sales",
      title: "R C Sales: Efficient Distribution",
      description: "R C Sales improved their distribution network and inventory management with digital solutions.",
      location: "Surat",
      logo: undefined
    },
    {
      company: "R K Food",
      title: "R K Food: Food Industry Transformation",
      description: "R K Food leveraged technology to enhance food safety, quality control, and distribution.",
      location: "Pandesara GIDC, Surat",
      logo: undefined
    },
    {
      company: "Royal Food",
      title: "Royal Food: Digital Supply Chain",
      description: "Royal Food implemented digital supply chain management for better efficiency and traceability.",
      location: "Pandesara GIDC, Surat",
      logo: undefined
    },
    {
      company: "Shree Harvics Enterprise",
      title: "Shree Harvics Enterprise: FMCG Solutions",
      description: "Shree Harvics Enterprise used digital platforms to streamline FMCG operations and customer engagement.",
      location: "Ring Road, Surat",
      logo: undefined
    },
    {
      company: "Yashvi Food Pvt. Ltd",
      title: "Yashvi Food: Food Processing Digitalization",
      description: "Yashvi Food Pvt. Ltd adopted digital solutions for food processing, logistics, and compliance.",
      location: "Bardoli High-way Road",
      logo: undefined
    }
  ],
  'Real Estate': [
    {
      company: "Happy Home",
      title: "Happy Home: Real Estate Digitalization",
      description: "Happy Home implemented digital tools for property management, sales, and customer engagement.",
      location: "Vesu, Surat",
      logo: HappyHomeLogo
    },
    {
      company: "Shubh Group",
      title: "Shubh Group: Smart Real Estate",
      description: "Shubh Group adopted smart real estate solutions for project management and client services.",
      location: "Vesu, Surat",
      logo: ShubhGroupLogo
    },
    {
      company: "DND infra",
      title: "DND infra: Infrastructure Management",
      description: "DND infra used digital platforms for infrastructure project tracking and resource management.",
      location: "Surat",
      logo: DndInfraLogo
    }
  ]
};

export default function Resources() {
  const [selectedSector, setSelectedSector] = useState<Sector>("Education");
  const [tab, setTab] = useState("guides");
  const [location] = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam === "guides" || tabParam === "webinars" || tabParam === "case-studies") {
      setTab(tabParam);
    }
  }, [location]);

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
        <Tabs value={tab} onValueChange={setTab} className="mb-20">
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
                  url: "https://www.busy.in/",
                  image: Accounting1
                },
                {
                  title: "Microsoft Azure: Cloud Migration Guide",
                  description: "Learn the best practices for migrating your business to Microsoft Azure cloud services.",
                  category: "MS Azure",
                  time: "15 min read",
                  url: "https://azure.microsoft.com/",
                  image: Accounting2
                },
                {
                  title: "Tally Solutions Prime Advanced Features",
                  description: "Unlock the full potential of Tally Solutions Prime with these advanced features and tips.",
                  category: "Tally Solutions",
                  time: "12 min read",
                  url: "https://tallysolutions.com/",
                  image: Accounting3
                },
                {
                  title: "Zoho CRM Implementation Guide",
                  description: "A step-by-step guide to implementing Zoho CRM for your sales and marketing teams.",
                  category: "Zoho",
                  time: "20 min read",
                  url: "https://www.zoho.com/crm/",
                  image: Accounting4
                },
                {
                  title: "GST Compliance with Busy Solutions",
                  description: "Navigate GST regulations and ensure compliance using Busy Solutions accounting software.",
                  category: "Busy Solutions",
                  time: "8 min read",
                  url: "https://www.busy.in/",
                  image: Accounting5
                },
                {
                  title: "Data Backup & Recovery in Azure",
                  description: "Best practices for setting up robust backup and recovery systems in Microsoft Azure.",
                  category: "MS Azure",
                  time: "14 min read",
                  url: "https://azure.microsoft.com/en-us/solutions/backup/",
                  image: Accounting6
                }
              ].map((guide, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-2xl flex flex-col group bg-white hover:-translate-y-1">
                    {/* Guide Image/Icon */}
                    <div className="h-40 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img src={guide.image} alt={guide.title} className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full flex-1">
                      <div className="flex justify-between items-center mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{guide.category}</span>
                        <span className="text-xs text-gray-500 flex items-center bg-gray-100 rounded-full px-2 py-1">
                          <FileText className="h-4 w-4 m-1" />
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{guide.title}</h3>
                      <p className="text-gray-600 mb-6 flex-grow text-sm">{guide.description}</p>
                      <Button
                        asChild
                        variant="default"
                        className="mt-auto w-full bg-primary text-white hover:bg-primary/90 transition"
                      >
                        <a
                          href={guide.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
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
              <h2 className="text-2xl font-bold mb-2">Case Studies</h2>
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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="min-w-[320px] md:min-w-0 flex-1"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <Card
                    className="relative h-full bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col group overflow-hidden hover:-translate-y-1 hover:border-primary/40"
                    style={{ borderTop: '3px solid #ff0000'}}
                  >
                    {/* Top badges row */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs text-yellow-800 bg-yellow-100 rounded px-2 py-0.5 font-semibold shadow">{selectedSector}</span>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1 font-medium shadow">{caseStudy.location}</span>
                    </div>
                    {/* Logo or Initials */}
                    <div className="flex items-center justify-center w-full pt-10 pb-2">
                      {caseStudy.logo ? (
                        <img
                          src={caseStudy.logo}
                          alt={caseStudy.company + ' logo'}
                          className="w-16 h-16 object-contain rounded-full border-2 border-primary shadow bg-white"
                        />
                      ) : (
                        <span className="bg-primary text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-2xl shadow border-2 border-primary">
                          {caseStudy.company.split(' ').map(w => w[0]).join('').slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-center px-6">
                      <span className="font-semibold text-primary text-lg text-center mt-2">{caseStudy.company}</span>
                    </div>
                    <CardContent className="flex flex-col flex-1 pt-2 pb-6 px-6">
                      <h3 className="font-bold text-base mb-2 text-gray-900 group-hover:text-primary transition-colors text-center">{caseStudy.title}</h3>
                      <p className="text-gray-700 text-sm mb-4 flex-1 text-center">{caseStudy.description}</p>
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