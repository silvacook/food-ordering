"use client"

import Image from 'next/image';
import React from 'react';

export default function TermsOfService() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="text-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-xl md:text-2xl mt-4">
            Please read these terms carefully before using our services.
          </p>
        </div>
        {/* Optional Hero Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src="/terms.svg" 
            alt="Terms of Service" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree with any of these terms, please refrain from using our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Use of Services</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to use our services only for lawful purposes and in accordance with these Terms. Unauthorized or prohibited use of our services is strictly prohibited.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">User Responsibilities</h2>
          <p className="text-gray-700 leading-relaxed">
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to notify us immediately of any unauthorized use.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, graphics, logos, and images, is the property of our company or its licensors and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason, including a breach of these Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Disclaimer of Warranties</h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We make no warranties regarding the accuracy, reliability, or availability of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Continued use of our services following any changes indicates your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  );
}