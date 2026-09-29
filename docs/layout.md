# Layout & Wireframe Specification: Safvan Khalifa (`safvan-dev`)
### Ground-Up Wireframe Blueprint Governed by `ui-ux-ideology.md`

---

## 1. High-Level Desktop Viewport (> 1024px) Wireframe Diagram

```text
+----------------------------------------------------------------------------------------------------------------+
|  [zack@ghost:~$]   Safvan Khalifa    [01 Works] [02 Skills] [03 About] [04 Experience] [05 Ethos] [Resume PDF] | (Sticky Header)
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [00. HERO SECTION]                                                                                            |
|  +------------------------------------------------------------+  +------------------------------------------+  |
|  | [Status: Relocating to Boston Area — Early 2027]           |  |                                          |  |
|  | [↳ ENGINEERING PORTFOLIO // FULL STACK & SYSTEMS]          |  |   [Subtle Forest Green Geometric Swoop]  |  |
|  |                                                            |  |   (SVG Arc + Precision Crosshair Ticks)  |  |
|  |   SAFVAN KHALIFA                                           |  |                                          |  |
|  |   (Fraunces Serif 800 | clamp(3.75rem, 8.2vw, 7.25rem))    |  |   +--------------------------------------+  |
|  |                                                            |  |   | FIG 01. CORE DEVELOPER               |  |
|  |   Full-stack developer building production web             |  |   | [60 FPS Active Pixel Avatar]         |  |
|  |   applications in MERN, with systems in Rust & Linux.      |  |   | [zack@ghost:~$ _] [Ctrl+K Terminal]  |  |
|  |                                                            |  |   +--------------------------------------+  |
|  |   [Explore Selected Work →]   [Get in Touch]               |  |                                          |  |
|  +------------------------------------------------------------+  +------------------------------------------+  |
|  +----------------------------------------------------------------------------------------------------------+  |
|  |  3+ Years Experience  |  500+ Req/s Scale  |  -45% Database Latency  |  MERN Stack Core                |  |
|  +----------------------------------------------------------------------------------------------------------+  |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [01. SELECTED WORKS (PROMOTED TO SECTION 01 — PROOF-FIRST MANDATE)]                                           |
|  [ 01 / SELECTED WORKS: PRODUCTION CASE STUDIES ] [EDITORIAL CURATION]                                         |
|  Filter Bar: [All Projects (8)]  [Web & MERN (5)]  [Systems & Mobile (3)]                                      |
|                                                                                                                |
|  +-- LEAD FLAGSHIP FEATURE SPREAD (Flat Color Blocking) -----------------------------------------------------+  |
|  |  [MAIN CASE CONTENT - Solid #FAF9F6]              |  [SYSTEM AUDIT SPEC LEDGER - Solid #E8E5DC]          |  |
|  |  ★ FEATURED CASE STUDY // Enterprise Logistics    |  INDEX: 02 // CORE LOGISTICS                         |  |
|  |  Transportation Management Platform              |  CLASS: Native MERN + MySQL Stored Procedures        |  |
|  |  // Software Developer (La Net Team) • 2023-2024  |  OUTCOME: 500+ Req/s | -45% Latency                  |  |
|  |  +---------------------------------------------+  |  STACK: React, Node.js, Express, MySQL Stored Procs  |  |
|  |  | ⚡ ARCHITECTURAL IMPACT: 500+ Req/s | -45% DB|  |  DEPLOYMENT: Commercial Production                  |  |
|  |  +---------------------------------------------+  |  STATUS: Architectural Audit Passed                  |  |
|  |  Operational Bottleneck: Latency spike under      |  +--------------------------------------------------+  |
|  |  heavy concurrent carrier dispatch queries...     |                                                         |
|  |  Architectural Decision: Replaced ORM queries     |                                                         |
|  |  with raw indexed MySQL stored procedures.        |                                                         |
|  |  [React] [Node.js] [Express] [MySQL] [Procedures] |                                                         |
|  |  [Source Code ↗]   [Case Details →]               |                                                         |
|  +---------------------------------------------------+------------------------------------------------------+  |
|                                                                                                                |
|  +-- ASYMMETRIC SECONDARY MOSAIC GRID (12 Columns | No Drop Shadows) ----------------------------------------+  |
|  |  [CARD A: Span 7 | Solid #FAF9F6]                 |  [CARD B: Span 5 | Solid #E8E5DC]                    |  |
|  |  01. Multi-Modal AI & 3D Streaming                |  03. Multi-Tenant E-Commerce Platform               |  |
|  |  ⚡ Real-Time WebGL & Audio/Video Streams          |  ⚡ Multi-Tenant Isolated Inventories                |  |
|  |  Three.js, WebGL, React, Next.js, Node.js         |  React, Next.js, TypeScript, Express, MongoDB        |  |
|  |  [Source Code ↗]   [Case Details →]               |  [Source Code ↗]                                     |  |
|  +---------------------------------------------------+------------------------------------------------------+  |
|  |  [CARD C: Span 5 | Solid #E8E5DC]                 |  [CARD D: Span 7 | Solid #FAF9F6]                    |  |
|  |  06. Crispyroll — Linux HTPC Anime Client         |  07. Fukurō — Android Comic Reader                  |  |
|  |  ⚡ 10-Foot Spatial UI | Gamepad Navigation       |  ⚡ 55-60 FPS Compose | Vulkan Neural Upscaling      |  |
|  |  Electron, Widevine DRM, DASH.js, Bulma CSS       |  Kotlin 100%, Jetpack Compose, KMP, NCNN Vulkan      |  |
|  |  [GitHub Repo ↗]                                  |  [GitHub Repo ↗]                                     |  |
|  +---------------------------------------------------+------------------------------------------------------+  |
|  |  [CARD E: Span 6 | Solid #FAF9F6]                 |  [CARD F: Span 6 | Solid #E8E5DC]                    |  |
|  |  04. InnerCircle Peer-to-Peer Marketplace         |  08. Talaria Bootloader — Rust UEFI                  |  |
|  |  ⚡ Zero-Trust Peer Verification & Faceted Feeds   |  ⚡ Bare-Metal #![no_std] | Zero OS Dependencies     |  |
|  |  React, Node.js, Express, MongoDB                 |  Rust 2024, #![no_std], uefi-rs, QEMU / OVMF         |  |
|  +---------------------------------------------------+------------------------------------------------------+  |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [02. CORE CAPABILITIES (TECHNICAL MATRIX)]                                                                    |
|  [ 02 / COMPARATIVE MATRIX: TECHNICAL CAPABILITIES ] [DUAL-DOMAIN]                                            |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|  | [PANEL 1: Native Handcrafted MERN Core]           |  | [PANEL 2: Systems & Mobile Tooling]               |  |
|  | // Primary Commercial Domain (100% Unassisted)    |  | // Bare-Metal, Mobile & Systems Tooling           |  |
|  | - Frontend: React 19, TypeScript, Next.js, Vite   |  | - Systems: Rust 2024 (#![no_std] bare-metal UEFI) |  |
|  | - Backend: Node.js, Express.js, RESTful APIs      |  | - Mobile: Android Kotlin 100%, Jetpack Compose    |  |
|  | - Databases: MySQL (Stored Procs), MongoDB        |  | - Desktop: CachyOS Arch, Linux Systemd, Wayland   |  |
|  | - Optimization: Query Indexing, -45% DB Latency   |  | - Media: CastLabs Electron, Widevine DRM, DASH.js  |  |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [03. ABOUT SECTION (BIOGRAPHY & HARDWARE/SOFTWARE SPECS)]                                                     |
|  [ 03 / BIOGRAPHY & ARCHITECTURAL SPECS ] [PROFILE VERIFIED]                                                  |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|  | Narrative: 3+ Years commercial engineering        |  | [SPECIFICATION SHEET // PERS_01]                  |  |
|  | craftsmanship, database optimization, and Boston  |  | - DEGREE: B.Tech Computer Engineering (7.84 CGPA) |  |
|  | early-2027 relocation context.                    |  | - TENURE: 3+ Years Commercial Experience          |  |
|  |                                                   |  | - TARGET: Boston Suburbs, MA (Early 2027)         |  |
|  | Disciplines: Weightlifting, Culinary, Linux       |  | - STACK: MERN Core + Rust/Kotlin/Linux Systems    |  |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [04. EXPERIENCE & CREDENTIALS]                                                                                |
|  [ 04 / COMMERCIAL WORK HISTORY & CREDENTIALS ] [VERIFIED RESUME DATA]                                         |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|  | (Vertical Connected Timeline Track)               |  | [ACCREDITED CREDENTIALS]                          |  |
|  | o-- MarketingSolver.in | Web Developer (2024-2025)|  | - B.Tech Computer Engineering (GDEC Abrama)       |  |
|  | o-- La Net Team | Software Developer (2022-2024)  |  |   CGPA: 7.84 / 10.0 (Jul '18 – Jul '22)           |  |
|  | o-- La Net Team | Developer Trainee (2022)        |  | - Full-Stack Bootcamp (Dr. Angela Yu | 62 Hours)  |  |
|  +---------------------------------------------------+  +---------------------------------------------------+  |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|  [05. METHODOLOGY] -> [06. RECOMMENDATIONS] -> [07. TRANSMISSION / CONTACT]                                    |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
```

---

## 2. Flat Color Blocking & Structural Rules

*Governed by Ideology Section 7 ("Technical & Structural Criteria").*

1. **Zero Drop Shadows**:
   * All `box-shadow` values evaluate to `none`.
   * Spatial hierarchy is established exclusively through solid flat background contrast (`#FAF9F6` vs `#E8E5DC` against `#F2F0EA`) and 1px hairline structural dividers (`rgba(20, 20, 20, 0.10)`).
2. **Boundary Definition**:
   * Boundaries between container segments (such as the Lead Feature Block and its Spec Ledger) are formed by the shift in flat background values without artificial inner border lines.
3. **Flat Radii Scale**:
   * `--border-radius-xs`: `2px` (badges, micro-tags)
   * `--border-radius-sm`: `4px` (buttons, project cards, input fields)
   * `--border-radius-md`: `6px` (large container shells)
4. **Mathematical Spacing Scale (8pt Grid / 4pt Micro)**:
   * Micro offsets: `4px` (`--spacing-xs`), `8px` (`--spacing-sm`)
   * Standard gutters: `16px` (`--spacing-md`), `24px` (`--spacing-lg`), `32px` (`--spacing-xl`)
   * Section vertical rhythm: `64px` (`--spacing-3xl`) mobile, `96px` (`--spacing-4xl`) desktop.

---

## 3. Responsive Breakpoint Matrix

| Viewport Range | Layout Configuration | Special Breakpoint Rules |
| :--- | :--- | :--- |
| **Desktop (> 1024px)** | 12-Column Asymmetric Grid; 2-Column Feature Spread; 2-Column Hero | Avatar overlaps typography by `-28px`; full asymmetric mosaic active. |
| **Tablet (768px – 1024px)** | 2-Column Balanced Grid; Stacked Feature Spread | Feature Spec Ledger stacks beneath main case body; hero visual aligns above text. |
| **Mobile (< 768px)** | 1-Column Sequential Flat Blocks; Native Touch Sizing | Minimum touch target `44x44px`; padding reduced to `16px`; all font clamps adjust smoothly. |
