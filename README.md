🌌 HELIOS – Metal-Organic Frameworks Catalog

HELIOS is a modern, responsive web application designed to showcase next-generation porous materials — specifically Metal-Organic Frameworks (MOFs).

The platform combines interactive 3D molecule visualizations, a structured product catalog, and a clean, glassmorphism-inspired interface to deliver a futuristic scientific presentation experience.

🚀 Features

🧪 Product Catalog
Browse high-purity MOFs designed for research and industrial applications.

🧬 Interactive 3D Molecule Visualizations
Explore abstract MOF structures directly in the browser (featured on Home and About pages).

🏢 Comprehensive About Section
Learn about HELIOS’ mission, technological approach, and scaling strategy.

🛍 Store & Product Detail Pages
Dedicated store interface with dynamic product detail views.

🎨 Modern UI/UX
Smooth animations powered by Framer Motion and a clean glassmorphism-inspired design.

📱 Fully Responsive
Optimized for desktop, tablet, and mobile devices.

🛠 Tech Stack
Category	Technology
Framework	React 18 (TypeScript)
Build Tool	Vite
Styling	Tailwind CSS
Animations	Framer Motion
Routing	React Router
Icons	Lucide React


📂 Project Structure
HELIOS/
│
├── public/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Overview.tsx
│   │   ├── Capabilities.tsx
│   │   ├── CTA.tsx
│   │   ├── Molecule3D.tsx
│   │   ├── Store.tsx
│   │   └── Contact.tsx
│
│   ├── pages/                   # Route-based pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── AboutPage.tsx
│   │   ├── Technology.tsx
│   │   ├── StorePage.tsx
│   │   ├── ProductDetail.tsx
│   │   └── ContactPage.tsx
│
│   ├── data/
│   │   └── products.ts          # MOF product data
│
│   └── images/                  # Static image assets
│
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
└── vite.config.ts


⚙️ Getting Started
Follow these steps to run the project locally.

🔹 Prerequisites

Make sure you have:
Node.js (v18 or higher recommended)
npm (comes with Node.js)

Check your version:
node -v
npm -v


🔹 Installation

1️⃣ Clone the repository:
git clone <your-repository-url>
cd <your-project-directory>

2️⃣ Install dependencies:
npm install

3️⃣ Start the development server:
npm run dev

4️⃣ Open your browser and navigate to:
http://localhost:3000

🏗 Building for Production
To generate a production-ready build:
npm run build
This will create a dist/ folder containing optimized static assets.
To preview the production build locally:
npm run preview


🌍 Deployment
You can deploy HELIOS easily on:
Vercel
Netlify
GitHub Pages
Firebase Hosting

After running:
npm run build
Upload the contents of the dist/ folder to your hosting provider."# heliostech" 
