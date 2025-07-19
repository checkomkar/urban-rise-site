import Image from "next/image";
import Script from "next/script";
import FAQSection from "./components/FAQSection";
import LeadForm from "./components/LeadForm";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://urbanrise.ae/#organization",
        "name": "Urban Rise Real Estate",
        "description": "Dubai real estate investment specialists offering premium properties with exceptional ROI for international investors",
        "url": "https://urbanrise.ae",
        "logo": {
          "@type": "ImageObject",
          "url": "https://urbanrise.ae/images/logo.svg",
          "width": 240,
          "height": 60
        },
        "image": "https://urbanrise.ae/images/logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971-XX-XXX-XXXX",
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Arabic"],
          "areaServed": "Dubai, UAE"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "UAE",
          "addressRegion": "Dubai"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dubai"
          },
          {
            "@type": "Country", 
            "name": "United Arab Emirates"
          }
        ],
        "priceRange": "AED 500,000 - AED 10,000,000",
        "paymentAccepted": ["Cash", "Bank Transfer", "Mortgage"],
        "currenciesAccepted": "AED"
      },
      {
        "@type": "WebSite",
        "@id": "https://urbanrise.ae/#website",
        "url": "https://urbanrise.ae",
        "name": "Urban Rise Real Estate",
        "description": "Dubai Real Estate Investment Platform",
        "publisher": {
          "@id": "https://urbanrise.ae/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://urbanrise.ae/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://urbanrise.ae/#webpage",
        "url": "https://urbanrise.ae",
        "name": "Dubai Real Estate Investment | 9% ROI Properties",
        "isPartOf": {
          "@id": "https://urbanrise.ae/#website"
        },
        "about": {
          "@id": "https://urbanrise.ae/#organization"
        },
        "description": "Invest in Dubai real estate with up to 9% ROI. 100% foreign ownership, Golden Visa eligible properties. Expert guidance for international investors.",
        "breadcrumb": {
          "@id": "https://urbanrise.ae/#breadcrumb"
        },
        "inLanguage": "en-AE",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://urbanrise.ae"]
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://urbanrise.ae/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://urbanrise.ae"
          }
        ]
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can foreigners buy property in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, foreigners can buy property in Dubai with 100% ownership rights in designated freehold areas including Downtown Dubai, Dubai Marina, Business Bay, and many other premium locations."
        }
      },
      {
        "@type": "Question", 
        "name": "What is the minimum investment for Dubai Golden Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum property investment for Dubai Golden Visa is AED 2 million for residential properties. The Golden Visa provides 10-year renewable residency for you and your family."
        }
      },
      {
        "@type": "Question",
        "name": "What are the typical rental yields in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dubai rental yields typically range from 6-9% annually. Prime areas like Dubai Marina and Downtown offer 6-7% yields, while emerging areas can provide up to 9% returns."
        }
      }
    ]
  };
  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />

      <div className="min-h-screen bg-white font-[var(--font-open-sans)]">
        {/* Header */}
      <header className="fixed w-full backdrop-blur-md bg-white/90 border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="relative w-48 h-14">
              <Image
                src="/images/logo.svg"
                alt="Urban Rise Real Estate"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#hero" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Home</a>
              <a href="#why-invest" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Why Dubai</a>
              <a href="#roi-areas" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Best Areas</a>
              <a href="#developers" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Developers</a>
              <a href="#investment-tools" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">ROI Tools</a>
              <a href="#foreign-buyers" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Foreign Buyers</a>
              <a href="#faq" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">FAQ</a>
              
              {/* Call Now & WhatsApp Buttons */}
              <div className="flex items-center space-x-2">
                <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:shadow-md hover:border-gray-400 transition-all duration-300 ease-in-out font-medium flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>Call Now</span>
                </button>
                <button className="bg-[#25d366] text-white px-4 py-2 rounded-lg hover:bg-[#25d366]/90 hover:shadow-md transition-all duration-300 ease-in-out font-medium flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>



      {/* Add padding to account for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <main>
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Dubai Real Estate Investment Hero">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
            alt="Dubai skyline showcasing luxury real estate investment opportunities with modern skyscrapers, Downtown Dubai, and premium residential developments"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            {/* Trust Badges */}
            <div className="flex items-center space-x-6 mb-8 animate-fade-in">
              <div className="flex items-center space-x-2 text-[#d7b029]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-sm font-medium">DLD Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-[#d7b029]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
                </svg>
                <span className="text-sm font-medium">RERA Licensed</span>
              </div>
              <div className="flex items-center space-x-2 text-[#d7b029]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 0L21.75 9M21.75 9l-1.5-1.5M21.75 9v2.25" />
                </svg>
                <span className="text-sm font-medium">Up to 9% ROI</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Dubai Real Estate Investment
              <span className="block text-[#d7b029] animate-pulse">9% ROI Properties</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl">
              <strong className="text-[#d7b029]">100% foreign ownership</strong> properties in Dubai Marina, Downtown Dubai & Business Bay. 
              <strong className="text-[#d7b029]">Golden Visa eligible</strong> investments from AED 500K with flexible payment plans.
            </p>

            {/* Key Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/70 transition-all duration-300 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">100% Foreign Ownership</h3>
                <p className="text-sm text-gray-700">Freehold properties available for all nationalities</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/70 transition-all duration-300 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">Golden Visa Eligible</h3>
                <p className="text-sm text-gray-700">AED 2M+ investments qualify for UAE residency</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:bg-white/70 transition-all duration-300 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">No Property Tax</h3>
                <p className="text-sm text-gray-700">Zero annual property tax on all investments</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-3 text-base font-medium rounded-lg group hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out flex items-center justify-center">
                Get Investment Deals
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button className="bg-white/90 backdrop-blur-md border border-gray-300 text-gray-900 px-6 py-3 text-base font-medium hover:bg-white hover:border-gray-400 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Speak to an Expert Now
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d7b029]">500+</div>
                <div className="text-sm text-gray-700">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d7b029]">98%</div>
                <div className="text-sm text-gray-700">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#d7b029]">50+</div>
                <div className="text-sm text-gray-700">Nationalities Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d7b029] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#d7b029] rounded-full mt-2"></div>
          </div>
        </div>
        </section>
      </main>

      {/* Why Invest Section */}
      <section id="why-invest" className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Why Invest in <span className="text-[#d7b029]">Dubai Real Estate</span>?
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Dubai offers unique advantages for property investors, combining exceptionally high returns with investor-friendly policies and world-class infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits List */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#d7b029]/20 transition-all duration-500 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">100% Foreign Ownership</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Full ownership rights in designated freehold areas across Dubai with complete legal protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#d7b029]/20 transition-all duration-500 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">No Annual Property Tax</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Tax-free ownership with minimal annual fees - save thousands compared to other global cities</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#d7b029]/20 transition-all duration-500 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">Strong Rental Yields: 6–9%</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Among the highest rental returns globally with consistent market demand</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#d7b029]/20 transition-all duration-500 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">Golden Visa Eligible</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">10-year residency visa on AED 2M+ investments with family sponsorship benefits</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-2xl hover:border-[#d7b029]/20 transition-all duration-500 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#d7b029] transition-colors">World-Class Infrastructure</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Premium developments by top global developers with cutting-edge amenities</p>
                </div>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-2xl">
                <h3 className="font-[var(--font-playfair)] text-3xl font-bold mb-8 text-center text-gray-900">
                  Rental Yield vs <span className="text-[#d7b029]">Global Cities</span>
                </h3>
                <div className="relative h-[520px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center">
                  <div className="space-y-8 w-full">
                    {/* Dubai */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span className="font-bold text-[#d7b029]">🇦🇪 Dubai</span>
                        <span className="font-bold text-[#d7b029] text-xl">8.5%</span>
                      </div>
                      <div className="h-6 bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] rounded-full w-[85%] shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      </div>
                    </div>
                    {/* London */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg font-medium text-gray-700">
                        <span className="font-semibold">🇬🇧 London</span>
                        <span className="font-bold">3.5%</span>
                      </div>
                      <div className="h-6 bg-gray-300 rounded-full w-[35%] shadow-md"></div>
                    </div>
                    {/* New York */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg font-medium text-gray-700">
                        <span className="font-semibold">🇺🇸 New York</span>
                        <span className="font-bold">4.0%</span>
                      </div>
                      <div className="h-6 bg-gray-300 rounded-full w-[40%] shadow-md"></div>
                    </div>
                    {/* Singapore */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg font-medium text-gray-700">
                        <span className="font-semibold">🇸🇬 Singapore</span>
                        <span className="font-bold">3.8%</span>
                      </div>
                      <div className="h-6 bg-gray-300 rounded-full w-[38%] shadow-md"></div>
                    </div>
                    {/* Hong Kong */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-lg font-medium text-gray-700">
                        <span className="font-semibold">🇭🇰 Hong Kong</span>
                        <span className="font-bold">2.5%</span>
                      </div>
                      <div className="h-6 bg-gray-300 rounded-full w-[25%] shadow-md"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 italic">* Based on average market data 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best ROI Areas Section */}
      <section id="roi-areas" className="py-5 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Best Areas for <span className="text-[#d7b029]">High ROI in 2025</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed">
              Discover Dubai's most promising investment locations with proven track records and exceptional growth potential.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dubai Marina Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                  alt="Dubai Marina - Premium Waterfront Investment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#d7b029] text-white px-3 py-1 rounded-full text-sm font-bold">
                  7-9% ROI
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-medium">Prime Location</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors mb-4">
                  Dubai Marina
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium waterfront community with stunning marina views and world-class amenities.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Price Range:</span>
                    <span className="text-sm font-bold text-[#d7b029]">AED 800K - 3M</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Waterfront Living</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">High Rental Demand</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Metro Connected</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View Properties
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Downtown Dubai Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop"
                  alt="Downtown Dubai - Iconic Burj Khalifa Area"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#d7b029] text-white px-3 py-1 rounded-full text-sm font-bold">
                  6-8% ROI
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-medium">Prime Location</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors mb-4">
                  Downtown Dubai
                </h3>
                <p className="text-gray-600 mb-4">
                  The heart of Dubai with iconic landmarks and premium investment opportunities.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Price Range:</span>
                    <span className="text-sm font-bold text-[#d7b029]">AED 1.2M - 5M</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Burj Khalifa Area</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Business District</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Tourist Hub</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View Properties
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Business Bay Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
                  alt="Business Bay - Dubai's Manhattan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#d7b029] text-white px-3 py-1 rounded-full text-sm font-bold">
                  8-9% ROI
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-medium">Prime Location</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors mb-4">
                  Business Bay
                </h3>
                <p className="text-gray-600 mb-4">
                  Dubai's Manhattan with excellent connectivity and strong rental yields.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Price Range:</span>
                    <span className="text-sm font-bold text-[#d7b029]">AED 600K - 2.5M</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Central Location</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">High ROI</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Growing Market</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View Properties
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dubai Hills Estate Card */}
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                  alt="Dubai Hills Estate - Premium Family Community"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#d7b029] text-white px-3 py-1 rounded-full text-sm font-bold">
                  6-7% ROI
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-medium">Prime Location</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors mb-4">
                  Dubai Hills Estate
                </h3>
                <p className="text-gray-600 mb-4">
                  Modern family-oriented community with green spaces and premium lifestyle.
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Price Range:</span>
                    <span className="text-sm font-bold text-[#d7b029]">AED 900K - 4M</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Family Community</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">Golf Course</span>
                  <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">New Development</span>
                </div>
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View Properties
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
            <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-gray-900 mb-4">
              Want to Explore More Areas?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get access to our complete area analysis with detailed ROI projections and market insights.
            </p>
            <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-3 text-base font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out inline-flex items-center group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              Explore Properties by Area
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>



      {/* Developers Section */}
      <section id="developers" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted <span className="text-[#d7b029]">Developers</span> We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with Dubai's most reputable developers known for quality construction, 
              timely delivery, and exceptional investment returns.
            </p>
          </div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Emaar Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-xl group">
              {/* Developer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
                      alt="Emaar Logo"
                      width={64}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors">
                      Emaar
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#d7b029] fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 text-[#d7b029]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
                  </svg>
                </div>
              </div>

              {/* Speciality */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Speciality:</h4>
                <p className="text-[#d7b029] font-medium">Flagship Ready Units & Waterfront Views</p>
              </div>

              {/* Key Projects */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Dubai Creek Harbour</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Downtown Dubai</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Dubai Hills Estate</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">World's Tallest Tower</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Premium Locations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Proven Track Record</div>
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Payment Plan:</span>
                </div>
                <span className="text-sm font-semibold text-[#d7b029]">Standard Payment Plans</span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                View Emaar Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Sobha Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-xl group">
              {/* Developer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop"
                      alt="Sobha Logo"
                      width={64}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors">
                      Sobha
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#d7b029] fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.7</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 text-[#d7b029]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
                  </svg>
                </div>
              </div>

              {/* Speciality */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Speciality:</h4>
                <p className="text-[#d7b029] font-medium">Premium Smart Homes with Flexible Payment</p>
              </div>

              {/* Key Projects */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Sobha Hartland</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Sobha Creek Vistas</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Sobha One</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Smart Home Technology</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Luxury Finishes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Green Communities</div>
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Payment Plan:</span>
                </div>
                <span className="text-sm font-semibold text-[#d7b029]">Flexible Extended Plans</span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                View Sobha Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Damac Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-xl group">
              {/* Developer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=100&fit=crop"
                      alt="Damac Logo"
                      width={64}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors">
                      Damac
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#d7b029] fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.6</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 text-[#d7b029]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
                  </svg>
                </div>
              </div>

              {/* Speciality */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Speciality:</h4>
                <p className="text-[#d7b029] font-medium">Investor-Focused Off-Plan Launches</p>
              </div>

              {/* Key Projects */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Damac Hills</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">AKOYA Oxygen</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Damac Lagoons</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Investor Returns</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Themed Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Luxury Amenities</div>
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Payment Plan:</span>
                </div>
                <span className="text-sm font-semibold text-[#d7b029]">Investor-Friendly Terms</span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                View Damac Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Danube Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 hover:shadow-xl group">
              {/* Developer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <Image 
                      src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=100&fit=crop"
                      alt="Danube Logo"
                      width={64}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#d7b029] transition-colors">
                      Danube
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-[#d7b029] fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">4.5</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 text-[#d7b029]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.8 25.8 0 105.402-4.484c.002.01.005.02.005.030m-5.407-4.514a24.904 24.904 0 00-4.725.045" />
                  </svg>
                </div>
              </div>

              {/* Speciality */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Speciality:</h4>
                <p className="text-[#d7b029] font-medium">1% Monthly Payment Plans</p>
              </div>

              {/* Key Projects */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Danube Elitz</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Danube Dreamz</span>
                  <span className="text-sm bg-[#d7b029]/20 text-[#d7b029] px-3 py-1 rounded-full">Danube Resortz</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Affordable Luxury</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Easy Payment Plans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Family Communities</div>
                  </div>
                </div>
              </div>

              {/* Payment Plan */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-900">Payment Plan:</span>
                </div>
                <span className="text-sm font-semibold text-[#d7b029]">1% Monthly Payments</span>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                View Danube Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-gray-900 mb-4">
              Ready to Explore Latest Projects?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get exclusive access to off-plan launches and ready units from top developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-6 py-3 text-base font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out inline-flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                View Latest Projects
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button className="bg-white border border-gray-300 text-gray-900 px-6 py-3 text-base font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 ease-in-out">
                Compare Developers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Comparison - ROI Calculator */}
      <section id="investment-tools" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compare Investment <span className="text-[#d7b029]">Options</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our advanced ROI calculator to compare property investments and see how Dubai real estate 
              outperforms traditional investment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Price (AED)
                  </label>
                  <input
                    type="text"
                    defaultValue="1200000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900"
                    placeholder="1,200,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Rent (AED)
                  </label>
                  <input
                    type="text"
                    defaultValue="85000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900"
                    placeholder="85,000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Service Charges (AED)
                  </label>
                  <input
                    type="text"
                    defaultValue="15000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d7b029]/20 focus:border-[#d7b029] transition-all duration-300 text-gray-900"
                    placeholder="15,000"
                  />
                </div>

                {/* Results */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4 mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Investment Breakdown</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purchase Price</span>
                      <span className="font-medium text-gray-900">AED 1,200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">DLD Fee (4%)</span>
                      <span className="font-medium text-gray-900">AED 48,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Investment</span>
                      <span className="font-semibold text-gray-900">AED 1,277,000</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Net Annual Return</span>
                      <span className="font-semibold text-[#d7b029]">AED 70,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Return</span>
                      <span className="font-semibold text-[#d7b029]">AED 5,833</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span className="font-bold text-gray-900">ROI</span>
                      <span className="font-bold text-[#d7b029] text-2xl">5.5%</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#d7b029] text-white py-3 rounded-lg font-medium hover:bg-[#d7b029]/90 transition-all duration-300">
                  Get Personalized Investment Report
                </button>
              </div>
            </div>

            {/* Comparison */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Investment Comparison</h3>
                </div>

                <div className="space-y-6">
                  {/* Real Estate */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[#d7b029]"></div>
                      <span className="font-medium text-gray-900">Real Estate</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-lg text-[#d7b029]">5.5%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-[#d7b029]" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Stock Market */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="font-medium text-gray-900">Stock Market</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-lg text-gray-600">10.5%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gray-400" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Fixed Deposits */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="font-medium text-gray-900">Fixed Deposits</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-lg text-gray-600">3.5%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gray-400" style={{ width: '23%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Gold */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="font-medium text-gray-900">Gold</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-lg text-gray-600">6.2%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="h-2 rounded-full bg-gray-400" style={{ width: '41%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 0L21.75 9M21.75 9l-1.5-1.5M21.75 9v2.25" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Dubai Real Estate Wins?</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Higher Returns</h4>
                      <p className="text-sm text-gray-600">Consistent 6-9% ROI vs. traditional investments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 0L21.75 9M21.75 9l-1.5-1.5M21.75 9v2.25" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Capital Appreciation</h4>
                      <p className="text-sm text-gray-600">Property value growth + rental income</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tangible Asset</h4>
                      <p className="text-sm text-gray-600">Physical property you can see and use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

          {/* Process Timeline */}
          <div className="mb-16">
            <h3 className="font-[var(--font-playfair)] text-3xl font-bold text-gray-900 text-center mb-12">
              Our <span className="text-[#d7b029]">4-Step Process</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#d7b029] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h4>
                <p className="text-sm text-gray-600">Understand your investment goals and budget</p>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#d7b029]/30 transform -translate-x-1/2 z-0"></div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#d7b029] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Selection</h4>
                <p className="text-sm text-gray-600">Curated property options based on your criteria</p>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#d7b029]/30 transform -translate-x-1/2 z-0"></div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#d7b029] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Documentation</h4>
                <p className="text-sm text-gray-600">Complete all paperwork and legal requirements</p>
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#d7b029]/30 transform -translate-x-1/2 z-0"></div>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="w-16 h-16 bg-[#d7b029] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Final Registration</h4>
                <p className="text-sm text-gray-600">Property transfer and key handover</p>
              </div>
            </div>
          </div>

          {/* Requirements and CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Valid passport copy</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Emirates ID (can be obtained after arrival)</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">No objection certificate (NOC) if applicable</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Bank statements or income proof</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Property reservation form</span>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#d7b029]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Sales and purchase agreement</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#d7b029]/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> We assist with all documentation and ensure compliance with UAE regulations.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-white to-[#d7b029]/5 rounded-2xl p-8 border border-[#d7b029]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Investment Journey?</h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation with our international investment specialists. 
                We'll guide you through every step of the process.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-[#d7b029] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d7b029]/90 transition-all duration-300 flex items-center justify-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Book Your Free Call
                </button>
                <button className="w-full bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                  Download Foreign Buyer Guide
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">Personalized investment strategy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">Market analysis and trends</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">Documentation checklist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">Golden Visa guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Fees */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Legal & <span className="text-[#d7b029]">Fees Breakdown</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete transparency on all costs involved in buying property in Dubai. 
              No surprises, no hidden fees - just clear, upfront pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Fee Breakdown */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Detailed Fee Structure</h3>
                </div>

                <div className="space-y-6">
                  {/* DLD Registration Fee */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">DLD Registration Fee</h4>
                          <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">
                            Mandatory
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Dubai Land Department registration fee</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 48,000 (for AED 1.2M property)</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">4%</div>
                      </div>
                    </div>
                  </div>

                  {/* Real Estate Agent Commission */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">Real Estate Agent Commission</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Professional services and property assistance</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 24,000 (for AED 1.2M property)</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">2%</div>
                      </div>
                    </div>
                  </div>

                  {/* NOC & Admin Charges */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">NOC & Admin Charges</h4>
                          <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">
                            Mandatory
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">No Objection Certificate and administrative fees</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 2,000 - 5,000</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">Variable</div>
                      </div>
                    </div>
                  </div>

                  {/* Oqood Fees */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">Oqood Fees (Off-plan)</h4>
                          <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">
                            Mandatory
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Off-plan property registration with RERA</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 1,000</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">Fixed</div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Service Charges */}
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">Annual Service Charges</h4>
                          <span className="text-xs bg-[#d7b029]/20 text-[#d7b029] px-2 py-1 rounded-full">
                            Mandatory
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Building maintenance and common area upkeep</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 12,000 - 26,400/year</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">AED 10-22/sqft</div>
                      </div>
                    </div>
                  </div>

                  {/* Mortgage Registration */}
                  <div className="pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-lg font-semibold text-gray-900">Mortgage Registration</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">If financing the property purchase</p>
                        <p className="text-sm text-gray-900 font-medium">Example: AED 2,250 (for AED 900K loan)</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-xl font-bold text-[#d7b029]">0.25%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Example</h3>
                <p className="text-sm text-gray-600 mb-6">AED 1.2M Property</p>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Property Price</span>
                      <span className="font-medium text-gray-900">AED 1,200,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">DLD Fee (4%)</span>
                      <span className="font-medium text-gray-900">AED 48,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Agent Fee (2%)</span>
                      <span className="font-medium text-gray-900">AED 24,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Admin Fees</span>
                      <span className="font-medium text-gray-900">AED 3,500</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-gray-900">Total Cost</span>
                      <span className="text-[#d7b029]">AED 75,500</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900 mb-1">Effective Rate</div>
                    <div className="text-lg font-bold text-[#d7b029]">6.3%</div>
                    <div className="text-xs text-gray-600">of property value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Transparent Fee Breakdown */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparent Fee Breakdown</h4>
              <p className="text-sm text-gray-600">No hidden costs - all fees disclosed upfront before purchase</p>
            </div>

            {/* Government Regulated */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Government Regulated</h4>
              <p className="text-sm text-gray-600">All fees are set by Dubai government and standardized across the market</p>
            </div>

            {/* Competitive Rates */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Competitive Rates</h4>
              <p className="text-sm text-gray-600">Lower transaction costs compared to many international markets</p>
            </div>

            {/* Professional Support */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#d7b029]/50 transition-all duration-300 text-center shadow-lg">
              <div className="w-12 h-12 bg-[#d7b029]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#d7b029" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Support</h4>
              <p className="text-sm text-gray-600">Complete assistance with all legal documentation and procedures</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="font-[var(--font-playfair)] text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Dubai's Fee Structure is Investor-Friendly
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#d7b029] mb-2">4%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Total Gov. Fees</div>
                <div className="text-xs text-gray-600">vs 7-12% in other markets</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d7b029] mb-2">0%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Annual Property Tax</div>
                <div className="text-xs text-gray-600">vs 1-3% in other countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d7b029] mb-2">24hrs</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Registration Time</div>
                <div className="text-xs text-gray-600">Fast and efficient process</div>
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
    </>
  );
}
