export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  image?: string;
  category: "uiux" | "cms" | "web" | "aiml";
}

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

export const projects: Project[] = [
  // UI/UX & Design Projects
  {
    id: "portfolio-ui-design",
    title: "Portfolio UI Design",
    description:
      "Designed a modern dark-themed developer portfolio solving the problem of generic templates. Features responsive layouts and intuitive navigation for optimal user experience.",
    techStack: ["Figma", "UI/UX", "Prototyping"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "E-commerce website for hair care products and treatments",
    title: "E-commerce website for hair care products and treatments",
    description:
      "Created accessible mobile UI layouts addressing navigation complexity in mobile apps. Implements Material Design principles for consistent cross-platform experience.",
    techStack: ["Flutter", "Material UI", "Dart"],
    link: "https://i.imgur.com/lZhA4R0.jpeg", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://i.imgur.com/44UWAMY.png", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "Multi-Vendor E-Commerce",
    title: "Multi-Vendor E-Commerce",
    description: "MeaW | Multi-Vendor E-Commerce.",
    techStack: ["Canva", "Graphic Design", "Branding"],
    link: "https://i.imgur.com/TR5Zhpn.jpeg", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE (optional for design projects)
    image: "https://i.imgur.com/X1z5NhW.png", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "Travel-Agency",
    title: "Travel-Agency",
    description:
      "one stop provider for all your travel needs and requirements. .",
    techStack: ["Canva", "Graphic Design", "Branding"],
    link: "https://i.imgur.com/Nh8ZLQD.jpeg", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE (optional for design projects)
    image: "https://i.imgur.com/9CdrPCc.png", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },

  // CMS & No-Code Platform Projects
  {
    id: "texhair-wix",
    title: "TexHair",
    description:
      "Professional e-commerce website for hair care products and treatments. Features product catalog, service booking, and modern shopping experience.",
    techStack: ["Wix", "E-Commerce", "SEO", "Responsive Design"],
    link: "https://sourob123theking.wixstudio.com/my-site-1",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.imgur.com/be99Ye6.png",
    category: "cms",
  },
  {
    id: "jetlink-travels-wix",
    title: "JetLink Travels",
    description:
      "Travel arrangement company website with tour packages, booking system, and destination showcases for seamless travel planning experience.",
    techStack: ["Wix", "Travel", "Booking System", "UI Design"],
    link: "https://asrshourov999.wixstudio.com/my-site-1",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.postimg.cc/sXcSGCVC/Screenshot-2026-01-21-184521.png",
    category: "cms",
  },
  {
    id: "bike-rent-bd-wix",
    title: "Bike Rent BD",
    description:
      "Bike rental platform for Bangladesh featuring bike catalog, rental booking, pricing plans, and easy reservation system for customers.",
    techStack: ["Wix", "Rental System", "Booking", "Local Business"],
    link: "https://sourob123theking.wixsite.com/bike-rent-bd",
    githubLink: "#", // N/A for Wix projects
    image: "https://i.imgur.com/jrFqHzX.png",
    category: "cms",
  },
  {
    id: "portfolio-squarespace",
    title: "Portfolio & Client Sites – Squarespace",
    description:
      "Delivered custom portfolio websites for freelance clients worldwide, focusing on strong brand identity and conversion-optimized layouts.",
    techStack: ["Squarespace", "UX Design", "Branding"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // N/A for Squarespace projects
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "cms",
  },
  {
    id: "landing-pages-webflow",
    title: "Landing Pages – Webflow",
    description:
      "Created high-conversion landing pages with advanced animations, helping businesses improve lead generation and user engagement.",
    techStack: ["Webflow", "CMS", "Animations"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // N/A for Webflow projects
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "cms",
  },

  // Web Application Projects
  {
    id: "E-learning-platform",
    title: "E-learning-platform",
    description:
      "Built an educational tool to help students understand sorting algorithms visually. Demonstrates Bubble, Quick, and Merge Sort with step-by-step animations.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://e-learning-platform7.netlify.app/", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "https://github.com/Shourov6/E-Learning-Platform", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://i.imgur.com/LenEXLy.png", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },
  {
    id: "MeaW | Multi-Vendor E-Commerce",
    title: "MeaW | Multi-Vendor E-Commerce",
    description:
      "Developed a scalable multi-vendor e-commerce platform enabling seamless product management, secure transactions, and user-centric shopping experiences across multiple sellers.",
    techStack: ["React", "Vite", "TypeScript", "Zustand", "Tailwind CSS"],
    link: "https://multi-vendor-e-commerce.netlify.app/", // ✅ Live Streamlit link
    githubLink: "https://github.com/Shourov6/Multi-Vendor-E-Commerce", // 🔗 ADD YOUR GITHUB LINK HERE
    image: "https://i.imgur.com/8qXXoZ1.png", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },
  {
    id: "learnsphere-ai",
    title: "LearnSphere AI (E-Learning Platform)",
    description:
      "Created an AI-powered learning platform addressing personalized education needs. Features chatbot instructor, adaptive quizzes, and progress tracking.",
    techStack: ["Flask", "OpenAI API", "SQL", "Python"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "web",
  },

  // AI / Machine Learning Projects
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection System",
    description:
      "Developed an early detection system for breast cancer using CNN-based image classification. Aims to assist medical professionals in faster, more accurate diagnosis.",
    techStack: ["Python", "TensorFlow", "CNN", "Medical Imaging"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if deployed)
    githubLink: "https://github.com/Shourov6/ihc-cancer-app", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "currency-recognition",
    title: "Bangladeshi Currency Recognition",
    description:
      "Developed a deep learning-based system to recognize Bangladeshi currency denominations from images. The project focuses on real-world usability and was later integrated into an Android application to assist visually impaired users.",
    techStack: ["PyTorch", "CNN", "Deep Learning", "Computer Vision"],
    link: "#",
    githubLink: "https://github.com/Shourov6/currency-recognition",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    category: "aiml",
  },

  {
    id: "ihc-cancer-app",
    title: "IHC Cancer Image Classification",
    description:
      "Built a deep learning application to classify Immunohistochemistry (IHC) stained cancer images. Multiple CNN architectures were used along with explainability techniques to improve trust in medical predictions.",
    techStack: [
      "PyTorch",
      "CNN",
      "ResNet50",
      "EfficientNet",
      "SHAP",
      "Grad-CAM",
      "Medical Imaging",
    ],
    link: "#",
    githubLink: "https://github.com/Shourov6/ihc-cancer-app",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    category: "aiml",
  },

  {
    id: "student-dropout-app",
    title: "Student Dropout Prediction System",
    description:
      "Implemented a machine learning model to predict student dropout risk based on academic and behavioral data. The system helps educational institutions identify at-risk students early.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
    ],
    link: "#",
    githubLink: "https://github.com/Shourov6/student-dropout-app",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    category: "aiml",
  },

  {
    id: "study-assistant-mvp",
    title: "AI Study Assistant (MVP)",
    description:
      "Created an AI-powered study assistant capable of answering academic questions and assisting learners using natural language processing techniques.",
    techStack: [
      "Python",
      "NLP",
      "Machine Learning",
      "Transformers",
      "AI Assistant",
    ],
    link: "#",
    githubLink: "https://github.com/Shourov6/study-assistant-mvp",
    image:
      "https://images.unsplash.com/photo-1584697964403-f5f4d6c2f1c5?w=800&q=80",
    category: "aiml",
  },

  {
    id: "ml-lab",
    title: "Machine Learning Lab Projects",
    description:
      "A collection of machine learning lab experiments covering core ML concepts such as classification, regression, clustering, and model evaluation using real datasets.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    link: "#",
    githubLink: "https://github.com/Shourov6/ML-lab",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    category: "aiml",
  },
];
