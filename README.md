# École Nour El Karim - Website

Modern, responsive website for École Nour El Karim (ENK), a state-approved private school in Souidania, Alger.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Fast & Optimized**: Built with Vite and React for optimal performance
- **Type-Safe**: Written in TypeScript
- **Styled with Tailwind CSS**: Utility-first CSS framework for rapid development

## 📋 Pages

- **Home Page**: Hero section, contact information, school presentation, and features
- **Login Page**: Modern authentication interface for students/staff
- **Registration Page**: Comprehensive enrollment form with validation

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs at `http://localhost:5173/`

## 📱 Routes

- `/` - Home page
- `/connexion` - Login page
- `/inscription` - Registration page

## 🎨 Color Scheme

- Primary Blue: `#2563eb`
- Primary Purple: `#9333ea`
- Light Blue: `#ADD8E6`
- Primary Orange: `#FFA07A`
- Primary Pink: `#FFB6C1`

## 📄 License

© 2026 École Nour El Karim. All rights reserved.

## 📞 Contact

- **Address**: 42 Rue El Nakhil, Souidania, Alger
- **Phone**: 0669.70.49.83 / 0658.24.23.72 / 0698.25.25.34
- **Email**: contact@enk-school.dz

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
