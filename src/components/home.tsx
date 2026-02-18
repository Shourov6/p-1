import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Figma, ChevronDown } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SectionsContainer from "./SectionsContainer";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/70 backdrop-blur-md border-gray-800/50' 
          : 'bg-gray-900/95 backdrop-blur-md border-gray-800'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className="text-2xl text-[#22d3ee] italic cursor-pointer"
            style={{ fontFamily: "'Great Vibes', cursive" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ASR
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about-section")}
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
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
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium flex items-center gap-1 py-2"
              >
                Projects
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu - pt-2 creates invisible bridge between button and menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-48 pt-2">
                  <div 
                    className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl overflow-hidden"
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
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 transition-colors cursor-pointer"
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
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("expertise-section")}
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
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
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection onScrollToAbout={handleScrollToAbout} onScrollToProjects={handleScrollToProjects} />
      </div>
      {/* About Me Section */}
      <section id="about-section" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.imgur.com/DnJWsmf.jpeg"
                alt="Profile Photo"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Shourov";
                }}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="mb-4 text-gray-300"
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
              className="mb-4 text-gray-300"
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
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Mail size={16} /> Email
              </button>
              <button
                onClick={handleAboutLinkedInClick}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </button>
              <button
                onClick={handleAboutGitHubClick}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Github size={16} /> GitHub
              </button>
              <button
                onClick={handleAboutBehanceClick}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Figma size={16} /> Behance
              </button>
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
      <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you need a professional website, want to collaborate on an
              AI/ML research project, or have a unique challenge to solve — I'm
              ready to help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleAboutEmailClick}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover-lift transition-all duration-300"
              >
                <Mail size={20} /> Start a Project
              </button>
              <button
                onClick={handleAboutLinkedInClick}
                className="flex items-center gap-2 border-2 border-neon-orange text-neon-orange hover:bg-neon-orange/20 px-8 py-4 rounded-full font-semibold hover-lift transition-all duration-300"
              >
                <Linkedin size={20} /> Connect on LinkedIn
              </button>
              <button
                onClick={handleAboutGitHubClick}
                className="flex items-center gap-2 border-2 border-gray-500 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50 px-8 py-4 rounded-full font-semibold hover-lift transition-all duration-300"
              >
                <Github size={20} /> View My Code
              </button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
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
      <footer className="bg-gray-950 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-6">
              <button
                onClick={handleFooterLinkedInClick}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={handleFooterGitHubClick}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Github size={24} />
              </button>
              <button
                onClick={handleFooterFigmaClick}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Figma size={24} />
              </button>
              <button
                onClick={handleFooterEmailClick}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail size={24} />
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; Shourov 2025 — Computer Science Student | AI Enthusiast |
              Web Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
