import { useSite } from "../context/SiteContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useCounter } from "../hooks/useCounter";
import { motion } from "framer-motion";
import logo from "figma:asset/0f58fc00af79807b4dc2033200003759b625805d.png";
export function About() {
  const { siteContent } = useSite();
  const { ref, isVisible } = useScrollAnimation();
  const projects = useCounter(150, 2000, isVisible);
  const clients = useCounter(50, 2000, isVisible);
  const years = useCounter(5, 2000, isVisible);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <motion.div
        className="absolute top-1/2 right-0 w-80 h-80 bg-[#F8C94E]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl mb-6 text-[#20C7B4]"
            >
              {siteContent.aboutTitle}
            </motion.h2>

            {siteContent.aboutText.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="text-[#36454F]/80 mb-4 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              {[
                { number: projects, label: "Projects" },
                { number: clients, label: "Clients" },
                { number: years, label: "Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    className="text-3xl text-[#20C7B4] mb-2"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}+
                  </motion.div>
                  <div className="text-sm text-[#36454F]/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              className="absolute w-72 h-72 bg-[#20C7B4]/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 p-8 bg-white/50 backdrop-blur-sm border border-[#20C7B4]/20 rounded-3xl shadow-2xl"
            >
              <ImageWithFallback
                src={logo}
                alt="studioblend brand"
                className="w-full max-w-md h-auto object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div >
      </div >
    </section >
  );
}
