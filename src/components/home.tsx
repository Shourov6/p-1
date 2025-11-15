import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Figma } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SectionsContainer from "./SectionsContainer";

const Home = () => {
  // Template handlers - update these with actual functionality later
  const handleHeaderEmailClick = () => {
    console.log("Header Email clicked");
    // Add email functionality here
  };

  const handleHeaderLinkedInClick = () => {
    console.log("Header LinkedIn clicked");
    // Add LinkedIn functionality here
  };

  const handleHeaderGitHubClick = () => {
    console.log("Header GitHub clicked");
    // Add GitHub functionality here
  };

  const handleHeaderFigmaClick = () => {
    console.log("Header Figma clicked");
    // Add Figma functionality here
  };

  const handleAboutEmailClick = () => {
    console.log("About Email clicked");
    // Add email functionality here
  };

  const handleAboutLinkedInClick = () => {
    console.log("About LinkedIn clicked");
    // Add LinkedIn functionality here
  };

  const handleAboutGitHubClick = () => {
    console.log("About GitHub clicked");
    // Add GitHub functionality here
  };

  const handleAboutBehanceClick = () => {
    console.log("About Behance clicked");
    // Add Behance functionality here
  };

  const handleFooterLinkedInClick = () => {
    console.log("Footer LinkedIn clicked");
    // Add LinkedIn functionality here
  };

  const handleFooterGitHubClick = () => {
    console.log("Footer GitHub clicked");
    // Add GitHub functionality here
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">SS</div>
        <div className="flex space-x-4">
          <button
            onClick={handleHeaderEmailClick}
            className="hover:text-orange-400 transition-colors"
          >
            <Mail size={20} />
          </button>
          <button
            onClick={handleHeaderLinkedInClick}
            className="hover:text-orange-400 transition-colors"
          >
            <Linkedin size={20} />
          </button>
          <button
            onClick={handleHeaderGitHubClick}
            className="hover:text-orange-400 transition-colors"
          >
            <Github size={20} />
          </button>
          <button
            onClick={handleHeaderFigmaClick}
            className="hover:text-orange-400 transition-colors"
          >
            <Figma size={20} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onScrollToAbout={handleScrollToAbout} />

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
                  e.currentTarget.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Shourov";
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
              I'm Shourov, a Computer Science student at Green University of
              Bangladesh, passionate about building modern digital solutions. As
              a freelancer on Fiverr, I've worked with clients worldwide,
              specializing in Wix and Squarespace website development. I also
              explore advanced areas like blockchain, cryptography, machine
              learning, and AI applications. My journey combines academic
              research, hands-on freelancing, and real-world projects—ranging
              from Android apps to machine learning models and web platforms.
            </motion.p>
            <motion.p
              className="mb-6 text-orange-400 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's collaborate and create something innovative.
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
      <ProjectsSection />

      {/* Other Sections Container */}
      <SectionsContainer />

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
            <p className="text-gray-500 text-sm">&copy; Shourov 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;