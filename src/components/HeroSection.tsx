import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownIcon, Briefcase, Download, Palette, Layout, Globe, Brain, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToAbout?: () => void;
  onScrollToProjects?: (category?: string) => void;
}

const projectCategories = [
  { id: "ui-ux", label: "UI/UX", icon: Palette, color: "from-pink-500 to-rose-500", bgColor: "bg-pink-500/20" },
  { id: "cms", label: "CMS", icon: Layout, color: "from-green-500 to-emerald-500", bgColor: "bg-green-500/20" },
  { id: "web", label: "Web", icon: Globe, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/20" },
  { id: "ai-ml", label: "AI/ML", icon: Brain, color: "from-purple-500 to-violet-500", bgColor: "bg-purple-500/20" },
];

const HeroSection = ({ onScrollToAbout = () => {}, onScrollToProjects = () => {} }: HeroSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setIsDropdownOpen(false);
    console.log('Category selected:', categoryId);
    onScrollToProjects(categoryId);
  };

  const handleHireMe = () => {
    window.location.href = "mailto:asrshourov999@gmail.com?subject=Freelance%20Opportunity";
  };

  const handleDownloadResume = () => {
    // Opens resume link - update with actual resume URL when available
    window.open("#", "_blank");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-4 animate-glow w-full max-w-[610px]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            SHOUROV
          </motion.h1>

          {/* Animated Role Badges */}
          <motion.div
            className="flex flex-wrap gap-3 mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: "UI/UX Designer", color: "from-pink-500/60 to-rose-400/60", icon: "✦" },
              { label: "Full-Stack Web Developer", color: "from-blue-500/60 to-cyan-400/60", icon: "⚡" },
              { label: "AI / ML Enthusiast", color: "from-purple-500/60 to-violet-400/60", icon: "🧠" },
            ].map((role, i) => (
              <motion.span
                key={role.label}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm md:text-base font-semibold text-white bg-gradient-to-r ${role.color} shadow-lg shadow-black/20 cursor-default select-none`}
                style={{ opacity: 0.85 }}
              >
                <span className="text-xs">{role.icon}</span>
                {role.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 font-medium max-w-xl leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Crafting pixel-perfect interfaces, building scalable web platforms, and exploring intelligent systems — turning ideas into impactful digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {/* View Projects Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <Button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white flex items-center gap-2 px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-semibold shadow-2xl hover-lift neon-glow shimmer-effect transition-all duration-300"
              >
                View Projects 
                <motion.span
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </Button>

              {/* Animated Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute bottom-full left-0 mb-3 w-64 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl z-50"
                  >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm pointer-events-none" />
                    
                    <div className="relative p-2 max-h-80 overflow-y-auto">
                      {projectCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                          <motion.button
                            key={category.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleCategorySelect(category.id)}
                            onMouseEnter={() => setHoveredCategory(category.id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden"
                          >
                            {/* Background glow on hover */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
                            />
                            
                            {/* Icon container */}
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`relative w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center transition-all duration-300`}
                            >
                              <Icon 
                                size={20} 
                                className={`text-white transition-all duration-300 ${
                                  hoveredCategory === category.id ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''
                                }`} 
                              />
                            </motion.div>
                            
                            {/* Label */}
                            <span className="relative text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                              {category.label}
                            </span>
                            
                            {/* Arrow indicator */}
                            <motion.div
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{ x: hoveredCategory === category.id ? 0 : -5 }}
                            >
                              <ArrowDownIcon size={14} className="text-gray-400 -rotate-90" />
                            </motion.div>
                          </motion.button>
                        );
                      })}
                    </div>
                    
                    {/* Bottom decorative line */}
                    <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 rounded-b-2xl" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button
              onClick={handleHireMe}
              variant="outline"
              className="border-2 border-neon-orange text-neon-orange hover:bg-neon-orange/20 flex items-center gap-2 px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-semibold hover-lift transition-all duration-300"
            >
              <Briefcase size={18} /> Hire Me
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-gray-500 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-2 px-5 py-4 md:px-6 md:py-6 rounded-full text-base md:text-lg font-semibold hover-lift transition-all duration-300"
            >
              <Download size={18} /> Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Photo with cool effect */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex flex-col items-center justify-center gap-4">
            {/* "Let's Talk" animated badge above the circle */}
            <motion.div
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm shadow-lg shadow-blue-500/20"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                {"Let's Talk".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.07 + 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="text-base">👋</span>
            </motion.div>

            {/* Photo + rings wrapper */}
            <div className="relative flex items-center justify-center">
            {/* Rotating ring 1 */}
            <motion.div
              className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-blue-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Rotating ring 2 */}
            <motion.div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* Glow ring */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl" />
            {/* Orbit dots */}
            <motion.div
              className="absolute w-80 h-80 sm:w-96 sm:h-96"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
            </motion.div>
            <motion.div
              className="absolute w-72 h-72 sm:w-88 sm:h-88"
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
            </motion.div>
            {/* Profile photo */}
            <motion.div
              className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-blue-500/60 shadow-2xl shadow-blue-500/30 group"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://i.imgur.com/827jqLg.png"
                alt="Shourov"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: "50% 10%" }}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Shourov";
                }}
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

              {/* Animated "Let's Work Together" overlay on hover */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-end pb-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.p
                  className="text-white text-sm font-bold tracking-widest uppercase text-center px-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {"Let's Work Together".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.06,
                        ease: "easeInOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.p>
                <div className="mt-1 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </motion.div>
            </motion.div>
            </div>{/* end photo+rings wrapper */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
