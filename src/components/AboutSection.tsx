import React from "react";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, Palette } from "lucide-react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  profileImage?: string;
  name?: string;
  description?: string;
  highlightText?: string;
}

const AboutSection = ({
  profileImage = "https://i.imgur.com/Uu1q9hL.jpeg",
  name = "Shourov",
  description = "I'm Shourov, a Computer Science student at Green University of Bangladesh, passionate about building intelligent solutions that make a real impact. As a freelancer on Fiverr, I've successfully delivered professional websites using Wix and Squarespace for clients worldwide.\n\nMy passion lies in Artificial Intelligence and Machine Learning — I've built prediction systems for healthcare, developed deep learning models for currency recognition, and deployed ML-powered web applications. I combine academic research with hands-on development to create solutions that solve real-world problems.\n\nOpen to freelance work, research collaboration, and AI/ML projects. Let's build something impactful together.",
  highlightText = "Let's collaborate and create something impactful.",
}: AboutSectionProps) => {
  // Template handlers - update these with actual functionality later
  const handleEmailClick = () => {
    console.log("Email button clicked");
    // Add email functionality here
  };

  const handleLinkedInClick = () => {
    console.log("LinkedIn button clicked");
    // Add LinkedIn functionality here
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/Shourov6", "_blank");
  };

  const handleBehanceClick = () => {
    console.log("Behance button clicked");
    // Add Behance functionality here
  };

  return (
    <section
      className="w-full py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-2xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-neon-blue to-neon-purple shadow-2xl hover-lift group">
              <img
                src={profileImage}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.error("Image failed to load:", profileImage);
                  e.currentTarget.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80";
                }}
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full blur opacity-40 animate-pulse"></div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              <span className="text-gradient">About Me</span>
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-neon-orange to-neon-pink rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h2>

            <motion.p
              className="text-gray-300 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            <motion.p
              className="text-gradient font-semibold text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {highlightText}
            </motion.p>

            {/* Expertise Badges */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">My Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {["Web Development", "Machine Learning", "AI Applications", "Blockchain", "Cryptography", "Android Development", "UI/UX Design"].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group relative px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 hover:border-neon-blue transition-all duration-300 glass-effect cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <span className="text-neon-blue text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-neon-blue/30 rounded-lg blur-md transition-opacity duration-300"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-lg shadow-neon-blue/25 rounded-lg transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={handleEmailClick}
                variant="outline"
                className="flex items-center gap-2 border-neon-blue text-neon-blue hover:bg-neon-blue/20 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 glass-effect"
              >
                <Mail size={18} />
                Email
              </Button>

              <Button
                onClick={handleLinkedInClick}
                variant="outline"
                className="flex items-center gap-2 border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300 glass-effect"
              >
                <Linkedin size={18} />
                LinkedIn
              </Button>

              <Button
                onClick={handleGitHubClick}
                variant="outline"
                className="flex items-center gap-2 border-neon-green text-neon-green hover:bg-neon-green/20 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300 glass-effect"
              >
                <Github size={18} />
                GitHub
              </Button>

              <Button
                onClick={handleBehanceClick}
                variant="outline"
                className="flex items-center gap-2 border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:border-neon-pink hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 glass-effect"
              >
                <Palette size={18} />
                Behance
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;