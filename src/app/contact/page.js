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
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 hidden md:block">
          <Image 
            src="/api/placeholder/400/300"
            width={400}
            height={300} 
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
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600 mb-1">Customer Service:</p>
                  <a href="tel:+18005551234" className="text-purple-600 hover:text-purple-800">1-800-555-1234</a>
                  <p className="text-gray-600 mb-1 mt-2">Hours of operation:</p>
                  <p className="text-gray-700">Monday - Friday: 9am - 6pm EST</p>
                  <p className="text-gray-700">Saturday: 10am - 4pm EST</p>
                </div>
              </div>
              
              {/* Contact method 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Our main office:</p>
                  <address className="not-italic text-gray-700">
                    123 Fragrance Lane<br />
                    Suite 405<br />
                    New York, NY 10001
                  </address>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8 bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <Image 
                  src="/api/placeholder/600/300"
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
            
            {/* FAQ item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">Do you offer international shipping?</h3>
              <p className="text-gray-700">Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location.</p>
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