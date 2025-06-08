import React from 'react';
import { FaPhone, FaClipboardList, FaUserCheck, FaRegCalendarCheck, FaUserNurse, FaBed, FaUsers, FaPills, FaUtensils, FaBroom, FaEnvelope, FaMapMarkerAlt, FaChevronLeft, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Admissions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions & <span className="text-primary">Frequently Asked Questions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Learn about our admissions process, what to expect on move-in day, and get answers to common questions about life at Brickswood.
          </p>
        </div>
      </section>

      {/* Simple Admissions Process */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Simple Admissions Process</h2>
          <p className="text-center text-gray-600 mb-10 text-base md:text-lg">Getting started at Brickswood is easy with our step-by-step process</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#b2f5ea] text-[#11998e] text-2xl font-bold mb-4">1</span>
              <div className="font-bold text-lg mb-2">Initial Contact</div>
              <div className="text-gray-700 text-base">Call us or fill out our contact form to discuss your needs and schedule a consultation.</div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#b2f5ea] text-[#11998e] text-2xl font-bold mb-4">2</span>
              <div className="font-bold text-lg mb-2">Tour & Assessment</div>
              <div className="text-gray-700 text-base">Visit our home for a personal tour and comprehensive care assessment with our team.</div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#b2f5ea] text-[#11998e] text-2xl font-bold mb-4">3</span>
              <div className="font-bold text-lg mb-2">Care Plan Creation</div>
              <div className="text-gray-700 text-base">We develop a personalized care plan tailored to your loved one's specific needs and preferences.</div>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <span className="w-16 h-16 flex items-center justify-center rounded-full bg-[#b2f5ea] text-[#11998e] text-2xl font-bold mb-4">4</span>
              <div className="font-bold text-lg mb-2">Move-In Day</div>
              <div className="text-gray-700 text-base">We'll help make the transition smooth and welcoming for your family member.</div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect on Move-In Day */}
      <section className="w-full bg-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">What to Expect on Move-In Day</h2>
            <ul className="space-y-5 text-left">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaRegCalendarCheck /></span>
                <span><span className="font-semibold">Flexible Timing</span><br />Move-in can be scheduled at your convenience. We recommend morning arrivals for the best experience.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaUserNurse /></span>
                <span><span className="font-semibold">Personal Welcome</span><br />Our team will greet you, help settle in, and provide a personal welcome orientation.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaBed /></span>
                <span><span className="font-semibold">Room Setup</span><br />Bring favorite belongings and arrange the room for maximum comfort.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-1"><FaUsers /></span>
                <span><span className="font-semibold">Meet the Community</span><br />Meet fellow residents, staff, and others to help foster immediate connections.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/src/assets/see-our-home-img-1.png" alt="Move-In Day" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white text-start py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl  font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className='text-center text-gray-600 font-medium mb-8'>Get answers to common questions about Brickswood Assisted Living</p>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What are your rates and payment options?</div>
              <div className="text-gray-600 text-sm">We offer competitive private-pay rates with transparent pricing. Contact us for current rates and payment plan options. We currently have immediate openings available.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What is included in the monthly fee?</div>
              <div className="text-gray-600 text-sm">Our all-inclusive fee covers 24/7 care, three home-cooked meals daily, medication management, housekeeping, laundry, activities, and transportation assistance.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What are your visiting hours?</div>
              <div className="text-gray-600 text-sm">Family and friends are welcome anytime. We encourage regular visits and family participation in our activities and special events.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">Can residents bring personal belongings?</div>
              <div className="text-gray-600 text-sm">Absolutely! We encourage residents to bring furniture, photos, and personal items to make their room feel like home. We will help with arrangement.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What medical services are available?</div>
              <div className="text-gray-600 text-sm">As a licensed RSA, we provide skilled nursing care, medication administration, wound care, and coordinate with physicians. We also arrange transportation for medical appointments.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">How many residents do you accommodate?</div>
              <div className="text-gray-600 text-sm">We maintain a small, intimate environment with only 8 residents, ensuring personalized attention and a warm family atmosphere.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What activities and programs do you offer?</div>
              <div className="text-gray-600 text-sm">We provide daily activities including <span className="font-semibold">bingo</span>, <span className="font-semibold">crafts</span>, music, games, therapy, gardening, and special events. Our calendar is designed to engage all interests and abilities.</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="font-semibold mb-1">What if care needs change over time?</div>
              <div className="text-gray-600 text-sm">We regularly reassess each resident's needs and adjust care plans accordingly. Our RSA license allows us to provide enhanced medical care as needs evolve.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="w-full bg-primary-600 py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Still Have Questions?</h2>
          <p className="mb-10 text-base font-medium">Our team is here to help you through every step of the process</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Call Us Card */}
            <div className="bg-[#0f766e]  rounded-lg p-8 flex flex-col items-center justify-center shadow">
              <span className="text-3xl mb-3"><FaPhone /></span>
              <div className="font-bold text-lg mb-1">Call Us</div>
              <div className="text-white text-base mb-0">(410) 555-0123</div>
            </div>
            {/* Schedule Tour Card */}
            <div className="bg-[#0f766e]  rounded-lg p-8 flex flex-col items-center justify-center shadow">
              <span className="text-3xl mb-3"><FaRegCalendarCheck /></span>
              <div className="font-bold text-lg mb-1">Schedule Tour</div>
              <div className="text-white text-base mb-0">Visit our home</div>
            </div>
            {/* Email Us Card */}
            <div className="bg-[#0f766e]  rounded-lg p-8 flex flex-col items-center justify-center shadow">
              <span className="text-3xl mb-3"><FaEnvelope /></span>
              <div className="font-bold text-lg mb-1">Email Us</div>
              <div className="text-white text-base mb-0">info@brickswood.com</div>
            </div>
          </div>
          <button className="mt-2 bg-white text-primary font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition" type="button">
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Footer (reuse Home page footer for pixel-perfect consistency) */}
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