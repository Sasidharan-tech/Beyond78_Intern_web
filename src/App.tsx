import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from '@patternfly/react-core';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(true);

  const onNavToggle = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Router>
      <Page
        header={<Navigation isNavOpen={isNavOpen} onNavToggle={onNavToggle} />}
        isManagedSidebar
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </Page>
    </Router>
  );
};

export default App;
