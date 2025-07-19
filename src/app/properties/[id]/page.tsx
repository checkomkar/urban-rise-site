'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

interface PropertyDetailProps {
  params: {
    id: string;
  };
}

export default function PropertyDetail({ params }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock property data - in real app, this would be fetched based on ID
  const property = {
    id: params.id,
    title: "Luxury 2BR Apartment in Dubai Marina",
    location: "Dubai Marina",
    price: "AED 1,200,000",
    rent: "AED 85,000/year",
    roi: "7.1%",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sqft",
    type: "Apartment",
    status: "Ready",
    developer: "Emaar",
    completionDate: "2023",
    paymentPlan: "70/30 Payment Plan Available",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop"
    ],
    description: "Discover luxury living in this stunning 2-bedroom apartment located in the prestigious Dubai Marina. This property offers breathtaking marina views, modern finishes, and access to world-class amenities. Perfect for investors seeking high rental yields or families looking for a premium lifestyle.",
    features: [
      "Marina View", "Balcony", "Parking", "Pool", "Gym", "24/7 Security", 
      "Concierge", "Beach Access", "Metro Station Nearby", "Shopping Mall"
    ],
    amenities: [
      "Swimming Pool", "Fitness Center", "Children's Play Area", "BBQ Area",
      "Landscaped Gardens", "24/7 Security", "Concierge Services", "Visitor Parking"
    ],
    nearbyPlaces: [
      { name: "Dubai Marina Mall", distance: "2 min walk", type: "Shopping" },
      { name: "Marina Beach", distance: "5 min walk", type: "Recreation" },
      { name: "DMCC Metro Station", distance: "3 min walk", type: "Transport" },
      { name: "Dubai Internet City", distance: "10 min drive", type: "Business" }
    ]
  };

  const financialBreakdown = {
    purchasePrice: 1200000,
    dldFee: 48000, // 4%
    agentCommission: 24000, // 2%
    otherFees: 4500,
    totalCost: 1276500,
    annualRent: 85000,
    serviceFee: 15000,
    netAnnualReturn: 70000,
    roi: 7.1
  };

  return (
    <div className="min-h-screen bg-white font-[var(--font-open-sans)]">
      {/* Header */}
      <header className="fixed w-full backdrop-blur-md bg-white/90 border-b border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative w-48 h-14">
              <Image
                src="/images/logo.svg"
                alt="Urban Rise Real Estate"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Home</Link>
              <Link href="/properties" className="text-[#d7b029] font-medium">Properties</Link>
              <Link href="#" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Blog</Link>
              <Link href="#" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">About</Link>
              <Link href="#" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Contact</Link>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-800 hover:text-[#d7b029] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </button>
              <button className="flex items-center space-x-2 text-gray-800 hover:text-[#d7b029] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="font-medium">Call Now</span>
              </button>
              <button className="bg-[#25d366] text-white px-4 py-2 rounded-lg hover:bg-[#25d366]/90 hover:shadow-md transition-all duration-300 ease-in-out font-medium flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="h-20"></div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/properties" className="text-[#d7b029] hover:text-[#d7b029]/80 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Properties
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 md:col-span-3">
                  <img 
                    src={property.images[currentImageIndex]} 
                    alt={property.title}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <div className="col-span-4 md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4">
                  {property.images.slice(1, 4).map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Property view ${index + 2}`}
                      className="w-full h-28 md:h-20 lg:h-28 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-[#d7b029]"
                      onClick={() => setCurrentImageIndex(index + 1)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Property Info */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'Ready' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {property.status}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {property.type}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#d7b029] text-white">
                  {property.roi} ROI
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#d7b029]/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 font-medium">Bedrooms</div>
                    <div className="font-bold text-gray-900">{property.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#d7b029]/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 font-medium">Bathrooms</div>
                    <div className="font-bold text-gray-900">{property.bathrooms}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#d7b029]/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v13.5C3 19.746 3.504 20.25 4.125 20.25Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 font-medium">Area</div>
                    <div className="font-bold text-gray-900">{property.area}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#d7b029]/10 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#d7b029]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-.75 3h.75M9 10.5h1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-700 font-medium">Developer</div>
                    <div className="font-bold text-gray-900">{property.developer}</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-900 leading-relaxed font-medium">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Property Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d7b029] rounded-full"></div>
                    <span className="text-sm text-gray-900 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Building Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d7b029] rounded-full"></div>
                    <span className="text-sm text-gray-900 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Places</h3>
              <div className="space-y-4">
                {property.nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[#d7b029]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <div>
                        <div className="font-bold text-gray-900">{place.name}</div>
                        <div className="text-sm text-gray-700 font-medium">{place.type}</div>
                      </div>
                    </div>
                    <span className="text-sm bg-gray-100 text-gray-900 font-medium px-2 py-1 rounded-full">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact and Financial */}
          <div className="lg:col-span-1">
            {/* Price and Contact */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#d7b029] mb-2">{property.price}</div>
                <div className="text-gray-900 font-medium">Annual Rent: {property.rent}</div>
                <div className="text-lg font-semibold text-gray-900 mt-2">ROI: {property.roi}</div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Now
                </button>
                <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                  </svg>
                  WhatsApp
                </button>
                <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25Z" />
                  </svg>
                  Calculate Mortgage
                </button>
              </div>

              <div className="text-sm text-gray-800 text-center font-medium">
                <div className="mb-2">Payment Plan: {property.paymentPlan}</div>
                <div>Completion: {property.completionDate}</div>
              </div>
            </div>

            {/* Financial Breakdown */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Purchase Price</span>
                  <span className="font-semibold text-gray-900">AED {financialBreakdown.purchasePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">DLD Fee (4%)</span>
                  <span className="font-semibold text-gray-900">AED {financialBreakdown.dldFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Agent Commission</span>
                  <span className="font-semibold text-gray-900">AED {financialBreakdown.agentCommission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Other Fees</span>
                  <span className="font-semibold text-gray-900">AED {financialBreakdown.otherFees.toLocaleString()}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total Investment</span>
                  <span>AED {financialBreakdown.totalCost.toLocaleString()}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Annual Rent</span>
                  <span className="font-bold text-[#d7b029]">AED {financialBreakdown.annualRent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-900 font-medium">Service Charges</span>
                  <span className="font-semibold text-gray-900">AED {financialBreakdown.serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-[#d7b029]">
                  <span>Net Annual Return</span>
                  <span>AED {financialBreakdown.netAnnualReturn.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-900">ROI</span>
                  <span className="text-[#d7b029]">{financialBreakdown.roi}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
} 