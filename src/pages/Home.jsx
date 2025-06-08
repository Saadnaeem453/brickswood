import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaUserNurse, FaUsers, FaImage, FaPhone, FaCertificate, FaShieldAlt, FaAward, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import heroSectionImage from '../assets/hero-section-image.png';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import seeOurHomeImg1 from '../assets/see-our-home-img-1.png';
import seeOurHomeImg2 from '../assets/see-our-home-img-2.png';
import seeOurHomeImg3 from '../assets/see-our-home-img-3.png';
import seeOurHomeImg4 from '../assets/see-our-home-img-4.png';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Daughter of Resident',
    quote: "The care my mother receives at Brickswood is exceptional. The staff treats her like family, and I have complete peace of mind knowing she's in such loving hands.",
    avatar: avatar1,
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Son of Resident',
    quote: "Brickswood truly feels like home. The activities keep Dad engaged, and the nursing care is top-notch. We couldn't have asked for a better place.",
    avatar: avatar2,
    stars: 5,
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Daughter of Resident',
    quote: 'The small, intimate setting makes all the difference. Mom gets personalized attention and has made wonderful friends. Thank you, Brickswood!',
    avatar: avatar3,
    stars: 5,
  },
];

const homeImages = [
  seeOurHomeImg1,
  seeOurHomeImg2,
  seeOurHomeImg3,
  seeOurHomeImg4,
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-12 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4">
          {/* Left */}
          <div className="flex-1 text-start max-w-xl pl-8">
            <h1 className="text-4xl md:text-4xl font-bold text-black leading-tight mb-2">
              Welcome to Brickswood Assisted Living
            </h1>
            <h2 className="text-3xl  md:text-4xl font-bold text-primary mb-4 leading-tight">
              Where Care Feels Like Home
            </h2>
            <p className="text-gray-700  font-medium text-base md:text-lg mb-2">
              State-Licensed Assisted Living & Residential Service Agency in Kent County, MD
            </p>
            <p className="text-gray-600 font-medium text-base md:text-lg mb-6">
              Experience personalized care in our warm, family-style environment. Our 8-bed boutique home offers immediate private-pay openings with 24/7 professional care and engaging activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-700 transition" type="button">
                Schedule a Tour
              </button>
              <button className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition" type="button">
                Contact Us Today
              </button>
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img src={heroSectionImage} alt="Brickswood Home" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 items-start">
          {[
            {
              icon: <FaHeart className="text-3xl text-primary" />, title: "Assisted Living", desc: "24/7 personalized care"
            },
            {
              icon: <FaUserNurse className="text-3xl text-primary" />, title: "RSA Health", desc: "Skilled nursing services"
            },
            {
              icon: <FaUsers className="text-3xl text-primary" />, title: "Activities", desc: "Engaging daily programs"
            },
            {
              icon: <FaImage className="text-3xl text-primary" />, title: "Gallery", desc: "See our beautiful home"
            },
            {
              icon: <FaPhone className="text-3xl text-primary" />, title: "Contact", desc: "Get in touch today"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center col-span-1 transition hover:bg-primary-50 rounded-xl py-4 cursor-pointer"
            >
              <span className="mb-2">{item.icon}</span>
              <span className="font-semibold">{item.title}</span>
              <span className="text-xs text-gray-500 mt-1">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What Families Say Section */}
      <section className="w-full bg-primary-50 py-16 px-4 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">What Families Say</h2>
          <p className="text-center text-gray-600 mb-10">Hear from the families who trust us with their loved ones</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-8 flex flex-col">
                <div className="flex items-center mb-4">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary mr-4" />
                  <div className="flex flex-col justify-center  text-start h-16">
                    <div className="font-semibold leading-tight">{t.name}</div>
                    <div className="text-xs text-gray- font-medium leading-tight">{t.role}</div>
                  </div>
                </div>
                <div className="italic text-gray-700 mb-4 text-left">"{t.quote}"</div>
                <div className="flex gap-1 text-left">
                  {[...Array(t.stars)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See Our Beautiful Home Section */}
      <section className="w-full bg-white py-16 px-4 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-2">See Our Beautiful Home</h2>
          <p className="text-center text-gray-600 font-medium mb-8">Take a glimpse into life at Brickswood</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 w-full">
            {homeImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <img
                  src={img}
                  alt={`Brickswood Home ${i+1}`}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <button
            className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-700 transition"
            onClick={() => navigate('/gallery')}
          >
            View Full Gallery
          </button>
        </div>
      </section>

      {/* Licensed & Trusted Section */}
      <section className="w-full bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Licensed & Trusted</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-teal-600 text-4xl mb-2"><FaCertificate /></span>
              <span className="font-semibold">State Licensed</span>
              <span className="text-xs text-gray-500 mt-1">Assisted Living</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-600 text-4xl mb-2"><FaShieldAlt /></span>
              <span className="font-semibold">RSA Licensed</span>
              <span className="text-xs text-gray-500 mt-1">Residential Service Agency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-teal-600 text-4xl mb-2"><FaAward /></span>
              <span className="font-semibold">Quality Care</span>
              <span className="text-xs text-gray-500 mt-1">Kent County, MD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Visit Brickswood Section */}
      <section className="w-full bg-primary py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Ready to Visit Brickswood?</h2>
          <p className="mb-8 font-medium">Schedule a tour today and see why families choose us for their loved ones</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition" type="button">
              Schedule a Tour
            </button>
            <a href="tel:4105550123" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition flex items-center justify-center">
              Call (410) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-100 pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-left">
            <div className="text-xl font-bold text-primary mb-2">Brickswood</div>
            <div className="mb-1 font-medium">Assisted Living & RSA Services</div>
            <div className="text-gray-400 text-sm">Kent County, Maryland</div>
          </div>
          <div className="text-left">
            <div className="font-semibold text-white mb-2">Quick Links</div>
            <ul className="space-y-1 text-gray-300 text-sm font-medium">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/activities">Activities</Link></li>
            </ul>
          </div>
          <div className="text-left">
            <div className="font-semibold mb-2">Services</div>
            <ul className="space-y-1 font-medium text-gray-300 text-sm">
              <li>Assisted Living</li>
              <li>RSA Home Health</li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="text-left">
            <div className="font-semibold mb-2">Contact Info</div>
            <ul className="space-y-1 font-medium text-gray-300 text-sm">
              <li className="flex items-center gap-2"><FaPhone className="text-gray-100" /> (410) 555-0123</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-gray-100" /> info@brickswood.com</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-gray-100" /> Kent County, MD</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-800 mb-4" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
          <div className="mb-2 md:mb-0">© 2025 Brickswood Assisted Living. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 