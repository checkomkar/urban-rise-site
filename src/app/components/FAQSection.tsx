'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is it better to buy ready or off-plan property in Dubai?",
    answer: "Both have advantages. Ready properties offer immediate rental income and no construction risk, while off-plan properties typically offer lower prices, flexible payment plans (often 1-5% monthly), and potential capital appreciation during construction. Off-plan also allows customization options. Your choice depends on your investment timeline, risk tolerance, and cash flow preferences."
  },
  {
    question: "Can I get a Dubai visa by investing in real estate?",
    answer: "Yes! Dubai offers Golden Visa (long-term residency) for property investments of AED 2 million or more in residential properties, or AED 5 million for other types. The Golden Visa is valid for 10 years, renewable, includes family members, and doesn't require a sponsor. Smaller investments may qualify for standard investor visas with shorter durations."
  },
  {
    question: "What are service charges in Dubai flats?",
    answer: "Service charges cover building maintenance, security, common area upkeep, and utilities for shared spaces. They typically range from AED 10-22 per square foot annually, depending on the building's amenities and location. Luxury developments with extensive facilities (pools, gyms, concierge) have higher charges. Always factor these into your investment calculations."
  },
  {
    question: "How much rental income can I expect?",
    answer: "Dubai rental yields typically range from 6-9% annually, varying by location and property type. Prime areas like Dubai Marina and Downtown may offer 6-7%, while emerging areas like Business Bay can yield 8-9%. Actual returns depend on property condition, amenities, market conditions, and your property management approach."
  },
  {
    question: "What documents do I need to buy property in Dubai?",
    answer: "Key documents include: valid passport, Emirates ID (obtainable after arrival), NOC from employer if applicable, bank statements, property reservation form, and sales & purchase agreement. For financing, you'll need salary certificates and bank statements. We assist with all documentation to ensure compliance with DLD requirements."
  },
  {
    question: "Can foreigners get mortgages in Dubai?",
    answer: "Yes, non-residents can obtain mortgages from UAE banks. Typically, you can finance up to 75% of property value with competitive interest rates. Requirements include minimum income (usually AED 15,000+ monthly), employment letter, bank statements, and down payment. Some banks offer special packages for expatriates and non-residents."
  },
  {
    question: "What are the ongoing costs of owning property in Dubai?",
    answer: "Main ongoing costs include: annual service charges (AED 10-22/sqft), utility connection fees if applicable, property management fees (if using a management company), and annual housing fee of 5% of rental value for Dubai Municipality. There's no annual property tax in Dubai, making it very investor-friendly."
  },
  {
    question: "How long does the property buying process take?",
    answer: "For ready properties, the process typically takes 2-4 weeks from offer acceptance to final registration. This includes: offer submission, initial payment, NOC processing, final payment, and DLD registration. Off-plan properties have longer timelines aligned with construction completion but allow extended payment schedules."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#d7b029]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about investing in Dubai real estate. 
            Can't find what you're looking for? Ask us directly!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openItems.has(index);
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg hover:border-[#d7b029]/50 transition-colors shadow-sm"
                >
                  <button 
                    className="text-left hover:text-[#d7b029] transition-colors py-6 w-full px-6 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
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
                    <div className="text-gray-600 leading-relaxed pb-6 px-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Our real estate experts are here to help. Get personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#d7b029] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d7b029]/90 transition-all duration-300 flex items-center justify-center group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              Ask Us Directly
            </button>
            <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
              See Full FAQ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 