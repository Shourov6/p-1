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
    id: "mobile-app-ui",
    title: "Mobile App UI Concepts",
    description:
      "Created accessible mobile UI layouts addressing navigation complexity in mobile apps. Implements Material Design principles for consistent cross-platform experience.",
    techStack: ["Flutter", "Material UI", "Dart"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "uiux",
  },
  {
    id: "social-media-designs",
    title: "Social Media & Presentation Designs",
    description:
      "Produced professional visual content for university clubs and events, improving brand consistency and engagement across digital platforms.",
    techStack: ["Canva", "Graphic Design", "Branding"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE (optional for design projects)
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
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
    id: "student-dropout-prediction",
    title: "Student Dropout Prediction System",
    description:
      "Developed a data-driven solution to identify at-risk students early. Uses ML models to analyze academic patterns and predict dropout probability with high accuracy.",
    techStack: ["Python", "ML", "Streamlit", "Data Mining"],
    link: "https://student-dropout-web.streamlit.app/", // ✅ Live Streamlit link
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
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
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "parkinsons-prediction",
    title: "Parkinson's Disease Prediction",
    description:
      "Built a predictive model analyzing voice biomarkers for early Parkinson's detection. Contributes to non-invasive diagnostic research in neurology.",
    techStack: ["Python", "Scikit-learn", "Signal Processing"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if deployed)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "currency-recognition",
    title: "Bangladeshi Currency Recognition",
    description:
      "Created a deep learning solution for visually impaired users to identify currency denominations. Integrated into Android app using Jetpack Compose.",
    techStack: ["PyTorch", "CNN", "Jetpack Compose", "Android"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if APK available)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
  {
    id: "xor-classification",
    title: "XOR Classification (MLP from Scratch)",
    description:
      "Implemented a neural network from scratch to solve XOR classification, demonstrating deep understanding of backpropagation and gradient descent fundamentals.",
    techStack: ["Python", "NumPy", "Neural Networks"],
    link: "#", // 🔗 ADD YOUR LIVE LINK HERE (if notebook deployed)
    githubLink: "#", // 🔗 ADD YOUR GITHUB LINK HERE
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // 🖼️ ADD YOUR PROJECT IMAGE HERE
    category: "aiml",
  },
];
