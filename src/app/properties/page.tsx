'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [sortBy, setSortBy] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury 2BR Apartment in Dubai Marina",
      location: "Dubai Marina",
      price: "AED 1,200,000",
      rent: "AED 85,000/year",
      roi: "7.1% ROI",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,200 sqft",
      type: "Apartment",
      status: "Ready",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      developer: "Emaar",
      features: ["Marina View", "Balcony", "Parking", "+1 more"]
    },
    {
      id: 2,
      title: "Premium 3BR Villa in Dubai Hills",
      location: "Dubai Hills Estate",
      price: "AED 2,800,000",
      rent: "AED 180,000/year",
      roi: "6.4% ROI",
      bedrooms: 3,
      bathrooms: 4,
      area: "2,500 sqft",
      type: "Villa",
      status: "Off-Plan",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      developer: "Emaar",
      features: ["Golf View", "Garden", "Maid's Room", "+1 more"]
    },
    {
      id: 3,
      title: "Modern 1BR Studio in Business Bay",
      location: "Business Bay",
      price: "AED 650,000",
      rent: "AED 55,000/year",
      roi: "8.5% ROI",
      bedrooms: 1,
      bathrooms: 1,
      area: "750 sqft",
      type: "Studio",
      status: "Ready",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      developer: "Damac",
      features: ["City View", "Furnished", "Gym", "+1 more"]
    },
    {
      id: 4,
      title: "Elegant 2BR Penthouse Downtown",
      location: "Downtown Dubai",
      price: "AED 3,500,000",
      rent: "AED 250,000/year",
      roi: "7.1% ROI",
      bedrooms: 2,
      bathrooms: 3,
      area: "1,800 sqft",
      type: "Penthouse",
      status: "Ready",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=600&fit=crop",
      developer: "Emaar",
      features: ["Burj Khalifa View", "Terrace", "Premium Finishes", "+1 more"]
    },
    {
      id: 5,
      title: "Smart 1BR Apartment in Sobha Hartland",
      location: "Sobha Hartland",
      price: "AED 950,000",
      rent: "AED 68,000/year",
      roi: "7.2% ROI",
      bedrooms: 1,
      bathrooms: 1,
      area: "900 sqft",
      type: "Apartment",
      status: "Off-Plan",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      developer: "Sobha",
      features: ["Smart Home", "Waterfront", "Forest View", "+1 more"]
    },
    {
      id: 6,
      title: "Family 4BR Townhouse in Damac Hills",
      location: "Damac Hills",
      price: "AED 1,800,000",
      rent: "AED 120,000/year",
      roi: "6.7% ROI",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,200 sqft",
      type: "Townhouse",
      status: "Ready",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      developer: "Damac",
      features: ["Private Garden", "Parking", "Community Pool", "+1 more"]
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = !selectedArea || property.location === selectedArea;
    const matchesType = !propertyType || property.type === propertyType;
    
    return matchesSearch && matchesArea && matchesType;
  });

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

      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dubai <span className="text-[#d7b029]">Properties</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover premium investment opportunities across Dubai's most sought-after locations
            </p>
          </div>

          {/* Search Filters */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d7b029] focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <select 
                  value={selectedArea} 
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d7b029] focus:border-transparent appearance-none bg-white text-gray-900 font-medium cursor-pointer"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" className="text-gray-500">Select Area</option>
                  <option value="Dubai Marina" className="text-gray-900">Dubai Marina</option>
                  <option value="Downtown Dubai" className="text-gray-900">Downtown Dubai</option>
                  <option value="Business Bay" className="text-gray-900">Business Bay</option>
                  <option value="Dubai Hills Estate" className="text-gray-900">Dubai Hills Estate</option>
                  <option value="Sobha Hartland" className="text-gray-900">Sobha Hartland</option>
                  <option value="Damac Hills" className="text-gray-900">Damac Hills</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select 
                  value={propertyType} 
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d7b029] focus:border-transparent appearance-none bg-white text-gray-900 font-medium cursor-pointer"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" className="text-gray-500">Property Type</option>
                  <option value="Apartment" className="text-gray-900">Apartment</option>
                  <option value="Villa" className="text-gray-900">Villa</option>
                  <option value="Townhouse" className="text-gray-900">Townhouse</option>
                  <option value="Penthouse" className="text-gray-900">Penthouse</option>
                  <option value="Studio" className="text-gray-900">Studio</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select 
                  value={priceRange} 
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d7b029] focus:border-transparent appearance-none bg-white text-gray-900 font-medium cursor-pointer"
                  style={{ backgroundImage: 'none' }}
                >
                  <option value="" className="text-gray-500">Price Range</option>
                  <option value="500k-1m" className="text-gray-900">AED 500K - 1M</option>
                  <option value="1m-2m" className="text-gray-900">AED 1M - 2M</option>
                  <option value="2m-3m" className="text-gray-900">AED 2M - 3M</option>
                  <option value="3m+" className="text-gray-900">AED 3M+</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                </svg>
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="relative">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-48 px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d7b029] focus:border-transparent appearance-none bg-white text-gray-900 font-medium cursor-pointer"
                style={{ backgroundImage: 'none' }}
              >
                <option value="" className="text-gray-500">Sort by</option>
                <option value="price-low" className="text-gray-900">Price: Low to High</option>
                <option value="price-high" className="text-gray-900">Price: High to Low</option>
                <option value="roi-high" className="text-gray-900">ROI: High to Low</option>
                <option value="newest" className="text-gray-900">Newest First</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#d7b029]/50">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'Ready' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {property.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#d7b029] text-white">
                      {property.roi}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#d7b029] transition-colors mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-[#d7b029]">{property.price}</div>
                      <div className="text-sm text-gray-500">Rent: {property.rent}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Developer</div>
                      <div className="font-semibold text-gray-900">{property.developer}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        {property.bathrooms}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v13.5C3 19.746 3.504 20.25 4.125 20.25Z" />
                        </svg>
                        {property.area}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href={`/properties/${property.id}`}>
                    <button className="w-full bg-gradient-to-r from-[#d7b029] to-[#e5cd77] text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex items-center justify-center group">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium">
              Load More Properties
            </button>
          </div>
        </div>
      </section>


    </div>
  );
} 