


'use client'

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Search, ShoppingCart, User, Bell, Globe, Code, Smartphone, Monitor, Server, Database, Cloud, Zap, Shield, Headphones, Mail, MapPin, Phone } from 'lucide-react';

export default function MenuPage() {
  const [activeNavbar, setActiveNavbar] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar 1: Mega Menu
  const MegaMenuNavbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechCorp
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            
            {/* Mega Menu Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {megaMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-white shadow-2xl rounded-lg mt-2 p-8 border border-gray-100"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                        Mobile
                      </h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">iOS Development</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Android Development</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">React Native</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Flutter</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Monitor className="w-5 h-5 mr-2 text-purple-600" />
                        Web
                      </h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Frontend Development</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Backend Development</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Full Stack</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">E-commerce</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Cloud className="w-5 h-5 mr-2 text-green-600" />
                        Cloud
                      </h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">AWS Solutions</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Azure Integration</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Google Cloud</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">DevOps</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-red-600" />
                        Security
                      </h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Penetration Testing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Security Audit</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Compliance</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-red-600 transition-colors">Consulting</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">Need help choosing?</h4>
                        <p className="text-gray-600 text-sm">Talk to our solution experts</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Solutions</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Navbar 2: Medium Menu
  const MediumMenuNavbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' : 'bg-gray-900 shadow-lg'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Creative<span className="text-orange-400">Hub</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-orange-400 font-medium transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 py-4 border border-gray-100">
                  <div className="px-4 py-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Design Services</h3>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Monitor className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">UI/UX Design</p>
                          <p className="text-sm text-gray-600">User interface & experience</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-4 h-4 text-pink-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Web Design</p>
                          <p className="text-sm text-gray-600">Modern website design</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Mobile Design</p>
                          <p className="text-sm text-gray-600">App interface design</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-orange-400 font-medium transition-colors"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsOpen && (
                <div className="absolute top-full right-0 w-80 bg-white shadow-xl rounded-lg mt-2 py-4 border border-gray-100">
                  <div className="px-4 py-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Our Products</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <a href="#" className="p-3 hover:bg-gray-50 rounded-lg transition-colors text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Database className="w-6 h-6 text-blue-600" />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">DataSync Pro</p>
                        <p className="text-xs text-gray-600">Database management</p>
                      </a>
                      <a href="#" className="p-3 hover:bg-gray-50 rounded-lg transition-colors text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Cloud className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">CloudFlow</p>
                        <p className="text-xs text-gray-600">Workflow automation</p>
                      </a>
                      <a href="#" className="p-3 hover:bg-gray-50 rounded-lg transition-colors text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">SecureVault</p>
                        <p className="text-xs text-gray-600">Data protection</p>
                      </a>
                      <a href="#" className="p-3 hover:bg-gray-50 rounded-lg transition-colors text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <Server className="w-6 h-6 text-orange-600" />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">ServerLink</p>
                        <p className="text-xs text-gray-600">Server monitoring</p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Portfolio</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 font-medium transition-colors">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-orange-400 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-orange-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-orange-400 font-medium">Home</a>
            <a href="#" className="block text-gray-300 hover:text-orange-400 font-medium">Services</a>
            <a href="#" className="block text-gray-300 hover:text-orange-400 font-medium">Products</a>
            <a href="#" className="block text-gray-300 hover:text-orange-400 font-medium">Portfolio</a>
            <a href="#" className="block text-gray-300 hover:text-orange-400 font-medium">Contact</a>
            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full">
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Navbar 3: Standard Menu
  const StandardNavbar = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              Global<span className="text-emerald-600">Solutions</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all">
              Get Quote
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="sm:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Home</a>
            <a href="#" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Services</a>
            <a href="#" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">About</a>
            <a href="#" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Blog</a>
            <a href="#" className="block text-gray-700 hover:text-emerald-600 font-medium py-2">Contact</a>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Selector */}
      <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Choose Navbar:</h3>
        <div className="space-y-2">
          <button
            onClick={() => setActiveNavbar(1)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeNavbar === 1 ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            1. Mega Menu
          </button>
          <button
            onClick={() => setActiveNavbar(2)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeNavbar === 2 ? 'bg-orange-100 text-orange-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            2. Medium Menu
          </button>
          <button
            onClick={() => setActiveNavbar(3)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              activeNavbar === 3 ? 'bg-emerald-100 text-emerald-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            3. Standard Menu
          </button>
        </div>
      </div>

      {/* Render Active Navbar */}
      {activeNavbar === 1 && <MegaMenuNavbar />}
      {activeNavbar === 2 && <MediumMenuNavbar />}
      {activeNavbar === 3 && <StandardNavbar />}

      {/* Demo Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Navbar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Components
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Three beautiful, responsive navbar designs with different menu complexities. 
              Built with shadcn/ui and optimized for the best user experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                Explore Features
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
                <p className="text-gray-600">Perfect display on all devices from mobile to desktop with smooth animations.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Performance</h3>
                <p className="text-gray-600">Optimized for speed with minimal bundle size and efficient rendering.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessible</h3>
                <p className="text-gray-600">Built with accessibility in mind, supporting keyboard navigation and screen readers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose the perfect navbar design for your project and enhance your user experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all">
                <Mail className="w-5 h-5 inline mr-2" />
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all">
                <Phone className="w-5 h-5 inline mr-2" />
                Schedule Call
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Navbar Components</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional navbar components built with modern web technologies.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

