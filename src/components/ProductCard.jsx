import React from 'react';

const ProductCard = ({ product, index }) => {
  const Icon = product.icon;
  const mainImage = product.images && product.images.length > 0 ? product.images[0] : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <div
      className={`product-card card-3d rounded-xl p-6 transform-style-preserve-3d perspective-1000`}
    >
      <div className="mb-4">
        <img
          src={mainImage}
          alt={`${product.name} image`}
          className="rounded-lg w-full h-52 object-cover product-image"
        />
      </div>
      <div className="flex items-center space-x-2 mb-3">
        <div className={`p-2 rounded-full bg-gradient-to-br ${product.color}`}>
          <Icon size={20} color="white" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold ntrl-font">{product.name}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
      <ul className="text-sm text-gray-300 mb-4 list-disc list-inside space-y-1">
        {product.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gradient-ntrl">{product.price}</span>
        <button className="modern-btn btn-3d ripple">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
