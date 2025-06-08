import React from 'react';
import { FaHeart, FaHandshake, FaCrown, FaStar, FaHome, FaUsers, FaUserNurse, FaShieldAlt, FaCertificate } from "react-icons/fa";
import aboutHeroImg from '../assets/about/about-hero-section.png';
import storyImg from '../assets/about/our-story-img.png';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';
import avatar6 from '../assets/avatar-6.jpg';
import boutiqueImg from '../assets/boutique-img.png';

const team = [
  { name: 'Emily Carter', role: 'Administrator', avatar: avatar4, quote: 'We believe in creating a true home for our residents, where every day is filled with care and connection.' },
  { name: 'James Lee', role: 'Director of Nursing', avatar: avatar5, quote: 'Our team is dedicated to providing the highest quality of care, tailored to each individual.' },
  { name: 'Patricia Smith', role: 'Activities Coordinator', avatar: avatar6, quote: 'Engaging activities and a warm environment make Brickswood a special place to live.' },
  { name: 'Olivia Brown', role: 'Resident Care Manager', avatar: avatar1, quote: 'Every resident is family to us. We strive to make every day meaningful.' },
  { name: 'William Turner', role: 'Chef', avatar: avatar2, quote: 'Nutritious, home-cooked meals are at the heart of our care.' },
  { name: 'Sophia Green', role: 'Wellness Director', avatar: avatar3, quote: 'We focus on holistic wellness for every resident.' },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Intro Section */}
      <section className="w-full bg-primary-50 py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About Brickswood</h1>
          <p className="text-lg font-medium text-gray-600 mb-2">
            Discover our mission, values, and the compassionate team dedicated to providing exceptional senior care in Kent County, Maryland
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-12 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left */}
          <div className="flex-1 max-w-xl pl-4 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-left">Our Mission & Values</h2>
            <div className="text-primary text-lg font-semibold mb-1 text-left">Our Mission</div>
            <p className="text-gray-700 text-base md:text-lg mb-4 text-left">
              To provide compassionate, personalized care that honors the dignity and independence of every resident while creating a warm, family-like environment where seniors can thrive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  icon: <FaHeart className="text-2xl text-primary mb-2" />,
                  title: "Compassion",
                  desc: "Every action guided by empathy and understanding"
                },
                {
                  icon: <FaHandshake className="text-2xl text-primary mb-2" />,
                  title: "Respect",
                  desc: "Honoring each person's unique story and choices"
                },
                {
                  icon: <FaCrown className="text-2xl text-primary mb-2" />,
                  title: "Dignity",
                  desc: "Preserving independence and personal worth"
                },
                {
                  icon: <FaStar className="text-2xl text-primary mb-2" />,
                  title: "Excellence",
                  desc: "Commitment to the highest standards of care"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-primary-50 rounded-xl p-5 flex flex-col items-start shadow-sm h-full">
                  <span>{item.icon}</span>
                  <span className="font-semibold text-base mb-1 mt-1 text-left">{item.title}</span>
                  <span className="text-sm text-gray-600 text-left">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img src={aboutHeroImg} alt="About Brickswood" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-primary-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Story</h2>
          <p className="text-center text-lg text-gray-700 mb-10 font-medium">
            Founded with a vision to create a true home environment for seniors, Brickswood<br />
            represents years of dedication to compassionate care
          </p>
          <div className="bg-white rounded-2xl shadow p-0 md:p-8 flex flex-col md:flex-row items-center gap-0 md:gap-8">
            <div className="flex-1 w-full flex justify-center">
              <img src={storyImg} alt="Brickswood Home" className="rounded-xl w-full max-w-md object-cover m-0" style={{minHeight:'260px', maxHeight:'320px'}} />
            </div>
            <div className="flex-1 w-full p-6 md:p-0">
              <div className="text-gray-700  font-normal text-base md:text-md font-semibold text-left space-y-5">
                <p>Brickswood Assisted Living was born from a simple belief: that every senior deserves to live with dignity, surrounded by care that feels like family. Our founders recognized the need for a different kind of senior care facility—one that prioritizes personal relationships over institutional procedures.</p>
                <p>Located in the heart of Kent County, Maryland, our 8-bed boutique home offers an intimate setting where residents receive individualized attention and form meaningful connections with both staff and fellow residents.</p>
                <p>We've carefully designed every aspect of our home to promote comfort, safety, and joy. From our cozy common areas to our beautiful gardens, every space reflects our commitment to creating an environment where seniors can truly thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full bg-green-50 py-16">
        <div className="max-w-7xl bg-white py-16 mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
          <p className="text-center text-gray-600 fpnt-medium mb-10">The compassionate professionals dedicated to your loved one's care</p>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-[#f9fafb] rounded-xl p-8 flex flex-col items-center text-center">
                <img src={member.avatar} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary" />
                <div className="font-semibold mb-1  text-lg">{member.name}</div>
                <div className="text-sm text-gray-500 text-primary font-medium  mb-3">{member.role}</div>
                <div className="text-gray-700 text-sm font-medium  mb-2">"{member.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Family-Style Environment Section */}
      <section className="w-full bg-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src={boutiqueImg} alt="Boutique Family-Style Environment" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-3xl text-start font-bold text-black mb-4">Boutique Family-Style Environment</h2>
            <p className="text-gray-700 text-left text-base md:text-lg mb-4">
              Our intimate 8-bed capacity ensures that every resident receives personalized attention and forms meaningful relationships with both staff and fellow residents.
            </p>
            <ul className="space-y-5 text-left mt-4">
              <li className="flex  items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaHome /></span>
                <span><span className="font-semibold">Home-Like Atmosphere</span><br/>Comfortable, residential setting that feels like home, not an institution</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaUsers /></span>
                <span><span className="font-semibold">Personal Relationships</span><br/>Small size allows for deep, meaningful connections between residents and staff</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaUserNurse /></span>
                <span><span className="font-semibold">Individualized Care</span><br/>Personalized care plans tailored to each resident's unique needs and preferences</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaShieldAlt /></span>
                <span><span className="font-semibold">Peace of Mind</span><br/>Families can rest assured knowing their loved ones are in caring, capable hands</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Licensed & Accredited Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Licensed & Accredited</h2>
          <p className="text-center text-gray-600 mb-10">Fully licensed and regulated to provide the highest quality care</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-primary-50 rounded-xl p-8 shadow flex flex-col items-center text-center">
              <span className="text-primary text-4xl mb-4 flex items-center justify-center"><FaCertificate /></span>
              <div className="font-semibold text-lg mb-2">State Assisted Living License</div>
              <div className="text-gray-600 mb-4">Fully licensed by the State of Maryland to provide assisted living services, ensuring compliance with all state regulations and safety standards.</div>
              <div className="bg-white rounded-lg px-4 py-2 text-xs text-gray-500 w-full">
                License #: AL-MD-2024-001<br/>
                Issued by: Maryland Department of Health
              </div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8 shadow flex flex-col items-center text-center">
              <span className="text-primary text-4xl mb-4 flex items-center justify-center"><FaUserNurse /></span>
              <div className="font-semibold text-lg mb-2">Residential Service Agency License</div>
              <div className="text-gray-600 mb-4">Licensed as a Residential Service Agency (RSA) to provide skilled nursing care, medication administration, and specialized health services.</div>
              <div className="bg-white rounded-lg px-4 py-2 text-xs text-gray-500 w-full">
                License #: RSA-MD-2024-001<br/>
                Issued by: Maryland Department of Health
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 shadow flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="font-semibold mb-2">What This Means for You</div>
            <div className="text-gray-600">Our dual licensing ensures that we can provide comprehensive care ranging from daily living assistance to skilled nursing services, all under one roof. This means your loved one can age in place without the need to transfer to different facilities as their care needs evolve.</div>
          </div>
        </div>
      </section>

      {/* Experience the Brickswood Difference Section */}
      <section className="w-full bg-primary py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Experience the Brickswood Difference</h2>
          <p className="mb-8 text-lg">Schedule a tour and meet our caring team in person</p>
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

      {/* Footer Section */}
      <footer className="w-full text-start bg-[#131926] py-10 mt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
          {/* Brickswood Info */}
          <div className="flex-1 mb-8 md:mb-0 min-w-[200px]">
            <div className="text-primary font-bold text-lg mb-1">Brickswood</div>
            <div className="text-white text-sm mb-1">Assisted Living & RSA Services</div>
            <div className="text-gray-400 text-sm">Kent County, Maryland</div>
          </div>
          {/* Quick Links */}
          <div className="flex-1 mb-8 md:mb-0 min-w-[200px]">
            <div className="text-white font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li><a href="/" className="text-white text-sm hover:underline">Home</a></li>
              <li><a href="/about" className="text-white text-sm hover:underline">About Us</a></li>
              <li><a href="/services" className="text-white text-sm hover:underline">Services</a></li>
              <li><a href="/activities" className="text-white text-sm hover:underline">Activities</a></li>
            </ul>
          </div>
          {/* Services */}
          <div className="flex-1 min-w-[200px]">
            <div className="text-white font-semibold mb-2">Services</div>
            <ul className="space-y-1">
              <li className="text-white text-sm">Assisted Living</li>
              <li className="text-white text-sm">RSA Home Health</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
} 