import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  image?: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = defaultProjects,
}: ProjectsSectionProps) => {
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
            my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  const handleViewProject = () => {
    navigate(`/project/${project.id}`);
  };

  const handleViewCode = () => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank");
    }
  };

  return (
    <Card className="h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 glass-effect group hover:border-neon-blue/50 relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {project.image && (
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:border-neon-blue/50 hover:bg-neon-blue/10 hover:text-neon-blue transition-all duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 relative z-10">
        {project.link && (
          <Button
            onClick={handleViewProject}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/20 hover:border-neon-blue hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
          >
            <ExternalLink size={16} />
            View Project
          </Button>
        )}
        {project.githubLink && (
          <Button
            onClick={handleViewCode}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 border-neon-purple/50 text-neon-purple hover:bg-neon-purple/20 hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300"
          >
            <Github size={16} />
            Code
          </Button>
        )}
      </CardFooter>

      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const defaultProjects: Project[] = [
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description:
      "Java Swing application that visualizes Bubble Sort, Quick Sort, and Merge Sort algorithms in real-time.",
    techStack: ["Java", "Swing", "Algorithms"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection (ML)",
    description:
      "Machine learning model for early diagnosis of breast cancer using medical imaging data.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Medical Imaging"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  },
  {
    id: "xor-classification",
    title: "XOR Classification (MLP from Scratch)",
    description:
      "Custom neural network built with NumPy to solve the XOR classification problem without using ML libraries.",
    techStack: ["Python", "NumPy", "Neural Networks"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  },
  {
    id: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    description:
      "ML model analyzing voice biomarkers to predict early signs of Parkinson's disease.",
    techStack: ["Python", "Scikit-learn", "Signal Processing"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1581093196277-9f6e9b96cc00?w=800&q=80",
  },
  {
    id: "client-websites",
    title: "Wix & Squarespace Client Projects",
    description:
      "Professional websites developed for businesses using Wix and Squarespace platforms.",
    techStack: ["Wix", "Squarespace", "Web Design", "UI/UX"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    id: "android-applications",
    title: "Android Applications",
    description:
      "Real-world Android applications developed as part of university projects and personal learning.",
    techStack: ["Java", "Android SDK", "Firebase"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
  },
];

export default ProjectsSection;
