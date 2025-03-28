"use client"

import Image from 'next/image';
import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Visual Appeal */}
      <div className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Legal Agreement Effective Date: March 28, 2025
          </p>
          
          {/* Enhanced Image with Dynamic Effects */}
          <div className="mt-8 flex justify-center">
            <div className="relative transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
              <Image 
                src="/terms.svg" 
                alt="Terms of Service" 
                width={500} 
                height={500} 
                className="rounded-xl shadow-lg border-4 border-white/20" 
              />
              <div className="absolute inset-0 bg-blue-600/10 hover:bg-transparent transition-all duration-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our services, website, and applications (collectively, the &ldquo;Service&rdquo;). By accessing or using our Service, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">2. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By creating an account or using our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Service.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You must be at least 18 years old to use our Service</li>
            <li>You agree to provide accurate and current information</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">3. User Accounts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you create an account with us, you must:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide complete and accurate registration information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Immediately notify us of any unauthorized use of your account</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">4. Intellectual Property Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All content, features, and functionality are and will remain the exclusive property of our company and its licensors. Our trademarks and trade dress may not be used without our prior written permission.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our content</li>
            <li>Limited license is granted solely for your personal, non-commercial use</li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To the maximum extent permitted by law, our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Loss of profits, data, or use</li>
            <li>Business interruption</li>
            <li>Personal injury</li>
            <li>Property damage</li>
          </ul>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">6. Dispute Resolution</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will be conducted in [Your Jurisdiction], and the decision of the arbitrator shall be final and binding.
          </p>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">7. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the &ldquo;Effective Date&rdquo; at the top of this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">9. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For any questions regarding these Terms of Service, please contact us at:
          </p>
          <div className="mt-4 text-gray-700">
            <p>Email: olfiausa@gmail.com</p>
          </div>
        </section>
      </div>

      {/* Subtle Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}