import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, MessageSquare, Mail, Plus, Minus, PackageOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { APP_CONFIG } from '../config/appConfig';
import { orderService } from '../utils/orderService';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const link = orderService.getWhatsAppLink(cart, cartTotal);
    window.open(link, '_blank');
  };

  const handleEmailOrder = () => {
    const link = orderService.getEmailLink(cart, cartTotal);
    window.location.href = link;
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <PackageOpen className="text-gray-400 w-12 h-12" />
        </div>
        <h2 className="text-3xl font-extrabold text-secondary mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          Look like you haven't added any electrical components or safety gear yet.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center space-x-2 px-8 py-4">
          <ArrowLeft size={20} />
          <span>Browse Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="flex-grow space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-extrabold text-secondary flex items-center space-x-3">
              <ShoppingCart size={32} className="text-primary" />
              <span>Your Cart</span>
            </h1>
            <button 
              onClick={clearCart}
              className="text-gray-400 hover:text-red-500 text-sm font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-gray-50/50 transition-colors">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl flex-shrink-0 p-2 border border-gray-100">
                    <img 
                      src={item.images[0] || APP_CONFIG.defaultImageFallback} 
                      alt={item.name} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-secondary text-lg mb-1 leading-tight">{item.name}</h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {APP_CONFIG.currencySymbol}{item.price.toLocaleString()} / {item.unit}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-100 rounded-xl p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-10 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white hover:shadow-sm transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <div className="text-right min-w-[100px]">
                      <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider text-[10px]">Subtotal</span>
                      <span className="font-bold text-lg">
                        {APP_CONFIG.currencySymbol}{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-all hover:bg-red-50 rounded-xl"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link to="/" className="inline-flex items-center space-x-2 text-gray-500 hover:text-secondary font-bold transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96">
          <div className="bg-secondary text-white rounded-3xl p-8 shadow-2xl sticky top-24">
            <h2 className="text-xl font-bold mb-8 border-b border-gray-700 pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({cart.length} items)</span>
                <span>{APP_CONFIG.currencySymbol}{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-green-400 font-bold uppercase text-[10px] tracking-widest mt-1">Calculated at checkout</span>
              </div>
              <div className="pt-4 border-t border-gray-700 mt-4 flex justify-between items-end">
                <span className="text-lg font-bold">Total Amount</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary">
                    {APP_CONFIG.currencySymbol}{cartTotal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center space-x-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold font-black hover:brightness-105 transition-all shadow-lg active:scale-95"
              >
                <MessageSquare size={20} />
                <span>Place via WhatsApp</span>
              </button>
              
              <button 
                onClick={handleEmailOrder}
                className="w-full flex items-center justify-center space-x-3 bg-white text-secondary py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95"
              >
                <Mail size={20} />
                <span>Request Email Quote</span>
              </button>
            </div>

            <p className="mt-8 text-xs text-gray-500 text-center leading-relaxed">
              * Final price may vary based on shipping, taxes, and availability. 
              We will contact you via your preferred channel to confirm the order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
