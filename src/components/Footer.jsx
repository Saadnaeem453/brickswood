import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1623] text-gray-100 pt-12 pb-6 px-4 border-t border-[#232b36]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brickswood Info */}
        <div className="text-left">
          <div className="text-xl font-bold text-primary mb-2">Brickswood</div>
          <div className="mb-1 font-medium">Assisted Living & RSA Services</div>
          <div className="text-gray-300 text-sm mb-1">Kent County, Maryland</div>
          <div className="text-xs text-gray-500 mb-1">AL License: AL-2024-MD-001234</div>
          <div className="text-xs text-gray-500 mb-1">RSA License: RSA-2024-MD-005678</div>
        </div>
        {/* Quick Links */}
        <div className="text-left">
          <div className="font-semibold text-white mb-2">Quick Links</div>
          <ul className="space-y-1 text-gray-200 text-sm font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/activities">Activities</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div className="text-left">
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1 font-medium text-gray-200 text-sm">
            <li>Assisted Living</li>
            <li>RSA Home Health</li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="text-left">
          <div className="font-semibold mb-2">Contact Info</div>
          <ul className="space-y-1 font-medium text-gray-200 text-sm">
            <li className="flex items-center gap-2"><FaPhone className="text-gray-100" /> (410) 555-0123</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-gray-100" /> info@brickswood.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-100" /> 123 Main Street, Kent County, MD 21601</li>
          </ul>
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-primary hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-primary hover:text-white text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <hr className="border-[#232b36] mb-4" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 max-w-7xl mx-auto px-2">
        <div className="mb-2 md:mb-0">© 2024 Brickswood Assisted Living. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <Link to="/accessibility" className="hover:underline">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
} 