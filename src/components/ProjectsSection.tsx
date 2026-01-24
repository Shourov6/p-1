import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Palette, Globe, Code2, Brain, Sparkles, Star, Trophy, Rocket, Award, Target, Zap, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Featured Case Studies Data
const featuredCaseStudies = [
  {
    id: "student-dropout-case",
    title: "Student Dropout Prediction System",
    problem: "Educational institutions struggle to identify at-risk students early enough to intervene.",
    solution: "Built a data mining application using ML models to analyze academic patterns and predict dropout risks with high accuracy.",
    tools: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
    outcome: "Deployed live on Streamlit with real-time prediction capabilities for institutional use.",
    link: "https://student-dropout-web.streamlit.app/",
    icon: Target,
    color: "blue",
  },
  {
    id: "breast-cancer-case",
    title: "Breast Cancer Detection System",
    problem: "Early detection of breast cancer is critical but manual diagnosis is time-consuming and error-prone.",
    solution: "Developed CNN-based image classification system to assist medical professionals in faster, more accurate diagnosis.",
    tools: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    outcome: "Achieved high accuracy in classification, contributing to AI-assisted healthcare research.",
    icon: Zap,
    color: "purple",
  },
  {
    id: "currency-recognition-case",
    title: "Bangladeshi Currency Recognition",
    problem: "Visually impaired individuals face challenges in identifying currency denominations independently.",
    solution: "Created deep learning-based recognition system integrated into an Android app for real-time currency identification.",
    tools: ["PyTorch", "CNN", "Jetpack Compose", "Android"],
    outcome: "Functional mobile app providing accessibility solution for the visually impaired community.",
    icon: Award,
    color: "orange",
  },
];

// Impact & Achievements Data
const impactItems = [
  {
    icon: Brain,
    title: "ML Models Deployed",
    description: "Multiple machine learning models built and deployed for real-world applications",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Global Freelance Clients",
    description: "Delivered professional websites for clients worldwide via Fiverr",
    color: "green",
  },
  {
    icon: Rocket,
    title: "Live Streamlit Apps",
    description: "Deployed data-driven web applications on Streamlit cloud",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "Research Projects",
    description: "Academic AI/ML research including breast cancer grade classification",
    color: "orange",
  },
];

// Case Study Card Component
const CaseStudyCard = ({ caseStudy }: { caseStudy: typeof featuredCaseStudies[0] }) => {
  const Icon = caseStudy.icon;
  const colorClasses = {
    blue: { border: "border-blue-500/50", bg: "from-blue-500/20 to-cyan-500/20", text: "text-blue-400" },
    purple: { border: "border-purple-500/50", bg: "from-purple-500/20 to-indigo-500/20", text: "text-purple-400" },
    orange: { border: "border-orange-500/50", bg: "from-orange-500/20 to-yellow-500/20", text: "text-orange-400" },
  }[caseStudy.color];

  return (
    <Card className={`h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 ${colorClasses.border} border hover:border-opacity-100 transition-all duration-500 hover-lift glass-effect group relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <CardHeader className="relative z-10 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border}`}>
            <Icon className={colorClasses.text} size={24} />
          </div>
          <CardTitle className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
            {caseStudy.title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <div>
          <p className="text-sm text-gray-400 font-semibold mb-1">Problem:</p>
          <p className="text-gray-300 text-sm">{caseStudy.problem}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-semibold mb-1">Solution:</p>
          <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-semibold mb-1">Key Learning:</p>
          <p className="text-gray-300 text-sm">{caseStudy.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {caseStudy.tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      {caseStudy.link && (
        <CardFooter className="relative z-10 pt-2">
          <Button
            onClick={() => window.open(caseStudy.link, "_blank")}
            variant="outline"
            size="sm"
            className={`flex items-center gap-1.5 ${colorClasses.border} ${colorClasses.text} hover:bg-opacity-20 transition-all duration-300`}
          >
            <ExternalLink size={14} />
            View Live Demo
          </Button>
        </CardFooter>
      )}
      
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
};

// Impact Card Component
const ImpactCard = ({ item }: { item: typeof impactItems[0] }) => {
  const Icon = item.icon;
  const colorClasses = {
    purple: { border: "border-purple-500/30", bg: "from-purple-500/10", text: "text-purple-400" },
    green: { border: "border-green-500/30", bg: "from-green-500/10", text: "text-green-400" },
    blue: { border: "border-blue-500/30", bg: "from-blue-500/10", text: "text-blue-400" },
    orange: { border: "border-orange-500/30", bg: "from-orange-500/10", text: "text-orange-400" },
  }[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl bg-gradient-to-br ${colorClasses.bg} to-transparent border ${colorClasses.border} glass-effect hover-lift group`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-gray-800/50 ${colorClasses.text}`}>
          <Icon size={24} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  image?: string;
  category: "uiux" | "cms" | "web" | "aiml";
}

interface ProjectsSectionProps {
  projects?: Project[];
}

type FilterType = "all" | "uiux" | "cms" | "web" | "aiml";

const categoryConfig = {
  uiux: {
    title: "UI/UX & Design Projects",
    subtitle: "Figma • Flutter UI • Canva",
    icon: Palette,
    color: "neon-pink",
    gradient: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/50",
    textColor: "text-pink-400",
    bgHover: "hover:bg-pink-500/10",
  },
  cms: {
    title: "CMS & No-Code Platforms",
    subtitle: "Wix • Squarespace • Webflow",
    icon: Globe,
    color: "neon-green",
    gradient: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/50",
    textColor: "text-green-400",
    bgHover: "hover:bg-green-500/10",
  },
  web: {
    title: "Web Applications",
    subtitle: "Custom-built Applications",
    icon: Code2,
    color: "neon-blue",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50",
    textColor: "text-blue-400",
    bgHover: "hover:bg-blue-500/10",
  },
  aiml: {
    title: "AI / Machine Learning Projects",
    subtitle: "ML • Deep Learning • Research",
    icon: Brain,
    color: "neon-purple",
    gradient: "from-purple-500/20 to-indigo-500/20",
    borderColor: "border-purple-500/50",
    textColor: "text-purple-400",
    bgHover: "hover:bg-purple-500/10",
    glow: true,
  },
};

const filterTabs: { key: FilterType; label: string }[] = [
  { key: "all", label: "All" },
  { key: "uiux", label: "UI/UX" },
  { key: "cms", label: "CMS" },
  { key: "web", label: "Web" },
  { key: "aiml", label: "AI/ML" },
];

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const groupedProjects = {
    uiux: filteredProjects.filter(p => p.category === "uiux"),
    cms: filteredProjects.filter(p => p.category === "cms"),
    web: filteredProjects.filter(p => p.category === "web"),
    aiml: filteredProjects.filter(p => p.category === "aiml"),
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full relative overflow-hidden"
      id="projects"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects and applications, demonstrating
            my skills and expertise across different domains.
          </p>
        </motion.div>

        {/* Featured Case Studies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/50">
              <Star className="text-yellow-400" size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                Featured Case Studies
                <Sparkles className="text-yellow-400" size={20} />
              </h3>
              <p className="text-gray-400">In-depth look at key projects and their impact</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact & Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/50">
              <Trophy className="text-green-400" size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">Impact & Achievements</h3>
              <p className="text-gray-400">Highlights of my professional journey</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactItems.map((item, index) => (
              <ImpactCard key={index} item={item} />
            ))}
          </div>
        </motion.div>

        {/* Research & AI Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 via-gray-800/30 to-indigo-900/20 border border-purple-500/20 glass-effect"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/50">
              <Brain className="text-purple-400" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Research & AI Focus</h3>
              <p className="text-gray-300">
                My research interests center on <span className="text-purple-400 font-semibold">AI-powered healthcare solutions</span>, 
                including work on Breast Cancer Grade Classification using deep learning techniques. 
                I'm passionate about developing <span className="text-blue-400 font-semibold">decision-support systems</span> that 
                leverage machine learning to assist medical professionals and improve diagnostic accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Medical AI</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Deep Learning</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Decision Support Systems</Badge>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">Image Classification</Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {filterTabs.map((tab) => (
            <Button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              variant={activeFilter === tab.key ? "default" : "outline"}
              className={`
                px-6 py-2 rounded-full transition-all duration-300
                ${activeFilter === tab.key 
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/25" 
                  : "border-gray-600 text-gray-400 hover:border-neon-blue/50 hover:text-white hover:bg-gray-800/50"
                }
              `}
            >
              {tab.label}
            </Button>
          ))}
        </motion.div>

        {/* Categorized Project Galleries */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {(Object.keys(groupedProjects) as Array<keyof typeof groupedProjects>).map((category) => {
              const projectsInCategory = groupedProjects[category];
              if (projectsInCategory.length === 0) return null;
              
              const config = categoryConfig[category];
              const Icon = config.icon;

              return (
                <div key={category} className="relative">
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className={`flex items-center gap-4 mb-2 ${config.glow ? "relative" : ""}`}>
                      {config.glow && (
                        <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full opacity-50"></div>
                      )}
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient} border ${config.borderColor} relative`}>
                        <Icon className={config.textColor} size={28} />
                      </div>
                      <div className="relative">
                        <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                          {config.title}
                          {config.glow && <Sparkles className="text-purple-400" size={20} />}
                        </h3>
                        <p className="text-gray-400">{config.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsInCategory.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ProjectCard project={project} config={config} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface CategoryConfig {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
  borderColor: string;
  textColor: string;
  bgHover: string;
  glow?: boolean;
}

const ProjectCard = ({ project, config }: { project: Project; config: CategoryConfig }) => {
  const handleViewProject = () => {
    if (project.link && project.link !== "#") {
      window.open(project.link, "_blank");
    }
  };

  const handleViewCode = () => {
    if (project.githubLink && project.githubLink !== "#") {
      window.open(project.githubLink, "_blank");
    }
  };

  const isAIML = project.category === "aiml";

  return (
    <Card className={`h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 glass-effect group hover:${config.borderColor} relative ${isAIML ? "ring-1 ring-purple-500/20" : ""}`}>
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* AI/ML special glow */}
      {isAIML && (
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
      )}

      {project.image && (
        <div className="w-full h-40 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
      )}
      
      <CardHeader className="relative z-10 pb-2">
        <CardTitle className={`text-lg font-bold text-white group-hover:${config.textColor} transition-all duration-300 line-clamp-2`}>
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 pb-2">
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className={`text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:${config.borderColor} ${config.bgHover} transition-all duration-300`}
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="secondary" className="text-xs bg-gray-700/50 text-gray-400">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
      
      {/* Buttons with slide-up effect on hover */}
      <CardFooter className="flex gap-2 relative z-10 pt-2">
        <div className="flex gap-2 transform translate-y-2 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.githubLink && project.githubLink !== "#" && (
            <Button
              onClick={handleViewCode}
              variant="outline"
              size="sm"
              className={`flex items-center gap-1.5 ${config.borderColor} ${config.textColor} ${config.bgHover} hover:shadow-lg transition-all duration-300`}
            >
              <Github size={14} />
              GitHub
            </Button>
          )}
          {project.link && project.link !== "#" && (
            <Button
              onClick={handleViewProject}
              variant="outline"
              size="sm"
              className="flex items-center gap-1.5 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </Button>
          )}
          {(!project.link || project.link === "#") && (!project.githubLink || project.githubLink === "#") && (
            <Badge variant="secondary" className="bg-gray-700/50 text-gray-400 border border-gray-600/50">
              Coming Soon
            </Badge>
          )}
        </div>
      </CardFooter>

      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </Card>
  );
};

// ========================================
// 📝 INSTRUCTIONS TO UPDATE PROJECTS:
// ========================================
// For each project, update the following fields:
// 
// 1. image: Replace placeholder URL with your project screenshot
//    Example: "https://your-image-host.com/project-image.png"
//
// 2. link: Replace "#" with live project URL
//    Example: "https://your-project.com"
//    If no live link, keep as "#"
//
// 3. githubLink: Replace "#" with GitHub repository URL
//    Example: "https://github.com/yourusername/project-name"
//    If no GitHub link, keep as "#"
//
// 4. Update title, description, and techStack as needed
// ========================================

const defaultProjects: Project[] = [
  // UI/UX & Design Projects
  {
    id: "portfolio-ui-design",
    title: "Portfolio UI Design",
    description: "Designed a modern dark-themed developer portfolio solving the problem of generic templates. Features responsive layouts and intuitive navigation for optimal user experience.",
    techStack: ["Figma", "UI/UX", "Prototyping"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI Concepts",
    description: "Created accessible mobile UI layouts addressing navigation complexity in mobile apps. Implements Material Design principles for consistent cross-platform experience.",
    techStack: ["Flutter", "Material UI", "Dart"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "social-media-designs",
    title: "Social Media & Presentation Designs",
    description: "Produced professional visual content for university clubs and events, improving brand consistency and engagement across digital platforms.",
    techStack: ["Canva", "Graphic Design", "Branding"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE (optional for design projects)
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },

  // CMS & No-Code Platform Projects
  {
    id: "texhair-wix",
    title: "TexHair",
    description: "Professional e-commerce website for hair care products and treatments. Features product catalog, service booking, and modern shopping experience.",
    techStack: ["Wix", "E-Commerce", "SEO", "Responsive Design"],
    link: "https://sourob123theking.wixstudio.com/my-site-1",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.imgur.com/be99Ye6.png",
    category: "cms",
  },
  {
    id: "jetlink-travels-wix",
    title: "JetLink Travels",
    description: "Travel arrangement company website with tour packages, booking system, and destination showcases for seamless travel planning experience.",
    techStack: ["Wix", "Travel", "Booking System", "UI Design"],
    link: "https://asrshourov999.wixstudio.com/my-site-1",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.imgur.com/be99Ye6.png", // 🖼️ REPLACE WITH JETLINK TRAVELS SCREENSHOT
    category: "cms",
  },
  {
    id: "bike-rent-bd-wix",
    title: "Bike Rent BD",
    description: "Bike rental platform for Bangladesh featuring bike catalog, rental booking, pricing plans, and easy reservation system for customers.",
    techStack: ["Wix", "Rental System", "Booking", "Local Business"],
    link: "https://sourob123theking.wixsite.com/bike-rent-bd",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.imgur.com/be99Ye6.png", // 🖼️ REPLACE WITH BIKE RENT BD SCREENSHOT FROM IMGUR
    category: "cms",
  },
  {
    id: "portfolio-squarespace",
    title: "Portfolio & Client Sites – Squarespace",
    description: "Delivered custom portfolio websites for freelance clients worldwide, focusing on strong brand identity and conversion-optimized layouts.",
    techStack: ["Squarespace", "UX Design", "Branding"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // N/A for Squarespace projects
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "cms",
  },
  {
    id: "landing-pages-webflow",
    title: "Landing Pages – Webflow",
    description: "Created high-conversion landing pages with advanced animations, helping businesses improve lead generation and user engagement.",
    techStack: ["Webflow", "CMS", "Animations"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // N/A for Webflow projects
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "cms",
  },

  // Web Application Projects
  {
    id: "sorting-visualizer",
    title: "Sorting Algorithm Visualizer",
    description: "Built an educational tool to help students understand sorting algorithms visually. Demonstrates Bubble, Quick, and Merge Sort with step-by-step animations.",
    techStack: ["JavaScript", "HTML", "CSS", "Algorithms"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },
  {
    id: "student-dropout-prediction",
    title: "Student Dropout Prediction System",
    description: "Developed a data-driven solution to identify at-risk students early. Uses ML models to analyze academic patterns and predict dropout probability with high accuracy.",
    techStack: ["Python", "ML", "Streamlit", "Data Mining"],
    link: "https://student-dropout-web.streamlit.app/", // ✅ Live Streamlit link
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },
  {
    id: "learnsphere-ai",
    title: "LearnSphere AI (E-Learning Platform)",
    description: "Created an AI-powered learning platform addressing personalized education needs. Features chatbot instructor, adaptive quizzes, and progress tracking.",
    techStack: ["Flask", "OpenAI API", "SQL", "Python"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },

  // AI / Machine Learning Projects
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection System",
    description: "Developed an early detection system for breast cancer using CNN-based image classification. Aims to assist medical professionals in faster, more accurate diagnosis.",
    techStack: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if deployed)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    description: "Built a predictive model analyzing voice biomarkers for early Parkinson's detection. Contributes to non-invasive diagnostic research in neurology.",
    techStack: ["Python", "Scikit-learn", "Signal Processing"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if deployed)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "currency-recognition",
    title: "Bangladeshi Currency Recognition",
    description: "Created a deep learning solution for visually impaired users to identify currency denominations. Integrated into Android app using Jetpack Compose.",
    techStack: ["PyTorch", "CNN", "Jetpack Compose", "Android"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if APK available)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "xor-classification",
    title: "XOR Classification (MLP from Scratch)",
    description: "Implemented a neural network from scratch to solve XOR classification, demonstrating deep understanding of backpropagation and gradient descent fundamentals.",
    techStack: ["Python", "NumPy", "Neural Networks"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if notebook deployed)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
];

export default ProjectsSection;
