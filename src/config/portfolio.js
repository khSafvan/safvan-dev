// Portfolio Configuration: Safvan Khalifa (safvan-dev)
// Option A: Architectural Blueprint & Crafted Editorial

export const portfolioConfig = {
  // Personal Information & Direct Contact
  personal: {
    name: "Safvan Khalifa",
    shortName: "Safvan",
    title: "Full Stack Developer & Systems Programmer",
    email: "khalifasafvan@yahoo.com",
    altEmail: "zafinity3110@gmail.com",
    phone: "(+91) 8153837262",
    location: "Gujarat, India (Relocating to Boston Suburbs, MA — Early 2027)",
    currentLocation: "Aat, Navsari, Gujarat, India (UTC +5:30)",
    targetLocation: "Boston Suburbs, Massachusetts, USA (Early 2027)",
    github: "https://github.com/khSafvan",
    linkedin: "https://www.linkedin.com/in/khalifasafvan",
    resumeUrl: "/safvan-khalifa-resume.pdf",
    portfolioUrl: "https://khalifasafvan.netlify.app/",
    terminalPrompt: "zack@ghost:~$"
  },

  // Hero Section
  hero: {
    greeting: "Hey there, I'm",
    name: "Safvan Khalifa",
    title: "Full Stack Developer (MERN Stack)",
    headline: "Production web applications in the MERN stack, built for US and enterprise clients with verified performance metrics.",
    description: "Full-stack developer with 3+ years of commercial experience engineering high-throughput React frontends, Node/Express APIs, and optimized databases for enterprise clients.",
    experience: "3+",
    ctaText: "Explore Selected Work",
    ctaSecondary: "Get in Touch",
    image: "/dev8bitArt.png",
    relocationNotice: "Relocating to Boston Area — Early 2027",
    metrics: [
      { label: "Commercial Experience", value: "3+ Years" },
      { label: "Production Concurrency", value: "500+ Req/s" },
      { label: "Database Query Tuning", value: "-45% Latency" },
      { label: "Primary Core", value: "MERN Stack" }
    ]
  },

  // About Section Narrative & Personal Blueprint Specs
  about: {
    sectionTag: "[ 03 / BIOGRAPHY & ARCHITECTURAL SPECS ]",
    title: "Engineering Identity",
    subtitle: "Background, commercial MERN tenure, and enterprise client focus.",
    paragraphs: [
      "I am a full-stack developer with three years of commercial experience building production web applications, REST APIs, and database-driven software. At La Net Team Software Solution—an enterprise software services firm serving US-based clients—I collaborated with overseas teams to deliver scalable logistics and business platforms, optimizing high-concurrency systems up to 500+ requests/sec and reducing database latency by 45%. My primary expertise centers on the MERN stack: React, Node.js, Express, MongoDB, and MySQL. In parallel, I explore Linux environments, developer tooling, and systems programming. I am relocating to the Boston area in early 2027 and am actively seeking full-stack engineering roles."
    ],
    blueprint: {
      degree: "B.Tech in Computer Engineering (7.84 CGPA) — GDEC, Abrama",
      experienceYears: "3+ Years Verified Commercial Experience",
      nativeDomain: "React, Next.js, Node.js, Express, MongoDB, MySQL",
      systemsDomain: "Linux DevOps, Shell Tooling, Exploratory Rust & Kotlin",
      relocation: "Boston Suburbs, Massachusetts, USA (Early 2027)",
      disciplines: "Weightlifting, Culinary Precision, Linux Rice"
    }
  },

  // Comparative Skills Matrix
  skills: {
    sectionTag: "02. Technical Skills",
    title: "Technical Competencies & Applied Toolchain",
    coreMern: {
      categoryName: "Core Web Engineering (Full Stack MERN)",
      badgeType: "mern",
      badgeText: "PRIMARY COMMERCIAL STACK",
      description: "Production web technologies I build, profile, and optimize for commercial and enterprise client systems.",
      groups: [
        {
          name: "Languages & Typed Systems",
          items: ["JavaScript (ES6+)", "Modern TypeScript", "HTML5 Semantic Architecture", "CSS3 / Modern SASS"]
        },
        {
          name: "Frontend Development",
          items: ["React.js (18/19)", "Next.js (App Router)", "Vite", "Responsive UI/UX", "Component Architecture", "Tailwind CSS", "State Management"]
        },
        {
          name: "Backend & API Engineering",
          items: ["Node.js (v20+ LTS)", "Express.js", "RESTful API Architecture", "JWT & Session Auth", "WebSockets", "Middleware Design"]
        },
        {
          name: "Databases & Performance Tuning",
          items: ["MySQL", "PostgreSQL", "MongoDB (Mongoose & Aggregations)", "Schema Architecture", "Query Optimization", "Raw MySQL Stored Procedures"]
        },
        {
          name: "Engineering Practices & Delivery",
          items: ["Bug Rectification & Profiling", "Defensive Error Trapping", "Git Branching & Peer Reviews", "Agile Sprint Delivery", "US Client Collaboration"]
        }
      ]
    },
    toolingSystems: {
      categoryName: "Systems, Tooling & Infrastructure",
      badgeType: "systems",
      badgeText: "DEV TOOLING & EXPLORATORY",
      description: "Linux developer environments and exploratory systems studies informing low-level memory and runtime fundamentals.",
      groups: [
        {
          name: "Linux Infrastructure & DevOps",
          items: ["Arch Linux / CachyOS", "Advanced Bash (set -euo pipefail)", "Git / GitHub Workflows", "Systemd User Units", "Shell Scripting & Fish"]
        },
        {
          name: "Exploratory Systems Programming",
          items: ["Rust (2024 Edition)", "Low-Level Memory Safety Concepts", "UEFI Bare-Metal Exploration", "QEMU Headless Emulation"]
        },
        {
          name: "Mobile & Media Client Tooling",
          items: ["Kotlin Android Jetpack Compose", "CastLabs Electron (Media/DRM)", "C++ / Qt Basics", "SQLite WAL Architecture"]
        }
      ]
    }
  },

  // Works Section (All 8 Featured Projects with Verified Metrics)
  works: [
    {
      id: 1,
      category: "★ Native MERN Core",
      type: "mern",
      title: "Transportation Management Platform",
      role: "Software Developer (La Net Team, 2023 – 2024) — Team of 4 Developers",
      period: "2023 - 2024",
      description: "Enterprise logistics platform for load scheduling, dynamic carrier quoting, and route dispatch. Re-architected query bottlenecks into indexed MySQL stored procedures, cutting p95 query latency by 45% under 500+ concurrent req/s.",
      metric: "500+ Req/s Concurrency | -45% DB Query Latency",
      stack: ["React.js", "Node.js", "Express.js", "MySQL", "Raw Stored Procedures"],
      image: "",
      link: null,
      github: null,
      isProprietary: true,
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Commercial Production Logistics System",
        individualScope: "API Optimization, MySQL Query Profiling, Dispatch UI",
        runtimeTarget: "Node.js LTS / Linux Server",
        databaseEngine: "MySQL with Indexed Stored Procedures",
        deploymentStatus: "Commercial Production (La Net Team Software Solution)"
      },
      retrospective: {
        bottleneck: "During peak logistics operational hours, freight quote calculations, carrier rate comparisons, and dispatch scheduling caused database lock contention and latency spikes. At 500+ concurrent requests/second, legacy query chains created noticeable UI freezing for dispatchers.",
        constraints: "The existing relational MySQL schema could not be migrated to a new database without risking production downtime. Changes had to be backward-compatible with existing client booking portals while operating within existing server resource limits.",
        solution: "Migrated high-overhead ORM queries to raw, indexed MySQL stored procedures. Executed calculation logic directly at the database engine level, removing object-relational serialization overhead. Restructured compound indexes around high-cardinality foreign keys (carrier_id, route_segment_id, quote_timestamp), and built responsive dispatch views in React with optimistic UI updates.",
        outcome: "Achieved a 45% reduction in database response latency under high concurrency. Maintained stable sub-150ms query turnaround under continuous 500+ concurrent requests/second.",
        tradeoffs: "Opted for raw stored procedures over application-layer ORM caching. While stored procedures increased database coupling, they eliminated multi-step serialization round-trips for pricing algorithms. Discarded Redis caching because stale pricing invalidated quotes in volatile fuel rate windows.",
        processNote: "[TODO: need process notes for Project 01: specific query execution plans or indexing trade-offs tried and discarded]"
      },
      metricsComparison: [
        { label: "p95 Query Latency", baseline: "~380ms under peak load", optimized: "195ms (-45% reduction)" },
        { label: "Concurrency Ceiling", baseline: "Lock contention at ~180 req/s", optimized: "Stable at 500+ req/s" },
        { label: "Execution Strategy", baseline: "Full table scan & row contention", optimized: "Compound index seek" },
        { label: "Network Serialization", baseline: "Multi-step ORM serialization", optimized: "Single database-engine call" }
      ],
      pipeline: [
        "Client React Dispatch UI",
        "Node.js Express Gateway",
        "MySQL Stored Procedures (Indexed)",
        "Relational Freight DB"
      ]
    },
    {
      id: 2,
      category: "★ Native MERN Core",
      type: "mern",
      title: "Cloud-Hosted Multi-Modal AI Agents Platform",
      role: "Frontend & Full-Stack Engineer (2024) — Client Platform",
      period: "2024",
      description: "Interface for streaming and rendering multi-modal AI model outputs in real time, including interactive 3D WebGL scenes, audio buffers, and video feeds.",
      metric: "Synchronous Multi-Modal Streaming & 3D Rendering",
      stack: ["React.js", "Next.js", "Three.js", "React Three Fiber", "Node.js", "Express.js"],
      image: "",
      link: null,
      github: null,
      isProprietary: true,
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Client-Facing AI Interface",
        individualScope: "WebGL Scene Orchestration, WebSocket Client, Audio/Video Streams",
        runtimeTarget: "Browser WebGL / Node.js Backend",
        databaseEngine: "Bi-directional WebSockets & MediaStream APIs",
        deploymentStatus: "Client Production"
      },
      retrospective: {
        bottleneck: "Multi-modal AI models generate concurrent data streams (3D avatar meshes, synthesized audio buffers, and dynamic video feeds). Standard browser rendering threads stuttered when parsing incoming streaming payloads while updating WebGL meshes.",
        constraints: "Target users run diverse client hardware ranging from workstations to standard laptops. Memory leaks from unbounded WebSocket message buffers or continuously re-instantiated WebGL geometries risked crashing client browser tabs.",
        solution: "Built an interactive frontend using React Three Fiber and Three.js. Decoupled streaming WebSocket message ingestion from the main rendering loop via custom buffer queues, and updated WebGL mesh geometries in-place rather than allocating new geometries per frame.",
        outcome: "Delivered synchronous real-time multi-modal streaming without dropping 3D animation frames on modern browsers.",
        tradeoffs: "Prioritized low-polygon baseline avatar models with dynamic normal mapping over heavy meshes to ensure fluid streaming on lower-spec hardware.",
        processNote: "[TODO: need process notes for Project 02: details on discarded streaming protocols, state management approaches, or Three.js scene optimizations]"
      }
    },
    {
      id: 3,
      category: "★ Native MERN Core",
      type: "mern",
      title: "Multi-Tenant E-Commerce Platform",
      role: "Full Stack Developer (2024) — Solo Architecture & Build",
      period: "2024",
      description: "E-commerce platform with customer storefronts, isolated merchant inventories, and a real-time dispatch operations portal for delivery partners.",
      metric: "Multi-Tenant Isolation & Real-Time Dispatch Portal",
      stack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Multi-Tenant SaaS Platform",
        individualScope: "Full-Stack Architecture, Database Schema, Order Pipeline",
        runtimeTarget: "Node.js LTS / Next.js Vercel & Cloud VPS",
        databaseEngine: "Multi-Tenant Scoped MongoDB Collections",
        deploymentStatus: "Active Portfolio Architecture"
      },
      retrospective: {
        bottleneck: "Standard e-commerce templates fail when multiple independent merchants share single database resources without strict tenant isolation, causing inventory race conditions and delayed dispatch updates.",
        constraints: "Needed to support independent merchant storefront custom branding, isolated inventory catalogs, and a unified operational dispatch portal for delivery drivers without spinning up separate infrastructure per merchant.",
        solution: "Implemented tenant-scoped data isolation in MongoDB via composite keys and middleware query enforcement. Developed SSR customer storefronts in Next.js for SEO and fast initial paint, and built a centralized dispatch dashboard in React and Express.js providing real-time order lifecycle tracking.",
        outcome: "Zero cross-tenant data leakage across merchant catalogs. Real-time order status dispatch pipeline syncing merchant inventories instantly upon purchase confirmation.",
        tradeoffs: "Selected shared-database, tenant-indexed collections over database-per-tenant architecture to minimize infrastructure maintenance and server overhead.",
        processNote: "[TODO: need process notes for Project 03: tenant isolation strategy validation and what failed during initial dispatch routing]"
      }
    },
    {
      id: 4,
      category: "★ Native MERN Core",
      type: "mern",
      title: "InnerCircle Peer-to-Peer Marketplace",
      role: "Full Stack Developer (2023) — Solo Architecture & Build",
      period: "2023",
      description: "Private peer-to-peer marketplace for buying, selling, and renting within verified groups, featuring multi-attribute faceted search and secure checkout flows.",
      metric: "Sub-100ms Faceted Filtering & Zero-Trust Verification",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Authenticated Community Marketplace",
        individualScope: "Authentication Flow, Database Indexing, UI Design",
        runtimeTarget: "Node.js LTS / MongoDB Atlas",
        databaseEngine: "MongoDB Compound-Indexed Aggregations",
        deploymentStatus: "Active Open-Source System"
      },
      retrospective: {
        bottleneck: "Public peer-to-peer marketplaces suffer from fraudulent accounts, spam listings, and sluggish search across unstructured product categories, degrading trust in student and local community exchanges.",
        constraints: "Zero budget for dedicated search clusters (e.g. Elasticsearch). Search and multi-attribute faceted filtering had to execute directly on MongoDB without causing CPU bottlenecks on low-tier database tiers.",
        solution: "Designed closed-loop group verification gates ensuring only authenticated organization members could list or purchase. Engineered MongoDB compound indices and aggregation pipelines for multi-attribute faceted search (category, price band, condition, group scope). Built responsive React listings with client-side state caching.",
        outcome: "Achieved sub-100ms faceted search query execution directly within MongoDB. Closed-loop verification completely eliminated unverified external spam listings.",
        tradeoffs: "Handled search indexing via MongoDB compound indexes rather than external search engines, keeping system operations unified.",
        processNote: "[TODO: need process notes for Project 04: decisions on group verification mechanisms and search indexing trade-offs]"
      }
    },
    {
      id: 5,
      category: "★ Native MERN Core",
      type: "mern",
      title: "ICB Nur Foundation Web Platform",
      role: "Full Stack Developer (2024) — Solo Architecture & Build",
      period: "2024",
      description: "Non-profit educational platform featuring course discovery, faculty directories, and accessible, WCAG-compliant donation workflows.",
      metric: "100% WCAG 2.1 AA Compliance & Zero TypeScript Errors",
      stack: ["TypeScript", "React 19", "Vite", "Tailwind CSS", "MUI", "Express.js"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Accessible Public Portal & Course Directory",
        individualScope: "Accessible UI Architecture, TypeScript Schemas, API Endpoints",
        runtimeTarget: "Vite SPA / Express.js Backend",
        databaseEngine: "Strict TypeScript & Express.js REST",
        deploymentStatus: "Production Open-Source Foundation"
      },
      retrospective: {
        bottleneck: "The foundation's existing web presence suffered from inaccessible donation flows, fragmented course listings, and poor usability for older patrons using screen readers and high-contrast display modes.",
        constraints: "The platform required strict compliance with WCAG 2.1 AA accessibility guidelines, strict type contracts between the backend API and client components, and minimal bundle size for low-bandwidth mobile connections.",
        solution: "Rebuilt the frontend using React 19 and Vite with strict TypeScript type-checking. Enforced semantic HTML5 landmarks, ARIA live regions for dynamic donation calculations, and complete keyboard focus traps for modals. Integrated Tailwind CSS and Material-UI components customized to pass 4.5:1 contrast ratios.",
        outcome: "Achieved 100% WCAG 2.1 AA accessibility compliance across core donation and course discovery flows. Zero TypeScript compilation errors under strict compiler configurations (strict: true).",
        tradeoffs: "Replaced complex nested multi-step modals with single-page accessible accordion flows to prevent screen-reader focus disorientation.",
        processNote: "[TODO: need process notes for Project 05: accessible component choices, MUI vs Tailwind trade-offs, or discarded payment flow approaches]"
      }
    },
    {
      id: 6,
      category: "⚙ Exploratory Systems",
      type: "ai",
      title: "Crispyroll — Linux HTPC Anime Client",
      role: "Lead Developer (2025) — Architecture, DRM & Input Logic",
      period: "2025",
      description: "10-foot desktop streaming client for Linux handhelds and living room PCs, featuring Widevine DRM, hardware-accelerated DASH playback, and full gamepad navigation.",
      metric: "10-Foot Gamepad Navigation | Widevine DRM Playback",
      stack: ["CastLabs Electron", "Dash.js 4.x", "Node.js", "Widevine CDM", "Bulma CSS"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan/crispyroll",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Linux Desktop Living Room Media Client",
        individualScope: "Electron DRM Integration, DASH Streaming Pipeline, Gamepad Input",
        runtimeTarget: "Arch Linux / SteamOS / Linux HTPC",
        databaseEngine: "Widevine Content Decryption Module (CDM) via CastLabs",
        deploymentStatus: "Active Open-Source Software"
      },
      retrospective: {
        bottleneck: "Linux HTPCs and handheld gaming consoles (e.g. Steam Deck, mini-PCs) lack native desktop streaming clients that support hardware-accelerated DRM-protected DASH playback alongside full living-room gamepad navigation.",
        constraints: "Standard Chromium/Electron binaries distributed on Linux do not package the proprietary Widevine Content Decryption Module (CDM), causing encrypted stream decoding failures. Furthermore, web gamepad APIs have high input jitter when polling in unoptimized animation loops.",
        solution: "Integrated CastLabs Electron runtime to enable verified Widevine CDM decryption pipelines on Linux. Implemented Dash.js 4.x for dynamic adaptive bitrate video stream switching. Built a custom spatial navigation engine mapping gamepad analog sticks and D-pad triggers to keyboard focus states with zero cursor reliance.",
        outcome: "Seamless Widevine DRM playback of commercial streams on Linux desktop distributions. 100% controller-driven living room interface requiring zero mouse or keyboard interaction.",
        tradeoffs: "Utilized CastLabs Electron fork rather than fighting custom Chromium compile chains, ensuring reproducible builds on Arch and Debian bases.",
        processNote: "[TODO: need process notes for Project 06: issues encountered with native Wayland vs X11 rendering and gamepad polling cycle optimizations]"
      }
    },
    {
      id: 7,
      category: "⚙ Exploratory Systems",
      type: "ai",
      title: "Fukurō (フクロウ) — Android Comic Reader",
      role: "Maintainer & Android Developer (2025) — Compose Refactor & GPU",
      period: "2025",
      description: "Modernized Android reader for Android 12+, refactored in Jetpack Compose for steady 60 FPS scrolling with on-device neural upscaling via Vulkan.",
      metric: "55–60 FPS Compose Rendering | On-Device Vulkan ML",
      stack: ["Kotlin 100%", "Jetpack Compose", "KMP", "AndroidX Baseline", "Tencent NCNN"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan/Fukuro",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "Native Android Reading & Image Processing Engine",
        individualScope: "Jetpack Compose UI Refactor, NCNN Neural Pipeline, Baseline Profiles",
        runtimeTarget: "Android 12+ (API 31+) / ARM64 Devices",
        databaseEngine: "Jetpack Compose Canvas / Vulkan GPU Compute",
        deploymentStatus: "Active Open-Source Android Application"
      },
      retrospective: {
        bottleneck: "Legacy Android comic readers built on traditional XML Views and RecyclerViews suffered severe frame drops (dropping below 30 FPS) when rapidly flinging through high-DPI virtualized comic strips. Scanned low-resolution vintage panels appeared blurry on modern Quad-HD phone screens.",
        constraints: "Mobile device RAM limits and thermal throttling prevent running heavy neural super-resolution models on CPU. The ML pipeline had to execute directly on the GPU via Vulkan while keeping Compose rendering pinned at 60 FPS.",
        solution: "Completely refactored the presentation layer into 100% idiomatic Kotlin and Jetpack Compose. Integrated AndroidX Baseline Profiles to pre-compile critical rendering paths, eliminating JIT compilation stutter during initial page launches. Integrated Tencent NCNN neural inference engine using Vulkan compute shaders for real-time, offline, on-device image upscaling.",
        outcome: "Achieved steady 55–60 FPS smooth scrolling across complex virtualized reading lists. Zero cloud dependency for high-fidelity neural image upscaling.",
        tradeoffs: "Migrated entirely to declarative Jetpack Compose, trading legacy Android backward compatibility (pre-Android 12) for massive performance and state management simplicity.",
        processNote: "[TODO: need process notes for Project 07: specific NCNN model quantization experiments and Vulkan pipeline trade-offs]"
      }
    },
    {
      id: 8,
      category: "⚙ Exploratory Systems",
      type: "ai",
      title: "Talaria Bootloader — Rust UEFI Boot Manager",
      role: "Creator & Systems Engineer (2025) — Solo Systems Engineering",
      period: "2025",
      description: "Bare-metal UEFI boot manager written in #![no_std] Rust with zero OS dependencies, featuring a 32-bit ARGB graphical framebuffer and automated QEMU testing.",
      metric: "Bare-Metal #[no_std] | Zero OS Dependencies",
      stack: ["Rust 2024", "#![no_std]", "uefi-rs", "font8x8", "QEMU / OVMF"],
      image: "",
      link: null,
      github: "https://github.com/khSafvan/talaria-bootloader",
      color: "#1F6B4F",
      textColor: "#141414",
      buttonColor: "#1F6B4F",
      specLedger: {
        classification: "UEFI x86_64 Boot Manager",
        individualScope: "Low-Level Firmware Interaction, Framebuffer Drawing, QEMU Automation",
        runtimeTarget: "Bare-Metal UEFI Firmware (x86_64)",
        databaseEngine: "#![no_std] Bare-Metal Memory Allocation",
        deploymentStatus: "Open-Source Systems Repository"
      },
      retrospective: {
        bottleneck: "Modern operating system boot managers are frequently monolithic, containing hundreds of thousands of lines of legacy C code with inherent memory safety risks before the OS kernel even initializes.",
        constraints: "Execution occurs directly on bare metal within the UEFI environment. There is no operating system, no libc, no threads, and no standard library (#[no_std]). Memory must be queried and mapped directly from UEFI system tables.",
        solution: "Wrote the boot manager in modern Rust 2024 utilizing uefi-rs safe abstraction layers over raw firmware pointers. Initialized the UEFI Graphics Output Protocol (GOP) to acquire the hardware linear framebuffer. Implemented a custom 32-bit ARGB rasterization engine using font8x8 bitmapped typography to render an interactive boot menu without external display drivers. Engineered an automated testing workflow using QEMU and OVMF firmware images for headless CI verification.",
        outcome: "Zero memory-safety vulnerabilities in the pre-boot environment via Rust's borrow checker. Standalone, bootable UEFI x86_64 binary operating with zero external operating system dependencies.",
        tradeoffs: "Confined text rendering to a compact font8x8 bitmap rasterizer rather than porting TrueType fonts, keeping bootloader binary size under 500KB.",
        processNote: "[TODO: need process notes for Project 08: memory map parsing challenges, stack alignment issues, or OVMF virtual hardware edge cases]"
      }
    }
  ],

  // Professional Experience (Verified Resume Data)
  experience: [
    {
      id: 1,
      company: "MarketingSolver.in, Navsari",
      period: "Aug '24 – Aug '25 (1 Year)",
      role: "Web Developer (Full Stack MERN)",
      badge: "Commercial Production",
      location: "Navsari, Gujarat, India",
      description: "Engineered full-stack web applications and client administration portals in the MERN stack. Implemented role-based authentication, appointment scheduling flows, and secure payment integrations. Built database schemas in MongoDB and MySQL with custom query tuning for client reporting.",
      color: "#1F6B4F"
    },
    {
      id: 2,
      company: "La Net Team Software Solution, Surat",
      period: "Jul '22 – Jul '24 (2 Years)",
      role: "Software Developer (Enterprise Full Stack)",
      badge: "Full-Time Engineering (US Client Services)",
      location: "Surat, Gujarat, India",
      description: "Delivered enterprise web applications for US-based clients at an established software services consultancy. Collaborated with overseas product teams and client stakeholders across time zones. Optimized transportation logistics platform handling 500+ concurrent requests/second, reducing MySQL database query latency by 45% through indexed stored procedures. Built dynamic load routing, quoting, and carrier dispatch interfaces in React.",
      color: "#1F6B4F"
    },
    {
      id: 3,
      company: "La Net Team Software Solution, Surat",
      period: "Jan '22 – Jul '22 (6 Months)",
      role: "Software Developer Trainee",
      badge: "Engineering Traineeship",
      location: "Surat, Gujarat, India",
      description: "Completed intensive commercial software engineering training across the full JavaScript/MERN stack. Shipped client bug fixes and feature additions across live staging environments for US client engagements. Earned immediate promotion to full-time Software Developer upon completion.",
      color: "#1F6B4F"
    }
  ],

  // Education & Verified Credentials
  education: [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
      institution: "GDEC, Abrama (GIDC Degree Engineering College)",
      period: "Jul '18 – Jul '22",
      score: "CGPA: 7.84 / 10.0",
      details: "Core focus on Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks."
    },
    {
      id: 2,
      degree: "The Complete 2026 Full-Stack Web Development Bootcamp",
      institution: "Dr. Angela Yu (Udemy)",
      period: "Certified May 2026",
      score: "62 Hours Total",
      details: "Coursework in full-stack web development, PostgreSQL, REST APIs, and application security."
    }
  ],

  // Verified Peer & Manager Recommendations
  testimonials: [
    {
      id: 1,
      name: "Damini Choat",
      role: "HR Professional & CRM Specialist",
      relationship: "Direct Manager at La Net Team (US Client Accounts)",
      quote: "Safvan is a dedicated, detail-oriented professional with a strong understanding of software development principles and a problem-solving mindset. He handled responsibilities with maturity, collaborated well with cross-functional teams, and was receptive to feedback. Beyond technical abilities, he is reliable, disciplined, and had a meaningful impact on our projects. I am happy to recommend him.",
      image: "/damini.png",
      linkedin: "https://www.linkedin.com/in/damini-choat-5a8843154/",
      color: "#1F6B4F"
    },
    {
      id: 2,
      name: "Abhishek Jariwala",
      role: "Full Stack Engineer | Scalable APIs",
      relationship: "Engineering Colleague at La Net Team (US Client Projects)",
      quote: "A cooperative team member who was receptive to feedback and collaborative problem-solving. Contributed to team goals and maintained a professional approach while working through challenges together. Overall, a good experience working in the same team.",
      image: "/abhishek.png",
      linkedin: "https://www.linkedin.com/in/abhishekjariwalaa/",
      color: "#1F6B4F"
    },
    {
      id: 3,
      name: "Shrey Jariwala",
      role: "Software Developer",
      relationship: "Software Developer at La Net Team (US Client Projects)",
      quote: "I had a great experience working with him and highly recommend him. He is reliable, professional, and a strong team player who consistently delivers quality work.",
      image: "/shrey.png",
      linkedin: "https://www.linkedin.com/in/shrey-jariwala-650667220/",
      color: "#1F6B4F"
    }
  ],

  // Engineering Methodology (3 Pillars)
  methodology: [
    {
      id: "done",
      number: "01",
      title: "The Definition of \"Done\"",
      tagline: "Verification & Automated Testing",
      description: "A feature is only complete when automated tests pass, edge cases are trapped defensively, performance targets are verified on actual hardware, and documentation is updated."
    },
    {
      id: "craft",
      number: "02",
      title: "Handcrafted Web Ownership",
      tagline: "Direct MERN & Database Tuning",
      description: "Writing web code directly by hand ensures full command over component lifecycles, memory profiles, and query execution plans when production bottlenecks emerge."
    },
    {
      id: "systems-literacy",
      number: "03",
      title: "Continuous Tooling & Systems Literacy",
      tagline: "Pragmatic Tooling & Fundamentals",
      description: "I invest in understanding the full execution stack—from Linux runtime environments to database indexing internals—leveraging modern developer tooling to accelerate delivery while maintaining complete ownership of production MERN code."
    }
  ],

  // Terminal Drawer Interactive Responses (Ctrl+K / zack@ghost:~$)
  terminal: {
    welcomeMessage: "Antigravity Terminal v2.4 (Host: ghost | Arch Linux / CachyOS)\nType 'help' to list available commands, or 'exit' to close drawer.",
    commands: {
      help: "Available commands:\n  help      - Display this list of commands\n  whoami    - Display developer identity & current status\n  bio       - Read short engineering biography\n  skills    - View comparative skills ledger\n  projects  - List featured projects and verified metrics\n  resume    - Download verified PDF resume\n  boston    - Check Boston relocation countdown & details\n  contact   - Display verified contact channels\n  clear     - Clear terminal buffer\n  exit      - Close this drawer",
      whoami: "Safvan Khalifa (alias: zack)\nRole: Full Stack Developer (MERN Stack)\nExperience: 3+ Years Commercial (US Client Services & Enterprise Web)\nStatus: Open to full-time and contract roles (Relocating to Boston Suburbs, Early 2027)",
      bio: "25-year-old software engineer (B.Tech Computer Engineering). Full-stack web developer specializing in the MERN stack with proven experience optimizing enterprise platforms for US clients, plus self-directed exploratory studies in Linux tooling and systems programming.",
      skills: "[CORE WEB (PRIMARY)]: React 18/19, Next.js, Node.js, Express, MongoDB, MySQL Stored Procs, TypeScript\n[SYSTEMS & TOOLING]: Linux DevOps (Arch/CachyOS, Bash), Rust, Kotlin Compose, Electron, Git",
      projects: "1. Transportation Management Platform (US Client Logistics, 500+ Req/s, -45% DB Latency)\n2. Cloud-Hosted Multi-Modal AI Agents Platform (Next.js, Three.js)\n3. Multi-Tenant E-Commerce Platform (Isolated Storefronts & Dispatch Portal)\n4. InnerCircle Peer-to-Peer Marketplace (Sub-100ms Faceted Filtering)\n5. ICB Nur Foundation Web Platform (WCAG 2.1 AA Compliance)\n6. Crispyroll (Linux HTPC Media Client)\n7. Fukurō (Android Reader, Kotlin Compose)\n8. Talaria Bootloader (Bare-Metal Rust UEFI Boot Manager)",
      resume: "Opening /safvan-khalifa-resume.pdf...",
      boston: "Target Destination: Boston Suburbs, Massachusetts, USA\nTarget Timeline: Early 2027\nOpen to: Full-time US roles / hybrid Boston engineering teams / high-impact remote contracts.",
      contact: "Direct Email: khalifasafvan@yahoo.com\nPhone: (+91) 8153837262\nLinkedIn: https://www.linkedin.com/in/khalifasafvan\nGitHub: https://github.com/khSafvan"
    }
  }
};
