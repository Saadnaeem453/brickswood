import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo and subtitle */}
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary">Brickswood</span>
                  <span className="text-xs text-gray-500 font-normal ml-1">Assisted Living</span>
                </Link>
              </div>
              {/* Navigation links */}
              <div className="hidden md:flex gap-6 items-center">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Services</NavLink>
                <NavLink to="/activities" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Activities</NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Gallery</NavLink>
                <NavLink to="/admissions" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Admissions</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}>Contact</NavLink>
              </div>
              {/* Call Now button */}
              <div className="ml-4">
                <a href="tel:4105550123" className="bg-primary text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-primary-700 transition text-sm">Call Now</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="w-full mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
