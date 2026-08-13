# Design System & Visual Specification: Safvan Khalifa (`safvan-dev`)

This document outlines the visual direction, color system, typography scale, spacing tokens, and component styling rules for Safvan Khalifa's portfolio.

---

## 1. Aesthetic DNA & Visual Direction

Safvan's engineering profile represents a rare intersection of **foundational web craftsmanship** and **terminal-grade systems engineering**. The visual design reflects this through:
1. **Strict Two-Tone Editorial System (Primary Light Mode Canvas)**
   * Editorial, magazine-inspired minimalism. Built around a strict two-tone palette: one dominant accent color (**Forest Green** `#1F6B4F`) paired with a warm off-white/cream background (**Warm Cream** `#F2F0EA`) and near-black body copy (**Near Black** `#141414`).
   * Conveys craftsmanship, reliability, and thoughtful design discipline with zero gradients, zero skeuomorphic shadows, and razor-sharp typographic hierarchy.
2. **Alternative / Terminal Theme: Everforest AMOLED System (Dark Mode Reference)**
   * Grounded in Safvan's daily-driver Linux environment (`mycosmicrice` on Arch/CachyOS).
   * True `#000000` AMOLED canvas with the nature-inspired, low-fatigue Everforest palette and crisp monospace terminal accents.

---

## 2. Color Palettes & Semantic Tokens (Single Source of Truth)

### 2.1 Primary Theme: Strict Two-Tone Editorial System

| Token Name | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `--color-background` | `#F2F0EA` | Warm off-white/cream primary canvas (not pure white) |
| `--color-surface` | `#FAF9F6` | Card & container surfaces |
| `--color-surface-translucent` | `rgba(242, 240, 234, 0.92)` | Flat solid navigation header backdrop |
| `--color-surface-cream` | `#E8E5DC` | Subtle contrasting cream surfaces & terminal headers |
| `--color-primary` | `#1F6B4F` | Deep muted forest green (Single dominant accent for headings, icons, buttons, links, active states) |
| `--color-primary-wash` | `rgba(31, 107, 79, 0.08)` | Subtle 8% opacity wash for card headers, tags, active tabs |
| `--color-primary-wash-subtle` | `rgba(31, 107, 79, 0.05)` | Micro 5% wash for subtle hover backgrounds |
| `--color-primary-wash-medium` | `rgba(31, 107, 79, 0.12)` | 12% opacity wash for active pills, badge borders, focus rings |
| `--color-primary-wash-high` | `rgba(31, 107, 79, 0.20)` | 20% opacity wash for interactive selections & tags |
| `--color-text-primary` | `#141414` | Near-black primary text (high contrast, crisp editorial legibility) |
| `--color-text-secondary` | `#4A4A4A` | Muted charcoal (secondary descriptions, subtitles) |
| `--color-text-muted` | `#767676` | Neutral grey (timestamps, metadata, small captions) |
| `--color-text-inverse` | `#FFFFFF` | White text on solid forest green buttons/markers |
| `--color-border` | `rgba(20, 20, 20, 0.10)` | Hairline container borders & dividers |
| `--color-hairline` | `rgba(20, 20, 20, 0.10)` | Precision 1px architectural grid lines |
| `--crosshair-color` | `#1F6B4F` | Architectural `+` crosshair alignment markers |

> **Strict Palette Rules**:
> 1. **Single Accent Rule**: Only `#1F6B4F` is used as the accent color across all sections, headings, buttons, icons, links, and illustrative accents.
> 2. **No Third Color**: Do not introduce a third hue (no terracotta, no yellow/orange, no separate mint) unless strictly necessary for an error indicator (`#DC2626`).
> 3. **No Gradients**: Never use linear, radial, or conic gradients. Solid colors only.
> 4. **Opacity Hierarchy Over Tints**: Do not introduce separate tint/shade hex values. Use exact `#1F6B4F` everywhere, varying solely opacity (`0.05`, `0.08`, `0.12`, `0.20`) for washes and surface hierarchy.

### 2.2 Secondary Theme: Everforest AMOLED (Dark Mode Reference)

| Token Name | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `--ef-bg-canvas` | `#000000` | Pure AMOLED Black background |
| `--ef-surface-0` | `#1E2326` | Deep Everforest base surface |
| `--ef-surface-1` | `#272E33` | Card container background |
| `--ef-surface-2` | `#2E383C` | Stepped surface / Hover state |
| `--ef-border` | `rgba(211, 198, 170, 0.15)` | Hairline separation line |
| `--ef-green` | `#A7C080` | Everforest Green (Accent, MERN highlight) |
| `--ef-aqua` | `#83C092` | Aqua Mint (Active link indicators) |
| `--ef-yellow` | `#DBBC7F` | Amber / Sand (Metrics & warning badges) |
| `--ef-orange` | `#E69875` | Terracotta Orange (Primary action buttons) |
| `--ef-blue` | `#7FBBB3` | Steel Blue (Systems & Linux tags) |
| `--ef-text-primary` | `#D3C6AA` | Warm Cream Grey body text |
| `--ef-text-muted` | `#859289` | Dimmed green-grey captions |

---

## 3. Typography Scale & Hierarchy (Option B: Crafted Editorial)

### 3.1 Typeface Families
* **Editorial & Section Headings**: `"Fraunces Variable", "Fraunces", Georgia, serif`
  * High-character variable Old Style display serif with optical sizing (`opsz: 9..144`) and variable weight (`wght: 100..900`). Provides authoritative, bookish craftsmanship for headlines and display names with zero faux-bolding distortion.
* **Primary UI & Body**: `"Plus Jakarta Sans Variable", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif`
  * Warm, contemporary geometric sans designed by Tokotype. Features clean open apertures, exceptional micro-legibility for body copy and card layouts, and humanist warmth matching the earth-toned paper aesthetic.
* **Monospace & Terminal Data**: `"JetBrains Mono Variable", "JetBrains Mono", monospace`
  * Technical developer-first monospace font with clear character distinction, tabular figures, and crisp rendering for git commits, terminal drawer operations, and metric labels.
* **Hosting & Delivery**:
  * 100% self-hosted locally via Fontsource variable packages (`@fontsource-variable/fraunces`, `@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/jetbrains-mono`).
  * Built-in `font-display: swap` to prevent FOIT, bundled as optimized `.woff2` variations directly in build output. Zero third-party network requests or tracking.

### 3.2 Type Scale (Mathematical 8pt Rhythm Scale)

| Token | Size (Rem) | Pixel Equivalent | Default Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--font-size-5xl` | `4.75rem` | 76px | Bold (700/800) | `1.05` | Hero Display Name ("Safvan Khalifa") |
| `--font-size-4xl` | `3.5rem` | 56px | Bold (700) | `1.15` | Major Section Display Numbers |
| `--font-size-3xl` | `2.75rem` | 44px | Bold (700) | `1.15` | Section Titles (`.section-title`) |
| `--font-size-2xl` | `2.0rem` | 32px | SemiBold (600) | `1.25` | Panel & Card Major Headers |
| `--font-size-xl` | `1.5rem` | 24px | SemiBold (600) | `1.3` | Brand Name in Header, Project Titles |
| `--font-size-lg` | `1.125rem` | 18px | Normal (400) | `1.65` | Lead Paragraphs, Hero Tagline |
| `--font-size-base` | `1.0rem` | 16px | Normal (400) | `1.6` | Standard Body Copy, Descriptions |
| `--font-size-sm` | `0.875rem` | 14px | Medium (500) | `1.5` | Tech pills, tabs, terminal buffer, buttons |
| `--font-size-xs` | `0.75rem` | 12px | Medium (500) | `1.4` | Section tags, system labels, metadata |
| `--font-size-2xs` | `0.6875rem` | 11px | SemiBold (600) | `1.3` | Terminal prompt tags, verification badges |

---

## 4. Spacing, Geometry & Layout Grid

### 4.1 Spacing Scale (8pt Grid with 4pt Micro-Tokens)
* `--spacing-2xs`: `0.125rem` (2px) — Hairline offsets, border alignment
* `--spacing-xs`: `0.25rem` (4px) — Micro gaps, tech badge vertical padding
* `--spacing-sm`: `0.5rem` (8px) — Base micro unit, icon gaps, pill vertical padding
* `--spacing-md-sm`: `0.75rem` (12px) — Button vertical padding, card header vertical padding
* `--spacing-md`: `1.0rem` (16px) — Base standard unit, card gaps, pill horizontal padding
* `--spacing-md-lg`: `1.25rem` (20px) — Card header horizontal padding, input field padding
* `--spacing-lg`: `1.5rem` (24px) — Button horizontal padding, card content gaps
* `--spacing-xl`: `2.0rem` (32px) — Container gutters, card body internal padding, 3-col grid gap
* `--spacing-2xl`: `3.0rem` (48px) — 2-column layout grid gaps, section header bottom margin
* `--spacing-3xl`: `4.0rem` (64px) — Major section header bottom margins, tablet section padding
* `--spacing-4xl`: `6.0rem` (96px) — Desktop section vertical padding (top/bottom)

### 4.2 Radii Tokens (Flat Geometric Scale)
* `--border-radius-xs`: `2px` (Tech badges, tags, indicator markers)
* `--border-radius-sm`: `4px` (Buttons, inputs, filter tabs, interactive pills)
* `--border-radius-md`: `6px` (Project cards, panels, ledger cards, callouts)
* `--border-radius-lg`: `6px` (Container surfaces)
* `--border-radius-xl`: `6px` (Spotlight cards)
* `--border-radius-full`: `9999px` (Reserved exclusively for circular geometry / 50% shapes)

### 4.3 Container Constraints
* Max Container Width: `1400px` (`--container-max-width`)
* Section Vertical Padding: `var(--spacing-4xl)` on desktop, `var(--spacing-2xl)` on mobile.
* Header Height: `80px` (`--header-height`)

---

## 5. Component Styling Patterns

### 5.1 Project & Feature Cards
* **Background**: `var(--color-surface)` (`#FAF9F6`)
* **Border**: `1px solid var(--color-hairline)` (`rgba(20, 20, 20, 0.10)`)
* **Border Radius**: `var(--border-radius-md)` (6px flat geometric)
* **Shadow**: `none` (Zero drop shadows per strict flat design specification)
* **Hover State**:
  * Crisp 1px border transition to `var(--color-primary)` (`#1F6B4F`)
  * Arrow micro-advance (`→` / `↗`)
  * No skeuomorphic translateY elevation or shadow expansion

### 5.2 Technology Badges & Pills
* **MERN Core Badge**:
  * Background: `rgba(31, 107, 79, 0.08)` (Forest Green wash)
  * Text: `var(--color-primary)` (`#1F6B4F`)
  * Border: `1px solid rgba(31, 107, 79, 0.20)`
  * Icon: Small star (`★`)
* **AI-Augmented Systems Badge**:
  * Background: `rgba(31, 107, 79, 0.08)` (Forest Green wash)
  * Text: `var(--color-primary)` (`#1F6B4F`)
  * Border: `1px solid rgba(31, 107, 79, 0.20)`
  * Icon: Small gear (`⚙`)

### 5.3 Buttons & Interactive Controls
* **Primary Button**:
  * Background: `var(--color-primary)` (Forest Green `#1F6B4F`)
  * Text: `#FFFFFF`
  * Padding: `0.75rem 1.75rem`
  * Border Radius: `var(--border-radius-sm)` (4px flat geometric)
  * Hover: Background transitions to `rgba(31, 107, 79, 0.90)`, crisp micro-interaction.
* **Secondary / Outline Button**:
  * Background: `transparent`
  * Text: `var(--color-primary)` (`#1F6B4F`)
  * Border: `1px solid var(--color-primary)` (`#1F6B4F`)
  * Hover: Background transitions to `rgba(31, 107, 79, 0.08)`

---

## 6. Motion & Animation Principles

1. **Inertial Smooth Scrolling (Lenis)**:
   * Smooth physics scrolling running at 60 FPS without high-friction stutter.
2. **ScrollTrigger Reveal Timelines (GSAP)**:
   * Content blocks reveal on scroll with soft vertical drift (`y: 24 -> 0`) and opacity fade (`0 -> 1`).
   * Easing curve: `power3.out` with duration `0.8s`.
3. **Cursor Interaction (Custom GSAP Cursor)**:
   * A soft tracking ring follows the mouse with gentle latency in `#1F6B4F`.
   * Expands and morphs into a semi-translucent pill when hovering interactive links and project cards.
   * Auto-disabled on touch-first viewports (`pointer: coarse`).

---

## 7. Differentiation & Signature Effects (Direction: The Architectural Blueprint & Crafted Editorial)

### 7.1 Core Visual Metaphor
The portfolio avoids generic SaaS template aesthetics by adopting **"The Architectural Blueprint & Crafted Editorial"** aesthetic. This direction merges high-end Swiss editorial typography and a strict two-tone palette (**Forest Green** `#1F6B4F`, **Warm Cream** `#F2F0EA`, **Near Black** `#141414`) with precision architectural blueprinting—featuring subtle hairline grid borders, crosshair junction marks (`+`), and an ultra-fine tactile paper grain overlay.

It directly reflects Safvan's dual identity: meticulous, unassisted full-stack craftsmanship (MERN, database optimization) paired with terminal-grade precision engineering.

---

### 7.2 Signature Effects & Implementation Map

| Signature Effect | Technical Implementation | Libraries / Tools | Where It Applies on Site | Performance & Fallback Rules |
| :--- | :--- | :--- | :--- | :--- |
| **1. Tactile Paper Film Grain Overlay** | Fixed full-screen overlay with SVG `feTurbulence` noise filter and `mix-blend-mode: overlay` (`opacity: 0.035`). Eliminates sterile "flat CSS" look. | Pure CSS + SVG Data URI | Global viewport overlay (entire site) | Zero runtime JS; GPU accelerated; `pointer-events: none`. |
| **2. Architectural Hairline Grid & `+` Junctions** | 1px borders (`rgba(92, 58, 33, 0.12)`) accented with subtle typographic crosshair tokens (`+`) at container corners and division lines. | Pure CSS (`::before`, `::after` pseudo-elements) | Section dividers, Skills Matrix ledger, Project card frames | Pure CSS; zero performance cost on all devices. |
| **3. Horizontal Stepped Project Showcase** | Pinned horizontal scrubbing section where featured projects slide in like oversized architectural case sheets with high-contrast serif index numbers (`01`, `02`) and metric stamps (`500+ REQ/S`, `-45% LATENCY`). | GSAP ScrollTrigger (`pin: true, scrub: 1`) + Lenis | `WorksSection` (Desktop & Tablet) | Automatically unpins on mobile (`< 768px`) to native vertical touch cards. Respects `prefers-reduced-motion`. |
| **4. Interactive Command Drawer (`zack@ghost:~$`)** | Slide-out terminal drawer summoned by clicking the terminal prompt in the Hero or pressing `Ctrl+K`. Allows technical visitors to run CLI commands (`cat bio`, `npm test`, `view resume`, `ping boston`). | React State + Focus Trap + Keyboard Listener | Hero section status chip & global `Ctrl+K` hotkey | Accessible modal with full keyboard navigation and ARIA attributes. |
| **5. Magnetic Hover Physics & Morphing Cursor** | Custom cursor that tracks mouse velocity, snaps magnetically to buttons, and morphs into a semi-translucent pill with contextual text (`View Project`, `Copy Email`). | GSAP `quickTo()` with lerped mousemove listener | Global Desktop Cursor (buttons, cards, links) | Completely disabled on touch viewports (`@media (pointer: coarse)`). |
| **6. Comparative Ledger Hover Annotations** | Hovering over items in the Skills Matrix reveals inline technical annotations (e.g. hovering on *MySQL* reveals: `// Latency: -45% via raw stored procedures`). | React Tooltip / CSS Hover Transitions | `SkillsMatrixSection` | Displays inline on mobile viewports for instant readability. |

---

## 8. Flat Design Specification & Consistency Rules

To preserve clean architectural minimalism and eliminate skeuomorphic visual noise across all components, the site strictly enforces the following flat design rules:

1. **Zero Drop Shadows**:
   * All `--shadow-*` tokens (`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-inset`) evaluate to `none`.
   * Cards, buttons, modals, and sticky headers do NOT use CSS `box-shadow` or `filter: drop-shadow()`.
   * Separation of depth is achieved exclusively through solid background contrast, 1px solid hairline borders (`--color-hairline`), and whitespace.
2. **Zero Gradients & Blurs**:
   * No linear, radial, or conic gradients on backgrounds, cards, or hero elements.
   * No glassmorphism (`backdrop-filter: blur()`). Sticky elements (Header, Terminal, Drawers) use flat solid backgrounds (`#FFF9F0`, `#1E1A17`, or `#12100E`).
3. **Flat Interactive States**:
   * Hover effects do not use elevation/translate lifts combined with shadow expansion.
   * Hover is indicated by crisp 1px border-color transitions (e.g., transitioning `--color-hairline` to `--color-primary`), subtle solid background color changes, or textual arrow motion (`→`).
4. **Flat Monospace Terminal**:
   * Devoid of fake OS window decorations (no colored traffic-light dots).
   * Functional controls rendered as flat text buttons (`[CLEAR]`, `[HELP]`, `[ESC ✕]`).
   * Recognized through monospace typography, prompt formatting, and solid contrast alone.

