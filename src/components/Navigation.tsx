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
import { BarsIcon } from '@patternfly/react-icons';

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

  const navItems: NavItemType[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' }
 
  ];

  const Header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          onClick={onNavToggle}
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
            <ToolbarItem>
              <Nav variant="horizontal">
                <NavList>
                  {navItems.map((item) => (
                    <NavItem
                      key={item.to}
                      isActive={location.pathname === item.to}
                    >
                      <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
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
  );

  return Header;
};

export default Navigation;
