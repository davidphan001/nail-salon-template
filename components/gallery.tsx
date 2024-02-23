// components/Gallery.js
"use client";
import { useState, useEffect } from "react";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-full mx-auto h-screen">
      <img
        src={images[currentImage]}
        alt="Gallery Image"
        className="w-full h-auto max-h-screen max-w-full object-cover"
      />
    </div>
  );
};

export default Gallery;
