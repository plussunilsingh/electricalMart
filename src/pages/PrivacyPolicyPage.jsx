import React from 'react';
import { APP_CONFIG } from '../config/appConfig';

const PrivacyPolicyPage = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-3xl shadow-sm my-8 border border-gray-100">
    <h1 className="text-4xl font-extrabold text-secondary mb-8 pb-4 border-b">Privacy Policy</h1>
    <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="text-2xl font-bold text-secondary mt-8">1. Information We Collect</h2>
      <p>As a verified B2B Electrical Supplier, {APP_CONFIG.websiteName} exclusively collects information required to process bulk transactions, generate GST-compliant invoices, and safely fulfill heavy freight logistics. This includes your business name, GSTIN (optional), shipping addresses, and mobile contact numbers.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">2. How We Use Information</h2>
      <p>Your data is used strictly to process orders and communicate transit tracking logic. Because we conduct high-volume B2B scaling, your contact data may be passed to our trusted LTL/Freight carriers purely for delivery optimization.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">3. Data Security & Storage</h2>
      <p>We deploy enterprise-grade encryption. We do not sell your data. Your order history and pricing structures are locked securely under your customer profile to grant you rapid 1-click reordering.</p>
      <p className="mt-8 font-bold text-secondary">For any privacy compliance inquiries, contact: {APP_CONFIG.businessEmail}</p>
    </div>
  </div>
);

export default PrivacyPolicyPage;
