'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    budget: '',
    purpose: '',
    preferredAreas: ''
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

  const budgetRanges = [
    'Under AED 500K',
    'AED 500K - 1M',
    'AED 1M - 2M',
    'AED 2M - 3M',
    'AED 3M - 5M',
    'Above AED 5M'
  ];

  const dubaiAreas = [
    'Downtown Dubai',
    'Dubai Marina',
    'Business Bay',
    'JVC (Jumeirah Village Circle)',
    'Arjan',
    'Dubai Hills Estate',
    'Palm Jumeirah',
    'DIFC',
    'Jumeirah Beach Residence (JBR)',
    'Dubai Creek Harbour',
    'City Walk',
    'Al Barari',
    'Dubai Sports City',
    'International City',
    'Dubai South',
    'Meydan'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#F8F8F8] via-white to-[#F8F8F8]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Let's Find Your Ideal Flat
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Share your requirements and get a personalized investment report with handpicked properties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 hover:border-gray-300"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 hover:border-gray-300"
                  />
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 hover:border-gray-300 bg-white"
                  >
                    <option value="">Select your budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Purpose */}
                <div className="space-y-2">
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                    Purpose *
                  </label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 hover:border-gray-300 bg-white"
                  >
                    <option value="">Select purpose</option>
                    <option value="Investment">Investment</option>
                    <option value="Personal Use">Personal Use</option>
                  </select>
                </div>

                {/* Preferred Areas */}
                <div className="space-y-2">
                  <label htmlFor="preferredAreas" className="block text-sm font-medium text-gray-700">
                    Preferred Areas
                  </label>
                  <select
                    id="preferredAreas"
                    name="preferredAreas"
                    value={formData.preferredAreas}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 hover:border-gray-300 bg-white"
                  >
                    <option value="">Select preferred area (optional)</option>
                    {dubaiAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 flex items-center justify-center group"
                >
                  Get My Investment Report
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              {/* What You Get */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <h3 className="font-[var(--font-playfair)] text-2xl font-semibold mb-6 text-gray-900">
                  What You'll Get
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Get handpicked deals from top developers</p>
                      <p className="text-gray-600 text-sm mt-1">Exclusive access to premium properties from Emaar, Sobha, Damac, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] flex items-center justify-center mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">Personalized ROI & payment plan breakdown</p>
                      <p className="text-gray-600 text-sm mt-1">Detailed analysis of rental yields, appreciation potential, and flexible payment options</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-2xl p-8 border border-[#d7b029]/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d7b029] mb-2">500+</div>
                    <div className="text-gray-700 text-sm">Happy Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d7b029] mb-2">8.5%</div>
                    <div className="text-gray-700 text-sm">Avg. ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d7b029] mb-2">24/7</div>
                    <div className="text-gray-700 text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#d7b029] mb-2">100%</div>
                    <div className="text-gray-700 text-sm">Free Service</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">RERA Licensed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159-.026-1.563.434L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                    <span className="text-gray-700 text-sm font-medium">Secure Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 