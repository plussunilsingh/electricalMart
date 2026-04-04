import React from 'react';
import { APP_CONFIG } from '../config/appConfig';

const TermsOfServicePage = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-3xl shadow-sm my-8 border border-gray-100">
    <h1 className="text-4xl font-extrabold text-secondary mb-8 pb-4 border-b">Terms of Service</h1>
    <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
      <p>Welcome to {APP_CONFIG.websiteName}. By accessing or placing wholesale orders through our platform, you agree to these operating conditions.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">1. Wholesale Supply Agreements</h2>
      <p>All items sold are guaranteed authentic and typically carry ISI, CE, or equivalent safety certifications unless explicitly noted. We operate strictly as an authorized supplier/distributor. Bulk pricing presented on the site is an estimate and final confirmation is processed by our sales representatives via WhatsApp/Email.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">2. Liability & Product Usage</h2>
      <p>Electrical components inherently carry risk. Installation of MCB Boards, Heavy Duty Cables, and High Tension Switchgears must explicitly be handled by certified professionals. {APP_CONFIG.websiteName} disclaims all consequential liabilities stemming from improper installation or misuse of hardware.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">3. Intellectual Property</h2>
      <p>Product data sheets, wiring diagrams, and proprietary images hosted on this site remain the intellectual property of their respective manufacturers or {APP_CONFIG.websiteName}.</p>
    </div>
  </div>
);

export default TermsOfServicePage;
