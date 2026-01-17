import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Shield, Zap, TrendingUp } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { APP_CONFIG } from '../config/appConfig';

// Factory for category badges
const BadgeFactory = ({ category }) => {
  const badgeStyles = {
    "Wires & Cables": { bg: "bg-blue-100", text: "text-blue-700", Icon: Zap },
    "Safety Equipment": { bg: "bg-red-100", text: "text-red-700", Icon: Shield },
    "Lighting": { bg: "bg-yellow-100", text: "text-yellow-700", Icon: Zap },
    "default": { bg: "bg-gray-100", text: "text-gray-700", Icon: TrendingUp },
  };

  const style = badgeStyles[category] || badgeStyles.default;
  const { Icon } = style;

  return (
    <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text}`}>
      <Icon size={12} />
      <span>{category}</span>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const imageSrc = product.images.length > 0 && product.images[0] 
    ? product.images[0] 
    : APP_CONFIG.defaultImageFallback;

  return (
    <Link to={`/product/${product.id}`} className="card-premium group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <BadgeFactory category={product.category} />
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-secondary line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Price per {product.unit}</span>
            <span className="text-xl font-bold text-secondary">
              {APP_CONFIG.currencySymbol}{product.price.toLocaleString()}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`p-3 rounded-xl shadow-sm transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-primary text-secondary hover:bg-yellow-400 hover:shadow-md'
            }`}
            aria-label="Add to cart"
          >
            {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
