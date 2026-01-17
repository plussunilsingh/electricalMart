import React from 'react';
import { Mail, Phone, MapPin, Zap, Facebook, Twitter, Instagram } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Zap className="text-primary w-6 h-6 fill-current" />
              <span className="font-bold text-xl">{APP_CONFIG.websiteName}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Leading supplier of high-quality electrical and industrial safety products in India. 
              Built on trust, quality, and service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-2 text-sm">
              {APP_CONFIG.categories.slice(0, 5).map(cat => (
                <li key={cat}>
                  <a href={`/?category=${encodeURIComponent(cat)}`} className="hover:text-primary transition-colors">{cat}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+{APP_CONFIG.whatsAppNumber}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>{APP_CONFIG.businessEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} {APP_CONFIG.websiteName}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
