import React from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          // The outer div is the grid item which will maintain the aspect ratio
          <div key={index} className="flex relative aspect-[9/16] w-full"> 
            {/* pb-9/16 is a custom class that you need to define in your tailwind.config.js to maintain the 9:16 aspect ratio */}
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
