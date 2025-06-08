import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import exteriorImg1 from '../assets/gallery/extrerior-img-1.jpeg';
import exteriorImg2 from '../assets/gallery/extrerior-img-2.jpeg';
import exteriorImg3 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (1).jpeg';
import exteriorImg4 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (3).jpeg';
import exteriorImg5 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (4).jpeg';
import exteriorImg6 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (5).jpeg';
import livingImg1 from '../assets/gallery/comfortable-img-1.jpeg';
import livingImg2 from '../assets/gallery/comfortable-img-2.jpeg';
import livingImg3 from '../assets/gallery/comfortable-img-3.jpeg';
import livingImg4 from '../assets/gallery/comfortable-img-4.jpeg';
import livingImg5 from '../assets/gallery/comfortable-img-5.jpeg';
import livingImg6 from '../assets/gallery/comfortable-img-6.jpeg';
import livingImg7 from '../assets/gallery/comfortable-img-7.jpeg';
import activitiesImg1 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (6).jpeg';
import activitiesImg2 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (8).jpeg';
import activitiesImg3 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (9).jpeg';
import activitiesImg4 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM.jpeg';
import activitiesImg5 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (4).jpeg';
import staffImg1 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (1).jpeg';
import staffImg2 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (3).jpeg';
import staffImg3 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (5).jpeg';
import staffImg4 from '../assets/gallery/WhatsApp Image 2025-06-07 at 9.58.40 PM (6).jpeg';

const filters = [
  { label: 'All Photos', value: 'all' },
  { label: 'Exterior', value: 'exterior' },
  { label: 'Living Spaces', value: 'living' },
  { label: 'Activities', value: 'activities' },
];

const galleryData = {
  exterior: [
    { src: exteriorImg1, label: 'Front Entrance' },
    { src: exteriorImg2, label: 'Garden Patio' },
    { src: exteriorImg3, label: 'Welcome' },
    { src: exteriorImg4, label: 'Outdoor Seating' },
    { src: exteriorImg5, label: 'Pathway' },
    { src: exteriorImg6, label: 'Parking Area' },
  ],
  living: [
    { src: livingImg1, label: 'Dining Room' },
    { src: livingImg2, label: 'Resident Room' },
    { src: livingImg3, label: 'Common Area' },
    { src: livingImg4, label: 'Accessible Bathroom' },
    { src: livingImg5, label: 'Kitchen' },
    { src: livingImg6, label: 'Reading Area' },
    { src: livingImg7, label: 'Birthday Party' },
  ],
  activities: [
    { src: activitiesImg1, label: 'Bingo Night' },
    { src: activitiesImg2, label: 'Arts & Crafts' },
    { src: activitiesImg3, label: 'Movie Night' },
    { src: activitiesImg4, label: 'Music Therapy' },
    { src: livingImg7, label: 'Birthday Party' },
    { src: activitiesImg5, label: 'Gardening' },
  ],
  staff: [
    { src: staffImg1, label: 'Nursing Care' },
    { src: staffImg2, label: 'Personal Care' },
    { src: staffImg3, label: 'Therapy' },
    { src: staffImg4, label: 'Family Time' },
  ],
};

function getAllPhotos() {
  return [
    ...galleryData.exterior,
    ...galleryData.living,
    ...galleryData.activities,
    ...galleryData.staff,
  ];
}

export default function Gallery() {
  const [active, setActive] = useState('all');
  const getPhotos = () => {
    if (active === 'all') return getAllPhotos();
    if (active === 'exterior') return galleryData.exterior;
    if (active === 'living') return galleryData.living;
    if (active === 'activities') return galleryData.activities;
    return getAllPhotos();
  };

  return (
    <div className="w-full">
      {/* Photo Gallery Header */}
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-20 px-6 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-gray-600 mb-6">Discover the warmth and beauty of life at Brickswood Assisted Living</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map(f => (
              <button
                key={f.value}
                className={`px-6 py-2 rounded-full font-semibold border transition-all ${active === f.value ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}`}
                onClick={() => setActive(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior & Grounds */}
      <section className="w-full bg-white py-20 px-6 lg:px-24">
        <div className="max-w-7xl text-start mx-auto">
          <h2 className="text-2xl font-bold mb-1">Exterior & Grounds</h2>
          <p className="text-gray-600 mb-6">Our beautiful home features welcoming exteriors and peaceful outdoor spaces</p>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryData.exterior.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comfortable Living Spaces */}
      <section className="w-full bg-green-50 py-20 px-6 lg:px-24">
        <div className="max-w-7xl text-start mx-auto">
          <h2 className="text-2xl font-bold mb-1">Comfortable Living Spaces</h2>
          <p className="text-gray-600 mb-6">Explore our thoughtfully designed interior spaces that feel like home</p>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryData.living.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer relative">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life & Activities */}
      <section className="w-full py-20 px-6 lg:px-24">
        <div className="max-w-7xl text-start mx-auto">
          <h2 className="text-2xl font-bold mb-1">Life & Activities</h2>
          <p className="text-gray-600 mb-6">See our residents enjoying engaging activities and social connections</p>
          <div className="grid md:grid-cols-3 gap-8">
            {galleryData.activities.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer relative">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute left-2 bottom-2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caring Staff & Professional Services */}
      <section className="w-full bg-green-50 py-20 px-6 lg:px-24">
        <div className="max-w-7xl text-start mx-auto">
          <h2 className="text-2xl font-bold mb-1">Caring Staff & Professional Services</h2>
          <p className="text-gray-600 mb-6">Meet our dedicated team providing compassionate care around the clock</p>
          <div className="grid md:grid-cols-4 gap-8">
            {galleryData.staff.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-lg group cursor-pointer relative">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute left-2 bottom-2 bg-black bg-opacity-60 text-white text-xs px-3 py-1 rounded-full">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Brickswood in Person Section */}
      <section className="w-full bg-primary py-20 px-6 lg:px-24 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Experience Brickswood in Person</h2>
          <p className="mb-8 text-lg">Schedule a personal tour and see our beautiful home for yourself!</p>
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

      {/* Footer (Simple, as in image) */}
      <footer className="w-full bg-gray-900 text-gray-100 pt-12 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <div className="text-xl font-bold text-primary mb-2">Brickswood</div>
            <div className="mb-1 font-medium">Assisted Living & RSA Services</div>
            <div className="text-gray-400 text-sm">Kent County, Maryland</div>
          </div>
          <div className="text-left">
            <div className="font-semibold text-white mb-2">Quick Links</div>
            <ul className="space-y-1 text-gray-300 text-sm font-medium">
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
} 