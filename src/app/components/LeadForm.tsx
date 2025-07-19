'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    budget: '',
    purpose: '',
    areas: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="lead-capture" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-[#d7b029]/50 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Find Your <span className="text-[#d7b029]">Ideal Property</span>
              </h2>
              <p className="text-lg text-gray-600">
                Get handpicked deals from top developers with personalized ROI & payment plan breakdown
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900"
                  required
                />
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900"
                  required
                />
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900 bg-white"
                  required
                >
                  <option value="">Budget Range</option>
                  <option value="500k-1m">AED 500K - 1M</option>
                  <option value="1m-2m">AED 1M - 2M</option>
                  <option value="2m-3m">AED 2M - 3M</option>
                  <option value="3m+">AED 3M+</option>
                </select>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900 bg-white"
                  required
                >
                  <option value="">Purpose</option>
                  <option value="investment">Investment</option>
                  <option value="personal">Personal Use</option>
                  <option value="both">Both</option>
                </select>
              </div>
              
              <div>
                <select
                  name="areas"
                  value={formData.areas}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900 bg-white"
                >
                  <option value="">Preferred Areas</option>
                  <option value="dubai-marina">Dubai Marina</option>
                  <option value="downtown">Downtown Dubai</option>
                  <option value="business-bay">Business Bay</option>
                  <option value="dubai-hills">Dubai Hills Estate</option>
                  <option value="jvc">JVC (Jumeirah Village Circle)</option>
                  <option value="arjan">Arjan</option>
                  <option value="palm-jumeirah">Palm Jumeirah</option>
                  <option value="difc">DIFC</option>
                  <option value="jbr">Jumeirah Beach Residence (JBR)</option>
                  <option value="dubai-creek">Dubai Creek Harbour</option>
                </select>
              </div>

              <div className="flex items-center space-x-4 my-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-900">Get handpicked deals from top developers</span>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#d7b029] hover:bg-[#d7b029]/90 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Get My Investment Report
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 