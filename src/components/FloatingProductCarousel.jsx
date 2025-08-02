import React from 'react';
import { motion } from 'framer-motion';

const FloatingProductCarousel = ({ productCategories }) => {
  const fallbackImage = 'https://via.placeholder.com/300x300?text=No+Image';

  return (
    <div className="relative h-96 overflow-hidden flex items-center justify-center perspective-1000">
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {productCategories.map((product, index) => {
          const image = product.images && product.images.length > 0 ? product.images[0] : fallbackImage;
          const angle = (360 / productCategories.length) * index;

          return (
            <motion.div
              key={product.id}
              className="absolute w-32 h-32"
              style={{
                transform: `rotateY(${angle}deg) translateZ(300px)`,
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                scale: 1.2,
                z: 50,
                boxShadow: '0 10px 20px rgba(249, 115, 22, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <img
                src={image}
                alt={product.name || 'Product'}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl shadow-md border border-orange-500/20"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingProductCarousel;
