import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The best place I have ever visited. They provide multiple services.. like computers , laptop, cctv , tally software busy software and many more, Also they are friendly with their customer.",
      author: "Annu Kapadia",
      role: "customer",
      rating: 5,
      initials: "AK"
    },
    {
      quote: "Best Place for Laptops Desktop & computers peripheral. Great service & Support with highly technical team. Recommended",
      author: "Surendra Yadav",
      role: "customer",
      rating: 5,
      initials: "SY"
    },
    {
      quote: "Best place for all your IT hardware and software need. Prompt and efficient service Also have qualified team to help you on the go for any of your systems requirements.",
      author: "Safal Pandya",
      role: "customer",
      rating: 4.5,
      initials: "SP"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how businesses are transforming their operations with our cloud solutions and software services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                initials={testimonial.initials}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
