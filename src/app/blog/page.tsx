'use client';

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Off-Plan Projects in Dubai 2025: Investment Opportunities You Can't Miss",
    excerpt: "Discover the most promising off-plan developments in Dubai offering exceptional ROI potential and innovative payment plans.",
    author: "Sarah Al-Mansouri",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Dubai Real Estate Market Trends 2025: What Investors Need to Know",
    excerpt: "Complete analysis of Dubai's property market performance, emerging trends, and future outlook for smart investors.",
    author: "Ahmed Hassan",
    date: "2025-01-10",
    readTime: "12 min",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Golden Visa Guide: How Property Investment Can Secure Your UAE Residency",
    excerpt: "Everything you need to know about obtaining UAE Golden Visa through real estate investment, requirements, and benefits.",
    author: "Fatima Al-Zahra",
    date: "2025-01-05",
    readTime: "10 min",
    category: "Golden Visa",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop&crop=center"
  }
];

export default function Blog() {
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
              <Link href="/properties" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Properties</Link>
              <Link href="/blog" className="text-[#d7b029] hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-full after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 font-medium">Blog</Link>
              <a href="/#why-invest" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Why Dubai</a>
              <a href="/#roi-areas" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Best Areas</a>
              <a href="/#developers" className="text-gray-800 hover:text-[#d7b029] transition-all duration-300 ease-in-out relative after:absolute after:w-0 after:h-0.5 after:bg-[#d7b029] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full font-medium">Developers</a>
              
              {/* Call Now & WhatsApp Buttons */}
              <div className="flex items-center space-x-2">
                <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:shadow-md hover:border-gray-400 transition-all duration-300 ease-in-out font-medium flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>Call Now</span>
                </button>
                <button className="bg-gradient-to-r from-[#d7b029] via-[#e5cd77] to-[#d5bc29] text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out font-medium flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.462-.96-4.779-2.705-6.526-1.745-1.746-4.065-2.711-6.526-2.713-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.092-.634z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1">
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dubai Real Estate <span className="text-[#d7b029]">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert analysis, market trends, and investment guides from Dubai's leading real estate professionals
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#d7b029]/10 text-[#d7b029] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-[var(--font-playfair)] font-bold text-gray-900 mb-3 leading-tight hover:text-[#d7b029] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Improved Meta Information */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#d7b029] to-[#e5cd77] rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric',
                              year: 'numeric' 
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{post.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
                  <Link href="/" className="hover:text-[#d7b029] transition duration-300">Home</Link>
                  <Link href="/properties" className="hover:text-[#d7b029] transition duration-300">Properties</Link>
                  <Link href="/blog" className="hover:text-[#d7b029] transition duration-300">Blog</Link>
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