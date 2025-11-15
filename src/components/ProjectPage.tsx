import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Code,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  image?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  duration?: string;
  role?: string;
}

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Find the project by ID from the default projects
  const project = defaultProjects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const handleViewLive = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  const handleViewCode = () => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-white hover:text-orange-400 hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Portfolio
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {project.image && (
            <div className="w-full h-96 mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <Button
                    onClick={handleViewLive}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Live Project
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    onClick={handleViewCode}
                    variant="outline"
                    className="border-gray-600 text-white hover:bg-gray-800"
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </Button>
                )}
              </div>
            </div>

            <div className="lg:w-80">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {project.duration && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={16} />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <User size={16} />
                      <span className="text-sm">{project.role}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-300">
                    <Code size={16} />
                    <span className="text-sm">
                      {project.techStack.length} Technologies
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-gray-300">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Challenges & Learnings */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <p className="text-gray-300">{challenge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <p className="text-gray-300">{learning}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">&copy; Shourov 2025</p>
        </div>
      </footer>
    </div>
  );
};

const defaultProjects: Project[] = [
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description:
      "Java Swing application that visualizes Bubble Sort, Quick Sort, and Merge Sort algorithms in real-time.",
    longDescription:
      "An interactive Java Swing application designed to help students and developers understand sorting algorithms through visual representation. The application demonstrates the step-by-step process of Bubble Sort, Quick Sort, and Merge Sort algorithms with customizable speed controls and array sizes.",
    techStack: ["Java", "Swing", "Algorithms"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    duration: "2 months",
    role: "Solo Developer",
    features: [
      "Real-time visualization of sorting algorithms",
      "Adjustable animation speed and array size",
      "Step-by-step algorithm breakdown",
      "Performance comparison between algorithms",
    ],
    challenges: [
      "Implementing smooth animations while maintaining algorithm accuracy",
      "Optimizing performance for large datasets",
      "Creating an intuitive user interface for complex algorithms",
    ],
    learnings: [
      "Deep understanding of sorting algorithm complexities",
      "Advanced Java Swing GUI development",
      "Performance optimization techniques",
    ],
  },
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection (ML)",
    description:
      "Machine learning model for early diagnosis of breast cancer using medical imaging data.",
    longDescription:
      "A comprehensive machine learning solution for early breast cancer detection using advanced image processing and deep learning techniques. The model analyzes medical imaging data to provide accurate predictions and assist healthcare professionals in diagnosis.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "Medical Imaging"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    duration: "4 months",
    role: "ML Engineer",
    features: [
      "High accuracy cancer detection model",
      "Medical image preprocessing pipeline",
      "Comprehensive model evaluation metrics",
      "User-friendly prediction interface",
    ],
    challenges: [
      "Handling sensitive medical data with privacy concerns",
      "Achieving high accuracy while minimizing false negatives",
      "Working with limited and imbalanced datasets",
    ],
    learnings: [
      "Medical image processing techniques",
      "Deep learning model optimization",
      "Healthcare data handling and ethics",
    ],
  },
  {
    id: "xor-classification",
    title: "XOR Classification (MLP from Scratch)",
    description:
      "Custom neural network built with NumPy to solve the XOR classification problem without using ML libraries.",
    longDescription:
      "A from-scratch implementation of a Multi-Layer Perceptron (MLP) neural network using only NumPy to solve the classic XOR classification problem. This project demonstrates a deep understanding of neural network fundamentals and backpropagation algorithms.",
    techStack: ["Python", "NumPy", "Neural Networks"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    duration: "1 month",
    role: "Research Developer",
    features: [
      "Custom neural network implementation",
      "Backpropagation algorithm from scratch",
      "Visualization of learning process",
      "Comprehensive mathematical documentation",
    ],
    challenges: [
      "Implementing backpropagation without external libraries",
      "Debugging mathematical errors in gradient calculations",
      "Optimizing convergence for the XOR problem",
    ],
    learnings: [
      "Deep understanding of neural network mathematics",
      "Gradient descent optimization techniques",
      "Low-level implementation of ML algorithms",
    ],
  },
  {
    id: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    description:
      "ML model analyzing voice biomarkers to predict early signs of Parkinson's disease.",
    longDescription:
      "An innovative machine learning approach to early Parkinson's disease detection through voice biomarker analysis. The model processes speech patterns and vocal characteristics to identify potential indicators of the disease, providing a non-invasive screening method.",
    techStack: ["Python", "Scikit-learn", "Signal Processing"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1581093196277-9f6e9b96cc00?w=800&q=80",
    duration: "3 months",
    role: "Data Scientist",
    features: [
      "Voice biomarker extraction and analysis",
      "Multiple ML algorithm comparison",
      "Real-time voice analysis capability",
      "Clinical validation metrics",
    ],
    challenges: [
      "Processing complex audio signal data",
      "Ensuring model reliability for medical applications",
      "Handling noise and variability in voice recordings",
    ],
    learnings: [
      "Advanced signal processing techniques",
      "Medical AI application development",
      "Feature engineering for audio data",
    ],
  },
  {
    id: "client-websites",
    title: "Wix & Squarespace Client Projects",
    description:
      "Professional websites developed for businesses using Wix and Squarespace platforms.",
    longDescription:
      "A collection of professional websites developed for various clients using Wix and Squarespace platforms. These projects showcase modern web design principles, user experience optimization, and business-focused solutions tailored to each client's unique needs.",
    techStack: ["Wix", "Squarespace", "Web Design", "UI/UX"],
    link: "#",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    duration: "Ongoing",
    role: "Freelance Web Developer",
    features: [
      "Custom responsive web designs",
      "SEO optimization and performance tuning",
      "E-commerce integration and setup",
      "Client training and ongoing support",
    ],
    challenges: [
      "Meeting diverse client requirements and expectations",
      "Working within platform limitations while maintaining creativity",
      "Balancing design aesthetics with functionality",
    ],
    learnings: [
      "Client communication and project management",
      "Platform-specific optimization techniques",
      "Business-focused web development approach",
    ],
  },
  {
    id: "android-applications",
    title: "Android Applications",
    description:
      "Real-world Android applications developed as part of university projects and personal learning.",
    longDescription:
      "A series of Android applications developed during university coursework and personal projects, demonstrating mobile development skills and understanding of Android ecosystem. These apps cover various domains from productivity tools to educational applications.",
    techStack: ["Java", "Android SDK", "Firebase"],
    link: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&q=80",
    duration: "6 months",
    role: "Android Developer",
    features: [
      "Native Android development with Java",
      "Firebase backend integration",
      "Material Design implementation",
      "Local database management with SQLite",
    ],
    challenges: [
      "Managing different screen sizes and device compatibility",
      "Implementing efficient data synchronization",
      "Optimizing app performance and battery usage",
    ],
    learnings: [
      "Mobile app development lifecycle",
      "Android architecture patterns",
      "Mobile UI/UX design principles",
    ],
  },
];

export default ProjectPage;