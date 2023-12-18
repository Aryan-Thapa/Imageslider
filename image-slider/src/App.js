// App.js
import React from 'react';
import './App.css';
import ImageSlider from './ImageSlider';
import Logo from './Logo';// Import the Logo component

function App() {
  return (
    <div className="App">
      <header>
        <Logo /> {/* Include the Logo component */}
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore</li>
            <li>Read More</li>
            {/* Add more navigation items as needed */}
          </ul>
        </nav>
      </header>
      <main>
        <ImageSlider />
      </main>
    </div>
  );
}

export default App;
