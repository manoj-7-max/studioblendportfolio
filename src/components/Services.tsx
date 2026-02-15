import { Card, CardContent } from "./ui/card";
import { Video, Palette, Share2, Sparkles, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const services = [
  {
    title: "Video Editing",
    description:
      "Professional video editing that captures attention and tells your story with impact.",
    icon: Video,
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching visuals that elevate your brand and resonate with your audience.",
    icon: Palette,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic campaigns that build community and drive meaningful engagement.",
    icon: Share2,
  },
  {
    title: "Branding & Content Strategy",
    description:
      "Cohesive brand stories that connect with your audience on a deeper level.",
    icon: Sparkles,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface ServicesProps {
  onServiceClick?: (serviceTitle: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#20C7B4]/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-[#F8C94E]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
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
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#36454F]/70 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to elevate your brand and
            drive meaningful engagement.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => onServiceClick?.(service.title)}
                  className="cursor-pointer"
                >
                  <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white group h-full">
                    <CardContent className="p-6">
                      <motion.div
                        className="mb-4 w-14 h-14 rounded-full bg-[#20C7B4]/10 flex items-center justify-center group-hover:bg-[#F8C94E]/20 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-[#20C7B4] group-hover:text-[#F8C94E] transition-colors duration-300" />
                      </motion.div>
                      <h3 className="mb-3 text-[#36454F]">{service.title}</h3>
                      <p className="text-sm text-[#36454F]/70 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="text-[#20C7B4] hover:text-[#F8C94E] p-0 h-auto group/btn"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}