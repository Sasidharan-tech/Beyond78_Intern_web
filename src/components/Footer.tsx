import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-[#080b13] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-1.5 rounded-lg">
                <span className="material-symbols-outlined text-white text-xl">layers</span>
              </div>
              <h1 className="text-xl font-extrabold tracking-tighter uppercase dark:text-white">
                Beyond<span className="text-primary">78</span>
              </h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Setting new benchmarks in engineering, architecture, and digital transformation. 
              Global excellence, local commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Beyond78
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Service Expertise
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h5 className="text-white font-bold mb-6">Office Locations</h5>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Bangalore: MASS Complex, Sarakki Industrial Layout, JP Nagar 3rd Phase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Mumbai: Coming Soon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                <span>Chennai: Coming Soon</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-bold mb-6">Newsletter</h5>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Subscribe for the latest industry insights and project updates.
            </p>
            <form className="flex gap-2">
              <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                placeholder="Email address"
                type="email"
              />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-slate-500 text-xs gap-4">
          <p>© 2024 Beyond78. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="#"
              className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a
              href="#"
              className="size-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">diversity_3</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
