"use client"

import { useState } from "react";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Hero from "../components/layout/Hero";

export default function Home() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    email: "",
    message: ""
  });
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
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

  // Handle file uploads
  const handleFileUpload = (e, type) => {
    const uploadedFiles = Array.from(e.target.files);
    if (type === "files") {
      setFiles(prev => [...prev, ...uploadedFiles]);
    } else {
      setImages(prev => [...prev, ...uploadedFiles]);
    }
  };

  // Remove an uploaded file
  const removeFile = (index, type) => {
    if (type === "files") {
      setFiles(prev => prev.filter((_, i) => i !== index));
    } else {
      setImages(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your inquiry! We'll get back to you soon.");
      
      // Reset form after successful submission
      setFormData({
        inquiryType: "",
        email: "",
        message: ""
      });
      setFiles([]);
      setImages([]);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={"Our story"}
          mainHeader={"About us"}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4
        flex flex-col gap-4">  
          <p className="">
          At our core, we believe in the art of fragrance discovery without the pressure of committing to a full bottle. The world of niche perfumes is vast and exciting, but buying full bottles without experiencing them first can often lead to disappointment. 
          That&rsquo;s why we created a space where fragrance lovers can explore high-quality, authentic perfumes in convenient 1ml glass spray vials.
          </p>
          <p>
          Unlike others who offer decants, our goal is to provide just the right amount for a true scent experience—without overwhelming the senses or the budget. Our carefully curated collection ensures that every vial is a 
          chance to discover something new and beautiful, making it easy to try a variety of scents before making any decisions.
          </p>
          <p>
            Join us on the journey to explore, enjoy, and find the fragrance that truly speaks to you.
           </p>
        </div>
      </section>
      <section className="text-center my-16" id="contact">
        <SectionHeaders 
          subHeader={"Don\'t hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="max-w-md mx-auto mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Inquiry Type Dropdown */}
            <div className="text-left">
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type*
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="" disabled>Select an inquiry type</option>
                <option value="product">Product Information</option>
                <option value="order">Order Status</option>
                <option value="returns">Returns & Refunds</option>
                <option value="suggestion">Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            {/* Email Input */}
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            {/* Message Text Area */}
            <div className="text-left">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How Can We Help You?*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            
            {/* File Upload Buttons with Icons */}
            <div className="flex gap-4 justify-center mt-2">
              {/* Image Upload */}
              <div>
                <label htmlFor="imageUpload" className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "images")}
                  className="hidden"
                />
              </div>
              
              {/* File Upload */}
              <div>
                <label htmlFor="fileUpload" className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full cursor-pointer hover:bg-gray-300 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  onChange={(e) => handleFileUpload(e, "files")}
                  className="hidden"
                />
              </div>
            </div>
            
            {/* Display Uploaded Files */}
            <div className="flex flex-col gap-2">
              {/* Images preview */}
              {images.length > 0 && (
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700 mb-1">Uploaded Images:</p>
                  <ul className="pl-5 list-disc">
                    {images.map((file, index) => (
                      <li key={`img-${index}`} className="text-sm text-gray-600 flex justify-between">
                        <span>{file.name}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFile(index, "images")}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Files preview */}
              {files.length > 0 && (
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700 mb-1">Uploaded Files:</p>
                  <ul className="pl-5 list-disc">
                    {files.map((file, index) => (
                      <li key={`file-${index}`} className="text-sm text-gray-600 flex justify-between">
                        <span>{file.name}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFile(index, "files")}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
            
            {/* Success Message */}
            {submitMessage && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}