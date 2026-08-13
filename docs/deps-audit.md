# Dependency Audit & Upgrade Plan: Safvan Khalifa (`safvan-dev`)
Date: September 2026 | Direction: Option A ("Architectural Blueprint & Crafted Editorial")

This document tracks the dependency audit, modern alternatives research (2025–2026 standards), vulnerability assessment, and step-by-step migration plan for `safvan-dev`.

---

## 1. Current Dependencies Audit Table

| Package | Current Version | Status | Recommended Action | Replacement | Reason |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`react`** | `^19.1.0` | Active / Latest | **Keep** | — | Core framework. React 19 is active, modern, and supported by all current libraries. |
| **`react-dom`** | `^19.1.0` | Active / Latest | **Keep** | — | Core DOM renderer matching React 19. |
| **`gsap`** | `^3.13.0` | Active / Industry Standard | **Keep** | — | Core animation engine powering ScrollTrigger horizontal pinned scrubbing and motion ticker. |
| **`lenis`** | `^1.2.3` | Active / Industry Standard | **Keep** | — | Modern, lightweight (~3.5kB gzipped) inertial smooth scrolling. Synchronized with GSAP. |
| **`react-icons`** | `^5.5.0` | Bloated / Legacy | **Remove / Replace** | `lucide-react` | Only imported in superseded `ServicesSection.jsx`. Massive package (~32MB unpacked) bundling multiple full font sets. `lucide-react` is modern, tree-shakeable, and 1–2kB per icon. |
| **`@vitejs/plugin-react`** | `^5.1.3` | Active / Latest | **Keep** | — | Official React Babel/Fast-Refresh compiler plugin for Vite. |
| **`sass`** | `^1.89.2` | Dead Weight / Vulnerable | **Remove** | — | Zero `.scss` / `.sass` files exist in the project (100% pure modern CSS). Pulls `immutable.js` dependency which triggers high-severity prototype pollution advisories in `npm audit`. |
| **`gh-pages`** | `^6.3.0` | Maintained / Optional | **Keep / Review** | — | Used for optional GitHub Pages deployment (`npm run deploy`). Harmless, but Netlify is the active production host. |
| **`vite`** | `^7.3.1` | Active / Update Available | **Upgrade (Patch)** | `vite@^7.3.3+` | Bundler engine. Patch update addresses minor dev-server security advisories reported in `npm audit`. |

---

## 2. Research: Modern Replacements & New Feature Opportunities

### 2.1 Replacements for Flagged Dependencies

#### A. `react-icons` → `lucide-react`
* **Bundle Size**: `react-icons` bundles full icon subsets with variable tree-shaking efficacy; `lucide-react` is strictly ESM tree-shakeable (~1.5kB per icon).
* **Design Alignment**: Clean, consistent 24×24 geometric stroke grid that perfectly fits the Architectural Blueprint aesthetic (hairline borders, technical crosshairs).
* **DX**: Fully typed TypeScript/JavaScript props (`strokeWidth`, `size`, `color`), zero CSS font injection.
* **Community**: The dominant React icon library in 2025–2026 (over 10M weekly downloads).

#### B. `sass` → Pure Native CSS (Removal)
* **Rationale**: The entire application uses native CSS custom properties (`var(--color-primary)`), CSS Grid, and flexbox. `sass` adds ~5.5MB unpacked and dependencies without compiling a single file.
* **Security Outcome**: Directly eliminates `immutable` prototype pollution and trie overflow vulnerabilities from `npm audit`.

---

### 2.2 New Feature Opportunities (Net-New Additions)

| New Package | Proposed Version | Feature Unlocked | Bundle Impact | UX / Architectural Value |
| :--- | :--- | :--- | :--- | :--- |
| **`sonner`** | `^2.0.0` | Opinionated Architectural Toast Notifications | ~4.5 kB gzipped | Designed by Emil Kowalski (cited in our design research). Unlocks subtle, high-contrast toast notifications for one-click email copying, terminal command execution feedback, and resume download confirmations. |
| **`canvas-confetti`** | `^1.9.4` | Milestone / Contact Dispatch Delight | ~3 kB gzipped | Micro-celebration trigger on successful dispatch of the contact inquiry form. |
| **`vite-plugin-compression2`** | `^1.3.0` | Production Brotli/Gzip Pre-compression | 0 kB (Build-time only) | Generates `.br` and `.gz` pre-compressed assets during `vite build` for sub-100ms Netlify delivery. |

---

## 3. Migration Plan (Prioritized by Risk)

To ensure zero downtime and zero regressions, all changes are ordered from lowest risk (dead-weight removal) to feature-additive:

### Step 1: Remove Dead-Weight `sass` (Zero Risk)
* **Scope**: Uninstall `sass` from `devDependencies`.
* **Code Impact**: None. All stylesheets are `.css`.
* **Result**: Eliminates high-severity `immutable` vulnerability from `npm audit` and speeds up `npm install`.

### Step 2: Clean Dead `ServicesSection` & Legacy `react-icons` (Low Risk)
* **Scope**: Remove dead `ServicesSection` directory (superseded by `SkillsMatrixSection`). Uninstall `react-icons`. Install `lucide-react`.
* **Code Impact**: Clean up unused component directory. Zero impact on active UI in `App.jsx`.
* **Verification**: `npm run build` to confirm zero missing import errors.

### Step 3: Upgrade `vite` to Latest Patch (Low Risk)
* **Scope**: Upgrade `vite` within the v7 release channel (`npm update vite`).
* **Code Impact**: None. Resolves dev-server advisories in `npm audit`.
* **Verification**: `npm run build` to ensure clean build output.

### Step 4: Integrate `sonner` for Editorial Toast Notifications (Feature Enhancement)
* **Scope**: Install `sonner`. Mount `<Toaster />` with warm editorial theme (`#1E1A17` background, hairline border) in `App.jsx`.
* **Code Impact**: Connect `toast.success("Email copied to clipboard")` in `ContactSection.jsx` and terminal drawer commands.
* **Verification**: Click "Copy" on contact card and verify smooth toast animation.

### Step 5: Clean Scaffold Artifacts in `package.json` (Low Risk)
* **Scope**: Remove obsolete Create-React-App remnant `eslintConfig` (`react-app`, `react-app/jest`) from `package.json` and add `"type": "module"`. Run `npm audit fix` for clean dev sub-dependencies.
* **Code Impact**: None. Vite natively handles modern ES modules and has no dependency on CRA eslint.
* **Verification**: `npm run build` passes in 691ms; `npm audit` reports 0 vulnerabilities.

---

## 4. Running Execution Log

| Task # | Target Package | Action | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `sass` | Remove | `[x] Completed` | Removed cleanly; pruned `immutable` sub-dependency. Build passed in 648ms. |
| **2** | `react-icons` / `ServicesSection` | Remove & Swap to `lucide-react` | `[x] Completed` | Removed 32MB dead weight; installed modern `lucide-react`. Build passed in 646ms. |
| **3** | `vite` | Patch Upgrade | `[x] Completed` | Bumped to `v7.3.6`. Build passed cleanly in 649ms. |
| **4** | `sonner` | Add New Feature (Toasts) | `[x] Completed` | Integrated editorial toasts for email copy, inquiry dispatch, and terminal actions. Build passed in 674ms. |
| **5** | `package.json` CRA remnants | Clean Config & Audit Fix | `[x] Completed` | Removed CRA `eslintConfig`, added `"type": "module"`, resolved 100% vulnerabilities (0 advisories remaining). Build passed in 691ms. |

