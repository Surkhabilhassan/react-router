import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LaunchImage from './img/shose2.jpg';
import LaunchImage1 from './img/shose3.jpg';
import LaunchImage2 from './img/shose4.jpg';

// Main App component with Router
function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
        <Link to="/Contact" style={{ marginRight: '1rem', color: '#fff' }}>Contact</Link>
        <Link to="/About" style={{ color: '#fff' }}>About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

// Home component
function Home() {
  return (
    <div>
      <h1>hi shose</h1>
      <img src={LaunchImage} alt="Launch" style={{ width: '50', height: '50', justifyContent:'center' }} /> {/* Adjust style as needed */}
      <p>rs:5000
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quisquam molestiae voluptatum magnam ipsum, similique temporibus delectus aperiam magni animi alias repudiandae asperiores non soluta eius dignissimos eum quibusdam facere?
      </p>
      <img src={LaunchImage1} alt="Launch" style={{ width: '50', height: '50' }} /> {/* Adjust style as needed */}
      <p>rs:4600
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis rem consequatur rerum nobis illum? Enim iusto obcaecati ipsum quod nobis, libero nulla! Soluta sint qui aliquid totam reiciendis quisquam omnis.
      </p>
      
      <img src={LaunchImage2} alt="Launch" style={{ width: '50', height: '50' }} /> {/* Adjust style as needed */}
      <p>rs:14000
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis rem consequatur rerum nobis illum? Enim iusto obcaecati ipsum quod nobis, libero nulla! Soluta sint qui aliquid totam reiciendis quisquam omnis.
      </p>
    </div>
  );
}

// Launch component
function Contact() {
  return (
    <div>

      <h1>hi world</h1>
      
    </div>
  );
}

// LaunchIndex component
function About() {
  return (
    <ul>
      <li>Launch Item 1</li>
      <li>Launch Item 2</li>
      <li>Launch Item 3</li>
    </ul>
  );
}

export default App;
