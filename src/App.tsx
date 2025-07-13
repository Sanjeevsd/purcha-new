import React, { useState } from 'react';
import { Search, MapPin, Users, Zap, Package, Star, Award, Globe, Phone, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const partners = [
    {
      id: 1,
      name: "Emirates Food Distribution",
      logo: "🍽️",
      category: "food-beverage",
      description: "Leading food and beverage distributor serving premium hotels and restaurants across the UAE and GCC region.",
      specialties: ["Premium Ingredients", "Halal Certified", "Cold Chain Logistics"],
      location: "Dubai, UAE",
      rating: 4.9,
      yearsExperience: 15,
      clientsServed: "500+",
      certifications: ["HACCP", "ISO 22000", "Halal"],
      serviceRegions: ["UAE", "Saudi Arabia", "Qatar"]
    },
    {
      id: 2,
      name: "GCC Hospitality Equipment",
      logo: "🏨",
      category: "furniture-equipment",
      description: "Comprehensive supplier of commercial kitchen equipment, furniture, and hospitality solutions for luxury hotels.",
      specialties: ["Commercial Kitchens", "Hotel Furniture", "Maintenance Services"],
      location: "Abu Dhabi, UAE",
      rating: 4.8,
      yearsExperience: 12,
      clientsServed: "300+",
      certifications: ["CE", "ISO 9001", "Energy Star"],
      serviceRegions: ["UAE", "Oman", "Bahrain"]
    },
    {
      id: 3,
      name: "Dubai Tech Solutions",
      logo: "💻",
      category: "technology",
      description: "Cutting-edge technology solutions including POS systems, hotel management software, and digital infrastructure.",
      specialties: ["POS Systems", "Hotel Software", "Digital Infrastructure"],
      location: "Dubai, UAE",
      rating: 4.7,
      yearsExperience: 8,
      clientsServed: "200+",
      certifications: ["Microsoft Partner", "Oracle Certified", "AWS Partner"],
      serviceRegions: ["UAE", "Kuwait", "Qatar"]
    },
    {
      id: 4,
      name: "Arabian Cleaning Supplies",
      logo: "🧽",
      category: "non-food",
      description: "Eco-friendly cleaning and maintenance supplies for hotels, restaurants, and hospitality businesses.",
      specialties: ["Eco-Friendly Products", "Bulk Supply", "Training Programs"],
      location: "Sharjah, UAE",
      rating: 4.6,
      yearsExperience: 10,
      clientsServed: "400+",
      certifications: ["Green Seal", "EPA Certified", "ISO 14001"],
      serviceRegions: ["UAE", "Saudi Arabia"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Partners', count: partners.length },
    { id: 'food-beverage', name: 'Food & Beverage', count: partners.filter(p => p.category === 'food-beverage').length },
    { id: 'furniture-equipment', name: 'Equipment', count: partners.filter(p => p.category === 'furniture-equipment').length },
    { id: 'technology', name: 'Technology', count: partners.filter(p => p.category === 'technology').length },
    { id: 'non-food', name: 'Non-Food', count: partners.filter(p => p.category === 'non-food').length }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Package className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Purchasync</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Suppliers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Categories</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">RFQ</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            </nav>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            UAE's Premier <span className="text-blue-600">B2B Marketplace</span><br />
            for Hospitality Procurement
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified suppliers and buyers across the UAE and GCC region. 
            Streamline your hospitality procurement with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
              Find Suppliers
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg">
              Become a Supplier
            </button>
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products, suppliers, or services..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                <option>Dubai, UAE</option>
                <option>Abu Dhabi, UAE</option>
                <option>Sharjah, UAE</option>
                <option>Riyadh, Saudi Arabia</option>
                <option>Doha, Qatar</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Search
            </button>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">UAE & GCC Hospitality Procurement Hub</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover premium suppliers for hotels, restaurants, and hospitality businesses across Dubai, Abu Dhabi, 
              Riyadh, Doha, and the entire GCC region. From food & beverage to equipment and technology solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Verified Suppliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm opacity-80">Active Buyers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50M+</div>
                <div className="text-sm opacity-80">AED in Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm opacity-80">GCC Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Partners Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our verified suppliers and partners across the UAE and GCC region. 
              These trusted businesses serve the hospitality industry with excellence and reliability.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium capitalize">
                        {partner.category.replace('-', ' & ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{partner.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{partner.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {partner.certifications.slice(0, 2).map((cert, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          <Award className="w-3 h-3 inline mr-1" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{partner.description}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Regions:</h4>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{partner.serviceRegions.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    View Profile
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Success Stories */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Partner Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">40% Cost Reduction</div>
                <p className="text-sm text-gray-600">Average savings achieved by hotels using our platform</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">72 Hours</div>
                <p className="text-sm text-gray-600">Average time to connect with qualified suppliers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">98% Satisfaction</div>
                <p className="text-sm text-gray-600">Partner satisfaction rate across all categories</p>
              </div>
            </div>
          </div>

          {/* Call to Action for Partners */}
          <div className="mt-8 text-center bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Become a Featured Partner</h3>
            <p className="text-gray-600 mb-4">Join our network of verified suppliers and reach thousands of hospitality businesses across the GCC.</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Apply for Partnership
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Purchasync?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Suppliers and Buyers</h3>
              <p className="text-gray-600">All suppliers and buyers are thoroughly vetted and verified for quality and reliability.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct Engagement</h3>
              <p className="text-gray-600">Connect directly with suppliers and buyers without intermediaries for better deals.</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Stop Platform</h3>
              <p className="text-gray-600">Everything you need for hospitality procurement in one comprehensive platform.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Purchasync</h3>
              <p className="text-gray-400 mb-4">
                The leading B2B marketplace for hospitality procurement in the UAE and GCC region.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Food & Beverage</a></li>
                <li><a href="#" className="hover:text-white">Non-food & Consumables</a></li>
                <li><a href="#" className="hover:text-white">Furniture & Equipment</a></li>
                <li><a href="#" className="hover:text-white">Technology & IT</a></li>
                <li><a href="#" className="hover:text-white">Service Providers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Suppliers</a></li>
                <li><a href="#" className="hover:text-white">RFQ Process</a></li>
                <li><a href="#" className="hover:text-white">Tender Management</a></li>
                <li><a href="#" className="hover:text-white">Quality Assurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dubai, UAE</li>
                <li>+971 4 XXX XXXX</li>
                <li>info@purchasync.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Purchasync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;