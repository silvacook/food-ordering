"use client"

import Image from 'next/image';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate mailto link with form data
  const generateMailtoLink = () => {
    const subject = `${formData.subject ? formData.subject : 'Contact Form Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `;
    
    return `mailto:olfiausa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Open the mailto link
    window.location.href = generateMailtoLink();
    
    // Show success message and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Opening your email client...");
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Hero section */}
      <div className="relative bg-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90">We&apos;d love to hear from you</p>
          </div>
        </div>
        <div className="absolute top-[-280px] bottom-0 right-10 transform translate-y-1/2 hidden md:block">
          <Image 
            src="/contact-us.svg"
            width={260}
            height={250} 
            alt="Customer service representative" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-3xl font-semibold text-purple-800 mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Have questions about our fragrances or need help finding your perfect scent? Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Please select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Order Status">Order Status</option>
                  <option value="Returns & Refunds">Returns & Refunds</option>
                  <option value="Fragrance Recommendations">Fragrance Recommendations</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              
              {/* Submit button */}
              <button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Opening..." : "Send Message"}
              </button>
              
              {/* Success Message */}
              {submitMessage && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div>
            <h2 className="text-3xl font-semibold text-purple-800 mb-6">Our Information</h2>
            <p className="text-gray-600 mb-8">You can also reach out to us through these channels or visit our office.</p>
            
            <div className="space-y-8">
              {/* Contact method 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600 mb-1">For general inquiries:</p>
                  <a href="mailto:olfiausa@gmail.com" className="text-purple-600 hover:text-purple-800">olfiausa@gmail.com</a>
                  <p className="text-gray-600 mb-1 mt-2">For customer support:</p>
                  <a href="mailto:olfiausa@gmail.com" className="text-purple-600 hover:text-purple-800">olfiausa@gmail.com</a>
                </div>
              </div>
              
              {/* Contact method 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 font-bold mb-1 mt-2">Hours of operation:</p>
                  <p className="text-gray-700">Monday - Friday: 9am - 6pm EST</p>
                  <p className="text-gray-700">Saturday: 10am - 4pm EST</p>
                </div>
              </div>
              
              {/* Contact method 3 - REPLACED "Visit Us" with "Connect With Us" */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Connect With Us</h3>
                  <p className="text-gray-600 mb-2">Follow us on social media:</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a href="#" className="text-purple-600 hover:text-purple-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Image 
                  src="/ai-generated.svg"
                  width={600}
                  height={300} 
                  alt="Office location map" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">How long will my sample vials last?</h3>
              <p className="text-gray-700">Each 1ml vial contains approximately 10-12 sprays, enough to test a fragrance for several days and determine if it&apos;s right for you.</p>
            </div>
            
            {/* FAQ item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Are your fragrances authentic?</h3>
              <p className="text-gray-700">Yes, all our fragrances are 100% authentic. We source directly from authorized distributors to ensure quality and authenticity.</p>
            </div>
            
            {/* FAQ item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">What is your return policy?</h3>
              <p className="text-gray-700">Due to the nature of fragrances, we cannot accept returns on opened items. Please contact us if you receive damaged goods.</p>
            </div>
            
            {/* FAQ item 4 - REPLACED International Shipping with Fragrance Longevity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">How long do your fragrances typically last?</h3>
              <p className="text-gray-700">Most of our fragrances have a longevity of 6-8 hours, though this can vary based on skin type, weather conditions, and the specific fragrance notes. Eau de Parfum formulations typically last longer than Eau de Toilette.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter signup */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl opacity-90 mb-2">Subscribe to our newsletter for exclusive offers and fragrance tips</p>
              <p className="opacity-80">Be the first to know about new arrivals and special promotions</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-purple-900 hover:bg-purple-800 px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}