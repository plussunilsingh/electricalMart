import React from 'react';
import { Mail, Phone, MapPin, Zap, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
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
              <a
                href={APP_CONFIG.socialLinks.facebook}
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href={APP_CONFIG.socialLinks.twitter}
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href={APP_CONFIG.socialLinks.instagram}
                className="hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-2 text-sm">
              {APP_CONFIG.categories.slice(0, 5).map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/?category=${encodeURIComponent(cat)}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {APP_CONFIG.businessHours.map((hours, i) => (
                <li key={i}>{hours}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>{APP_CONFIG.physicalAddress}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>{APP_CONFIG.whatsAppNumber}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>{APP_CONFIG.businessEmail}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>
            © {new Date().getFullYear()} {APP_CONFIG.websiteName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={APP_CONFIG.legalLinks.privacy} className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to={APP_CONFIG.legalLinks.terms} className="hover:text-white">
              Terms of Service
            </Link>
            <Link to={APP_CONFIG.legalLinks.refund} className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
