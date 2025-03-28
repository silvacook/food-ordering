import React from 'react';
import Image from 'next/image';

const ShippingPage = () => {
  const shippingSteps = [
    {
      title: "Processing Time",
      description: "We guarantee that all orders will be processed and shipped within 1 business day through USPS. Orders placed on weekends or holidays will be processed on the next available business day.",
      color: "bg-teal-50 text-teal-700"
    },
    {
      title: "Shipping Method",
      description: "All orders are shipped via USPS, and customers will receive a tracking number within 1 business day of shipment. You can track your order through the tracking link provided.",
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      title: "Shipping Costs",
      description: "We charge a flat rate of $5.99 on all domestic orders to help reduce shipping costs for our customers. This flat rate ensures affordable shipping for everyone, regardless of order size or location.",
      color: "bg-amber-50 text-amber-700"
    },
    {
      title: "Order Tracking",
      description: "Once your order is shipped, you will receive a tracking number via email to monitor the status of your delivery. Please note that tracking updates may take up to 24 hours to reflect after your package is shipped.",
      color: "bg-emerald-50 text-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-12 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Shipping Policies</h1>
          <p className="text-xl opacity-80">
            Transparent, Fast, and Reliable Shipping for Your Fragrance Samples
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-12">
          {/* Shipping Steps */}
          <div className="grid md:grid-cols-2 gap-6">
            {shippingSteps.map((step, index) => (
              <div 
                key={index} 
                className={`${step.color} rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="opacity-90">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Details */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Delivery Times</h3>
                <p className="text-gray-600">
                  Estimated delivery times depend on your location and the shipping method selected at checkout. While we strive to ensure timely deliveries, please note that delivery times are estimates and can vary due to factors beyond our control.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Lost or Stolen Packages</h3>
                <p className="text-gray-600">
                  If your package is lost or stolen in transit, please contact us immediately. We will work with USPS to review the situation and determine the best solution, committed to assisting you throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 text-center">
          <p className="text-xl mb-4">Have questions about our shipping?</p>
          <a 
            href="/contact" 
            className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;