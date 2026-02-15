import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  onBack: () => void;
}

export function ServiceDetail({
  title,
  description,
  features,
  benefits,
  image,
  onBack,
}: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-white to-[#20C7B4]/5"
    >
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            onClick={onBack}
            variant="outline"
            className="border-[#20C7B4] text-[#20C7B4] hover:bg-[#20C7B4]/10 rounded-full"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl sm:text-6xl mb-6 text-[#20C7B4]">
              {title}
            </h1>
            <p className="text-[#36454F]/80 mb-8">{description}</p>
            <Button className="bg-[#20C7B4] hover:bg-[#F8C94E] text-white hover:text-[#36454F] transition-all duration-300 rounded-full px-8 py-6">
              Get Started
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#F8C94E]/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl mb-6 text-[#36454F]">What We Offer</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#20C7B4]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#20C7B4]" />
                  </div>
                  <p className="text-[#36454F]/80">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl mb-6 text-[#36454F]">Benefits</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F8C94E]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-[#F8C94E]" />
                  </div>
                  <p className="text-[#36454F]/80">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-r from-[#20C7B4] to-[#20C7B4]/80 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {title.toLowerCase()} services.
            </p>
            <Button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  onBack();
                }
              }}
              className="bg-white text-[#20C7B4] hover:bg-[#F8C94E] hover:text-[#36454F] transition-all duration-300 rounded-full px-8 py-6"
            >
              Contact Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
