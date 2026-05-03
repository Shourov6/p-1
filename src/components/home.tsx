import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Figma, ChevronDown, Menu, X, Phone, Sun, Moon } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SectionsContainer from "./SectionsContainer";
import { useTheme } from "@/contexts/ThemeContext";

const Home = () => {
  const { isDark, toggle } = useTheme();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Track scroll position for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('#hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsScrolled(heroBottom < 80); // When hero is scrolled past
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectCategories = [
    { id: 'all', name: 'All Projects', value: null },
    { id: 'uiux', name: 'UI/UX Design', value: 'uiux' },
    { id: 'cms', name: 'CMS Projects', value: 'cms' },
    { id: 'web', name: 'Web Development', value: 'web' },
    { id: 'aiml', name: 'AI/ML Projects', value: 'aiml' },
  ];
  
  // Template handlers - update these with actual functionality later
  const handleHeaderEmailClick = () => {
    window.location.href = "mailto:asrshourov999@gmail.com";
  };

  const handleHeaderLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/asr-shourov-6420912b8", "_blank");
  };

  const handleHeaderGitHubClick = () => {
    window.open("https://github.com/Shourov6", "_blank");
  };

  const handleHeaderFigmaClick = () => {
    window.open("https://www.behance.net/asrshourov", "_blank");
  };

  const handleAboutEmailClick = () => {
    window.location.href = "mailto:asrshourov999@gmail.com";
  };

  const handleAboutLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/asr-shourov-6420912b8", "_blank");
  };

  const handleAboutGitHubClick = () => {
    window.open("https://github.com/Shourov6", "_blank");
  };

  const handleAboutBehanceClick = () => {
    window.open("https://www.behance.net/asrshourov", "_blank");
  };

  const handleFooterLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/asr-shourov-6420912b8", "_blank");
  };

  const handleFooterGitHubClick = () => {
    window.open("https://github.com/Shourov6", "_blank");
  };

  const handleFooterFigmaClick = () => {
    window.open("https://www.behance.net/asrshourov", "_blank");
  };

  const handleFooterEmailClick = () => {
    window.location.href = "mailto:asrshourov@gmail.com";
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToProjects = (category?: string) => {
    // Map category IDs from Hero/Header to internal filter types
    const categoryMapping: Record<string, string> = {
      'ui-ux': 'uiux',
      'cms': 'cms',
      'web': 'web',
      'ai-ml': 'aiml',
    };
    
    // If category is provided, set it and scroll to that specific category section
    if (category) {
      const mappedCategory = categoryMapping[category] || category;
      setSelectedCategory(mappedCategory);
      // Wait for state update and scroll to specific category section
      setTimeout(() => {
        const categorySection = document.getElementById(`category-${mappedCategory}`);
        if (categorySection) {
          const yOffset = -100;
          const y = categorySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else {
          // Fallback to projects section if category section not found
          const projectsElement = document.getElementById('projects-section');
          if (projectsElement) {
            const yOffset = -20;
            const y = projectsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      }, 150);
    } else {
      // No category - just scroll to projects section
      requestAnimationFrame(() => {
        const projectsElement = document.getElementById('projects-section');
        if (projectsElement) {
          const yOffset = -20;
          const y = projectsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isDark
          ? isScrolled
            ? "bg-gray-900/70 backdrop-blur-md border-gray-800/50"
            : "bg-gray-900/95 backdrop-blur-md border-gray-800"
          : isScrolled
            ? "bg-white/70 backdrop-blur-md border-gray-200/50"
            : "bg-white/95 backdrop-blur-md border-gray-200"
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className="text-2xl text-[#22d3ee] italic cursor-pointer"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ASR
          </div>
          
          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`transition-colors text-sm font-medium hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about-section")}
              className={`transition-colors text-sm font-medium hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              About
            </button>
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => {
                  scrollToSection("projects-section");
                  setIsDropdownOpen(false);
                }}
                className={`transition-colors text-sm font-medium flex items-center gap-1 py-2 hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                Projects
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu - pt-2 creates invisible bridge between button and menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div 
                    className={`backdrop-blur-md border rounded-lg shadow-xl overflow-hidden ${isDark ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-200"}`}
                  >
                    {projectCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Map the header category ID to the internal format
                          const categoryMapping: Record<string, string> = {
                            'uiux': 'uiux',
                            'cms': 'cms',
                            'web': 'web',
                            'aiml': 'aiml',
                          };
                          const mappedValue = category.value ? categoryMapping[category.value] || category.value : null;
                          setSelectedCategory(mappedValue);
                          scrollToSection("projects-section");
                          setIsDropdownOpen(false);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:text-blue-400 hover:bg-gray-800/50 transition-colors cursor-pointer ${isDark ? "text-gray-300" : "text-gray-700 hover:bg-gray-100"}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection("experience-section")}
              className={`transition-colors text-sm font-medium hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("expertise-section")}
              className={`transition-colors text-sm font-medium hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("contact-section")}
              className={`transition-colors text-sm font-medium hover:text-blue-400 ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Contact
            </button>
          </nav>

          {/* Right side: Social Icons + Theme Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Social Icons - hidden on very small screens */}
            <div className="hidden sm:flex space-x-3 md:space-x-4">
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={handleHeaderEmailClick}
              >
                <Mail size={20} />
              </button>
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={handleHeaderLinkedInClick}
              >
                <Linkedin size={20} />
              </button>
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={handleHeaderGitHubClick}
              >
                <Github size={20} />
              </button>
              <button
                className="hover:text-orange-400 transition-colors"
                onClick={handleHeaderFigmaClick}
              >
                <Figma size={20} />
              </button>
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggle}
              className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 border ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <motion.span
                key={isDark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </motion.span>
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden border-t overflow-hidden ${isDark ? "bg-gray-900/98 border-gray-800" : "bg-white/98 border-gray-200"}`}
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-1">
                <button
                  onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  Home
                </button>
                <button
                  onClick={() => { scrollToSection("about-section"); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  About
                </button>
                <button
                  onClick={() => { scrollToSection("projects-section"); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  Projects
                </button>
                <button
                  onClick={() => { scrollToSection("experience-section"); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  Experience
                </button>
                <button
                  onClick={() => { scrollToSection("expertise-section"); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  Expertise
                </button>
                <button
                  onClick={() => { scrollToSection("contact-section"); setIsMobileMenuOpen(false); }}
                  className={`text-left hover:text-blue-400 transition-colors py-2.5 text-sm font-medium border-b ${isDark ? "text-gray-300 border-gray-800/50" : "text-gray-600 border-gray-200/50"}`}
                >
                  Contact
                </button>
                {/* Social icons in mobile menu */}
                <div className="flex space-x-4 pt-3 sm:hidden">
                  <button className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`} onClick={handleHeaderEmailClick}><Mail size={20} /></button>
                  <button className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`} onClick={handleHeaderLinkedInClick}><Linkedin size={20} /></button>
                  <button className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`} onClick={handleHeaderGitHubClick}><Github size={20} /></button>
                  <button className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-300" : "text-gray-600"}`} onClick={handleHeaderFigmaClick}><Figma size={20} /></button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-16"></div>
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection onScrollToAbout={handleScrollToAbout} onScrollToProjects={handleScrollToProjects} />
      </div>
      {/* About Me Section */}
      <section id="about-section" className={`max-w-[1400px] mx-auto px-4 sm:px-8 py-16 md:py-24 border-t ${isDark ? "border-gray-800/60" : "border-gray-200/60"}`}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">
          {/* Left side: Project categories + Tech stack bubbles */}
          <div className="w-full lg:w-2/5 flex flex-col items-center gap-8">
            {/* Project Category Bubbles */}
            <div className="w-full">
              <p className={`text-center text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Project Categories</p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "UI/UX Design", color: "from-pink-500/80 to-rose-500/80", glow: "shadow-pink-500/40", border: "border-pink-500/50", icon: "🎨" },
                  { label: "Web Dev", color: "from-blue-500/80 to-cyan-500/80", glow: "shadow-blue-500/40", border: "border-blue-500/50", icon: "🌐" },
                  { label: "AI / ML", color: "from-purple-500/80 to-violet-500/80", glow: "shadow-purple-500/40", border: "border-purple-500/50", icon: "🧠" },
                  { label: "CMS", color: "from-green-500/80 to-emerald-500/80", glow: "shadow-green-500/40", border: "border-green-500/50", icon: "🗂️" },
                  { label: "Full-Stack", color: "from-orange-500/80 to-amber-500/80", glow: "shadow-orange-500/40", border: "border-orange-500/50", icon: "⚡" },
                ].map((cat, i) => (
                  <motion.span
                    key={cat.label}
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${cat.color} border ${cat.border} shadow-lg ${cat.glow} cursor-default select-none`}
                  >
                    <span>{cat.icon}</span>
                    {cat.label}
                  </motion.span>
                ))}
              </div>
            </div>
            {/* Tech Stack Bubbles */}
            <div className="w-full">
              <p className={`text-center text-xs font-semibold uppercase tracking-widest mb-4 ${isDark ? "text-gray-500" : "text-gray-400"}`}>Tech Stack</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { label: "Python", icon: "🐍", dark: "bg-blue-900/60 border-blue-500/40 text-blue-300", light: "bg-blue-100 border-blue-400/60 text-blue-700" },
                  { label: "React", icon: "⚛️", dark: "bg-cyan-900/60 border-cyan-500/40 text-cyan-300", light: "bg-cyan-100 border-cyan-400/60 text-cyan-700" },
                  { label: "JavaScript", icon: "📜", dark: "bg-yellow-900/60 border-yellow-500/40 text-yellow-300", light: "bg-yellow-100 border-yellow-400/60 text-yellow-700" },
                  { label: "TypeScript", icon: "🔷", dark: "bg-blue-900/60 border-blue-400/40 text-blue-200", light: "bg-blue-100 border-blue-400/60 text-blue-600" },
                  { label: "Node.js", icon: "🟢", dark: "bg-green-900/60 border-green-500/40 text-green-300", light: "bg-green-100 border-green-400/60 text-green-700" },
                  { label: "Flask", icon: "🧪", dark: "bg-gray-800/80 border-gray-400/40 text-gray-200", light: "bg-gray-100 border-gray-400/60 text-gray-700" },
                  { label: "Django", icon: "🌿", dark: "bg-green-900/60 border-green-600/40 text-green-200", light: "bg-green-100 border-green-500/60 text-green-800" },
                  { label: "Figma", icon: "🖌️", dark: "bg-purple-900/60 border-purple-500/40 text-purple-300", light: "bg-purple-100 border-purple-400/60 text-purple-700" },
                  { label: "TensorFlow", icon: "🤖", dark: "bg-orange-900/60 border-orange-500/40 text-orange-300", light: "bg-orange-100 border-orange-400/60 text-orange-700" },
                  { label: "PyTorch", icon: "🔥", dark: "bg-red-900/60 border-red-500/40 text-red-300", light: "bg-red-100 border-red-400/60 text-red-700" },
                  { label: "HTML/CSS", icon: "🌐", dark: "bg-red-900/60 border-red-500/40 text-red-300", light: "bg-red-100 border-red-400/60 text-red-700" },
                  { label: "Bootstrap", icon: "🅱️", dark: "bg-violet-900/60 border-violet-500/40 text-violet-300", light: "bg-violet-100 border-violet-400/60 text-violet-700" },
                  { label: "MySQL", icon: "🗄️", dark: "bg-teal-900/60 border-teal-500/40 text-teal-300", light: "bg-teal-100 border-teal-400/60 text-teal-700" },
                  { label: "Wix", icon: "🔷", dark: "bg-indigo-900/60 border-indigo-500/40 text-indigo-300", light: "bg-indigo-100 border-indigo-400/60 text-indigo-700" },
                  { label: "Squarespace", icon: "◼️", dark: "bg-gray-800/80 border-gray-500/40 text-gray-300", light: "bg-gray-100 border-gray-400/60 text-gray-700" },
                  { label: "Sklearn", icon: "📊", dark: "bg-teal-900/60 border-teal-500/40 text-teal-300", light: "bg-teal-100 border-teal-400/60 text-teal-700" },
                  { label: "Streamlit", icon: "🚀", dark: "bg-rose-900/60 border-rose-500/40 text-rose-300", light: "bg-rose-100 border-rose-400/60 text-rose-700" },
                  { label: "OpenCV", icon: "👁️", dark: "bg-blue-900/60 border-blue-600/40 text-blue-200", light: "bg-blue-100 border-blue-500/60 text-blue-600" },
                ].map((tech, i) => (
                  <motion.span
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${isDark ? tech.dark : tech.light} cursor-default select-none transition-all duration-200`}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    {tech.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I'm Shourov, a{" "}
              <span className="text-blue-400 font-semibold">
                Computer Science graduate from Green University of Bangladesh
              </span>
              , passionate about building intelligent solutions that make a real
              impact. I have hands-on experience in web development, having delivered professional websites using Wix and
              Squarespace for clients worldwide, as well as building full-stack web applications.
            </motion.p>
            <motion.p
              className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
            >
              My passion lies in{" "}
              <span className="text-purple-400 font-semibold">
                Artificial Intelligence and Machine Learning
              </span>{" "}
              — I've developed prediction systems for healthcare, built deep
              learning models for currency recognition, and deployed ML-powered
              web applications. I combine academic knowledge with practical
              development to create solutions that solve real-world problems.
            </motion.p>
            <motion.p
              className="mb-6 text-orange-400 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Open to freelance work, research collaboration, and AI/ML
              projects. Let's build something innovative and impactful together.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleAboutEmailClick}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-lg shadow-blue-500/20"
              >
                <Mail size={15} /> Email
              </button>
              <button
                onClick={handleAboutLinkedInClick}
                className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-lg shadow-sky-500/20"
              >
                <Linkedin size={15} /> LinkedIn
              </button>
              <button
                onClick={handleAboutGitHubClick}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-lg shadow-gray-500/20"
              >
                <Github size={15} /> GitHub
              </button>
              <button
                onClick={handleAboutBehanceClick}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-lg shadow-purple-500/20"
              >
                <Figma size={15} /> Behance
              </button>
              <a
                href="tel:+8801705249560"
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium shadow-lg shadow-green-500/20"
              >
                <Phone size={15} /> 01705-249560
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <div ref={projectsSectionRef}>
        <ProjectsSection selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>
      {/* Other Sections Container */}
      <SectionsContainer />
      {/* Call to Action Section */}
      <section id="contact-section" className={`py-16 md:py-20 relative overflow-hidden ${isDark ? "bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" : "bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100"}`}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute bottom-10 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <p className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Whether you need a professional website, want to collaborate on an
              AI/ML research project, or have a unique challenge to solve — I'm
              ready to help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleAboutEmailClick}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-2xl hover-lift transition-all duration-300"
              >
                <Mail size={20} /> Start a Project
              </button>
              <button
                onClick={handleAboutLinkedInClick}
                className="flex items-center gap-2 border-2 border-neon-orange text-neon-orange hover:bg-neon-orange/20 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover-lift transition-all duration-300"
              >
                <Linkedin size={20} /> Connect on LinkedIn
              </button>
              <button
                onClick={handleAboutGitHubClick}
                className={`flex items-center gap-2 border-2 hover-lift transition-all duration-300 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold ${isDark ? "border-gray-500 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50" : "border-gray-400 text-gray-600 hover:border-gray-600 hover:text-gray-900 hover:bg-gray-200/50"}`}
              >
                <Github size={20} /> View My Code
              </button>
              <a
                href="tel:+8801705249560"
                className="flex items-center gap-2 border-2 border-green-500 text-green-400 hover:bg-green-500/20 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover-lift transition-all duration-300"
              >
                <Phone size={20} /> 01705-249560
              </a>
            </div>
            <div className={`mt-8 flex flex-wrap justify-center gap-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Freelance Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Research Collaboration
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-400">✓</span> AI/ML Development
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className={`py-10 ${isDark ? "bg-gray-950" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <button
                onClick={handleFooterLinkedInClick}
                className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={handleFooterGitHubClick}
                className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                <Github size={24} />
              </button>
              <button
                onClick={handleFooterFigmaClick}
                className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                <Figma size={24} />
              </button>
              <button
                onClick={handleFooterEmailClick}
                className={`hover:text-orange-400 transition-colors ${isDark ? "text-gray-400" : "text-gray-500"}`}
              >
                <Mail size={24} />
              </button>
            </div>
            <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              &copy; Shourov 2025 — Computer Science Graduate | AI Enthusiast |
              Web Developer | Mirpur-10, Dhaka, Bangladesh
            </p>
            <p className={`text-xs mt-2 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              asrshourov999@gmail.com | 01705-249560
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
