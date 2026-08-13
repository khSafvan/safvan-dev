# Layout & Wireframe Specification: Safvan Khalifa (`safvan-dev`)

This document details the visual layout, structural wireframes, component hierarchy, responsive behavior, and navigation routing for Safvan Khalifa's developer portfolio.

---

## 1. High-Level Wireframe Architecture

### 1.1 Desktop Viewport (> 1024px) Wireframe Diagram

```text
+-------------------------------------------------------------------------------------------------------+
|  [Logo: Safvan Khalifa]       [About] [Skills] [Projects] [Experience] [Methodology] [Contact] [Resume] |  (Fixed Header)
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [HERO SECTION]                                                                                       |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|  | Greeting: "Hey there, I'm"                       |  |                                           |  |
|  | Title: Safvan Khalifa                            |  |   [Interactive 8-Bit Developer Avatar]    |  |
|  | Subtitle: Full Stack MERN & Systems Craftsman    |  |   (/dev8bitArt.png)                       |  |
|  | Tagline: Handcrafted Web + AI-Augmented Systems   |  |   + Status: Relocating to Boston (2026)   |  |
|  | Metrics: 3+ Yrs Exp | 500+ Req | -45% DB Latency |  |   + Terminal Prompt: zack@ghost ~ $       |  |
|  | [Explore Works (CTA)]   [Get in Touch (Outline)] |  |                                           |  |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [ABOUT SECTION (01. About Me)]                                                                        |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|  | Narrative Bio: 3+ Years commercial experience    |  | [Quick Stats & Personal Blueprint Card]   |  |
|  | Native MERN mastery: Handcrafted & unassisted     |  | - Location: Navsari -> Boston, MA (2026)  |  |
|  | AI-Augmented systems: Rust, Kotlin, Qt, Linux    |  | - Degree: B.Tech Computer Engineering     |  |
|  | Personal discipline: Bodybuilding & culinary art |  |   (GDEC, Abrama | CGPA: 7.84)             |  |
|  |                                                  |  | - Hobbies: Compound lifts, Scratch pasta  |  |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [SKILLS MATRIX SECTION (02. Technical Skills)]                                                       |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|  | [PANEL 1: Native Handcrafted MERN Core]          |  | [PANEL 2: AI-Augmented Systems & Tools]   |  |
|  | (100% Hand-written, Zero AI Generation)          |  | (Architected via Autonomous AI Tooling)   |  |
|  | - React 18/19, Next.js, TypeScript, Vite         |  | - Rust 2024 (#![no_std] bare-metal UEFI)  |  |
|  | - Node.js, Express.js, RESTful APIs, WebSockets  |  | - Kotlin, Jetpack Compose, KMP, Requery   |  |
|  | - MongoDB, SQL (MySQL, PostgreSQL)               |  | - C++, Qt 6, QML, KDE Frameworks 6, SDL3  |  |
|  | - Schema Design, Query Performance Tuning        |  | - Advanced Bash (WCAG math), Matugen, Eww |  |
|  | - Error Handling: Bug Identification & Debugging |  | - LM Studio, Ollama, OpenClaw, /stingycoder|
|  | - SASS, BEM, GSAP 3, Lenis, Material-UI, Tailwind|  |                                           |  |
|  | - Git code reviews, Agile sprints, pnpm/npm      |  |                                           |  |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [FEATURED PROJECTS SECTION (03. Featured Projects)]                                                  |
|  Filter Bar: [All Projects]  [★ Native MERN Web Core]  [⚙ AI-Augmented Systems]                      |
|                                                                                                       |
|  +-----------------------------------+  +-----------------------------------+                         |
|  | [PROJECT CARD 1: MERN Core]       |  | [PROJECT CARD 2: MERN Core]       |                         |
|  | Cloud-Hosted Multi-Modal AI Platf |  | Transportation Management Platform|                         |
|  | Stack: React, Next, Three.js, Node|  | Stack: React, Node, Express, MySQL|                         |
|  | Metric: 3D/Audio/Video rendering  |  | Metric: 500+ Concurrent, -45% Lat |                         |
|  | [Case Study / Details]            |  | [View Architecture]               |                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  | [PROJECT CARD 3: MERN Core]       |  | [PROJECT CARD 4: MERN Core]       |                         |
|  | Large-Scale Custom E-Commerce     |  | InnerCircle Peer-to-Peer Market   |                         |
|  | Stack: React, Next, Express, Mongo|  | Stack: React, Node, Express, Mongo|                         |
|  | Scope: Storefront + Delivery Hub  |  | Scope: Social P2P Commerce        |                         |
|  | [View Details]                    |  | [View Details]                    |                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  | [PROJECT CARD 5: AI-Augmented]    |  | [PROJECT CARD 6: AI-Augmented]    |                         |
|  | Crispyroll (Linux HTPC Client)    |  | Fukurō (Android Comic Reader)     |                         |
|  | Stack: Electron, Dash.js, Bulma   |  | Stack: Kotlin Compose, KMP, Cronet|                         |
|  | Metric: 20+ unit tests, -180MB rm |  | Metric: 60 FPS verified rendering |                         |
|  | [GitHub Repo]   [Test Suite]      |  | [APK Releases]   [Docs]           |                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|  | [PROJECT CARD 7: AI-Augmented]    |  | [PROJECT CARD 8: AI-Augmented]    |                         |
|  | Talaria Bootloader (Rust UEFI)    |  | MyCosmicRice (Matugen Theming)    |                         |
|  | Stack: Rust 2024, #![no_std], GOP |  | Stack: Bash, Eww, Systemd, Matugen|                         |
|  | Metric: Zero OS dependencies      |  | Metric: Dynamic WCAG 2.1 contrast |                         |
|  +-----------------------------------+  +-----------------------------------+                         |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [EXPERIENCE TIMELINE (04. Experience)]                                                               |
|  (Vertical connected node timeline with date chips and impact bullets)                               |
|  o-- MarketingSolver.in, Navsari (Aug '24 - Aug '25) [Web Developer]                                  |
|  |   * Custom SPAs, responsive interfaces, auth, booking, online payments, end-to-end delivery.       |
|  |                                                                                                    |
|  o-- La Net Team, Surat (Jul '22 - Jul '24) [Software Developer]                                     |
|  |   * Agile sprints, international clients, Git peer reviews, -45% MySQL query latency reduction.    |
|  |                                                                                                    |
|  o-- La Net Team, Surat (Jan '22 - Jul '22) [Software Developer Trainee]                             |
|  |   * Traineeship, deployed production MERN stack features, top-tier performance evaluation.        |
|  |                                                                                                    |
|  o-- GDEC, Abrama (Jul '18 - Jul '22) [Computer Engineering, CGPA: 7.84]                              |
|      * Core CS, Algorithms, DBMS, Operating Systems, Networks.                                        |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [ENGINEERING METHODOLOGY (06. Engineering Ethos)]                                                    |
|  +---------------------------+  +---------------------------+  +-----------------------------------+  |
|  | 1. Definition of "Done"   |  | 2. Handcrafted Web Craft  |  | 3. AI Force Multiplier            |  |
|  | Passing automated tests,  |  | Deep foundational control |  | Autonomous agent engineering,     |  |
|  | hardware verification,    |  | over DOM, queries, and    |  | local LLM orchestration, token-   |  |
|  | clean zero-leak docs.     |  | architecture unassisted.  |  | efficient custom skills.          |  |
|  +---------------------------+  +---------------------------+  +-----------------------------------+  |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [RECOMMENDATIONS & TESTIMONIALS (05. Recommendations)]                                               |
|  +------------------------------+  +------------------------------+  +------------------------------+ |
|  | Damini Choat                 |  | Abhishek Jariwala            |  | Shrey Jariwala               | |
|  | Direct Manager (La Net Team) |  | Coworker (Full Stack API Eng)|  | Coworker (Software Dev)      | |
|  | "Dedicated, detail-oriented  |  | "Cooperative, receptive to   |  | "Reliable, professional, a   | |
|  | with a problem-solving..."   |  | feedback, problem-solver..." |  | strong team player..."       | |
|  | [LinkedIn Profile]           |  | [LinkedIn Profile]           |  | [LinkedIn Profile]           | |
|  +------------------------------+  +------------------------------+  +------------------------------+ |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|                                                                                                       |
|  [CONTACT & RELOCATION HUB (07. Get In Touch)]                                                        |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|  | Direct Pitch: Open for roles & Boston relocation |  | [Interactive Contact Inquiry Form]        |  |
|  | Email: khalifasafvan@yahoo.com                   |  | Name: [_______________________________]   |  |
|  | Phone: (+91) 8153837262                          |  | Email: [______________________________]   |  |
|  | Current: Aat, Navsari (India)                    |  | Subject: [____________________________]   |  |
|  | Destination: Boston Suburbs, MA (Late 2026)      |  | Message: [____________________________]   |  |
|  | Socials: GitHub (@khSafvan) | LinkedIn (/khalifasafvan) | Netlify |  | [Send Message (Button)]                   |  |
|  +--------------------------------------------------+  +-------------------------------------------+  |
|                                                                                                       |
+-------------------------------------------------------------------------------------------------------+
|  [FOOTER] (C) 2026 Safvan Khalifa | Built with React 19, Vite & GSAP | Host: ghost (CachyOS)          |
+-------------------------------------------------------------------------------------------------------+
```

---

## 2. Component Breakdown & Hierarchy

```text
src/
├── App.jsx                       # Master page container with Lenis smooth scroll provider
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.jsx        # Sticky navigation bar, logo, desktop links, mobile burger
│   │   │   ├── NavMenu.jsx       # Anchor navigation item links with active highlight
│   │   │   └── Header.scss
│   │   ├── Footer/
│   │   │   ├── Footer.jsx        # Copyright, tech credits, and terminal easter egg
│   │   │   └── Footer.scss
│   │   └── Cursor/
│   │       ├── CustomCursor.jsx  # GSAP-powered mouse follower with hover physics
│   │       └── CustomCursor.scss
│   └── ui/
│       ├── Button/               # Reusable button (primary, secondary, outline, icon)
│       ├── Badge/                # Semantic tech badges (MERN, AI-Augmented, Systems)
│       ├── SectionTitle/         # Numbered editorial section titles ("01. About Me")
│       └── Card/                 # Base glassmorphism/bordered card container
└── sections/
    ├── HeroSection/
    │   ├── HeroSection.jsx       # Hero typography, avatar card, CTA buttons
    │   └── HeroSection.scss
    ├── AboutSection/
    │   ├── AboutSection.jsx      # Narrative bio, relocation spotlight card, personal ethos
    │   └── AboutSection.scss
    ├── SkillsMatrixSection/
    │   ├── SkillsMatrixSection.jsx # Side-by-side comparative matrix (Native MERN vs AI-Augmented)
    │   ├── SkillGroup.jsx        # Categorized lists with proficiency tags
    │   └── SkillsMatrixSection.scss
    ├── WorksSection/
    │   ├── WorksSection.jsx      # Filterable work showcase (All, MERN Core, AI-Augmented)
    │   ├── ProjectCard.jsx       # Individual project card with tags, metrics, links
    │   ├── FilterTabs.jsx        # Interactive category switch buttons
    │   └── WorksSection.scss
    ├── ExperienceSection/
    │   ├── ExperienceSection.jsx # Vertical timeline container
    │   ├── TimelineItem.jsx      # Individual employment entry with bullet points
    │   └── ExperienceSection.scss
    ├── MethodologySection/
    │   ├── MethodologySection.jsx# 3-pillar engineering ethos grid
    │   └── MethodologySection.scss
    ├── TestimonialsSection/
    │   ├── TestimonialsSection.jsx# Verified recommendations grid / carousel
    │   ├── TestimonialCard.jsx   # Avatar, name, title, quote, LinkedIn link
    │   └── TestimonialsSection.scss
    └── ContactSection/
        ├── ContactSection.jsx    # Contact details, relocation badge, inquiry form
        ├── ContactForm.jsx       # Controlled inputs with validation and submission state
        └── ContactSection.scss
```

---

## 3. Responsive Behavior & Viewport Breakpoints

| Breakpoint | Target Devices | Layout Adjustments |
| :--- | :--- | :--- |
| **Desktop (> 1024px)** | Laptops, external displays (1080p, 1440p, 4K) | Full dual-column layouts; GSAP magnetic cursor active; side-by-side skills matrix; 2-column or 3-column project grids; pinned scroll effects. |
| **Tablet (768px – 1023px)** | iPads, tablets, small laptops | Two-column cards stack to single-column where text density is high; custom cursor disabled in favor of native touch; navigation bar collapses into a slide-out hamburger drawer. |
| **Mobile (< 768px)** | Smartphones (iPhone, Pixel, Galaxy) | All sections stack strictly vertically; Hero text scales down from `font-size-5xl` to `font-size-3xl`; 8-bit avatar centers below hero copy; Skills Matrix stacks Panel 1 on top of Panel 2; project cards display full-width with vertical touch scroll. |
| **Compact Mobile (< 480px)** | Smaller mobile displays (SE, mini) | Padding reduced from `var(--spacing-3xl)` to `var(--spacing-xl)`; badges wrap horizontally; buttons become full-width touch targets. |

---

## 4. Navigation Flow & Anchor Linking

1. **Global Sticky Header**:
   * Stays fixed at the top of the viewport with a blurred translucent backdrop (`backdrop-filter: blur(12px)`).
   * Automatically tracks scroll position using an `IntersectionObserver` or GSAP ScrollTrigger to highlight the current active section.
2. **Smooth Scrolling**:
   * Driven by **Lenis 1.2+**, providing smooth inertial scrolling for all anchor clicks (`#about`, `#skills`, `#works`, `#experience`, `#methodology`, `#testimonials`, `#contact`).
3. **In-Page Jump Anchors**:
   * Hero `Explore My Work` button smoothly jumps to `#works`.
   * Hero `Get in Touch` button smoothly jumps to `#contact`.
   * Project filter tabs dynamically filter cards without reloading the page or altering browser scroll position.
4. **External Links**:
   * Open in new tabs (`target="_blank" rel="noopener noreferrer"`) for GitHub (`khSafvan`), LinkedIn profiles, and verified credentials.
