"use client"

import { useState } from "react";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Hero from "../components/layout/Hero";

export default function Home() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle form input changes
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate mailto link with form data
  const generateMailtoLink = () => {
    const subject = `Fragrance Inquiry: ${formData.inquiryType}`;
    return `mailto:olfiausa@gmail.com?subject=${encodeURIComponent(subject)}`;
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
        inquiryType: "",
        email: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1000);
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
          <form className="flex flex-col gap-4">
            {/* Inquiry Type Dropdown */}
            <div className="text-left">
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type*
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={onChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="" disabled>Select an inquiry type</option>
                <option value="Product Information">Product Information</option>
                <option value="Order Status">Order Status</option>
                <option value="Returns & Refunds">Returns & Refunds</option>
                <option value="Suggestions">Suggestions</option>
                <option value="Other">Other</option>
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
                onChange={onChange}
                required
                placeholder="your@email.com"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            {/* Submit Button - Using a tag with mailto */}
            <a
              href={generateMailtoLink()}
              onClick={handleSubmit}
              className="mt-2 px-6 py-3 bg-red-800 text-white rounded-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 transition disabled:opacity-50 text-center"
            >
              {isSubmitting ? "Opening..." : "Contact Us"}
            </a>
            
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