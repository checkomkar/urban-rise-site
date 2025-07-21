"use client";

const AboutSection = () => {
  const visionPoints = [
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      heading: "Tech-Driven Approach",
      text: "Leveraging deep tech experience to automate and streamline your investment journey."
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      heading: "Local Market Insight",
      text: "Backed by years of ground experience in UAE real estate."
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.240.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      heading: "Operational Excellence",
      text: "Built to scale with proven delivery know-how from global tech projects."
    }
  ];

  const agentPlans = [
    {
      title: "For Agents with Visa",
      subtitle: "With Visa | 50:50 Commission Share",
      description: "Join UrbanRise Real Estate LLC and maximize your earnings with our equal commission share for agents holding a company-sponsored visa.",
      tiers: [
        { amount: "AED 100,000", agentShare: "50%", companyShare: "50%", bonus: "AED 5000" },
        { amount: "AED 250,000", agentShare: "50%", companyShare: "50%", bonus: "AED 15,000" },
        { amount: "AED 500,000", agentShare: "50%", companyShare: "50%", bonus: "AED 35,000" },
        { amount: "AED 1,000,000", agentShare: "50%", companyShare: "50%", bonus: "AED 100,000" }
      ]
    },
    {
      title: "For Independent Agents",
      subtitle: "No Visa | 70:30 Commission Share",
      description: "This plan is specifically designed for our independent agents who operate without a company-sponsored visa, offering a higher commission share in recognition of your autonomy and commitment.",
      tiers: [
        { amount: "AED 500,000", agentShare: "70%", companyShare: "30%", bonus: "3% Additional" },
        { amount: "AED 750,000", agentShare: "70%", companyShare: "30%", bonus: "5% Additional" },
        { amount: "AED 1,000,000", agentShare: "70%", companyShare: "30%", bonus: "8% Additional" },
        { amount: "> AED 2,500,000", agentShare: "70%", companyShare: "30%", bonus: "10% + Special Incentives" }
      ]
    }
  ];

  const scrollToLeadCapture = () => {
    const element = document.getElementById('lead-capture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built by <span className="text-[#d7b029]">Experts in Tech & Real Estate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real Estate. Reinvented by Industry Leaders.
          </p>
        </div>

        {/* Who We Are */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who We Are</h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                We're a Dubai-born real estate company created by a trio of seasoned professionals — experts in technology, real estate, and operations.
              </p>
              <p className="mb-4">
                With years of combined experience building platforms, delivering enterprise-scale solutions, and closing property deals across the UAE, we understand both the backend tech and the front-facing customer experience.
              </p>
              <p className="mb-0">
                Our mission is simple: make property investment in Dubai smarter, faster, and more transparent for local and global buyers alike.
              </p>
            </div>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why We Exist</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <div key={index} className="text-center group">
                <div className="bg-[#d7b029]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d7b029]/30 transition-colors">
                  <div className="text-[#d7b029]">
                    <point.icon />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{point.heading}</h4>
                <p className="text-gray-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Quote */}
        <div className="bg-gradient-to-r from-[#d7b029]/10 to-[#d7b029]/5 rounded-2xl p-8 md:p-12 text-center mb-20">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 italic">
            "We're not just building a real estate company — we're building the future of property discovery and investment in the UAE."
          </blockquote>
        </div>

        {/* Partner with Us Section */}
        <div id="partner-with-us" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partner with <span className="text-[#d7b029]">UrbanRise</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our growing network of successful real estate professionals and maximize your earning potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agentPlans.map((plan, planIndex) => (
              <div key={planIndex} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="bg-[#d7b029]/10 p-6 text-center">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h4>
                  <p className="text-[#d7b029] font-semibold mb-4">{plan.subtitle}</p>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-4 gap-2 mb-4 text-xs font-semibold text-gray-600">
                    <div>Commission Generated</div>
                    <div className="text-center">Agent Share</div>
                    <div className="text-center">Company Share</div>
                    <div className="text-center">Additional Bonus</div>
                  </div>

                  {plan.tiers.map((tier, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 py-3 border-b border-gray-200 last:border-b-0">
                      <div className="font-bold text-gray-900">{tier.amount}</div>
                      <div className="text-center font-semibold text-[#d7b029]">{tier.agentShare}</div>
                      <div className="text-center text-gray-600">{tier.companyShare}</div>
                      <div className="text-center font-semibold text-[#d7b029]">{tier.bonus}</div>
                    </div>
                  ))}

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      {planIndex === 0 
                        ? "Bonuses are provided upon reaching the respective commission thresholds and are paid out as per our standard commission payment schedule."
                        : "Additional bonuses are calculated on the total commission generated for the respective tier. Special incentives for exceeding AED 2,500,000 will be discussed individually and are subject to performance metrics."
                      }
                    </p>
                  </div>

                  <button 
                    onClick={scrollToLeadCapture}
                    className="w-full mt-6 group bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    Join Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Join UrbanRise and be part of Dubai's real estate revolution. Let's build the future together.
          </p>
          <button 
            onClick={scrollToLeadCapture}
            className="group bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-3 text-base font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
            </svg>
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 