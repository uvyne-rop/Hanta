import React, { useState } from 'react';
import { 
  Home, 
  Menu, 
  X, 
  Play, 
  ArrowRight, 
  Building2, 
  Search, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import paulImage from '../assets/paul.jpeg';
import kennedyImage from '../assets/kimathi.jpeg';
import uvyneImage from '../assets/uvyne.jpg';

const HantaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: 'Property Management',
      description: 'End-to-end management for property owners. List your spaces, manage tenants, and track maintenance requests all through our secure mobile platform.'
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: 'House Hunting Platform',
      description: 'Browse thousands of verified listings on the HANTA app. Filter by location, price, and amenities to find the perfect home that fits your lifestyle.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Smart Solutions',
      description: 'Digital leases, automated rent collection, and instant communication tools connecting tenants directly with property owners safely.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Download the App',
      description: 'Get the free HANTA app from the Google Play Store to access all our features.'
    },
    {
      number: '2',
      title: 'Create an Account',
      description: 'Sign up securely as a tenant looking for a home or a property owner ready to list.'
    },
    {
      number: '3',
      title: 'Search or List',
      description: 'Start swiping through available houses or upload details of your property to find tenants.'
    }
  ];

  const team = [
    {
      name: 'Paul Icel Idiama',
      role: 'CEO & Founder',
      image: paulImage
    },
    {
      name: 'Kennedy Kimathi',
      role: 'Co-founder',
      image: kennedyImage
    },
    {
      name: 'Uvyne Rop',
      role: 'developer',
      image: uvyneImage
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    
    
    const FORMSPREE_ID = 'xreykeoj'; 
    
   
    

    try {
      const response = await fetch(`https://formspree.io/f/xreykeoj`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New HANTA Contact from ${formData.fullName}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send');
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-purple-700">HANTA</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-700 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                Download App
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-purple-700 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-purple-700 text-white px-6 py-3 rounded-lg font-medium mt-4">
                Download App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#d4f4d4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Simplifying Property Management and House Hunting.
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                HANTA is your trusted platform connecting tenants with ideal homes and property owners with reliable management solutions. All from the convenience of your mobile device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  <Play className="w-5 h-5" />
                  Get it on Google Play
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                      QR
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 max-w-[140px]">
                    Scan to download the HANTA mobile app instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://theinspiredroom.net/wp-content/uploads/2021/03/empty-apartment-tour-bellingham-2.jpg"
                  alt="Modern apartment interior"
                  className="w-full h-auto object-cover"
                />
              </div>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-400/80 hover:bg-gray-500/80 rounded-full flex items-center justify-center text-white transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About HANTA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are transforming the real estate experience through technology, making property management seamless and house hunting stress-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://remax.azureedge.net/userimages/106/LargeWM/L_cd010e9a-c920-4c41-9c9d-f41945e96585.jpg"
                alt="Modern green building"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  At HANTA, our mission is to bridge the gap between property owners and tenants through an intuitive, secure, and comprehensive mobile platform. We handle the complexities of property management so owners can relax, and we streamline the house-hunting process so tenants can find their dream homes quickly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Trust Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  Backed by industry experts and cutting-edge technology, HANTA provides transparent listings, verified properties, and a dedicated support team to ensure your real estate journey is safe and successful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#d4f4d4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed for modern living and efficient property oversight.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Everything happens on the HANTA mobile app. Our website is just to say hello!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[#d4f4d4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The professionals working behind the scenes to revolutionize your real estate experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-purple-700 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to find your next home?
          </h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have simplified their property management and house hunting with HANTA. Download the app today.
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors">
            <Play className="w-5 h-5" />
            Download from Google Play
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about HANTA? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4f4d4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office Location</h3>
                  <p className="text-gray-600">Moi avenue</p>
                  <p className="text-gray-600">Nairobi county</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4f4d4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">paulicel@gmail.com</p>
                  <p className="text-sm text-gray-500">Direct line to Paul Icel Idiama, CEO</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4f4d4] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+254 712345678</p>
                  <p className="text-gray-600">Mon-Fri, 9am - 6pm EAT</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 text-sm">
                    Message sent successfully! We will get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Fallback Message (when Formspree not configured) */}
              {submitStatus === 'fallback' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-800 text-sm font-medium">
                      Email client opened!
                    </p>
                    <p className="text-blue-700 text-xs mt-1">
                      Please send the email from your mail app, or copy: paulicel@gmail.com
                    </p>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    Failed to send. Please email Hanta directly at{' '}
                    <a href="mailto:icelpaul90@gmail.com@gmail.com" className="underline font-medium">
                      icelpaul90@gmail.com
                    </a>
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="How can we help you?"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none disabled:bg-gray-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-700 hover:bg-purple-800 disabled:bg-purple-400 text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Your message goes to Hanta@gmail.com
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-purple-700">HANTA</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simplifying property management and house hunting for everyone. Available exclusively on the Google Play Store.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-purple-700 transition-colors">Our Services</a></li>
                <li><a href="#team" className="text-gray-600 hover:text-purple-700 transition-colors">Team</a></li>
                <li><a href="#careers" className="text-gray-600 hover:text-purple-700 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#help" className="text-gray-600 hover:text-purple-700 transition-colors">Help Center</a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-purple-700 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-purple-700 transition-colors">Contact Us</a></li>
                <li><a href="#terms" className="text-gray-600 hover:text-purple-700 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Get the App</h4>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors mb-4">
                <Play className="w-5 h-5" />
                Google Play
              </button>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 HANTA Technologies Inc. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Contact: icelpaul90@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HantaLanding;