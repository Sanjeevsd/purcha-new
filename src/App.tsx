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
      id: 'electrolux-professional',
      category: 'Kitchen Equipment & Appliances',
      partner: 'Electrolux Professional',
      partnerLogo: 'EP',
      logo: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'from-blue-50 to-indigo-50',
      rating: 4.9,
      yearsExperience: '100+',
      clientsServed: '500K+',
      description: 'Global leader in professional kitchen equipment and food service solutions. Trusted by Michelin-starred restaurants, luxury hotels, and major hospitality chains worldwide for innovative, energy-efficient appliances.',
      specialties: ['Commercial Ovens', 'Refrigeration Systems', 'Dishwashing Solutions', 'Food Preparation Equipment'],
      certifications: ['ISO 9001', 'Energy Star', 'NSF Certified'],
      regions: ['UAE', 'GCC', 'MENA', 'Global']
    },
    {
      id: 'premium-beverages-uae',
      category: 'Beverages & Refreshments',
      partner: 'Premium Beverages UAE',
      partnerLogo: 'PB',
      logo: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-cyan-600 to-blue-700',
      bgColor: 'from-cyan-50 to-blue-50',
      rating: 4.8,
      yearsExperience: '25+',
      clientsServed: '1,200+',
      description: 'Leading distributor of premium non-alcoholic beverages in the UAE. Specializing in artisanal sodas, fresh juices, specialty teas, and wellness drinks for luxury hotels, resorts, and fine dining establishments.',
      specialties: ['Craft Beverages', 'Fresh Juice Programs', 'Wellness Drinks', 'Custom Blends'],
      certifications: ['HACCP', 'ISO 22000', 'Halal Certified'],
      regions: ['UAE', 'Dubai', 'Abu Dhabi', 'GCC']
    },
    {
      id: 'ecosolutions-middle-east',
      category: 'Sustainability & Green Solutions',
      partner: 'EcoSolutions Middle East',
      partnerLogo: 'ES',
      logo: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-green-600 to-emerald-700',
      bgColor: 'from-green-50 to-emerald-50',
      rating: 4.9,
      yearsExperience: '15+',
      clientsServed: '800+',
      description: 'Pioneer in sustainable hospitality solutions across the Middle East. Providing comprehensive eco-friendly products, renewable energy systems, waste management, and sustainability consulting for hotels and resorts.',
      specialties: ['Solar Energy Systems', 'Waste Management', 'Eco-Friendly Products', 'Sustainability Audits'],
      certifications: ['LEED Certified', 'ISO 14001', 'Carbon Trust'],
      regions: ['UAE', 'Saudi Arabia', 'Qatar', 'MENA']
    },
    {
      id: 'hospitalitytech-solutions',
      category: 'Technology & Digital Solutions',
      partner: 'HospitalityTech Solutions',
      partnerLogo: 'HT',
      logo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-purple-600 to-violet-700',
      bgColor: 'from-purple-50 to-violet-50',
      rating: 4.7,
      yearsExperience: '12+',
      clientsServed: '2,000+',
      description: 'Leading hospitality technology provider specializing in integrated digital solutions. Offering cloud-based POS systems, property management software, guest experience platforms, and AI-powered analytics for modern hotels.',
      specialties: ['POS Systems', 'Property Management', 'Guest Experience Apps', 'Revenue Management'],
      certifications: ['PCI DSS', 'ISO 27001', 'SOC 2 Type II'],
      regions: ['UAE', 'GCC', 'Middle East', 'Asia Pacific']
    },
    {
      id: 'kosher-hospitality-group',
      category: 'Specialty Food Services',
      partner: 'Kosher Hospitality Group',
      partnerLogo: 'KH',
      logo: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      rating: 4.9,
      yearsExperience: '20+',
      clientsServed: '300+',
      description: 'Premier kosher food service provider in the Middle East. Offering complete kosher catering solutions, rabbinical supervision, certified supply chain management, and specialty dietary services for luxury hotels and events.',
      specialties: ['Kosher Catering', 'Rabbinical Supervision', 'Supply Chain Management', 'Event Services'],
      certifications: ['Kosher Certified', 'HACCP', 'Halal Certified'],
      regions: ['UAE', 'Dubai', 'Israel', 'Europe']
    },
    {
      id: 'qualityfirst-consulting',
      category: 'Quality Assurance & Compliance',
      partner: 'QualityFirst Consulting',
      partnerLogo: 'QF',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop',
      color: 'from-rose-600 to-pink-700',
      bgColor: 'from-rose-50 to-pink-50',
      rating: 4.8,
      yearsExperience: '18+',
      clientsServed: '1,500+',
      description: 'Leading quality assurance and compliance consultancy for the hospitality industry. Providing ISO certification support, supply chain auditing, food safety compliance, and operational excellence consulting.',
      specialties: ['ISO Certification', 'Supply Chain Audits', 'Food Safety', 'Compliance Management'],
      certifications: ['ISO 9001 Lead Auditor', 'HACCP Certified', 'Six Sigma Black Belt'],
      regions: ['UAE', 'GCC', 'MENA', 'International']
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Partners by Category</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our verified network of premium suppliers and service providers. Each partner is carefully selected for their expertise, quality standards, and commitment to excellence in the hospitality industry.
            </p>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
              All Categories
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Kitchen Equipment
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Beverages
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Technology
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Sustainability
            </button>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Trusted Suppliers & Service Providers</h3>
              <p className="text-gray-600 mt-1">Verified partners across key hospitality sectors</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
              View All Partners
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={partner.id} className={`bg-gradient-to-br ${partner.bgColor} rounded-2xl p-6 border-2 border-gray-100 hover:shadow-2xl hover:border-gray-200 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${partner.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                {/* Header with Logo and Category */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.partner} logo`}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block bg-white bg-opacity-80 text-xs font-bold text-gray-700 px-3 py-1 rounded-full mb-2 shadow-sm">
                          {partner.category}
                        </span>
                        <h3 className="font-bold text-gray-900 text-lg leading-tight">{partner.partner}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-bold text-gray-700">{partner.rating}</span>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{partner.yearsExperience} years</span>
                  </div>
                </div>
                
                {/* Key Stats */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{partner.clientsServed}</div>
                    <div className="text-xs text-gray-600">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{partner.regions.length}</div>
                    <div className="text-xs text-gray-600">Regions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{partner.certifications.length}</div>
                    <div className="text-xs text-gray-600">Certifications</div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 relative z-10">{partner.description}</p>
                
                {/* Specialties */}
                <div className="mb-4 relative z-10">
                  <h4 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.specialties.slice(0, 3).map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-white bg-opacity-60 text-gray-700 px-2 py-1 rounded-md font-medium">
                        {specialty}
                      </span>
                    ))}
                    {partner.specialties.length > 3 && (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-md font-medium">
                        +{partner.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Certifications */}
                <div className="mb-4 relative z-10">
                  <h4 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Certifications</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.certifications.map((cert, idx) => (
                      <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-medium flex items-center">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Regions */}
                <div className="mb-6 relative z-10">
                  <h4 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Regions</h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.regions.map((region, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 relative z-10">
                  <button className="flex-1 bg-white text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg font-medium hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700 transition-all hover:scale-105 text-sm">
                    View Profile
                  </button>
                  <button className={`flex-1 bg-gradient-to-r ${partner.color} text-white px-4 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all hover:scale-105 text-sm`}>
                    Contact Partner
                  </button>
                </div>
                
                {/* Trust Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-green-500 text-white p-1.5 rounded-full shadow-lg">
                    <Shield className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Become a Featured Partner</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our exclusive network of verified suppliers and service providers. Reach thousands of hospitality businesses across the UAE and GCC region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Apply as Partner
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO-Optimized Partner Categories Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partner Categories & Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Kitchen Equipment Suppliers UAE</h3>
                <p className="text-sm text-gray-600">Professional kitchen appliances, commercial ovens, refrigeration systems for hotels and restaurants in Dubai, Abu Dhabi, and across the UAE.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 transition-colors">
                <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Beverage Distributors GCC</h3>
                <p className="text-sm text-gray-600">Premium non-alcoholic beverages, craft sodas, fresh juices, and specialty drinks for luxury hotels and hospitality venues.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
                <Leaf className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Sustainability Solutions MENA</h3>
                <p className="text-sm text-gray-600">Eco-friendly products, renewable energy systems, waste management, and green hospitality consulting across the Middle East.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <Monitor className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Hospitality Technology UAE</h3>
                <p className="text-sm text-gray-600">POS systems, property management software, guest experience platforms, and digital solutions for modern hotels and resorts.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors">
                <HealthIcon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Specialty Food Services</h3>
                <p className="text-sm text-gray-600">Kosher catering, halal food services, dietary compliance, and specialty cuisine solutions for diverse hospitality needs.</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-rose-50 hover:bg-rose-100 transition-colors">
                <Award className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance Consultants</h3>
                <p className="text-sm text-gray-600">ISO certification, supply chain auditing, food safety compliance, and operational excellence for hospitality businesses.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Success Stories */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partner Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">50% Faster Delivery</h3>
                    <p className="text-sm text-gray-600">Average improvement</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Our partners report significantly faster delivery times and improved supply chain efficiency through our platform.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">300% More Leads</h3>
                    <p className="text-sm text-gray-600">Quality connections</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Featured partners see a dramatic increase in qualified leads and business opportunities through our marketplace.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-sm text-gray-600">Dedicated assistance</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Round-the-clock support ensures smooth operations and quick resolution of any partnership queries.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Hospitality Leaders Choose Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Verified Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Content Block */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospitality Procurement Partners in UAE & GCC</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Purchasync connects hospitality businesses across the UAE, Dubai, Abu Dhabi, and the broader GCC region with verified suppliers and service providers. Our featured partners represent the finest in kitchen equipment, beverage distribution, sustainability solutions, hospitality technology, specialty food services, and quality assurance consulting.
              </p>
              <p className="mb-4">
                Each partner undergoes rigorous verification to ensure they meet the highest standards of quality, reliability, and service excellence. From luxury hotels in Dubai to boutique resorts in Qatar, our partners serve the most prestigious hospitality establishments across the Middle East and North Africa (MENA) region.
              </p>
              <p>
                Whether you're sourcing commercial kitchen equipment, implementing sustainable practices, upgrading your technology infrastructure, or ensuring compliance with international standards, our featured partners provide comprehensive solutions tailored to the unique needs of the hospitality industry.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Footer with Partner Links */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
              <h4 className="font-semibold mb-4">Featured Partners</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Kitchen Equipment UAE</a></li>
                <li><a href="#" className="hover:text-white">Beverage Suppliers GCC</a></li>
                <li><a href="#" className="hover:text-white">Sustainability Solutions</a></li>
                <li><a href="#" className="hover:text-white">Hospitality Technology</a></li>
                <li><a href="#" className="hover:text-white">Quality Assurance</a></li>
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
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Purchasync. All rights reserved.</p>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Partner Agreement</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
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