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
      company: "MarketingSolver.in, Navsari",
      period: "Aug '24 - Aug '25",
      role: "Web Developer",
      description: "Built websites with custom features, updated functionality, built responsive SPAs, added authentication, booking systems, and payment systems natively. (React.js, Next.js, Node.js, Express.js, MongoDB).",
      color: "#2f6a62" // Green
    },
    {
      id: 2,
      company: "La Net Team, Surat",
      period: "Jul '22 - Jul '24",
      role: "Software Developer",
      description: "Developed features, integrated APIs, managed agile workflows via version control, and ensured cross-browser optimization and code documentation. (React.js, Next.js, Node.js, Express.js, MySQL).",
      color: "#e76f51" // Reddish Orange
    },
    {
      id: 3,
      company: "La Net Team, Surat",
      period: "Jan '22 - Jul '22",
      role: "SW Developer Trainee",
      description: "Developed frontend and backend basics via Node, Express, MongoDB, and DOM manipulation. Deployed real-world React.js solutions. (HTML, CSS, React.js, Node, MongoDB, Git).",
      color: "#f4a261" // Yellow/Orange
    }
  ],

  // Works Section
  works: [
    {
      id: 1,
      category: "AI Frontend",
      title: "Cloud-Hosted Multi-Modal AI Agents Platform",
      description: "Contributed to the frontend development of a cloud-hosted AI agents platform. Built scalable components with Next.js and Three.js to render diverse AI outputs including 3D models, audio, and video.",
      image: "", 
      color: "#f8c70c", // Yellow
      textColor: "#000000",
      buttonColor: "#000000" // Black button on yellow
    },
    {
      id: 2,
      category: "B2B SaaS",
      title: "Transportation Management Platform",
      description: "Developed a mission-critical platform for scheduling, quoting, and dispatch. Reduced backend latency by ~45% using raw MySQL procedures and accelerated quoting workflows from multi-hour delays to ~90 seconds.",
      image: "",
      color: "#2f6a62", // Green
      textColor: "#ffffff",
      buttonColor: "#f1c40f" // Pop of yellow on green
    },
    {
      id: 3,
      category: "Full Stack App",
      title: "InnerCircle Peer-to-Peer Marketplace",
      description: "Dynamic web application empowering users to buy, sell, or rent products directly within their social circles. Built with a React.js responsive UI and a Node.js/Express backend with REST APIs.",
      image: "",
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
      role: "Full Stack Engineer",
      relationship: "Coworker",
      quote: "A cooperative team member who was receptive to feedback and collaborative problem-solving. Contributed to team goals and maintained a professional approach while working through challenges together.",
      image: "", // Fallback forced
      color: "#2f6a62"
    },
    {
      id: 2,
      name: "Damini Choat",
      role: "HR Professional",
      relationship: "Supervisor",
      quote: "Safvan is a dedicated and detail-oriented professional with a strong understanding of software development principles... He consistently demonstrated a problem-solving mindset and handled responsibilities with maturity.",
      image: "", // Fallback forced
      color: "#f8c70c"
    },
    {
      id: 3,
      name: "Shrey Jariwala",
      role: "Software Developer",
      relationship: "Coworker",
      quote: "I had a great experience working with him and highly recommend him. He is reliable, professional, and a strong team player who consistently delivers quality work.",
      image: "", // Fallback forced
      color: "#e76f51"
    }
  ],
};
