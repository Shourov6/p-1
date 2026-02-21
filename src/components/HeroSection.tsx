import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownIcon, Briefcase, Download, Palette, Layout, Globe, Brain, ChevronDown } from "lucide-react";
import FloatingCodeBackground from "./FloatingCodeBackground";

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
    <section className="min-h-screen w-full flex items-center justify-between px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden">
      {/* Futuristic Floating Code Background */}
      <FloatingCodeBackground />
      {/* Additional glow orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-4 animate-glow w-[610px]"
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white flex items-center gap-2 px-8 py-6 rounded-full text-lg font-semibold shadow-2xl hover-lift neon-glow shimmer-effect transition-all duration-300"
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
              className="border-2 border-neon-orange text-neon-orange hover:bg-neon-orange/20 flex items-center gap-2 px-8 py-6 rounded-full text-lg font-semibold hover-lift transition-all duration-300"
            >
              <Briefcase size={18} /> Hire Me
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              className="border-2 border-gray-500 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50 flex items-center gap-2 px-6 py-6 rounded-full text-lg font-semibold hover-lift transition-all duration-300"
            >
              <Download size={18} /> Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Illustration */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80"
              alt="Character with lightbulb"
              className="max-w-full h-auto rounded-3xl shadow-2xl glass-effect border-2 border-blue-500/50 hover-lift"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-30 animate-pulse left-[-2px] top-[-11px]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
