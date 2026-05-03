import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import {
  ArrowDownIcon,
  Briefcase,
  Download,
  Palette,
  Layout,
  Globe,
  Brain,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroSectionProps {
  onScrollToAbout?: () => void;
  onScrollToProjects?: (category?: string) => void;
}

const projectCategories = [
  {
    id: "ui-ux",
    label: "UI/UX",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/20",
  },
  {
    id: "cms",
    label: "CMS",
    icon: Layout,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/20",
  },
  {
    id: "web",
    label: "Web",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/20",
  },
  {
    id: "ai-ml",
    label: "AI/ML",
    icon: Brain,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-500/20",
  },
];

const taglines = [
  { prefix: "I design", highlight: "experiences", suffix: "— not just interfaces." },
  { prefix: "I write", highlight: "code", suffix: "that thinks ahead." },
  { prefix: "I turn", highlight: "ideas", suffix: "into living, breathing products." },
  { prefix: "I blend", highlight: "design & logic", suffix: "to build what matters." },
  { prefix: "I chase", highlight: "clean code", suffix: "& beautiful pixels." },
];

const TypewriterTagline = () => {
  const { isDark } = useTheme();
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "hold" | "erasing">("typing");
  const current = taglines[index];
  const fullText = `${current.prefix} ${current.highlight} ${current.suffix}`;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (displayed.length < fullText.length) {
        timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), 45);
      } else {
        timeout = setTimeout(() => setPhase("hold"), 2200);
      }
    } else if (phase === "hold") {
      timeout = setTimeout(() => setPhase("erasing"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
      } else {
        setIndex((i) => (i + 1) % taglines.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, fullText]);

  const pre = current.prefix;
  const mid = current.highlight;
  const suf = current.suffix;
  const preLen = pre.length;
  const midLen = mid.length;

  const getSegments = () => {
    const d = displayed;
    if (d.length <= preLen) return [{ text: d, type: "normal" }];
    if (d.length <= preLen + 1 + midLen)
      return [
        { text: pre + " ", type: "normal" },
        { text: d.slice(preLen + 1), type: "highlight" },
      ];
    return [
      { text: pre + " ", type: "normal" },
      { text: mid + " ", type: "highlight" },
      { text: d.slice(preLen + 1 + midLen + 1), type: "suffix" },
    ];
  };

  return (
    <p className="text-lg md:text-xl font-medium leading-relaxed min-h-[3.5rem] flex flex-wrap items-baseline gap-x-1.5">
      {getSegments().map((seg, i) => (
        <span
          key={i}
          className={`${
              seg.type === "highlight"
                ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"
                : seg.type === "suffix"
                ? isDark ? "text-gray-300" : "text-gray-600"
                : isDark ? "text-gray-400" : "text-gray-500"
            }`}
        >
          {seg.text}
        </span>
      ))}
      <motion.span
        className="inline-block w-0.5 h-5 bg-blue-400 align-middle ml-0.5"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </p>
  );
};

const HeroSection = ({
  onScrollToAbout = () => {},
  onScrollToProjects = () => {},
}: HeroSectionProps) => {
  const { isDark } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setIsDropdownOpen(false);
    console.log("Category selected:", categoryId);
    onScrollToProjects(categoryId);
  };

  const handleHireMe = () => {
    window.location.href =
      "mailto:asrshourov999@gmail.com?subject=Freelance%20Opportunity";
  };

  const handleDownloadResume = () => {
    // Opens resume link - update with actual resume URL when available
    window.open("#", "_blank");
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 pt-8 pb-10 relative overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative z-10 h-[752px]">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Creative greeting block */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hi, I'm line */}
            <div className="flex items-center gap-3 mb-1">
              <motion.span
                className="text-base sm:text-lg md:text-xl font-mono tracking-widest text-blue-400/80 uppercase"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                &lt; Hey there! /&gt;
              </motion.span>
              <motion.span
                className="text-xl sm:text-2xl"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 0.9,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                👋
              </motion.span>
            </div>

            {/* "I'm" small label above name */}
            <motion.p
              className={`text-sm sm:text-base font-light tracking-[0.35em] uppercase mb-1 pl-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm
            </motion.p>

            {/* SHOUROV — large, glowing, letter-by-letter stagger */}
            <div className="flex items-end gap-0.5">
              {"SHOUROV".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-gradient animate-glow leading-none"
                  initial={{ opacity: 0, y: 30, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.07,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -6,
                    transition: { duration: 0.15 },
                  }}
                  style={{ display: "inline-block", cursor: "default" }}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Blinking dot accent after name */}
              <motion.span
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-blue-400 leading-none ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ display: "inline-block" }}
              >
                .
              </motion.span>
            </div>
          </motion.div>

          {/* Animated Role Badges */}
          <motion.div
            className="flex flex-wrap gap-3 mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              {
                label: "UI/UX Designer",
                color: "from-pink-500/60 to-rose-400/60",
                icon: "✦",
              },
              {
                label: "Full-Stack Web Developer",
                color: "from-blue-500/60 to-cyan-400/60",
                icon: "⚡",
              },
              {
                label: "AI / ML Enthusiast",
                color: "from-purple-500/60 to-violet-400/60",
                icon: "🧠",
              },
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

          <motion.div
            className="mb-8 max-w-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TypewriterTagline />
          </motion.div>

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
                    className={`absolute bottom-full left-0 mb-3 w-64 backdrop-blur-xl rounded-2xl border shadow-2xl z-50 ${isDark ? "bg-gray-900/95 border-gray-700/50" : "bg-white/95 border-gray-200/70"}`}
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
                                  hoveredCategory === category.id
                                    ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                                    : ""
                                }`}
                              />
                            </motion.div>
                            {/* Label */}
                            <span className={`relative font-medium group-hover:text-white transition-colors duration-300 ${isDark ? "text-gray-200" : "text-gray-700"}`}>
                              {category.label}
                            </span>
                            {/* Arrow indicator */}
                            <motion.div
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              animate={{
                                x: hoveredCategory === category.id ? 0 : -5,
                              }}
                            >
                              <ArrowDownIcon
                                size={14}
                                className="text-gray-400 -rotate-90"
                              />
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
              className={`border-2 border-gray-500 flex items-center gap-2 px-5 py-4 md:px-6 md:py-6 rounded-full text-base md:text-lg font-semibold hover-lift transition-all duration-300 ${isDark ? "text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50" : "text-gray-600 hover:border-gray-600 hover:text-gray-900 hover:bg-gray-200/50"}`}
            >
              <Download size={18} /> Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Photo with animated rings */}
        <motion.div
          className="flex justify-end items-center ml-auto"
          style={{ minWidth: "420px" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="relative flex flex-col items-center justify-center gap-6">
            {/* Let's Talk badge */}
            <motion.div
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 backdrop-blur-sm shadow-lg shadow-blue-500/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-bold tracking-widest text-white uppercase">
                Let's Talk
              </span>
              <span className="text-base">👋</span>
            </motion.div>

            {/* Circle photo with spinning rings */}
            <div className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96">
              {/* Outer dashed spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                {/* Dot on outer ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/70" />
              </motion.div>

              {/* Inner ring spinning reverse */}
              <motion.div
                className="absolute w-[85%] h-[85%] rounded-full border border-purple-500/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-lg shadow-orange-400/70" />
              </motion.div>

              {/* Glow blob */}
              <div className="absolute w-[70%] h-[70%] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl" />

              {/* Photo circle */}
              <motion.div
                className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-blue-500/60 shadow-2xl shadow-blue-500/30 group cursor-pointer"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.imgur.com/827jqLg.png"
                  alt="Shourov"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: "50% 10%" }}
                />
                {/* Overlay gradient always present */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />

                {/* Hover overlay — "Let's Work Together" */}
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/85 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.p
                    className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase text-center px-3 leading-relaxed"
                    initial={false}
                  >
                    Let's Work
                    <br />
                    Together
                  </motion.p>
                  <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  <span className="mt-2 text-xl">🤝</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
