// Portfolio Configuration
// Modify these values to easily customize your portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Safvan",
    title: "Software Developer",
    email: "khalifasafvan@yahoo.com",
    location: "India (Relocating to Boston Suburbs)",
    phone: "(+91) 8153837262",
  },

  // Hero Section
  hero: {
    greeting: "Hey There, I'm",
    name: "Safvan Khalifa",
    title: "Software Developer",
    description: "I build robust full-stack web applications and scalable systems.",
    experience: "3",
    ctaText: "Hire Me",
    image: "/dev8bitArt.png", // Start with existing, user needs to replace
  },

  // Experience Section
  experience: [
    {
      id: 1,
      company: "MarketingSolver.in Freelance",
      period: "Aug '24 - Aug '25",
      role: "Full Stack Developer",
      description: "Served as the sole full-stack developer at a local startup. Built custom single-page applications (SPAs) and reliable backend systems using React, Node.js, Express, and MongoDB. Integrated complex functionality like authentication, structured booking workflows, and automated online payments.",
      color: "#2f6a62" // Green
    },
    {
      id: 2,
      company: "La Net Team Software Solution",
      period: "Jul '22 - Jul '24",
      role: "Full Stack Developer",
      description: "Delivered scalable, high-performance web applications for international clients directly within an Agile sprint cycle. Handled optimizations for API data handling, enforced strict code via Git peer reviews, and focused heavily on performance scaling and responsive cross-browser compatibility.",
      color: "#e76f51" // Reddish Orange
    },
    {
      id: 3,
      company: "La Net Team Software Solution",
      period: "Jan '22 - Jul '22",
      role: "Full Stack Developer (Internship)",
      description: "Completed an intensive transition program to full-stack engineering. Built, reviewed, and successfully deployed real-world scalable solutions leveraging the robust technologies of React.js, Node.js, Express.js, and MongoDB, earning a top-tier evaluation grade.",
      color: "#f4a261" // Yellow/Orange
    }
  ],

  // Works Section
  works: [
    {
      id: 1,
      category: "AI Platform",
      title: "Cloud-Hosted Multi-Modal AI Agents Platform",
      description: "Developed dynamic, interactive user interfaces for an advanced AI platform entirely with Next.js and Three.js. Engineered adaptive, high-performance components that dynamically supported and rendered an array of multi-modal AI outputs including interactive 3D models, audio, and video.",
      image: "",
      link: "",
      color: "#f8c70c", // Yellow
      textColor: "#000000",
      buttonColor: "#000000" // Black button on yellow
    },
    {
      id: 2,
      category: "B2B SaaS",
      title: "Transportation Management Platform",
      description: "Developed a mission-critical platform for scheduling, quoting, and dispatch. Radically reduced backend latency by ~45% by shifting from a Sequelize ORM to highly optimized raw MySQL stored procedures. Accelerated quoting workflows from multi-hour delays down to ~90 seconds.",
      image: "",
      link: "",
      color: "#2f6a62", // Green
      textColor: "#ffffff",
      buttonColor: "#f1c40f" // Pop of yellow on green
    },
    {
      id: 3,
      category: "Full Stack App",
      title: "InnerCircle Peer-to-Peer Marketplace",
      description: "A dynamic web application empowering users to securely buy, sell, or rent products directly within their trusted social circles. Architected with a highly responsive React.js UI boasting advanced filtering, and supported by a robust Node.js/Express backend handling REST APIs.",
      image: "",
      link: "",
      color: "#e76f51", // Reddish Orange
      textColor: "#ffffff",
      buttonColor: "#000000"
    }
  ],

  // Testimonials Section
  testimonials: [
    {
      id: 1,
      name: "Abhishek Jariwala",
      role: "Full Stack Engineer | Scalable APIs",
      relationship: "Coworker",
      quote: "A cooperative team member who was receptive to feedback and collaborative problem-solving. Contributed to team goals and maintained a professional approach while working through challenges together. Overall, a good experience working in the same team.",
      image: "/abhishek.png",
      linkedin: "https://www.linkedin.com/in/abhishekjariwalaa/",
      color: "#2f6a62"
    },
    {
      id: 2,
      name: "Damini Choat",
      role: "HR Professional | CRM Specialist",
      relationship: "Direct Manager",
      quote: "As the HR representative of the company, I had the opportunity to closely observe Safvan Khalifa during his tenure with us as a Software Developer. Safvan is a dedicated and detail-oriented professional with a strong understanding of software development principles and a genuine passion for building effective solutions. He consistently demonstrated a problem-solving mindset, handled responsibilities with maturity, and collaborated well with cross-functional teams. Safvan was always open to learning, receptive to feedback, and proactive in improving both his technical and professional skills. Beyond his technical abilities, Safvan is reliable, disciplined, and maintains a positive attitude in the workplace. He was a valued member of the team, and his contributions had a meaningful impact on our projects. I am happy to recommend Safvan and wish him continued success in his future endeavors.",
      image: "/damini.png",
      linkedin: "https://www.linkedin.com/in/damini-choat-5a8843154/",
      color: "#f8c70c"
    },
    {
      id: 3,
      name: "Shrey Jariwala",
      role: "Software Developer",
      relationship: "Coworker",
      quote: "I had a great experience working with him and highly recommend him. He is reliable, professional, and a strong team player who consistently delivers quality work.",
      image: "/shrey.png",
      linkedin: "https://www.linkedin.com/in/shrey-jariwala-650667220/",
      color: "#e76f51"
    }
  ],
};
