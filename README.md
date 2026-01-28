Ecole Nour El Karim - Website
https://img.shields.io/badge/demo-live-brightgreen
https://img.shields.io/badge/React-18.2-blue
https://img.shields.io/badge/TypeScript-5.2-blue
https://img.shields.io/badge/Tailwind-3.3-38B2AC
https://img.shields.io/badge/Vite-5.0-646CFF

A modern, responsive school website for "Ecole Nour El Karim" rebuilt with React, TypeScript, and Tailwind CSS. This project transforms the original HTML/CSS/JavaScript website into a modern single-page application with enhanced performance and maintainability.

https://enk-beta.vercel.app/images/enk-logo.png

✨ Features
Modern Stack: React 18 with TypeScript for type safety

Responsive Design: Fully responsive across all device sizes

Performance: Built with Vite for fast development and optimized builds

Styling: Tailwind CSS for utility-first styling

Routing: React Router DOM for seamless navigation

Interactive Forms: Form handling with React state management

Smooth Animations: CSS transitions and fade effects

Social Integration: Social media links and sharing

Multi-language Support: French and Arabic language options

🚀 Live Demo
Visit the live website: https://enk-beta.vercel.app/

📁 Project Structure
text
school-website/
├── public/
│   ├── images/          # All static images and assets
│   └── favicon.ico
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Layout/     # Header, Footer, Navigation
│   │   ├── Home/       # Homepage specific components
│   │   ├── Auth/       # Login/Register forms
│   │   └── common/     # Shared UI components
│   ├── pages/          # Page components
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── contexts/       # React contexts
│   │   └── LanguageContext.tsx
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles and Tailwind imports
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── index.html
🛠️ Technologies Used
React 18 - UI library

TypeScript - Type safety

Tailwind CSS - Styling framework

Vite - Build tool and dev server

React Router DOM - Client-side routing

Font Awesome - Icons

React Hook Form - Form handling (optional)

📦 Installation
Prerequisites
Node.js 16+ and npm/yarn

Setup Instructions
Clone the repository

bash
git clone <repository-url>
cd school-website
Install dependencies

bash
npm install
# or
yarn install
Add images to public directory
Place all required images in public/images/:

enk-logo.png

image1.jpg (background)

enk1.jpg through enk5.jpg (filières)

ghi maps copy.jpg (Google Maps)

Any other images from the original project

Start development server

bash
npm run dev
# or
yarn dev
Build for production

bash
npm run build
# or
yarn build
🌐 Pages
1. Homepage (/)
School introduction and mission statement

Contact information (address, phone, email)

School presentation with animated sections

All available educational programs (filières)

Social media links and Google Maps location

Multi-language support (French/Arabic)

2. Login Page (/connexion)
User authentication form

Email and password validation

"Remember me" functionality

Links to registration and home

3. Registration Page (/inscription)
Complete student registration form

Personal information fields

Program selection (filières)

Contact details

Password confirmation

Form validation

🎨 Design Features
Responsive Breakpoints
Mobile: < 600px

Tablet: 600px - 900px

Desktop: 900px - 1200px

Large Desktop: > 1200px

Color Scheme
Primary: #FFA07A (Light Salmon)

Secondary: #ADD8E6 (Light Blue)

Accent: #FFB6C1 (Light Pink)

Text: #303030 (Dark Gray)

Background: Transparent with overlay

Animations
Smooth fade-in effects on page load

Slide-down animations for main sections

Hover effects on buttons and images

Form focus states with transitions

🔧 Customization
Adding New Pages
Create a new component in src/pages/

Add route in App.tsx

Update navigation in Header.tsx

Modifying Styles
Use Tailwind classes directly in components

Custom utilities in tailwind.config.js

Global styles in src/index.css

Adding Languages
Add translations in src/contexts/LanguageContext.tsx

Update language selector component

Use useLanguage hook in components

📱 Responsive Design
The website is fully responsive with:

Mobile-first approach

Flexible grid layouts

Adjustable font sizes

Responsive images

Touch-friendly navigation

🔗 Social Media Integration
Facebook page link

Instagram profile link

LinkedIn (optional)

Google Maps location

🚀 Deployment
The project is configured for easy deployment on:

Vercel (Recommended)
bash
npm install -g vercel
vercel
Netlify
Connect your Git repository

Set build command: npm run build

Set publish directory: dist

GitHub Pages
Update vite.config.ts base path

Run npm run build

Deploy dist folder to gh-pages branch

📄 License
This project is for educational purposes. All school-related content belongs to Ecole Nour El Karim.

👥 Contributing
Fork the repository

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

🙏 Acknowledgments
Original design and content from Ecole Nour El Karim

Font Awesome for icons

Vite team for the amazing build tool

React and Tailwind CSS communities
