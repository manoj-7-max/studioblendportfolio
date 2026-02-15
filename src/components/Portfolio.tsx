import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Masonry from "react-responsive-masonry";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import cricketPoster from "figma:asset/c34204fde77348e8e5dfce31f433e3ab2b7887b4.png";
import socialMediaPoster from "figma:asset/24791cba7c798073eebf6b40da6378c0681774bd.png";
import independenceDayPoster from "figma:asset/8d12b022c2a4a794b950209a84068738d0906759.png";

const projects = [
  {
    id: 7,
    title: "Cricket World Cup Poster",
    category: "Graphic Design",
    image: cricketPoster,
  },
  {
    id: 8,
    title: "Social Media Marketing Poster",
    category: "Graphic Design",
    image: socialMediaPoster,
  },
  {
    id: 9,
    title: "Independence Day Poster",
    category: "Graphic Design",
    image: independenceDayPoster,
  },
];

const categories = ["All", "Graphic Design", "Video Editing", "Social Media", "Branding"];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-0 w-60 h-60 bg-[#20C7B4]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl mb-4 text-[#20C7B4]"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#36454F]/70 max-w-2xl mx-auto mb-8"
          >
            A showcase of our recent projects that helped brands achieve their
            digital goals.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#20C7B4] text-white hover:bg-[#20C7B4]/90"
                      : "border-[#20C7B4] text-[#20C7B4] hover:bg-[#20C7B4]/10"
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {filteredProjects.length > 0 ? (
              <Masonry columnsCount={2} gutter="1.5rem">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredId === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#20C7B4]/90 to-transparent flex flex-col justify-end p-6"
                    >
                      <motion.h3
                        initial={{ y: 20 }}
                        animate={{ y: hoveredId === project.id ? 0 : 20 }}
                        className="text-white mb-2"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        initial={{ y: 20 }}
                        animate={{ y: hoveredId === project.id ? 0 : 20 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/90 text-sm"
                      >
                        {project.category}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </Masonry>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#36454F]/50">No projects found in this category yet. Check back soon!</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
