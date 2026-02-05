import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Figma } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SectionsContainer from "./SectionsContainer";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  
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
    console.log("Header Figma clicked");
    // Add Figma functionality here
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
    console.log("About Behance clicked");
    // Add Behance functionality here
  };

  const handleFooterLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/asr-shourov-6420912b8", "_blank");
  };

  const handleFooterGitHubClick = () => {
    window.open("https://github.com/Shourov6", "_blank");
  };

  const handleFooterFigmaClick = () => {
    console.log("Footer Figma clicked");
    // Add Figma functionality here
  };

  const handleFooterEmailClick = () => {
    console.log("Footer Email clicked");
    // Add email functionality here
  };

  const handleScrollToAbout = () => {
    console.log("Scroll to About clicked");
    // Add scroll functionality here
  };

  const handleScrollToProjects = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    // Immediate scroll - no delay needed
    requestAnimationFrame(() => {
      const projectsElement = document.getElementById('projects-section');
      if (projectsElement) {
        const yOffset = -20; // Slight offset from top
        const y = projectsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div
          className="text-2xl text-[#22d3ee] italic"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          ASR
        </div>
        <div className={"flex space-x-4"}>
          <button
            className={"hover:text-orange-400 transition-colors"}
            onClick={() => console.log("onClick")}
          >
            <Mail size={20}></Mail>
          </button>
          <button
            className={"hover:text-orange-400 transition-colors"}
            onClick={() => console.log("onClick")}
          >
            <Linkedin size={20}></Linkedin>
          </button>
          <button
            className={"hover:text-orange-400 transition-colors"}
            onClick={() => console.log("onClick")}
          >
            <Github size={20}></Github>
          </button>
          <button
            className={"hover:text-orange-400 transition-colors"}
            onClick={() => console.log("onClick")}
          >
            <Figma size={20}></Figma>
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <HeroSection onScrollToAbout={handleScrollToAbout} onScrollToProjects={handleScrollToProjects} />
      {/* About Me Section */}
      <section className="container mx-auto px-4 py-20">
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
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
