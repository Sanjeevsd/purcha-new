import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Heart, User, Menu, ArrowRight, Users, Briefcase, Package, ChevronLeft, ChevronRight, Star, Award, Zap, Droplets, Leaf, Monitor, Heart as HealthIcon, Flag, Shield, Truck, Clock, FileText, Plus, Minus } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isPurchasyncDropdownOpen, setIsPurchasyncDropdownOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  // Categories with subcategories
  const categories = [
    {
      id: 'food-beverage', 
      title: 'Food & Beverage',
      icon: <Droplets className="w-5 h-5" />,
      subcategories: [
        'Fresh Produce',
        'Dairy Products',
        'Beverages',
        'Frozen Foods',
        'Bakery Items',
        'Condiments & Spices'
      ]
    },
    {
      id: 'non-food',
      title: 'Non-food & Consumables',
      icon: <Shield className="w-5 h-5" />,
      subcategories: [
        'Paper Products',
        'Packaging Materials',
        'Personal Care Items',
        'Office Supplies',
        'Disposables',
        'Amenities'
      ]
    },
    {
      id: 'furniture-equipment',
      title: 'Furniture & Equipment',
      icon: <Package className="w-5 h-5" />,
      subcategories: [
        'Kitchen Equipment',
        'Furniture',
        'Fixtures',
        'Appliances',
        'Storage Solutions',
        'Decorative Items'
      ]
    },
    {
      id: 'technology-it',
      title: 'Technology & IT',
      icon: <Monitor className="w-5 h-5" />,
      subcategories: [
        'POS Systems',
        'Software Solutions',
        'Hardware',
        'Networking Equipment',
        'Security Systems',
        'Audio Visual Equipment'
      ]
    },
    {
      id: 'service-providers',
      title: 'Service Providers',
      icon: <Briefcase className="w-5 h-5" />,
      subcategories: [
        'Cleaning Services',
        'Maintenance & Repair',
        'Consulting',
        'Training & Development',
        'Marketing Services',
        'Technology Support'
      ]
    },
    {
      id: 'agencies',
      title: 'Agencies',
      icon: <Users className="w-5 h-5" />,
      subcategories: [
        'Marketing Agencies',
        'Recruitment Agencies',
        'Event Management',
        'Design Agencies',
        'Digital Marketing',
        'Brand Consultancy'
      ]
    }
  ];

  // Sustainability Corner categories
  const sustainabilityCategories = [
    {
      id: 'healthy',
      title: 'Healthy Corner',
      icon: <HealthIcon className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
    },
    {
      id: 'plastic-free',
      title: 'Plastic-Free Products',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      id: 'non-alcoholic',
      title: 'Non-Alcoholic Beverage',
      icon: <Droplets className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      id: 'local-uae',
      title: 'Made in UAE',
      icon: <Flag className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      bgColor: 'from-red-50 to-orange-50',
    },
  ];

  // Top companies data
  const topCompanies = [
    { name: 'Marriott', logo: 'M', color: 'from-red-500 to-red-600' },
    { name: 'Hilton', logo: 'H', color: 'from-blue-500 to-blue-600' },
    { name: 'Emirates', logo: 'E', color: 'from-red-600 to-orange-500' },
    { name: 'Jumeirah', logo: 'J', color: 'from-purple-500 to-purple-600' },
    { name: 'Rotana', logo: 'R', color: 'from-green-500 to-green-600' },
    { name: 'Atlantis', logo: 'A', color: 'from-blue-600 to-cyan-500' },
    { name: 'Four Seasons', logo: 'FS', color: 'from-amber-500 to-orange-500' },
    { name: 'Hyatt', logo: 'HY', color: 'from-indigo-500 to-purple-500' }
  ];

  // Simplified partners - only 6 cards
  const partners = [
    {
      category: 'Kitchen Equipment',
      partner: 'Electrolux',
      partnerLogo: 'EX',
      logo: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      description: 'Global leader in professional kitchen equipment, providing innovative solutions for restaurants, hotels, and catering operations worldwide.'
    },
    {
      category: 'Non-Alcoholic Drinks',
      partner: 'Premium Beverages Co.',
      partnerLogo: 'DD',
      logo: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100',
      description: 'Artisanal non-alcoholic beverages, craft sodas, and premium drink solutions for upscale hospitality establishments.'
    },
    {
      category: 'Sustainability',
      partner: 'EcoSolutions',
      partnerLogo: 'ES',
      logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      description: 'Comprehensive sustainability solutions including renewable energy systems, waste management, and eco-friendly product sourcing.'
    },
    {
      category: 'Technology',
      partner: 'HospitalityTech Solutions',
      partnerLogo: 'TP',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      description: 'Advanced hospitality technology including cloud-based POS systems, property management software, and integrated booking solutions.'
    },
    {
      category: 'Kosher Services',
      partner: 'Kosher Hospitality Group',
      partnerLogo: 'LS',
      logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100',
      description: 'Full-service kosher catering, rabbinical supervision, and certified kosher food supply chain management for luxury hotels and events.'
    },
    {
      category: 'Quality Assurance',
      partner: 'QualityFirst',
      partnerLogo: 'QF',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'from-rose-50 to-rose-100',
      description: 'ISO-certified quality assurance, supply chain auditing, and compliance management services for hospitality procurement.'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(topCompanies.length / 4));
    }, 4000);
    return () => clearInterval(timer);
  }, [topCompanies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(topCompanies.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(topCompanies.length / 4)) % Math.ceil(topCompanies.length / 4));
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row - Logo, Search, User Icons */}
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-1">
              <div className="flex-shrink-0">
                <div>
                  <h1 className="text-2xl font-bold text-blue-600">Purchasync</h1>
                  <p className="text-xs text-gray-500 font-medium">Hospitality Marketplace</p>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products, suppliers, services..."
                    className="w-full pl-10 pr-20 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Second Row - Navigation */}
          <div className="border-t border-gray-200 py-3">
            <div className="flex items-center justify-between">
              {/* Left Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">All Categories</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Service Providers</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Hospitality Experts</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Digital Solutions</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Sustainability Hub</a>
                <a href="#" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium">Deals</a>
              </nav>

              {/* Right Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Request for Quotation
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setIsPurchasyncDropdownOpen(!isPurchasyncDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    Purchasync Center
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  
                  {isPurchasyncDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                      <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Saved Items</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#" className="text-gray-900 block px-3 py-2 text-base font-medium">All Categories</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">Service Providers</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">Hospitality Experts</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">Digital Solutions</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">Sustainability Hub</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 block px-3 py-2 text-base font-medium">Deals</a>
            </div>
          </div>
        )}
      </header>

      {/* 3-Column Layout Below Header */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile Layout - RFQ and Find Suppliers First */}
        <div className="lg:hidden mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Find Suppliers Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Find Top Suppliers</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Search and connect with top hospitality suppliers and service providers
              </p>
              <button className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center text-sm shadow-md">
                Find Top Suppliers
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* RFQ Section */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="w-6 h-6 mr-3 text-emerald-600" />
                <h3 className="text-lg font-bold text-gray-900">Request for Quotations</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Create RFQ and get matched with global and local vendors for proposals
              </p>
              <button className="w-full bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 flex items-center justify-center text-sm shadow-md">
                Request for Quotation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Mobile All Categories - Collapsible */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow mb-6">
            <button
              onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
              className="w-full flex items-center justify-between mb-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <Package className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">All Categories</h3>
              </div>
              {isMobileCategoriesOpen ? (
                <Minus className="w-5 h-5 text-blue-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {isMobileCategoriesOpen && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
                    <div className="p-3 bg-blue-50 border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="text-blue-600">
                          {category.icon}
                        </div>
                        <span className="ml-2 text-sm font-bold text-gray-900">{category.title}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <div className="grid grid-cols-1 gap-1">
                        {category.subcategories.map((sub, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block text-xs text-gray-600 hover:text-blue-700 py-1.5 px-2 rounded-md hover:bg-blue-50 transition-colors font-medium"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hero Banner */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-6">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10">
              <h1 className="text-2xl font-bold mb-4">
                Transform Your Hospitality Procurement
              </h1>
              <p className="text-base text-indigo-100 mb-6">
                Connect with premium suppliers and streamline your procurement process.
              </p>
              <div className="flex flex-col gap-3 justify-center">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all hover:scale-105 flex items-center justify-center shadow-md">
                  <Users className="w-4 h-4 mr-2" />
                  Find Suppliers
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Sustainability Corner */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <Leaf className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Sustainability Corner</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {sustainabilityCategories.map((category) => (
                <div
                  key={category.id}
                  className={`bg-gradient-to-r ${category.bgColor} rounded-xl border-2 border-gray-100 p-4 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group hover:scale-105`}
                >
                  <div className="flex items-center">
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(category.icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{category.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Left Column - All Categories */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <Package className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">All Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full p-3 flex items-center justify-between hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                          {category.icon}
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-900">{category.title}</span>
                      </div>
                      {expandedCategory === category.id ? (
                        <Minus className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                      )}
                    </button>
                    {expandedCategory === category.id && (
                      <div className="border-t border-gray-200 bg-blue-50 p-3">
                        <div className="space-y-1">
                          {category.subcategories.map((sub, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block text-xs text-gray-600 hover:text-blue-700 py-1.5 px-3 rounded-md hover:bg-white transition-colors font-medium"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - RFQ & Find Suppliers + Banner */}
          <div className="lg:col-span-6">
            {/* RFQ and Find Suppliers Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {/* Find Suppliers Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Find Top Suppliers</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Search and connect with top hospitality suppliers and service providers
                </p>
                <button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center text-sm shadow-md">
                  Find Top Suppliers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* RFQ Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <FileText className="w-6 h-6 mr-3 text-emerald-600" />
                  <h3 className="text-lg font-bold text-gray-900">Request for Quotations</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Create RFQ and get matched with global and local vendors for proposals
                </p>
                <button className="bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 flex items-center text-sm shadow-md">
                  Request for Quotation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-4">
                  Transform Your Hospitality Procurement
                </h1>
                <p className="text-lg text-indigo-100 mb-6">
                  Connect with premium suppliers and streamline your procurement process.
                </p>
                <div className="flex flex-col lg:flex-row gap-3 justify-center">
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all hover:scale-105 flex items-center justify-center shadow-md">
                    <Users className="w-4 h-4 mr-2" />
                    Find Suppliers
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Access */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <Leaf className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Sustainability Corner</h3>
              </div>
              <div className="space-y-3">
                {sustainabilityCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`bg-gradient-to-r ${category.bgColor} rounded-xl border-2 border-gray-100 p-4 hover:shadow-lg hover:border-gray-200 transition-all cursor-pointer group hover:scale-105`}
                  >
                    <div className="flex items-center">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {React.cloneElement(category.icon, { className: "w-5 h-5" })}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{category.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Below 3-Column Layout */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Companies Carousel */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Trusted by Leading Hospitality Brands</h2>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-all hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(topCompanies.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {topCompanies.slice(slideIndex * 4, (slideIndex + 1) * 4).map((company, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:scale-105 transition-all text-center group">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${company.color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}>
                          {company.logo}
                        </div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{company.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Featured Partners by Category</h2>
              <p className="text-gray-600 mt-1">Trusted suppliers and service providers across key hospitality sectors</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className={`bg-gradient-to-r ${partner.bgColor} rounded-xl p-6 border-2 border-gray-100 hover:shadow-xl hover:border-gray-200 hover:scale-105 transition-all group`}>
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <img 
                      src={partner.logo} 
                      alt={partner.partner}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{partner.category}</span>
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">{partner.partner}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>
                <button className="w-full bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
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