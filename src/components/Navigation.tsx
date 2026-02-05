import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Nav,
  NavList,
  NavItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

interface NavigationProps {
  isNavOpen: boolean;
  onNavToggle: () => void;
}

interface NavItemType {
  to: string;
  label: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavToggle }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems: NavItemType[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
  ];

  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onNavToggle();
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
      <Masthead>
        <MastheadToggle>
          <PageToggleButton
            variant="plain"
            aria-label="Global navigation"
            onClick={handleMobileToggle}
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand component={(props) => <Link {...props} to="/" />}>
            <span style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Beyond78
            </span>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <Toolbar id="toolbar" isFullHeight isStatic>
            <ToolbarContent>
              <ToolbarItem style={{ width: '100%' }}>
                <Nav variant="horizontal" style={{ width: '100%' }}>
                  <NavList>
                    {navItems.map((item) => (
                      <NavItem
                        key={item.to}
                        isActive={location.pathname === item.to}
                      >
                        <Link 
                          to={item.to} 
                          className="pf-v5-c-nav__link"
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      </NavItem>
                    ))}
                  </NavList>
                </Nav>
              </ToolbarItem>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    </div>
  );
};

export default Navigation;
