"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="lg:hidden text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out rounded-full p-3 hover:bg-black/5 backdrop-blur-lg"
        aria-label="Toggle mobile menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white/100 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="flex flex-col bg-white/100 animate-in slide-in-from-right duration-500 ease-out">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="relative w-32 h-8">
                <Image
                  src="/images/logo.svg"
                  alt="Urban Rise Real Estate"
                  fill
                  className="object-contain"
                />
              </div>
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out rounded-full p-2"
                aria-label="Close mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <a 
                  href="#properties" 
                  onClick={toggleMobileMenu}
                  className="block text-xl font-medium text-gray-800 hover:text-[#d7b029] transition-all duration-300 py-3 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-100"
                >
                  Properties
                </a>
                <a 
                  href="#why-invest" 
                  onClick={toggleMobileMenu}
                  className="block text-xl font-medium text-gray-800 hover:text-[#d7b029] transition-all duration-300 py-3 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-200"
                >
                  Why Invest
                </a>
                <a 
                  href="#roi-calculator" 
                  onClick={toggleMobileMenu}
                  className="block text-xl font-medium text-gray-800 hover:text-[#d7b029] transition-all duration-300 py-3 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-300"
                >
                  ROI Calculator
                </a>
                <a 
                  href="#foreign-buyers" 
                  onClick={toggleMobileMenu}
                  className="block text-xl font-medium text-gray-800 hover:text-[#d7b029] transition-all duration-300 py-3 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-500"
                >
                  Foreign Buyers
                </a>
                <a 
                  href="#faq" 
                  onClick={toggleMobileMenu}
                  className="block text-xl font-medium text-gray-800 hover:text-[#d7b029] transition-all duration-300 py-3 border-b border-gray-100 animate-in slide-in-from-left duration-700 delay-700"
                >
                  FAQ
                </a>
              </div>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="p-6 border-t border-gray-200 space-y-4">
              <button className="w-full bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:shadow-md hover:border-gray-400 transition-all duration-300 ease-in-out font-medium flex items-center justify-center space-x-2 animate-in slide-in-from-bottom duration-600 delay-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Call Now</span>
              </button>
              <button className="w-full bg-[#25d366] text-white px-6 py-3 rounded-lg hover:bg-[#25d366]/90 hover:shadow-md transition-all duration-300 ease-in-out font-medium flex items-center justify-center space-x-2 animate-in slide-in-from-bottom duration-600 delay-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                </svg>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 