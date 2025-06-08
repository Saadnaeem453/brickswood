import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/activities', label: 'Activities' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and subtitle */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-primary">Brickswood</span>
              <span className="text-xs text-gray-500 font-normal ml-1">Assisted Living</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          {/* Call Now button (always visible) */}
          <div className="ml-4 hidden md:block">
            <a href="tel:4105550123" className="bg-primary text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-primary-700 transition text-sm">Call Now</a>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button
              className="text-2xl text-primary focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMenuOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-baseline gap-1" onClick={() => setMenuOpen(false)}>
              <span className="text-xl font-bold text-primary">Brickswood</span>
              <span className="text-xs text-gray-500 font-normal ml-1">Assisted Living</span>
            </Link>
            <button className="text-2xl text-primary" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <a href="tel:4105550123" className="bg-primary text-white font-semibold px-5 py-3 rounded-md shadow hover:bg-primary-700 transition text-center text-sm mt-auto">Call Now</a>
        </div>
      </div>
    </nav>
  );
} 