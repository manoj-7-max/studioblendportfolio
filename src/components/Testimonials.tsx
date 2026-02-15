import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with studioblend transformed our brand. Their creative vision and attention to detail exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    initials: "SJ",
  },
  {
    id: 2,
    quote:
      "The results speak for themselves. Our engagement increased by 300% within the first month. Highly recommend!",
    name: "Michael Chen",
    role: "Marketing Director, GrowthCo",
    initials: "MC",
  },
  {
    id: 3,
    quote:
      "Their strategic approach to content creation helped us connect with our audience in ways we never imagined.",
    name: "Emily Rodriguez",
    role: "Founder, Creative Studios",
    initials: "ER",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#20C7B4]/5 to-white relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#F8C94E]/10 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl mb-4 text-[#20C7B4]"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#36454F]/70 max-w-2xl mx-auto"
          >
            Don't just take our word for it—hear from the brands we've helped grow.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={item}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Quote className="w-10 h-10 text-[#20C7B4] mb-4" />
                    </motion.div>
                    <p className="text-[#36454F]/80 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-full bg-[#20C7B4] flex items-center justify-center text-white font-bold ring-2 ring-[#20C7B4] ring-offset-2"
                      >
                        {testimonial.initials}
                      </motion.div>
                      <div>
                        <h4 className="text-[#36454F]">{testimonial.name}</h4>
                        <p className="text-sm text-[#36454F]/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
