import React from 'react';
import { FaHome, FaUserNurse, FaClock, FaPills, FaHandsWash, FaUtensils, FaBroom, FaUsers, FaCar, FaShieldAlt, FaStethoscope, FaSyringe, FaBath, FaDumbbell, FaHeartbeat, FaHouseUser, FaClipboardList, FaHeart, FaSyncAlt, FaCertificate } from 'react-icons/fa';

const assistedLivingServices = [
  { icon: <FaClock />, title: '24/7 Care & Supervision', desc: 'Round-the-clock professional staff ensuring safety and immediate assistance when needed' },
  { icon: <FaPills />, title: 'Medication Management', desc: 'Careful medication reminders and administration by trained staff' },
  { icon: <FaHandsWash />, title: 'Personal Care', desc: 'Assistance with bathing, dressing, grooming, and mobility as needed' },
  { icon: <FaUtensils />, title: 'Nutritious Meals', desc: 'Home-cooked meals with special dietary accommodations' },
  { icon: <FaBroom />, title: 'Housekeeping & Laundry', desc: 'Complete housekeeping services and personal laundry care' },
  { icon: <FaUsers />, title: 'Social Activities', desc: 'Engaging daily activities and social programs' },
  { icon: <FaCar />, title: 'Transportation', desc: 'Assistance with medical appointments and errands' },
  { icon: <FaShieldAlt />, title: 'Safe Environment', desc: 'Secure, accessible, and comfortable living spaces' },
];

const rsaServices = [
  { icon: <FaStethoscope />, title: 'Skilled Nursing Care', desc: 'Professional wound care, injection administration, and chronic disease management by licensed nurses.' },
  { icon: <FaSyringe />, title: 'Medication Administration', desc: 'Complex medication management and administration by licensed nursing staff.' },
  { icon: <FaBath />, title: 'Advanced Personal Care', desc: 'Specialized assistance with bathing, toileting, mobility, and hygiene for residents with complex needs' },
  { icon: <FaDumbbell />, title: 'Therapy Services', desc: 'Physical and occupational therapy coordination and support' },
  { icon: <FaHeartbeat />, title: 'Health Monitoring', desc: 'Regular health assessments, wellness checks, and health education' },
  { icon: <FaHouseUser />, title: 'Community Care', desc: 'In-home care services for community clients when available.' },
];

const careApproach = [
  { icon: <FaClipboardList />, title: 'Assessment', desc: 'Comprehensive evaluation of physical, emotional, and social needs to create individualized care plans' },
  { icon: <FaHeart />, title: 'Compassionate Care', desc: 'Delivered with dignity, respect, and genuine concern for each residents well-being and happiness' },
  { icon: <FaSyncAlt />, title: 'Ongoing Review', desc: 'Regular assessment and adjustment of care plans to meet changing needs and preferences' },
];

const licensedCare = [
  { icon: 'fa-certificate', title: 'State Assisted Living License', desc: 'Licensed by the State of Maryland to provide assisted living services, ensuring compliance with all state regulations and quality standards.' },
  { icon: 'fa-user-nurse', title: 'RSA License', desc: 'Residential Service Agency license allows us to provide skilled nursing services and advanced medical care under strict state oversight.' },
  { icon: 'fa-user-md', title: 'Licensed Nursing Staff', desc: 'Our team includes licensed nurses and certified nursing assistants committed to providing professional, compassionate care.' },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Our Comprehensive Care Services */}
      <section className="w-full bg-gradient-to-r from-green-50 to-[#eff6ff] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Comprehensive Care</span> Services
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Brickswood offers a full spectrum of assisted living and skilled nursing services, delivered in a warm, family-style environment by a compassionate team of professionals.
          </p>
        </div>
      </section>

      {/* Two Levels of Licensed Care */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 pl-4 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-left">Two Levels of Licensed Care</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-left">
              Brickswood is uniquely positioned to provide both assisted living and residential service agency (RSA) care under one roof, ensuring seamless transitions and comprehensive support for our residents' changing needs.
            </p>
            <div className="flex flex-col gap-5 mb-4">
              <div className="flex items-start gap-4">
                <span className="bg-primary-50 text-primary text-2xl p-3 rounded-xl flex items-center justify-center mt-1"><FaHome /></span>
                <div className="text-left">
                  <div className="font-semibold text-base md:text-lg mb-1">Assisted Living Services</div>
                  <div className="text-gray-600 text-sm md:text-base">Daily living assistance with medication reminders, meals, and personal care</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-primary-50 text-primary text-2xl p-3 rounded-xl flex items-center justify-center mt-1"><FaUserNurse /></span>
                <div className="text-left">
                  <div className="font-semibold text-base md:text-lg mb-1">RSA Health Services</div>
                  <div className="text-gray-600 text-sm md:text-base">Skilled nursing care including wound care, injections, and chronic disease management</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/src/assets/services/two-level-license-img.png" alt="Two Levels of Licensed Care" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Assisted Living Services */}
      <section className="w-full bg-primary-50 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Assisted Living Services</h2>
          <p className="text-center font-medium text-gray-600 mb-10">Personalized care that promotes independence while ensuring safety and comfort</p>
          <div className="grid md:grid-cols-4 gap-8">
            {assistedLivingServices.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-8 flex flex-col items-start text-left">
                <span className="bg-primary-100 text-primary text-2xl p-3 rounded-lg mb-4 flex items-center justify-center">{s.icon}</span>
                <div className="font-semibold mb-2">{s.title}</div>
                <div className="text-gray-600 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSA (Residential Service Agency) Services */}
      <section className="w-full bg-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-2">RSA (Residential Service Agency) Services</h2>
            <p className="text-center font-medium text-gray-600">Advanced medical care and skilled nursing services for complex health needs</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <ul className="space-y-6">
                {rsaServices.map((s, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary text-2xl p-3 rounded-lg flex items-center justify-center mt-1">{s.icon}</span>
                    <div className="text-left">
                      <div className="font-semibold">{s.title}</div>
                      <div className="text-gray-600 text-sm md:text-base">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 flex justify-center mt-10 md:mt-0">
              <img src="/src/assets/services/rsa-img.png" alt="RSA Services" className="rounded-2xl w-full max-w-md shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Care Approach */}
      <section className="w-full bg-primary-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Our Care Approach</h2>
          <p className="text-center text-gray-600 mb-10">Personalized care plans tailored to each resident's unique needs and preferences</p>
          <div className="grid md:grid-cols-3 gap-8">
            {careApproach.map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="bg-white text-primary text-3xl p-6 rounded-full mb-6 flex items-center justify-center shadow-sm">{c.icon}</span>
                <div className="font-semibold text-lg mb-2">{c.title}</div>
                <div className="text-gray-600 text-base">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed & Certified Care */}
      <section className="w-full bg-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Licensed & Certified Care</h2>
          <p className="text-center font-medium text-gray-600 mb-10">Fully licensed and regulated to provide the highest quality care in Kent County, Maryland</p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Cards */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-primary-50 rounded-xl p-6 flex items-start gap-4">
                <span className=" text-primary text-2xl p-3 rounded-full flex items-center justify-center mt-1"><FaCertificate /></span>
                <div>
                  <div className="font-semibold text-base md:text-lg mb-1">State Assisted Living License</div>
                  <div className="text-gray-600 text-sm md:text-base">Licensed by the State of Maryland to provide assisted living services, ensuring compliance with all state regulations and quality standards.</div>
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 flex items-start gap-4">
                <span className=" text-primary text-2xl p-3 rounded-full flex items-center justify-center mt-1"><FaShieldAlt /></span>
                <div>
                  <div className="font-semibold text-base md:text-lg mb-1">RSA License</div>
                  <div className="text-gray-600 text-sm md:text-base">Residential Service Agency license allows us to provide skilled nursing services and advanced medical care under strict state oversight.</div>
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 flex items-start gap-4">
                <span className=" text-primary text-2xl p-3 rounded-full flex items-center justify-center mt-1"><FaUserNurse /></span>
                <div>
                  <div className="font-semibold text-base md:text-lg mb-1">Licensed Nursing Staff</div>
                  <div className="text-gray-600 text-sm md:text-base">Our team includes licensed nurses and certified nursing assistants committed to providing professional, compassionate care.</div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center">
              <img src="/src/assets/services/licensed-and-certified-img.png" alt="Licensed & Certified Care" className="rounded-2xl w-full max-w-md object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Learn More About Our Services Section */}
      <section className="w-full bg-primary py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Learn More About Our Services</h2>
          <p className="mb-8 text-lg">Schedule a tour or contact us to discuss how we can support your loved one's needs</p>
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
      <footer className="w-full border-t-4 border-primary bg-[#111827] py-10 mt-0">
        <div className="max-w-7xl mx-auto text-start px-4 md:px-8">
          <div className="text-primary font-bold text-lg mb-1">Brickswood</div>
          <div className="text-gray-300 font-medium text-sm mb-1">Assisted Living & RSA Services</div>
          <div className="text-gray-400 text-sm">Kent County, Maryland</div>
        </div>
      </footer>
    </div>
  );
} 