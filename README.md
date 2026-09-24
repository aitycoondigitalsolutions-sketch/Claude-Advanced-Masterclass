# ⚡ The 3-Hour AI Masterclass Landing Page (React + Vite)

A modern, high-converting, component-driven landing page built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** for the upcoming 3-hour live workshop: **"Go From Prompt Amateur to Autonomous AI Agent Architect"**.

---

## 📁 Project Structure

```
Sample/
├── index.html                    # Vite HTML entry point
├── package.json                  # Dependencies (React, Vite, Tailwind, Lucide, Canvas Confetti)
├── vite.config.js                # Vite build & dev server config
├── tailwind.config.js            # Tailwind theme, typography & keyframes
├── postcss.config.js             # PostCSS setup
├── src/
│   ├── main.jsx                  # React DOM mount point
│   ├── App.jsx                   # Central state & component coordinator
│   ├── index.css                 # Global styling, scrollbars & glassmorphism
│   ├── data/
│   │   └── masterclassData.js    # Data source (Curriculum, Projects, FAQs, Pricing, Testimonials)
│   └── components/
│       ├── Navbar.jsx            # Top banner, responsive navigation & mobile drawer
│       ├── Hero.jsx              # Dynamic countdown, trust metrics & live agent terminal mockup
│       ├── LogosStrip.jsx        # Top tech alumni badges (Vercel, Stripe, Google, Linear, Meta)
│       ├── PainVsSolution.jsx    # "Amateur Prompting vs Masterclass Blueprint" side-by-side
│       ├── Curriculum.jsx        # Interactive 3-hour hour-by-hour breakdown
│       ├── ProjectsShowcase.jsx  # Interactive tabbed switcher with syntax-highlighted code
│       ├── Bonuses.jsx           # $997 bonus vault (Repos, Blueprints, Recording, Discord)
│       ├── Instructor.jsx        # Instructor bio, credentials & verified badge
│       ├── Testimonials.jsx      # Student reviews with 5-star ratings
│       ├── Pricing.jsx           # 3 tiers (General $49, VIP $99, Team $349) + Guarantee
│       ├── FAQ.jsx               # Interactive accordion
│       ├── CTASection.jsx        # High-conversion closing banner
│       ├── Footer.jsx            # Links, copyright & branding
│       ├── RegistrationModal.jsx # Checkout modal, tier selector, validation & confetti burst
│       ├── FloatingBar.jsx       # Scroll-activated bottom CTA bar
│       └── SocialToast.jsx       # Rotating attendee social proof notifications
└── README.md                     # Documentation & setup guide
```

---

## 🚀 Quick Start Instructions

### 1. Install Dependencies
Open your terminal in the project directory:
```bash
cd /Users/antonypraveen/Downloads/Sample
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The server will boot up at **`http://localhost:3000`** (or next available port) with instant Hot Module Replacement (HMR).

### 3. Build for Production
To generate an optimized, minified production build:
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory, ready to deploy to **Vercel**, **Netlify**, **Cloudflare Pages**, or **AWS S3/CloudFront**.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🎨 Key Features & Interactivity

1. **Reactive Countdown Timer**:
   - Calculates time remaining until the live cohort session and synchronizes across the top banner and the hero section.

2. **Autonomous Multi-Agent Terminal Mockup**:
   - Shows simulated real-time tool execution (`WebSearch` → `VectorRAG` → `Self-Reflection` → `CodeExecution`).

3. **Interactive Project Switcher**:
   - Switch between **Autonomous Web Researcher Agent**, **Enterprise Multi-Document RAG**, and **Automated PR Reviewer** with live code snippets and tech stack tags.

4. **Interactive Registration Modal with Confetti**:
   - Change pass tiers dynamically with real-time price updates.
   - Form submission simulates payment confirmation and triggers a celebration confetti burst powered by `canvas-confetti`.
   - Generates a custom ticket ID and provides an **Add to Google Calendar** link.

5. **Conversion Boosters**:
   - **Floating Bottom Bar**: Automatically slides up into view when scrolling past 500px.
   - **Rotating Social Proof Toasts**: Subtle periodic attendee alerts in the bottom-left corner.
   - **Accordion FAQ**: Smoothly toggles answers to common questions.

---

## ⚙️ How to Customize

- **Event Schedule & Details**: Edit `src/App.jsx` or `src/components/Navbar.jsx`.
- **Curriculum, Bonuses, Testimonials & Pricing**: Edit `src/data/masterclassData.js` to modify text, prices, or add new modules.
- **Instructor Info**: Update `src/components/Instructor.jsx` with your photo, credentials, and links.
