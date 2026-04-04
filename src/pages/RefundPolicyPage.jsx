import React from 'react';
import { APP_CONFIG } from '../config/appConfig';

const RefundPolicyPage = () => (
  <div className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-3xl shadow-sm my-8 border border-gray-100">
    <h1 className="text-4xl font-extrabold text-secondary mb-8 pb-4 border-b">Refund & Returns Policy</h1>
    <div className="space-y-6 text-gray-600 leading-relaxed font-medium">
      <p>At {APP_CONFIG.websiteName}, we run massive fulfillment logistics. We guarantee 100% replacement for physically damaged goods reported at the time of unboxing.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">1. Conditions for Return</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>The transit package was delivered fundamentally compromised.</li>
        <li>The hardware fails initial continuity testing or lacks the advertised certifications.</li>
        <li>Custom-cut cables or assembled penal boards cannot be returned under normal circumstances unless critically flawed.</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">2. GST Credit & Refunds</h2>
      <p>If a refund is legally processed for a B2B transaction where a GST invoice was already filed, credit notes will be issued against your business entity. Funds will be directly reversed to the original corporate bank account within 7-14 business days following warehouse inspection.</p>
      
      <h2 className="text-2xl font-bold text-secondary mt-8">3. How to Initiate</h2>
      <p>Send a WhatsApp message directly to {APP_CONFIG.whatsAppNumber} with photographic evidence of the damaged material, and your dedicated wholesale rep will dispatch a return pickup immediately.</p>
    </div>
  </div>
);

export default RefundPolicyPage;
