# Beyond78 Technologies

A professional, production-ready React web application built with **TypeScript** and PatternFly components for Beyond78 Technologies. This application features a modern, responsive interface showcasing energy sector solutions with navigation across Home, About, Services, Projects, Contact, and Button components.

[![Build Status](https://github.com/Sasidharan-tech/Beyond78_Intern_web/actions/workflows/build.yml/badge.svg)](https://github.com/Sasidharan-tech/Beyond78_Intern_web/actions/workflows/build.yml)

## 🚀 Features

- **TypeScript**: Full type safety with TypeScript for better code quality and developer experience
- **Modern React Architecture**: Built with React 18 and functional components
- **PatternFly UI Components**: Exclusively uses PatternFly for consistent, professional design
- **Client-Side Routing**: React Router DOM for seamless navigation
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Professional Navigation**: Horizontal navigation bar with active state indicators
- **Component-Based Structure**: Well-organized, reusable components with proper typing
- **Production-Ready**: Configured with Webpack and TypeScript for optimized builds

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.x or higher)
- **npm** (version 7.x or higher) or **yarn**

## 🛠️ Installation

1. **Navigate to the project directory**:
   ```bash
   cd "c:\Users\sasid\Desktop\beyond78\New folder"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - React and React DOM
   - React Router DOM
   - PatternFly React Core and Icons
   - TypeScript and type definitions
   - Webpack and ts-loader for bundling

## 🎯 Running the Application

### Development Mode

Start the development server with hot-reload:

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

### Production Build

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
company-web-app/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   └── Navigation.tsx      # Reusable navigation component
│   ├── pages/
│   │   ├── Home.tsx           # Home page with feature cards
│   │   ├── About.tsx          # About page with company info
│   │   ├── Services.tsx       # Services showcase
│   │   ├── Projects.tsx       # Project portfolio
│   │   └── Contact.tsx        # Contact form and information
│   ├── App.tsx                # Main app component with routing
│   └── index.tsx              # Application entry point
├── .gitignore
├── package.json
├── tsconfig.json              # TypeScript configuration
├── webpack.config.js          # Webpack configuration
└── README.md
```

## 🧩 Key Components

### Navigation Component
- Built with PatternFly's Masthead and Nav components
- Horizontal navigation with active state highlighting
- Fully responsive with mobile toggle
- Fully typed with TypeScript interfaces
- Located in [src/components/Navigation.tsx](src/components/Navigation.tsx)

### Page Components
All pages use PatternFly components exclusively:

- **Home**: Welcome section with feature cards
- **About**: Company mission, vision, and values
- **Services**: Service offerings in a card gallery
- **Projects**: Portfolio of completed and ongoing projects
- **Contact**: Contact form and business information

## 🎨 PatternFly Components Used

- Page & PageSection
- Masthead & Navigation
- Cards & Card Layouts
- Forms & Form Controls
- Buttons & Labels
- Grid & Gallery layouts
- Typography components
- Icons from @patternfly/react-icons

## 🔧 Configuration

### TypeScript Configuration
The project uses TypeScript with strict type checking enabled in `tsconfig.json`:
- Strict mode enabled for maximum type safety
- JSX support with react-jsx transform
- Modern ES2020 target
- Full type definitions for React and PatternFly

### Webpack Configuration
The project uses Webpack 5 with:
- ts-loader for TypeScript compilation
- CSS loader for styling
- Hot Module Replacement (HMR) for development
- Production optimizations

### Router Configuration
React Router DOM v6 handles all routing with the following routes:
- `/` - Home
- `/about` - About
- `/services` - Services
- `/projects` - Projects
- `/contact` - Contact

## 📝 Customization

### Updating Navigation Items
Edit [src/components/Navigation.tsx](src/components/Navigation.tsx) to modify the navigation menu items. The `NavItemType` interface ensures type safety.

### Adding New Pages
1. Create a new component in `src/pages/` with `.tsx` extension
2. Define proper TypeScript interfaces for props and state
3. Add the route in [src/App.tsx](src/App.tsx)
4. Add the navigation item in [src/components/Navigation.tsx](src/components/Navigation.tsx)

### Styling
PatternFly styles are imported globally in [src/index.tsx](src/index.tsx). All components automatically use PatternFly's theming system.

## 🚨 Troubleshooting

### Port Already in Use
If port 3000 is already in use, modify the port in `webpack.config.js`:
```javascript
devServer: {
  port: 3001, // Change to your preferred port
  // ... other config
}
```

### Dependencies Installation Issues
Clear the cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📦 Dependencies

### Main Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.22.0
- `@patternfly/react-core`: ^5.2.0
- `@patternfly/react-icons`: ^5.2.0

### Dev Dependencies
- `typescript`: ^5.3.3
- `@types/react`: ^18.2.0
- `@types/react-dom`: ^18.2.0
- `ts-loader`: ^9.5.1
- `webpack`: ^5.90.3
- `@babel/preset-typescript`: ^7.23.3
- And more (see package.json for full list)

## 📄 License

MIT License - feel free to use this project for your company's needs.

## 🤝 Support

For questions or issues, please contact your development team.

---

**Built with ❤️ using React, TypeScript, and PatternFly**
