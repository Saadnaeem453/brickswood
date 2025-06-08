import React from 'react';
import { FaBrain, FaHeart, FaPalette, FaBirthdayCake, FaTree, FaPaw, FaBus, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ourActivitiesImg from '../assets/activities/our-activities-program-img.png';
import benefitsImg from '../assets/activities/benifits-img.png';
import { Link } from 'react-router-dom';

const activitiesFeatures = [
  {
    icon: <FaBrain />,
    title: 'Cognitive Wellness',
    desc: 'Brain games, puzzles, and memory exercises to keep minds sharp',
    color: 'text-primary',
  },
  {
    icon: <FaHeart />,
    title: 'Social Connection',
    desc: 'Group activities that build friendships and community bonds',
    color: 'text-primary',
  },
  {
    icon: <FaPalette />,
    title: 'Creative Expression',
    desc: 'Arts, crafts, and music therapy for personal fulfillment',
    color: 'text-primary',
  },
];

const weeklyCalendar = [
  {
    day: 'Monday',
    color: 'bg-white',
    events: [
      { time: '10:00 AM', name: 'Morning Exercise', color: 'text-blue-600' },
      { time: '2:00 PM', name: 'Bingo', color: 'text-green-600' },
      { time: '7:00 PM', name: 'Movie Night', color: 'text-purple-600' },
    ],
  },
  {
    day: 'Tuesday',
    color: 'bg-white',
    events: [
      { time: '10:30 AM', name: 'Arts & Crafts', color: 'bg-yellow-100 text-yellow-800' },
      { time: '3:00 PM', name: 'Music Therapy', color: 'bg-red-100 text-red-700' },
    ],
  },
  {
    day: 'Wednesday',
    color: 'bg-white',
    events: [
      { time: '11:00 AM', name: 'Gardening Club', color: 'text-blue-600' },
      { time: '6:00 PM', name: 'Pizza Night', color: 'bg-pink-100 text-pink-700' },
    ],
  },
  {
    day: 'Thursday',
    color: 'bg-white',
    events: [
      { time: '10:00 AM', name: 'Wellness Check', color: 'bg-cyan-100 text-cyan-700' },
      { time: '2:30 PM', name: 'Game Day', color: 'bg-orange-100 text-orange-700' },
    ],
  },
  {
    day: 'Friday',
    color: 'bg-white',
    events: [
      { time: '10:30 AM', name: 'Reading Circle', color: 'text-blue-600' },
      { time: '7:30 PM', name: 'Karaoke Night', color: 'bg-lime-100 text-lime-700' },
    ],
  },
  {
    day: 'Saturday',
    color: 'bg-white',
    events: [
      { time: '11:00 AM', name: 'Family Social', color: 'text-green-600' },
      { time: '3:00 PM', name: 'Live Music', color: 'text-purple-600' },
    ],
  },
  {
    day: 'Sunday',
    color: 'bg-white',
    events: [
      { time: '10:00 AM', name: 'Spiritual Service', color: 'bg-red-100 text-red-700' },
      { time: '2:00 PM', name: 'Board Games', color: 'bg-yellow-100 text-yellow-800' },
    ],
  },
];

const monthlyEvents = [
  { icon: <FaBirthdayCake className="text-pink-600" />, title: 'Birthday Celebrations', desc: 'Monthly parties honoring our residents with cake, music, and joy', bg: 'bg-pink-50' },
  { icon: <FaTree className="text-green-700" />, title: 'Holiday Festivities', desc: 'Seasonal celebrations bringing families together for special occasions', bg: 'bg-green-50' },
  { icon: <FaPaw className="text-purple-600" />, title: 'Pet Therapy', desc: 'Visits from therapy animals bringing comfort and companionship', bg: 'bg-purple-50' },
  { icon: <FaBus className="text-blue-600" />, title: 'Community Outings', desc: 'Supervised trips to local attractions, restaurants, and events', bg: 'bg-blue-50' },
];

const benefits = [
  { icon: 'fa-smile-beam', title: 'Emotional Well-being', desc: 'Social engagement boosts mood and reduces feelings of isolation.' },
  { icon: 'fa-brain', title: 'Cognitive Health', desc: 'Activities stimulate the mind and help maintain memory and focus.' },
  { icon: 'fa-users', title: 'Stronger Connections', desc: 'Build lasting friendships and a sense of belonging.' },
];

export default function Activities() {
  return (
    <div className="w-full">
      {/* Main Heading Section */}
      <section className="w-full bg-gradient-to-r from-primary-50 to-[#eff6ff] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Life Enrichment</h1>
          <p className="text-lg text-gray-600 mb-2">
            Discover our vibrant community where every day brings new opportunities for joy, connection, and personal growth
          </p>
        </div>
      </section>

      {/* Our Activities Program Section */}
      <section className="w-full bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 max-w-xl pl-4 md:pl-12">
            <h2 className="text-2xl text-start md:text-3xl font-bold text-black mb-4">Our Activities Program</h2>
            <p className="text-gray-700 text-start text-base md:text-lg mb-6">
              At Brickswood, we believe that staying active and engaged is essential for overall well-being. Our comprehensive activities program is designed to stimulate the mind, body, and spirit while fostering meaningful connections within our community.
            </p>
            <ul className="space-y-6">
              {activitiesFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="bg-primary-50 text-primary text-2xl p-3 rounded-full flex items-center justify-center mt-1">{f.icon}</span>
                  <div className="flex flex-col text-left">
                    <span className="font-semibold text-base">{f.title}</span>
                    <span className="text-gray-600 text-sm">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Right */}
          <div className="flex-1 flex justify-center">
            <img src={ourActivitiesImg} alt="Our Activities Program" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Sample Weekly Calendar Section */}
      <section className="w-full bg-primary-50 py-16 px-4 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Sample Weekly Calendar</h2>
          <p className="text-center text-gray-600 mb-10">Here's what a typical week looks like at Brickswood</p>
          <div className="overflow-x-auto">
            <div className="min-w-[900px] rounded-2xl overflow-hidden shadow-lg bg-white">
              <div className="grid grid-cols-7">
                {weeklyCalendar.map((day, i) => (
                  <div key={i} className="border-r last:border-r-0 border-gray-200">
                    <div className="bg-primary text-white text-center py-3 font-semibold text-lg">{day.day}</div>
                    <div className="p-4 space-y-3 min-h-[180px]">
                      {day.events.map((event, j) => (
                        <div
                          key={j}
                          className={`rounded-lg px-2 py-1 font-medium text-sm flex flex-col justify-center items-start ${
                            event.name === 'Morning Exercise' ? 'bg-blue-100 text-blue-700' :
                            event.name === 'Bingo' ? 'bg-green-100 text-green-700' :
                            event.name === 'Movie Night' ? 'bg-purple-100 text-purple-700' :
                            event.name === 'Arts & Crafts' ? 'bg-yellow-100 text-yellow-800' :
                            event.name === 'Music Therapy' ? 'bg-red-100 text-red-700' :
                            event.name === 'Gardening Club' ? 'bg-blue-100 text-blue-700' :
                            event.name === 'Pizza Night' ? 'bg-pink-100 text-pink-700' :
                            event.name === 'Wellness Check' ? 'bg-cyan-100 text-cyan-700' :
                            event.name === 'Game Day' ? 'bg-orange-100 text-orange-700' :
                            event.name === 'Reading Circle' ? 'bg-blue-100 text-blue-700' :
                            event.name === 'Karaoke Night' ? 'bg-green-100 text-green-700' :
                            event.name === 'Family Social' ? 'bg-green-100 text-green-700' :
                            event.name === 'Live Music' ? 'bg-purple-100 text-purple-700' :
                            event.name === 'Spiritual Service' ? 'bg-red-100 text-red-700' :
                            event.name === 'Board Games' ? 'bg-yellow-100 text-yellow-800' :
                            ''
                          }`}
                        >
                          <span>{event.time}</span>
                          <span>{event.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Special Events Section */}
      <section className="w-full bg-white py-16 px-4 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Monthly Special Events</h2>
          <p className="text-center text-gray-500 mb-8">Celebrating life's special moments together</p>
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            {monthlyEvents.map((event, i) => (
              <div key={i} className={`rounded-xl p-8 flex flex-col items-start text-left ${event.bg}`} style={{minHeight:'180px'}}>
                <span className="text-3xl mb-4">{event.icon}</span>
                <div className="font-semibold mb-2">{event.title}</div>
                <div className="text-sm text-gray-700">{event.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Social Engagement Section */}
      <section className="w-full bg-[#f7f8fa] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          {/* Left Image */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img src={benefitsImg} alt="Benefits of Social Engagement" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
          {/* Right */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-left">Benefits of Social Engagement</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-left">
              Research shows that active social engagement and meaningful activities significantly improve quality of life for seniors.
            </p>
            <ul className="list-disc pl-6 space-y-5 mt-2 text-left">
              <li className="text-gray-800 text-base">Improved cognitive function and memory retention</li>
              <li className="text-gray-800 text-base">Reduced feelings of loneliness and depression</li>
              <li className="text-gray-800 text-base">Enhanced physical health and mobility</li>
              <li className="text-gray-800 text-base">Stronger sense of purpose and belonging</li>
              <li className="text-gray-800 text-base">Better sleep patterns and overall wellness</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Families Are Always Welcome Section */}
      <section className="w-full bg-primary py-16 px-4 md:px-8 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Families Are Always Welcome</h2>
          <p className="mb-8 text-lg">We encourage family members to join our activities and events. Your participation makes these moments even more special for your loved ones and strengthens our community bonds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition" type="button">
              Join Our Next Event
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition">
              View Event Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Experience Our Vibrant Community Section */}
      <section className="w-full bg-white py-16 px-4 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Experience Our Vibrant Community</h2>
          <p className="mb-8 text-lg text-gray-600">Schedule a visit to see our activities program in action</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary-700 transition" type="button">
              Schedule a Tour
            </button>
            <a href="tel:4105550123" className="border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition flex items-center justify-center">
              Call (410) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-100 pt-12 pb-6 px-4 md:px-8">
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