import React, { useState, useEffect } from "react";
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
import { projects, type Project } from "@/data/projects";

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
const CaseStudyCard = ({ caseStudy }: { caseStudy: any }) => {
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

interface ProjectsSectionProps {
  projects?: Project[];
  selectedCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  showAllProjects?: boolean;
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
  projects: projectsProp = projects,
  selectedCategory,
  onCategoryChange,
  showAllProjects = false,
}: ProjectsSectionProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Map dropdown category IDs to filter types
  const categoryMapping: Record<string, FilterType> = {
    "ui-ux": "uiux",
    "cms": "cms",
    "web": "web",
    "ai-ml": "aiml",
  };

  // Update filter when selectedCategory changes from dropdown
  useEffect(() => {
    if (selectedCategory) {
      console.log('Selected category received:', selectedCategory);
      const mappedCategory = categoryMapping[selectedCategory];
      console.log('Mapped to filter:', mappedCategory);
      if (mappedCategory) {
        setActiveFilter(mappedCategory);
      }
    }
  }, [selectedCategory]);

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    if (onCategoryChange) {
      // Map back to dropdown category ID format
      const reverseCategoryMapping: Record<FilterType, string | null> = {
        "all": null,
        "uiux": "ui-ux",
        "cms": "cms",
        "web": "web",
        "aiml": "ai-ml",
      };
      onCategoryChange(reverseCategoryMapping[filter]);
    }
  };

  const filteredProjects = activeFilter === "all" 
    ? projectsProp 
    : projectsProp.filter(p => p.category === activeFilter);

  const groupedProjects = {
    uiux: filteredProjects.filter(p => p.category === "uiux"),
    cms: filteredProjects.filter(p => p.category === "cms"),
    web: filteredProjects.filter(p => p.category === "web"),
    aiml: filteredProjects.filter(p => p.category === "aiml"),
  };

  const toggleCategoryExpansion = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full relative overflow-hidden"
      id="projects-section"
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
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-600 bg-clip-text text-transparent">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects and applications, demonstrating
            my skills and expertise across different domains.
          </p>
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
              onClick={() => handleFilterChange(tab.key)}
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
              
              // Show first 3 projects by default, unless expanded or showAllProjects is true
              const isExpanded = expandedCategories.has(category) || showAllProjects;
              const displayedProjects = isExpanded ? projectsInCategory : projectsInCategory.slice(0, 3);
              const hasMore = projectsInCategory.length > 3;

              return (
                <div key={category} className="relative" id={`category-${category}`}>
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className={`flex items-center justify-between mb-2`}>
                      <div className={`flex items-center gap-4 ${config.glow ? "relative" : ""}`}>
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
                      
                      {/* View All Button (only show if more than 3 projects and not in showAllProjects mode) */}
                      {hasMore && !showAllProjects && (
                        <Button
                          onClick={() => toggleCategoryExpansion(category)}
                          variant="outline"
                          size="sm"
                          className={`flex items-center gap-2 ${config.borderColor} ${config.textColor} ${config.bgHover} transition-all duration-300`}
                        >
                          {isExpanded ? "Show Less" : `View All (${projectsInCategory.length})`}
                        </Button>
                      )}
                    </div>
                  </motion.div>

                  {/* Project Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedProjects.map((project, index) => (
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
                  
                  {/* See More Button Below Cards (mobile-friendly) */}
                  {hasMore && !showAllProjects && !isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="flex justify-center mt-8"
                    >
                      <Button
                        onClick={() => toggleCategoryExpansion(category)}
                        variant="outline"
                        size="lg"
                        className={`flex items-center gap-2 ${config.borderColor} ${config.textColor} ${config.bgHover} hover:shadow-lg transition-all duration-300 px-8`}
                      >
                        See More ({projectsInCategory.length - 3} more)
                      </Button>
                    </motion.div>
                  )}
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
        <CardTitle className={`text-xl font-bold transition-all duration-300 ${
          project.category === 'uiux' ? 'text-white group-hover:text-pink-400' :
          project.category === 'cms' ? 'text-white group-hover:text-green-400' :
          project.category === 'web' ? 'text-white group-hover:text-blue-400' :
          project.category === 'aiml' ? 'text-white group-hover:text-purple-400' :
          'text-white'
        }`}>
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 pb-2">
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-3 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech, index) => {
            const badgeClasses = 
              project.category === 'uiux' ? 'hover:border-pink-400/50 group-hover:bg-pink-500/20' :
              project.category === 'cms' ? 'hover:border-green-400/50 group-hover:bg-green-500/20' :
              project.category === 'web' ? 'hover:border-blue-400/50 group-hover:bg-blue-500/20' :
              project.category === 'aiml' ? 'hover:border-purple-400/50 group-hover:bg-purple-500/20' :
              '';
            return (
            <Badge
              key={index}
              variant="secondary"
              className={`text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50 ${badgeClasses} transition-all duration-300`}
            >
              {tech}
            </Badge>
          );
          })}
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

// NOTE: defaultProjects moved to src/data/projects.ts
// Edit projects there for a single source of truth

// ========================================
// 📝 INSTRUCTIONS TO UPDATE PROJECTS:
// ========================================
// Edit the projects in src/data/projects.ts
// All changes there will automatically reflect here
// ========================================

export default ProjectsSection;
