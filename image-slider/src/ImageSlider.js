// ImageSlider.js
import React, { useState } from 'react';

const images = [
  { src: require('./image1.jpg'), name: '1964 Lincoln Continental', info: 'The 1964 Lincoln Continental is a classic American luxury car known for its distinctive design, highlighted by suicide doors and sleek lines. Powered by a V8 engine, it epitomizes 1960s automotive elegance, combining opulent interiors with a powerful driving experience.' },
  { src: require('./image2.jpg'), name: 'Volkswagen Beetle', info: 'The Volkswagen Beetle, introduced in 1938, is an iconic compact car recognized for its distinctive rounded design and rear-engine configuration. A symbol of affordability and cultural significance, the Beetle maintained popularity globally until its production ceased in 2019.' },
  { src: require('./image3.jpg'), name: '1952 Ford Customline', info: 'The 1952 Ford Customline stands as a testament to post-war American automotive craftsmanship, boasting a distinctive design and options for powerful V8 engines. This classic car reflects an era of innovation, capturing the essence of Fords commitment to style and performance during the early 1950s.' },
  { src: require('./image4.jpg'), name: 'The Citroen 2CV', info: 'The Citroen 2CV, introduced in 1948, is an iconic French car celebrated for its unique design and practicality. Affectionately known as the "Deux Chevaux" or "2CV," it featured a simple yet effective air-cooled engine, innovative suspension, and a distinctive, minimalist aesthetic.' },
  { src: require('./image5.jpg'), name: 'London Black Cab TX4 1997', info: 'The London Black Cab TX4, introduced in 1997, is a quintessential part of London transportation landscape. Renowned for its iconic design, the TX4 features a purpose-built structure to accommodate passengers and luggage. With a distinctive black exterior, spacious interior, and wheelchair accessibility.'},
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="slider-content">
        <h1>Collection of Vintage Cars</h1>
        <h2>Swipe to see more!</h2>
        <div className="image-container">
          <button className="slider-btn" onClick={prevImage}>&lt;</button>
          <img src={images[currentIndex].src} alt={`Vintage Car ${currentIndex + 1}`} />
          <div className="image-tag">{`${currentIndex + 1}/${images.length}`}</div>
          <button className="slider-btn" onClick={nextImage}>&gt;</button>
        </div>
        <p>{images[currentIndex].name}</p>
        <textarea className="car-info" readOnly value={images[currentIndex].info}></textarea>
      </div>
    </div>
  );
};

export default ImageSlider;
