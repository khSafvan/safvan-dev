# Implementation Checklist & Action Plan: Safvan Khalifa (`safvan-dev`)
## Selected Direction: Option A ("The Architectural Blueprint & Crafted Editorial")

This document serves as the granular, running checklist for implementing the portfolio website. In accordance with pair-programming principles, tasks are executed **one by one** with specific focus and verified before proceeding.

---

## Phase 1: Foundation Data, Design Tokens & Global Visual Shell

- [x] **Task 1.1: Update Portfolio Data Object (`src/config/portfolio.js`)**
  - [x] Update personal bio, verified contact info, verified LinkedIn (`https://www.linkedin.com/in/khalifasafvan`), and Boston relocation target.
  - [x] Structure technical skills into two comparative categories:
    - [x] `nativeMernCore`: Frontend Development (React.js, Next.js, Responsive UI/UX), Backend Development (Node.js, Express.js, REST APIs), Databases (MySQL, PostgreSQL, MongoDB), Database Management (Schema Design, Optimization, Query Performance Tuning), Error Handling & Debugging.
    - [x] `aiAugmentedSystems`: Rust 2024 (#![no_std] UEFI), Kotlin Android Compose, C++/Qt 6/QML, Arch/CachyOS Bash, Local LLM Tooling.
  - [x] Expand `works` array with all 8 featured projects with metrics, GitHub links, and live links:
    - [x] 1. Cloud-Hosted Multi-Modal AI Agents Platform
    - [x] 2. Transportation Management Platform (500+ Concurrent Requests, -45% DB Latency)
    - [x] 3. Large-Scale Custom E-Commerce Platform
    - [x] 4. InnerCircle Peer-to-Peer Marketplace
    - [x] 5. ICB Nur Foundation Web Platform
    - [x] 6. Crispyroll (High-Performance Anime Client)
    - [x] 7. Fukurō (AI Multi-Model Gateway)
    - [x] 8. Talaria Bootloader (UEFI x86_64)
  - [x] Align employment roles and education with verified resume:
    - [x] Web Developer | MarketingSolver.in, Navsari (Aug '24 – Aug '25)
    - [x] Software Developer | La Net Team, Surat (Jul '22 – Jul '24)
    - [x] Software Developer Trainee | La Net Team, Surat (Jan '22 – Jul '22)
    - [x] B.Tech Computer Engineering | GDEC, Abrama (CGPA: 7.84, Jul '18 – Jul '22)
  - [x] Add 3 verified recommendations (Damini Choat, Abhishek Jariwala, Shrey Jariwala).
  - [x] Add 3 pillars of Engineering Methodology from `content.md`.
  - [x] Add terminal drawer command responses data for interactive CLI drawer.

- [x] **Task 1.2: Update Design Tokens & Theme Variables (`src/styles/theme.css`)**
  - [x] Define Option A color palette tokens: Terracotta (`#B57449`), Sage (`#68CBA0`), Cream (`#FFF9F0`), Espresso (`#2D2824`), Warm Dark Card (`#1E1A17`), and Hairline Border (`rgba(92, 58, 33, 0.12)`).
  - [x] Import and declare font family stacks: Display Serif (Playfair Display / Instrument Serif), Body Sans (Inter / Plus Jakarta Sans), and Code Mono (JetBrains Mono).
  - [x] Configure architectural layout tokens: hairline border widths, crosshair `+` accent sizing, and 8pt spacing scale.

- [x] **Task 1.3: Implement Tactile Paper Grain Overlay**
  - [x] Implement fixed full-viewport SVG `feTurbulence` noise overlay with `mix-blend-mode: overlay` (`opacity: 0.035`, `pointer-events: none`).
  - [x] Ensure hardware acceleration (`transform: translateZ(0)`) and zero interference with page interaction.

- [x] **Task 1.4: Asset Verification & Setup in `/public`**
  - [x] Copy verified resume `docs/ResumeSMPL.pdf` to `/public/safvan-khalifa-resume.pdf`.
  - [x] Verify `/dev8bitArt.png` exists and displays crisply.
  - [x] Verify testimonial avatars exist: `/damini.png`, `/abhishek.png`, `/shrey.png`.

---

## Phase 2: Navigation, Hero & Interactive Terminal Drawer

- [x] **Task 2.1: Header Navigation Component (`src/components/layout/Header/`)**
  - [x] Style header with architectural hairline bottom border and `backdrop-filter: blur(12px)`.
  - [x] Implement active section highlight spy using `IntersectionObserver`.
  - [x] Add direct "Download CV" button triggering `/safvan-khalifa-resume.pdf`.
  - [x] Implement responsive mobile navigation drawer for screens `< 768px`.

- [x] **Task 2.2: Hero Section Implementation (`src/sections/HeroSection/`)**
  - [x] Render headline pairing: Editorial serif display greeting + technical craftsman title.
  - [x] Render Boston Relocation chip ("Relocating to Boston, MA — Late 2026").
  - [x] Add primary CTAs ("Explore Works", "Contact Me").
  - [x] Style 8-bit avatar container with floating micro-motion and clickable `zack@ghost:~$` badge.

- [x] **Task 2.3: Interactive Terminal Drawer Component (`src/components/common/TerminalDrawer/`)**
  - [x] Build slide-out CLI drawer listening to global `Ctrl+K` and avatar badge click.
  - [x] Support interactive commands: `help`, `cat bio`, `skills`, `projects`, `resume`, `clear`, `exit`.
  - [x] Include focus trap, keyboard navigation, and close on `Escape`.

---

## Phase 3: Narrative & Technical Depth Sections

- [x] **Task 3.1: About Section (`src/sections/AboutSection/`)**
  - [x] Render 4-paragraph craft narrative highlighting unassisted MERN foundation + AI force multiplication.
  - [x] Build right-column "Personal Blueprint & Specs" card with hairline crosshair accents (`+`).

- [x] **Task 3.2: Skills Matrix Section (`src/sections/SkillsMatrixSection/`)**
  - [x] Build two-panel comparative ledger:
    - [x] Panel 1: Native Handcrafted MERN Core (Sage Green badges + hover annotations like `-45% DB latency`).
    - [x] Panel 2: AI-Augmented Systems & Applied Tooling (Terracotta badges).
  - [x] Ensure mobile readability with clean wrap and inline annotation pills.

- [x] **Task 3.3: Engineering Methodology Section (`src/sections/MethodologySection/`)**
  - [x] Build 3-card architectural grid:
    - [x] 1. Definition of "Done" (Verification & Unit Testing).
    - [x] 2. Handcrafted Web Craftsmanship (Unassisted MERN & Database Optimization).
    - [x] 3. AI-Augmented Force Multiplier (Agentic Engineering & Local LLM Workflows).

---

## Phase 4: Featured Works, Timeline & Recommendations

- [x] **Task 4.1: Featured Works Filter & Framework (`src/sections/WorksSection/`)**
  - [x] Implement interactive filter tabs (`All`, `★ Native MERN Core`, `⚙ AI-Augmented Systems`).
  - [x] Build project card component with hairline borders, serif index stamps (`01`, `02`), and metric tags.

- [x] **Task 4.2: Horizontal Stepped Project Scrubbing Interaction**
  - [x] Wire GSAP ScrollTrigger for horizontal pinned scrubbing on desktop (`pin: true, scrub: 1`).
  - [x] Add graceful fallback to vertical layout for mobile (`< 768px`) and `prefers-reduced-motion`.

- [x] **Task 4.3: Professional Experience Timeline (`src/sections/ExperienceSection/`)**
  - [x] Build connected-node vertical timeline with hairline progress track.
  - [x] Display verified roles: MarketingSolver.in (Web Dev), La Net Team (Software Dev & Trainee).
  - [x] Include credentials badge for Dr. Angela Yu 62-Hr Bootcamp & B.Tech Computer Engineering.

- [x] **Task 4.4: Testimonials Section (`src/sections/TestimonialsSection/`)**
  - [x] Build recommendations grid featuring Damini Choat, Abhishek Jariwala, and Shrey Jariwala.
  - [x] Add verified LinkedIn profile links for each recommender.

---

## Phase 5: Contact Hub, Footer & Motion Polish

- [x] **Task 5.1: Contact Hub (`src/sections/ContactSection/`)**
  - [x] Build dual-column contact layout with direct pitch, Boston relocation notice, and direct email/phone.
  - [x] Implement interactive contact form with validation state.
  - [x] Add one-click email copy-to-clipboard micro-interaction with toast feedback.

- [x] **Task 5.2: Global Footer (`src/components/layout/Footer/`)**
  - [x] Style footer with architectural hairline border and metadata stamp: `Host: ghost | System: Ryoku Dev (Arch/CachyOS) | Shell: fish`.
  - [x] Add smooth back-to-top scroll trigger.

- [x] **Task 5.3: Global Motion & Magnetic Cursor Polish**
  - [x] Audit Lenis smooth scroll across the entire single-page experience.
  - [x] Polish magnetic desktop cursor snapping on links and buttons with touch device bypass (`@media (pointer: coarse)`).

---

## Phase 6: Testing, Responsive Audits & Build Verification

- [x] **Task 6.1: Responsive Viewport Verification**
  - [x] Mobile audit (320px, 375px, 414px): Ensure zero horizontal overflow and min 44px touch targets.
  - [x] Tablet audit (768px, 1024px): Verify clean wrapping and mobile navigation toggling.
  - [x] Desktop audit (1440px, 1920px+): Verify max-width 1400px constraint and horizontal scrub smoothness.

- [x] **Task 6.2: Hygiene, Accessibility & Secrets Audit**
  - [x] Check `rel="noopener noreferrer"` on all external anchors.
  - [x] Confirm no private keys or unverified contact data exposed.
  - [x] Verified accessibility attributes, semantic landmark elements, and touch bounds.

- [x] **Task 6.3: Production Compilation & Preview**
  - [x] Run `npm run build` and verify 0 errors / 0 warnings.
  - [x] Check bundle chunking and performance benchmarks.
