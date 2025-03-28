import React from 'react';
import Image from 'next/image';

const ReturnsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-50 px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Return Policy</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Olifia, we&apos;re committed to ensuring your complete satisfaction while maintaining the integrity of our hand-crafted fragrance samples.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Policy Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center text-xl font-bold">
                !
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Sample Nature</h3>
                <p className="text-gray-600">
                  All 1 ml niche fragrance samples are hand-decanted to order, making them personalized and unique to each customer.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Return Limitations</h3>
                <p className="text-gray-600">
                  Due to the specialized nature of our products, we cannot accept returns or exchanges on fragrance samples.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Our Commitment</h3>
                <p className="text-gray-600">
                  If your order arrives damaged or incorrect, please contact us within 7 days of receiving your package.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center p-6">
            <Image 
              src="/return.svg" 
              alt="Return Policy Illustration" 
              width={1200} 
              height={1050} 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Additional Guidance */}
        <div className="bg-gray-50 p-6 border-t">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommendation</h3>
          <p className="text-gray-600">
            We recommend carefully reviewing product descriptions, notes, and customer reviews before making a purchase. 
            Our curated sample collection allows you to explore luxury fragrances without significant investment.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 text-center">
          <p className="text-gray-600">
            Questions about our policy? <a href="/contact" className="text-blue-600 hover:underline">Contact Our Support Team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;