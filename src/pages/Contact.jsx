import React from 'react';
import { FaAddressBook, FaPhone, FaEnvelope, FaLocationDot, FaClock, FaMapLocationDot, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaCalendar } from 'react-icons/fa6';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Contact Header */}
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-16 sm:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            Contact <span className="text-primary">Brickswood</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We're here to answer your questions and help you take the next step
          </p>
          <div className="flex flex-wrap gap-6 justify-center items-center text-primary text-lg">
            <span className="flex items-center gap-2"><span className="bg-primary/10 text-primary p-2 rounded-full"><FaPhone /></span> (410) 555-0123</span>
            <span className="flex items-center gap-2"><span className="bg-primary/10 text-primary p-2 rounded-full"><FaEnvelope /></span> info@brickswood.com</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-16 px-6 sm:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-50 rounded-xl p-8 shadow">
            <h2 className="text-2xl font-bold mb-6 text-left">Send Us a Message</h2>
            <form className="space-y-4 text-left">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1 text-left">First Name</label>
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary text-left" />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 text-sm mb-1 text-left">Last Name</label>
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary text-left" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1 text-left">Email Address</label>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary text-left" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1 text-left">Phone Number</label>
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary text-left" />
              </div>
              <div className="relative">
                <label className="block text-gray-700 text-sm mb-1 text-left">Preferred Tour Date</label>
                <input type="text" placeholder="dd/mm/yyyy" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary pr-10 text-left" onFocus={e => e.target.type = 'date'} onBlur={e => e.target.type = 'text'} />
                <span className="absolute right-3 top-9 text-gray-400 pointer-events-none"><FaCalendar /></span>
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1 text-left">Message</label>
                <textarea placeholder="Tell us about your needs or ask any questions..." className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary min-h-[100px] text-left" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-700 transition flex items-center justify-center gap-2">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
          {/* Info */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-6 text-left">Get in Touch</h2>
            <p className="mb-6 text-gray-700 text-left">We'd love to hear from you and answer any questions about our assisted living and RSA services.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-lg text-xl text-primary" style={{backgroundColor:'#ccfdf7'}}><FaPhone /></span>
                <div className="text-left">
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-700">(410) 555-0123</div>
                  <div className="text-xs text-gray-500">Available 24/7 for emergencies</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-lg text-xl  text-primary" style={{backgroundColor:'#ccfdf7'}}><FaEnvelope /></span>
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-700">info@brickswood.com</div>
                  <div className="text-xs text-gray-500">We respond within 24 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-lg text-xl  text-primary" style={{backgroundColor:'#ccfdf7'}}><FaLocationDot /></span>
                <div className="text-left">
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-700">123 Assisted Living Lane<br />Kent County, MD 21601</div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary text-white p-1 rounded-full text-xs"><FaClock /></span>
                <span className="font-semibold">Office Hours</span>
              </div>
              <div className="text-gray-700 grid text-sm font-medium grid-cols-2 gap-2">
                <div>Monday - Friday</div><div className="text-right">8:00 AM - 6:00 PM</div>
                <div>Saturday</div><div className="text-right">9:00 AM - 4:00 PM</div>
                <div>Sunday</div><div className="text-right">10:00 AM - 2:00 PM</div>
              </div>
              <div className="text-xs text-gray-500 mt-2">*Tours available by appointment outside office hours</div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-blue-600 text-white px-3 py-4 rounded-lg text-xl"><FaFacebookF /></a>
              <a href="#" className="bg-cyan-500 text-white px-3 py-4 rounded-lg text-xl"><FaTwitter /></a>
              <a href="#" className="bg-pink-500 text-white px-3 py-4 rounded-lg text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Location Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Visit Our Location</h2>
          <p className="text-gray-600 mb-8">Conveniently located in Kent County, Maryland</p>
          <div className="bg-gray-300 rounded-2xl flex flex-col items-center justify-center mx-auto mb-10" style={{height: 260}}>
            <span className="text-primary text-5xl mb-2"><FaMapLocationDot /></span>
            <span className="font-semibold text-primary">Interactive Map</span>
            <span className="text-gray-700 text-sm mt-1">123 Assisted Living Lane, Kent County, MD</span>
          </div>
        
        </div>
      </section>
      <section className="w-full bg-gray-50 ">
      <div className='bg-red-50 p-8'>
          <div className="bg-white rounded-xl p-6 flex items-center gap-4 max-w-4xl mx-auto border-l-4 border-red-500 shadow-sm">
            <span className="bg-red-100 text-red-500 py-4 px-3 rounded-lg text-xl"><FaPhone /></span>
            <div className="text-left">
              <div className="font-semibold text-base text-black mb-1">24/7 Emergency Contact</div>
              <div className="text-gray-600 text-sm mb-1">For urgent matters regarding current residents</div>
              <div className="text-red-600 font-bold text-lg">(410) 555-9999</div>
            </div>
          </div>
          </div>
      </section>
      {/* Ready to Schedule Your Visit Section */}
      <section className="w-full bg-primary py-16 px-6 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2"><span className=" px-2 rounded">Ready to Schedule Your Visit?</span></h2>
          <p className="mb-8 text-lg">Take the first step in finding the perfect home for your loved one</p>
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

      <Footer />
    </div>
  );
} 