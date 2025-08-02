import React from 'react';

const ImageMarquee = ({ images }) => {
  console.log('ImageMarquee rendering with images:', images);
  
  return (
    <section className="py-8 bg-gray-800 w-full overflow-hidden">
      <div className="text-center text-white mb-4">
        <h3 className="text-2xl font-bold text-orange-400">Our Products</h3>
        <p className="text-sm">{images?.length || 0} premium supplements</p>
      </div>
      
      {/* Working CSS Marquee */}
      <div className="w-full overflow-hidden bg-gray-700 p-4">
        <div className="flex animate-scroll">
          {/* Triple the images for seamless loop */}
          {[...images, ...images, ...images].map((image, index) => (
            <div
              key={index}
              className="w-64 h-40 rounded-lg overflow-hidden flex-shrink-0 mx-2"
            >
              <img
                src={image}
                alt={`Product ${(index % images.length) + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/f97316/ffffff?text=NTRL+Product';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee; 