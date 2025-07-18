import Image from "next/image";
import FAQSection from "./components/FAQSection";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-inter)]">
      {/* Header */}
      <header className="fixed w-full backdrop-blur-md bg-white/70 border-b border-white/30 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] z-50 supports-[backdrop-filter]:bg-white/40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="relative w-40 h-12">
        <Image
                src="/images/logo.svg"
                alt="Urban Rise Real Estate"
                fill
                className="object-contain"
          priority
        />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#hero" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Home</a>
              <a href="#why-invest" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Why Dubai</a>
              <a href="#roi-areas" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Best Areas</a>
              <a href="#developers" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Developers</a>
              <a href="#investment-tools" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">ROI Tools</a>
              <a href="#foreign-buyers" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Foreign Buyers</a>
              <a href="#faq" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
              <a href="#contact" className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90">
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out rounded-full p-2 hover:bg-black/5 backdrop-blur-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
            alt="Dubai Skyline"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Invest Smart in Dubai Property
            <span className="block text-[#C9A87D] mt-2 text-3xl sm:text-4xl md:text-5xl">
              Flats with Up to 9% ROI
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the best areas to invest, explore off-plan & ready units, and enjoy tailored payment plans. 100% free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-full w-full sm:w-auto min-w-[200px] flex items-center justify-center group hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90">
              Get Investment Deals
              <span className="ml-2 group-hover:translate-x-1.5 transition-all duration-300 ease-in-out">→</span>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/20 rounded-full w-full sm:w-auto min-w-[200px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out backdrop-blur-sm">
              Speak to an Expert Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section id="why-invest" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Why Invest in Dubai Real Estate?
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Dubai offers unique advantages for property investors, combining high returns with investor-friendly policies
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Benefits List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Foreign Ownership</h3>
                  <p className="text-gray-700">Full ownership rights in designated freehold areas across Dubai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">No Annual Property Tax</h3>
                  <p className="text-gray-700">Tax-free ownership with minimal annual fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Strong Rental Yields: 6–9%</h3>
                  <p className="text-gray-700">Among the highest rental returns globally</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Golden Visa Eligible</h3>
                  <p className="text-gray-700">10-year residency visa on AED 2M+ investments</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">World-Class Infrastructure</h3>
                  <p className="text-gray-700">Premium developments by top global developers</p>
                </div>
              </div>
            </div>

            {/* Infographic */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
                <h3 className="font-[var(--font-playfair)] text-2xl font-semibold mb-6 text-center text-gray-900">
                  Rental Yield vs Global Cities
                </h3>
                <div className="relative h-[400px] bg-gray-50 rounded-xl p-8 flex items-center justify-center">
                  <div className="space-y-6 w-full">
                    {/* Dubai */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-semibold">Dubai</span>
                        <span className="font-bold text-[#d7b029]">8.5%</span>
                      </div>
                      <div className="h-5 bg-gradient-to-r from-[#d7b029] to-[#e5cd77] rounded-lg w-[85%] shadow-sm"></div>
                    </div>
                    {/* London */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-semibold">London</span>
                        <span className="font-bold">3.5%</span>
                      </div>
                      <div className="h-5 bg-gray-300 rounded-lg w-[35%] shadow-sm"></div>
                    </div>
                    {/* New York */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-semibold">New York</span>
                        <span className="font-bold">4.0%</span>
                      </div>
                      <div className="h-5 bg-gray-300 rounded-lg w-[40%] shadow-sm"></div>
                    </div>
                    {/* Singapore */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-semibold">Singapore</span>
                        <span className="font-bold">3.8%</span>
                      </div>
                      <div className="h-5 bg-gray-300 rounded-lg w-[38%] shadow-sm"></div>
                    </div>
                    {/* Hong Kong */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <span className="font-semibold">Hong Kong</span>
                        <span className="font-bold">2.5%</span>
                      </div>
                      <div className="h-5 bg-gray-300 rounded-lg w-[25%] shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best ROI Areas Section */}
      <section id="roi-areas" className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Best Areas for High ROI in 2025
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Discover Dubai's most promising investment locations with exceptional rental returns
          </p>

          {/* Table Container with horizontal scroll for mobile */}
          <div className="overflow-x-auto mb-12 rounded-xl shadow-lg">
            <table className="w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10">
                  <th className="text-left py-6 px-6 text-gray-900 font-semibold border-b border-gray-100">Area</th>
                  <th className="text-left py-6 px-6 text-gray-900 font-semibold border-b border-gray-100">Avg. Price/Sqft</th>
                  <th className="text-left py-6 px-6 text-gray-900 font-semibold border-b border-gray-100">Rental Yield</th>
                  <th className="text-left py-6 px-6 text-gray-900 font-semibold border-b border-gray-100">Property Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">JVC</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">AED 950</td>
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="text-[#d7b029] font-semibold">8.5%</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">1-2 BR Flats</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">Business Bay</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">AED 1,350</td>
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="text-[#d7b029] font-semibold">7.0%</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">Studio to 3BR</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">Arjan</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">AED 800</td>
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="text-[#d7b029] font-semibold">9.2%</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">Off-Plan Flats</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">Dubai Hills</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">AED 1,250</td>
                  <td className="py-4 px-6 border-b border-gray-100">
                    <span className="text-[#d7b029] font-semibold">6.5%</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-100 text-gray-700">Premium Villas</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 inline-flex items-center group">
              Explore Properties by Area
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>



      {/* Developers Section */}
      <section id="developers" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Trusted Developers We Work With
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Partner with Dubai's most reputable developers offering premium properties and flexible payment plans
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Emaar Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#d7b029]">E</span>
                </div>
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3 text-gray-900">Emaar</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Flagship ready units & waterfront views</p>
              <a href="#" className="text-[#d7b029] font-medium inline-flex items-center group/link">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            {/* Sobha Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#d7b029]">S</span>
                </div>
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3 text-gray-900">Sobha</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Premium smart homes with flexible payment</p>
              <a href="#" className="text-[#d7b029] font-medium inline-flex items-center group/link">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            {/* Damac Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#d7b029]">D</span>
                </div>
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3 text-gray-900">Damac</h3>
              <p className="text-gray-700 leading-relaxed mb-6">Investor-focused off-plan launches</p>
              <a href="#" className="text-[#d7b029] font-medium inline-flex items-center group/link">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            {/* Danube Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#F8F8F8] rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#d7b029]">D</span>
                </div>
              </div>
              <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3 text-gray-900">Danube</h3>
              <p className="text-gray-700 leading-relaxed mb-6">1% monthly payment plans</p>
              <a href="#" className="text-[#d7b029] font-medium inline-flex items-center group/link">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                  className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 inline-flex items-center group">
              View Latest Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Investment Comparison */}
      <section id="investment-tools" className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Compare Investment Options
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Use our interactive tools to analyze and compare different investment opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Price per Sq Ft Component */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-gray-900">Price per Sq Ft</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Downtown Dubai</span>
                  <span className="font-semibold text-gray-900">AED 1,350/sqft</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Dubai Marina</span>
                  <span className="font-semibold text-gray-900">AED 1,200/sqft</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Palm Jumeirah</span>
                  <span className="font-semibold text-gray-900">AED 2,100/sqft</span>
                </div>
              </div>
            </div>

            {/* Rental Yield Calculator */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-gray-900">Rental Yield Calculator</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Property Value (AED)</label>
                  <input type="number" placeholder="Enter property value" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#d7b029] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">Annual Rent (AED)</label>
                  <input type="number" placeholder="Enter annual rent" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#d7b029] transition-colors" />
                </div>
                <button className="w-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity">
                  Calculate Yield
                </button>
              </div>
            </div>

            {/* Payment Plan Viewer */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-gray-900">Payment Plan Viewer</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Down Payment</span>
                    <span className="font-semibold text-gray-900">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#d7b029] to-[#e5cd77] h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">During Construction</span>
                    <span className="font-semibold text-gray-900">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#d7b029] to-[#e5cd77] h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">On Handover</span>
                    <span className="font-semibold text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#d7b029] to-[#e5cd77] h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Charges Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-gray-900">Service Charges</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Premium Areas</span>
                  <span className="font-semibold text-gray-900">AED 14-18/sqft</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Mid-Market</span>
                  <span className="font-semibold text-gray-900">AED 9-13/sqft</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">Affordable</span>
                  <span className="font-semibold text-gray-900">AED 5-8/sqft</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-8 py-4 text-lg font-medium rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 inline-flex items-center group">
              Use Our ROI Calculator
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Foreign Buyer Support */}
      <section id="foreign-buyers" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Foreign Buyer? We've Got You Covered
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Experience hassle-free property investment in Dubai with our comprehensive support services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Freehold Properties */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">Freehold Properties for All Nationalities</h3>
                  <p className="text-gray-700 leading-relaxed">Access premium properties in Dubai's most sought-after freehold areas with 100% ownership rights guaranteed by law.</p>
                </div>
              </div>

              {/* End-to-end Support */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">End-to-End Support for International Buyers</h3>
                  <p className="text-gray-700 leading-relaxed">From property selection to handover, our team handles everything including legal documentation, payments, and registration.</p>
                </div>
              </div>

              {/* Golden Visa */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">Golden Visa Eligibility Assistance</h3>
                  <p className="text-gray-700 leading-relaxed">Get expert guidance on qualifying for Dubai's Golden Visa program through property investment starting from AED 2M.</p>
                </div>
              </div>

              {/* Mortgage Help */}
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">Mortgage Help for Non-Residents</h3>
                  <p className="text-gray-700 leading-relaxed">Access competitive mortgage options with our banking partners offering up to 75% financing for international buyers.</p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
                src="/dubai-skyline.jpg"
                alt="Dubai Skyline"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <p className="text-white font-medium mb-4">Schedule a consultation with our international investment experts</p>
                  <button className="w-full bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out hover:opacity-90 flex items-center justify-center group">
                    Book Your Free Call
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Fees */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Legal & Fees Breakdown
          </h2>
          <p className="text-gray-700 text-center mb-16 max-w-3xl mx-auto text-lg">
            Understanding all costs involved in Dubai property investment
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Main Fees Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* DLD Fee */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">DLD Registration Fee</h3>
                    <p className="text-3xl font-bold text-[#d7b029] mb-3">4%</p>
                    <p className="text-gray-700">Dubai Land Department registration fee calculated on property value</p>
                  </div>
                </div>
              </div>

              {/* NOC & Admin */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">NOC & Admin Charges</h3>
                    <p className="text-gray-700">Administrative fees and No Objection Certificate charges vary by developer</p>
                  </div>
                </div>
              </div>

              {/* Oqood Fee */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Oqood Fees (Off-plan)</h3>
                    <p className="text-3xl font-bold text-[#d7b029] mb-3">AED 1,000</p>
                    <p className="text-gray-700">One-time fee for off-plan property registration</p>
                  </div>
                </div>
              </div>

              {/* Service Charges */}
              <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#d7b029]/10 via-[#e5cd77]/10 to-[#d5bc29]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Annual Service Charges</h3>
                    <p className="text-3xl font-bold text-[#d7b029] mb-3">AED 10–22/sqft</p>
                    <p className="text-gray-700">Varies by property type and location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Box */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-900 font-medium">Transparent Fee Breakdown</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#d7b029" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-900 font-medium">No Hidden Costs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Lead Form */}
      <LeadForm />

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Company Info & Links */}
            <div className="lg:col-span-1">
              <div className="relative w-40 h-12 mb-6">
                <Image
                  src="/images/logo.svg"
                  alt="Urban Rise Real Estate"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner in Dubai real estate investment. Licensed, regulated, and committed to your success.
              </p>
              
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
                  <a href="#" className="hover:text-[#d7b029] transition duration-300">About Us</a>
                  <a href="#" className="hover:text-[#d7b029] transition duration-300">Blog</a>
                  <a href="#" className="hover:text-[#d7b029] transition duration-300">Privacy Policy</a>
                  <a href="#" className="hover:text-[#d7b029] transition duration-300">DLD Verification</a>
                  <a href="#" className="hover:text-[#d7b029] transition duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-1">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            {/* Licenses & Trust Badges */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-white mb-6">Licensed & Regulated</h4>
              
              {/* License Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* DLD License Placeholder */}
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d7b029] to-[#e5cd77] rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-white">DLD</div>
                  <div className="text-xs text-gray-400">Licensed</div>
                </div>

                {/* RERA License Placeholder */}
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d7b029] to-[#e5cd77] rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159-.026-1.563.434L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                  </div>
                  <div className="text-sm font-medium text-white">RERA</div>
                  <div className="text-xs text-gray-400">Certified</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Verified Business</div>
                    <div className="text-xs text-gray-400">UAE Trade License</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">24/7 Support</div>
                    <div className="text-xs text-gray-400">Always Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Reviews & Live Chat */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-white mb-6">What Our Clients Say</h4>
              
              {/* Google Reviews Placeholder */}
              <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
                      <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Google Reviews</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#fbbf24" viewBox="0 0 24 24" className="w-4 h-4">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-300 ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "Excellent service and expert guidance. Found us the perfect investment property with great ROI!"
                </p>
                <div className="text-xs text-gray-400 mt-2">— Based on 150+ reviews</div>
              </div>

              {/* Live Chat Widget Placeholder */}
              <div className="bg-gradient-to-r from-[#d7b029]/20 to-[#e5cd77]/20 rounded-xl p-6 border border-[#d7b029]/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#d7b029] to-[#e5cd77] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Live Chat</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Online Now</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-200 text-sm mb-3">
                  Get instant answers to your property questions from our Dubai experts.
                </p>
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Start Chat
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Urban Rise Real Estate. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <span>DLD License: [License Number]</span>
                <span>RERA: [RERA Number]</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
