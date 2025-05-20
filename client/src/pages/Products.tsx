import { motion } from 'framer-motion';
import { pageVariants, containerVariants, itemVariants } from '@/lib/animations';
import { Button } from "@/components/ui/button";
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { productCategories } from '@/lib/constants';
import { 
  BookOpen, 
  CheckCircle, 
  Users, 
  Server, 
  ShieldCheck, 
  BarChart,
  FileCog,
  FileText,
  Calculator,
  Cloud,
  Database,
  Code,
  MailOpen,
  PieChart,
  BarChart4,
  Users2
} from 'lucide-react';

// Map of icons for different product services
const serviceIcons: Record<string, React.ReactNode> = {
  // Busy icons
  "accounting": <Calculator className="h-5 w-5" />,
  "inventory": <BarChart className="h-5 w-5" />,
  "gst": <FileCog className="h-5 w-5" />,
  "payroll": <Users className="h-5 w-5" />,
  
  // Tally icons
  "prime": <FileText className="h-5 w-5" />,
  "server": <Server className="h-5 w-5" />,
  "developer": <Code className="h-5 w-5" />,
  "customization": <FileCog className="h-5 w-5" />,
  
  // MS Azure icons
  "cloud-services": <Cloud className="h-5 w-5" />,
  "virtual-machines": <Server className="h-5 w-5" />,
  "database": <Database className="h-5 w-5" />,
  "devops": <Code className="h-5 w-5" />,
  
  // Zoho icons
  "crm": <Users2 className="h-5 w-5" />,
  "books": <BookOpen className="h-5 w-5" />,
  "campaigns": <BarChart4 className="h-5 w-5" />,
  "mail": <MailOpen className="h-5 w-5" />
};

export default function Products() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to power your business growth and efficiency
          </p>
        </div>
        
        {/* Products List */}
        <div className="space-y-24">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.slug} className="relative">
              {/* Background decoration based on index */}
              {categoryIndex % 2 === 0 ? (
                <div className="absolute right-0 top-0 w-80 h-80 bg-primary/5 rounded-full -z-10 blur-3xl opacity-70 -mr-20 -mt-20"></div>
              ) : (
                <div className="absolute left-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full -z-10 blur-3xl opacity-70 -ml-20 -mb-20"></div>
              )}
              
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${categoryIndex % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={categoryIndex % 2 !== 0 ? 'lg:col-start-2' : ''}
                >
                  <Badge variant="outline" className="text-primary border-primary mb-4">
                    {category.name}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-6">{category.name} Solutions</h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    {category.slug === 'busy' && 'A comprehensive business accounting software that simplifies financial management for SMEs with powerful features for GST, inventory, and payroll. (Busy Solutions)'}
                    {category.slug === 'tally' && 'The industry-standard accounting solution trusted by millions of businesses for its reliability, security, and comprehensive financial management capabilities. (Tally Solutions)'}
                    {category.slug === 'ms-azure' && "Microsoft's cloud computing platform with a wide range of services for building, testing, deploying, and managing applications through Microsoft's data centers."}
                    {category.slug === 'zoho' && 'An integrated suite of 40+ business and productivity applications to help you manage every aspect of your business from sales to finance and HR.'}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h3 className="font-semibold text-gray-900">Key Features:</h3>
                    <ul className="space-y-3">
                      {category.services.map((service) => (
                        <li key={service.slug} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span>
                            <span className="font-medium">{service.name}</span> - 
                            {service.slug == 'aws' && ' Run TallyPrime on Amazon Web Services'}
                            {service.slug == 'new-products' && ' Latest Tally products and solutions'}
                            {service.slug == 'software-services' && ' Professional software services'}
                            {service.slug == 'upgrades' && ' Upgrade your existing Tally installation'}
                            {service.slug == 'rental' && ' Flexible rental options for Tally software'}
                            {service.slug == 'virtual-user' && ' Virtual user solutions for remote access'}

                            {service.slug === 'remote-access' && ' Remote Access and Web Application Portal for seamless business connectivity'}
                            {service.slug === 'bare-metal' && ' Dedicated physical server offering performance, security and full control'}
                            {service.slug === 'advanced-security' && ' Cybersecurity for Windows Servers and RDP infrastructure'}
                            {service.slug === 'server-management' && ' Ensures optimal performance, security, uptime and regular maintenance'}

                            {service.slug === 'desktop' && ' Experience Efficient Accounting on Desktop'}
                            {service.slug === 'mobile' && ' Manage business on your fingers'}
                            {service.slug === 'online' && ' Most secured accounting on the cloud'}
                            {service.slug === 'recom' && ' Ecommerce reconciliation in 1 min'}

                            {service.slug === 'accounting' && ' Complete financial management with GST-ready reporting'}
                            {service.slug === 'inventory' && ' Real-time stock tracking and management'}
                            {service.slug === 'gst' && ' Simplified GST compliance and filing'}
                            {service.slug === 'payroll' && ' Automated salary processing and tax calculations'}
                            
                            {service.slug === 'prime' && ' Next-generation business management software'}
                            {service.slug === 'server' && ' Multi-user, networked installation for teams'}
                            {service.slug === 'developer' && ' Customization tools for developers'}
                            {service.slug === 'customization' && ' Tailored solutions for specific business needs'}
                            
                            {service.slug === 'cloud-services' && ' Full-service cloud computing platform'}
                            {service.slug === 'virtual-machines' && ' Scalable computing resources on demand'}
                            {service.slug === 'database' && ' Managed database services for all needs'}
                            {service.slug === 'ms-dynamic-365' && ' CRM and ERP solution for business management'}
                            
                            {service.slug === 'crm' && ' Complete customer relationship management'}
                            {service.slug === 'books' && ' Online accounting made simple'}
                            {service.slug === 'campaigns' && ' Powerful marketing campaign tools'}
                            {service.slug === 'mail' && ' Professional email hosting for business'}
                            {service.slug === 'zohoone' && ' Unified suite of apps to run your entire business'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/product/${category.slug}#pricing-section`}>
                      <Button className="bg-primary hover:bg-primary/90">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={categoryIndex % 2 !== 0 ? 'lg:col-start-1' : ''}
                >
                  <div className="bg-white rounded-xl shadow-xl p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {category.services.map((service) => (
                        <Link key={service.slug} href={`/product/${category.slug}/${service.slug}`}>
                          <div className="border border-gray-100 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all cursor-pointer">
                            <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-primary">
                              {serviceIcons[service.slug] || <CheckCircle className="h-5 w-5" />}
                            </div>
                            <h3 className="font-semibold mb-2">{service.name}</h3>
                            <p className="text-sm text-gray-500">
                              {service.description && ` ${service.description}`}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 bg-gradient-to-r from-primary to-red-700 rounded-xl p-10 md:p-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact our team for personalized product recommendations and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-yellow-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}