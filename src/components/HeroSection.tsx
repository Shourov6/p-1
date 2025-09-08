import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownIcon } from "lucide-react";

interface HeroSectionProps {
  onScrollToAbout?: () => void;
}

const HeroSection = ({ onScrollToAbout = () => {} }: HeroSectionProps) => {
  // Template handlers - update these with actual functionality later
  const handleLearnMore = () => {
    console.log("Learn More clicked");
    onScrollToAbout();
  };
  return (
    <section className="min-h-screen w-full flex items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse-slow"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-4 animate-glow"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            PORTFOLIO
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-blue-400 mb-4 font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Computer Science Student · Web Developer · AI Enthusiast
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Turning ideas into impactful digital solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              onClick={handleLearnMore}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white flex items-center gap-2 px-8 py-6 rounded-full text-lg font-semibold shadow-2xl hover-lift neon-glow shimmer-effect transition-all duration-300"
            >
              Learn More <ArrowDownIcon size={18} className="animate-bounce" />
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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-30 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
