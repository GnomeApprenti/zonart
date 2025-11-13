// src/components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.jpg",
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Galerie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Œuvre ${i + 1}`}
              className="rounded-xl shadow-md object-cover w-full h-[400px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
