'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Can foreigners buy property in Dubai?',
    answer: 'Yes, foreigners can buy property in Dubai with 100% ownership rights in designated freehold areas. These include popular locations like Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, and many others. The UAE government actively encourages foreign investment in real estate.'
  },
  {
    id: 'faq-2',
    question: 'What are the typical rental yields in Dubai?',
    answer: 'Dubai offers some of the world\'s highest rental yields, typically ranging from 6% to 9% annually. Areas like JVC and Arjan can offer yields up to 9%, while premium locations like Downtown Dubai and Dubai Marina typically yield 6-7%. The exact yield depends on property type, location, and market conditions.'
  },
  {
    id: 'faq-3',
    question: 'What fees should I expect when buying property in Dubai?',
    answer: 'The main fees include: 4% Dubai Land Department (DLD) registration fee, administrative charges (varies by developer), and for off-plan properties, AED 1,000 Oqood fee. There are no annual property taxes, making Dubai very cost-effective compared to other global cities. Our team provides a complete breakdown before purchase.'
  },
  {
    id: 'faq-4',
    question: 'Can I get a mortgage as a non-resident?',
    answer: 'Yes, several UAE banks offer mortgages to non-residents, typically up to 75% of the property value. Requirements include proof of income, bank statements, and a good credit history. We work with multiple banking partners to help secure competitive mortgage rates for international buyers.'
  },
  {
    id: 'faq-5',
    question: 'What is the Dubai Golden Visa and how do I qualify?',
    answer: 'The Golden Visa is a 10-year renewable residency visa for property investors. You qualify by investing a minimum of AED 2 million in real estate. Benefits include long-term residency, ability to sponsor family members, and no requirement for a local sponsor. We provide guidance throughout the Golden Visa application process.'
  },
  {
    id: 'faq-6',
    question: 'What\'s the difference between off-plan and ready properties?',
    answer: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Off-plan properties</strong> are sold before or during construction. Benefits include lower prices, flexible payment plans (often 1-3% monthly), and potential capital appreciation by completion. However, there's construction risk and no immediate rental income.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Ready properties</strong> are completed and available for immediate occupancy. You can start earning rental income immediately, inspect the actual property, and there's no construction risk. However, they typically require larger upfront payments.
        </p>
      </>
    )
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleFAQ = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
          Get answers to the most common questions about investing in Dubai real estate
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.has(faq.id);
            return (
              <div key={faq.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <button 
                  className="w-full p-8 text-left focus:outline-none" 
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-gray-900 group-hover:text-[#d7b029] transition-colors">
                      {faq.question}
                    </h3>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className={`w-6 h-6 text-[#d7b029] transform transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    {typeof faq.answer === 'string' ? (
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 inline-flex items-center group">
            Still Have Questions? Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 