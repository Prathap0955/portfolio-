# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Material-UI. This portfolio showcases my skills, projects, experience, and provides a professional way for potential employers and clients to learn about my work.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![Material-UI](https://img.shields.io/badge/Material--UI-7.1.2-blue?logo=material-ui)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.19.1-purple?logo=framer)

## ✨ Features

- **Modern Design**: Clean and professional UI with Material-UI components
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Sections**: 
  - Hero section with call-to-action
  - About section with personal information
  - Skills showcase with progress indicators
  - Projects portfolio with detailed descriptions
  - Work experience timeline
  - Contact form with EmailJS integration
  - Resume download option
- **Dark/Light Theme**: Customizable theme system
- **Loading Screen**: Elegant loading animation
- **Smooth Scrolling**: Seamless navigation between sections

## 🚀 Technologies Used

- **Frontend Framework**: React 19.0.0
- **UI Library**: Material-UI (MUI) 7.1.2
- **Animations**: Framer Motion 12.19.1
- **Icons**: React Icons 5.5.0
- **Email Service**: EmailJS 4.4.1
- **Smooth Scrolling**: React Anchor Link Smooth Scroll 1.0.12
- **Styling**: CSS3 with Material-UI theming

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Work experience
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Projects.jsx    # Projects showcase
│   ├── Resume.jsx      # Resume section
│   └── Skills.jsx      # Skills display
├── App.jsx             # Main application component
├── App.css             # Application styles
├── theme.jsx           # Material-UI theme configuration
└── index.js            # Application entry point
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information
Update the following components with your information:
- `src/components/Hero.jsx` - Update name, title, and hero content
- `src/components/About.jsx` - Add your personal story and background
- `src/components/Skills.jsx` - Modify skills and proficiency levels
- `src/components/Projects.jsx` - Add your projects with descriptions and links
- `src/components/Experience.jsx` - Update work experience and timeline

### Styling
- Modify `src/theme.jsx` to customize colors, typography, and theme
- Update `src/App.css` for custom styling
- Adjust component-specific styles in each component file

### Contact Form
Configure EmailJS in `src/components/Contact.jsx`:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Update the service ID, template ID, and public key

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Performance Optimizations

- Lazy loading for components
- Optimized images and assets
- Efficient animations with Framer Motion
- Material-UI tree shaking for smaller bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request



## 📞 Contact

- **Email**: [prathap0955@gail.com](mailto:your.email@example.com)
- **LinkedIn**: [www.linkedin.com/in/prathap-p0955](https://linkedin.com/in/yourprofile)
- **GitHub**: [https://github.com/Prathap0955](https://github.com/yourusername)

---

⭐ **Star this repository if you found it helpful!**