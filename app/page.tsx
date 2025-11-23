'use client';

import { useState, useEffect } from 'react';
import {
  Snowflake,
  Truck,
  Users,
  Award,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Ahmed Ben Ali",
      company: "Restaurant Le Mediterranée",
      text: "Iceem has been our trusted ice supplier for over 3 years. Their reliability and quality are unmatched. The delivery is always on time, and the ice quality is consistently excellent.",
      rating: 5
    },
    {
      name: "Sarah Mansour",
      company: "Hôtel Royal",
      text: "Outstanding service! We rely on Iceem for all our events and daily operations. Their team is professional, responsive, and always delivers exactly what we need.",
      rating: 5
    },
    {
      name: "Mohamed Trabelsi",
      company: "Café Central",
      text: "The best ice supplier in Tunisia! Fast delivery, competitive prices, and exceptional customer service. I highly recommend Iceem for any business needs.",
      rating: 5
    },
    {
      name: "Fatima Bouazizi",
      company: "Catering Solutions Pro",
      text: "We've worked with several suppliers, but Iceem stands out for their professionalism and quality. They've never let us down, even during our busiest seasons.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: Snowflake,
      title: "Ice Manufacturing",
      description: "State-of-the-art production facilities delivering premium quality ice for all your needs."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable and timely delivery service across Tunisia, ensuring your ice arrives fresh and frozen."
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored ice solutions for businesses, events, and special occasions of any size."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Highest quality standards with rigorous testing and quality control processes."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to handle your urgent ice requirements anytime."
    },
    {
      icon: Shield,
      title: "Food Safety Certified",
      description: "Fully compliant with international food safety standards and certifications."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <Snowflake className="h-8 w-8 md:h-10 md:w-10 text-primary-500" />
              <span className="text-2xl md:text-3xl font-bold text-primary-600">Iceem.tn</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-500 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary-500 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-500 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <a href="#home" className="block py-2 text-gray-700 hover:text-primary-500" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-primary-500" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-primary-500" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-primary-500" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Premium Ice Solutions for{' '}
                <span className="text-primary-600">Every Need</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Tunisia's leading ice manufacturer and distributor. Delivering quality, reliability, and excellence with every cube.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-all"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <Snowflake className="h-32 w-32 md:h-48 md:w-48 text-white/30 animate-pulse" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 text-white p-4 md:p-6 rounded-xl shadow-xl">
                <p className="text-xl md:text-2xl font-bold">10+ Years</p>
                <p className="text-sm md:text-base">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ice solutions tailored to meet the unique needs of your business
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <service.icon className="h-7 w-7 md:h-8 md:w-8 text-primary-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
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

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">500+</p>
              <p className="text-sm sm:text-base md:text-lg text-primary-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">1M+</p>
              <p className="text-sm sm:text-base md:text-lg text-primary-100">Tons Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">24/7</p>
              <p className="text-sm sm:text-base md:text-lg text-primary-100">Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">100%</p>
              <p className="text-sm sm:text-base md:text-lg text-primary-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center mb-6 md:mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-primary-600" />
            </button>
          </div>
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 md:h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'w-8 md:w-12 bg-primary-600' : 'w-2 md:w-3 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Ready to Experience the Iceem Difference?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-primary-50">
            Get your custom quote today and discover why businesses across Tunisia trust us
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 bg-white text-primary-600 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We're here to help with all your ice needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 md:h-8 md:w-8 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+21612345678" className="text-gray-600 hover:text-primary-600 transition-colors">
                +216 12 345 678
              </a>
            </div>
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-7 w-7 md:h-8 md:w-8 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:contact@iceem.tn" className="text-gray-600 hover:text-primary-600 transition-colors break-all">
                contact@iceem.tn
              </a>
            </div>
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 md:h-8 md:w-8 text-primary-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Tunis, Tunisia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Snowflake className="h-7 w-7 md:h-8 md:w-8 text-primary-400" />
                <span className="text-xl md:text-2xl font-bold">Iceem.tn</span>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Tunisia's trusted ice solutions provider since 2014
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>+216 12 345 678</li>
                <li>contact@iceem.tn</li>
                <li>Tunis, Tunisia</li>
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-primary-600 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-primary-600 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-primary-600 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 md:p-3 rounded-full hover:bg-primary-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm md:text-base text-gray-400">
            <p>&copy; {new Date().getFullYear()} Iceem.tn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
