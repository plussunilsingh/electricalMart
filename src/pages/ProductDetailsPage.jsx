import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, ShieldCheck, Zap, Package, MessageSquare, Mail, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import productsData from '../data/products.json';
import { APP_CONFIG } from '../config/appConfig';
import { orderService } from '../utils/orderService';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="btn-primary">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleWhatsAppOrder = () => {
    const link = orderService.getWhatsAppLink([{ ...product, quantity }], product.price * quantity);
    window.open(link, '_blank');
  };

  const imageSrc = product.images.length > 0 && product.images[0] 
    ? product.images[0] 
    : APP_CONFIG.defaultImageFallback;

  return (
    <div className="max-w-6xl mx-auto py-8">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center space-x-2 text-gray-500 hover:text-secondary mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to products</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center p-8">
            <img 
              src={imageSrc} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transition-transform hover:scale-105 duration-500"
            />
          </div>
          {/* Multiple images fallback/placeholder */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 cursor-pointer hover:border-primary transition-all">
                <img src={imageSrc} alt={`${product.name} ${i}`} className="w-full h-full object-contain mix-blend-multiply opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-extrabold text-secondary mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center space-x-4 mb-8">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Estimated Price</span>
              <span className="text-4xl font-black text-secondary">
                {APP_CONFIG.currencySymbol}{product.price.toLocaleString()}
                <span className="text-sm font-normal text-gray-400 ml-2">/ {product.unit}</span>
              </span>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 rounded-2xl p-1 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all text-xl font-bold"
                >-</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 bg-transparent text-center font-bold focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm transition-all text-xl font-bold"
                >+</button>
              </div>
              <p className="text-sm text-gray-500 font-medium">Select quantity</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleAddToCart}
                className={`flex items-center justify-center space-x-3 py-4 px-8 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isAdded 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary text-secondary hover:bg-yellow-400'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check size={20} />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <button 
                onClick={handleWhatsAppOrder}
                className="flex items-center justify-center space-x-3 py-4 px-8 rounded-2xl font-bold bg-[#25D366] text-white transition-all shadow-lg hover:shadow-xl hover:brightness-105"
              >
                <MessageSquare size={20} />
                <span>Order on WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 space-y-4">
            <h4 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Product Details & Trust</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg"><Zap size={18} /></div>
                <span className="text-sm font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-50 text-green-600 p-2 rounded-lg"><ShieldCheck size={18} /></div>
                <span className="text-sm font-semibold">Quality Assured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-50 text-purple-600 p-2 rounded-lg"><Package size={18} /></div>
                <span className="text-sm font-semibold">Bulk Pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-50 text-orange-600 p-2 rounded-lg"><Mail size={18} /></div>
                <span className="text-sm font-semibold">Help Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
