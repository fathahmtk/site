
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio.jsx'

// Icons (using simple SVG implementations since we don't have lucide-react)
const Globe = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
    <path d="M2 12h20"/>
  </svg>
)

const Smartphone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
)

const TrendingUp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
    <polyline points="16,7 22,7 22,13"/>
  </svg>
)

const FileText = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
    <path d="M14,2v4a2 2 0 0,0 2,2h4"/>
  </svg>
)

const Settings = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
)

const CheckCircle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22,4 12,14.01 9,11.01"/>
  </svg>
)

const Phone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const Mail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const MapPin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const Users = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const Menu = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const X = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
)

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NOOR <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">DIGITAL</span></h1>
              <p className="text-xs text-gray-600">Solutions W.L.L.</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Services</button>
            <Link to="/portfolio" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Portfolio</Link>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact</button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+974 7446 4994</span>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white border-0 px-4 py-2 rounded-lg font-medium">
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Services</button>
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Portfolio</Link>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Contact</button>
              <div className="px-3 py-2">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white border-0 px-4 py-2 rounded-lg font-medium">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

// Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Qatar Registered Business
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block mt-2">Digital Excellence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Comprehensive digital solutions including ERPNext implementation, POS systems, web development, and business services tailored for Qatar and GCC markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">ERPNext Specialists</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">POS Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Qatar VAT Ready</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-lg font-medium inline-flex items-center">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-300 text-purple-700 hover:bg-purple-50 transition-all duration-300 px-6 py-3 rounded-lg font-medium">
                Get Free Consultation
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                <div><span className="font-medium">Email:</span> info@noordigital.business</div>
                <div><span className="font-medium">WhatsApp:</span> +974 7446 4994</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">N</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">NOOR DIGITAL SOLUTIONS</h3>
                <p className="text-gray-600 mb-6">Your trusted partner for digital transformation in Qatar</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Component
const Services = () => {
  const serviceCategories = [
    {
      title: "Web & Branding",
      icon: <Globe className="h-8 w-8" />,
      color: "bg-gradient-to-br from-pink-100 to-purple-100 text-purple-600",
      services: [
        "Business & Ecommerce Websites",
        "Online Booking & Custom Order Platforms",
        "Portfolio & Company Profile Sites",
        "Logo Design & Full Branding",
        "Business Email & Domain Hosting"
      ]
    },
    {
      title: "Software Solutions",
      icon: <Settings className="h-8 w-8" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-600",
      services: [
        "ERPNext (Comprehensive ERP Solution)",
        "POS Systems (Restaurant, Laundry, Retail)",
        "Billing, Invoicing & Quotation Systems",
        "Inventory & Accounting (Qatar VAT-Ready)",
        "Payroll & Payslip Generator",
        "Custom CRM / ERP",
        "HRMS (Attendance, Salary, Leave)"
      ],
      featured: true
    },
    {
      title: "Mobile & Cloud Apps",
      icon: <Smartphone className="h-8 w-8" />,
      color: "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600",
      services: [
        "Android & iOS Apps (Flutter)",
        "Delivery, Ecommerce & Booking Apps",
        "Admin Dashboards & Portals"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-gradient-to-br from-orange-100 to-red-100 text-orange-600",
      services: [
        "Social Media Setup & Paid Promotions",
        "Monthly Ads Boosting Packages",
        "Google Business & Google Ads"
      ]
    },
    {
      title: "Professional & Business Services",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600",
      services: [
        "Trade License Renewal",
        "CR & Company Setup",
        "Bookkeeping & VAT Filing (Qatar & GCC)",
        "Internal Audit & Financial Reports",
        "Document Preparation"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From web development to business services, we provide end-to-end digital solutions 
            tailored for businesses in Qatar and the GCC region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${category.featured ? "ring-2 ring-purple-200 bg-gradient-to-br from-purple-50 to-blue-50" : ""}`}>
              <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
                {category.featured && (
                  <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Featured</span>
                )}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className={service.includes("ERPNext") || service.includes("POS Systems") ? "font-semibold text-gray-800" : ""}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 px-6 py-3 rounded-full border border-purple-200">
            <span className="font-semibold">🇶🇦 Qatar Registered Business</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Component
const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "100+", label: "Happy Clients" },
    { icon: <CheckCircle className="h-8 w-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Globe className="h-8 w-8" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="h-8 w-8" />, number: "100%", label: "Customer Satisfaction" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Noor Digital Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Noor Digital Solutions, customer satisfaction is not just a goal—it's the foundation 
                of everything we do. We are committed to delivering the highest quality websites and 
                online solutions that not only meet but exceed expectations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We strive to help businesses establish a professional online presence, grow their reach, 
                and achieve lasting success. As a Qatar-registered business, we understand the local 
                market and provide tailored solutions for the GCC region.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Abdul Fathah</h3>
              <p className="text-purple-700 font-medium mb-2">Founder, Noor Digital Solutions W.L.L.</p>
              <p className="text-gray-600">
                "Let's grow together! Our mission is to empower businesses with innovative digital 
                solutions that drive real results and sustainable growth."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-purple-600 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready To Get More Leads?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step toward growing your business with expert digital strategies. 
            Let's craft a plan that maximizes your reach, drives more leads, and ensures measurable success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Contact our team today and start achieving your goals. We're here to help you 
                transform your digital presence and grow your business.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h4>
                    <a href="tel:+97474464994" className="text-purple-600 hover:text-purple-700 transition-colors">
                      +974 7446 4994
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@noordigital.business" className="text-purple-600 hover:text-purple-700 transition-colors">
                      info@noordigital.business
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Qatar</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                    <a href="https://www.noordigital.business" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 transition-colors">
                      www.noordigital.business
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="+974 XXXX XXXX" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4" placeholder="Tell us about your project and requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-md font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Don't wait! Contact us now for a free consultation and let's discuss how we can 
              help transform your business with our comprehensive digital solutions.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">NOOR <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">DIGITAL</span></h3>
                <p className="text-xs text-gray-400">Solutions W.L.L.</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              At Noor Digital Solutions, customer satisfaction is not just a goal—it's the foundation 
              of everything we do. We are committed to delivering the highest quality websites and 
              online solutions that not only meet but exceed expectations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:info@noordigital.business" className="text-gray-300 hover:text-white transition-colors">
                  info@noordigital.business
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+97474464994" className="text-gray-300 hover:text-white transition-colors">
                  +974 7446 4994
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><button onClick={() => window.location.href = '/#services'} className="text-left text-gray-300 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => window.location.href = '/#about'} className="text-left text-gray-300 hover:text-white transition-colors">About</button></li>
              <li><button onClick={() => window.location.href = '/#contact'} className="text-left text-gray-300 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services Area</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Web Development & Design</li>
              <li className="text-gray-300 text-sm">Mobile App Development</li>
              <li className="text-gray-300 text-sm">Digital Marketing</li>
              <li className="text-gray-300 text-sm">Software Solutions</li>
              <li className="text-gray-300 text-sm">Business Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Noor Digital Solutions W.L.L. All rights reserved.
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-flex items-center bg-purple-900 text-purple-200 px-4 py-2 rounded-full text-sm">
              <span className="mr-2">🇶🇦</span>
              Qatar Registered Business
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
