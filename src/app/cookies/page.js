"use client"

import Image from 'next/image';
import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="text-green-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="text-xl md:text-2xl mt-4">
            Learn how we use cookies to enhance your experience on our website.
          </p>
        </div>
        {/* Optional Hero Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src="/cookie.svg" 
            alt="Cookie Policy" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website uses cookies to improve your browsing experience, analyze site traffic, and personalize content.
            This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work,
            or work more efficiently, as well as to provide information to the website owners.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">How We Use Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies for several purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> To ensure the website functions correctly.
            </li>
            <li>
              <strong>Performance Cookies:</strong> To analyze how visitors use our website.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> To remember your preferences and enhance your experience.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> To deliver relevant ads based on your interests.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Your Choices</h2>
          <p className="text-gray-700 leading-relaxed">
            You can choose to accept or decline cookies through your browser settings. Please note that disabling some cookies may affect your experience on our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Third-Party Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver relevant advertising.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Changes to This Cookie Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time. We encourage you to review this page periodically to stay informed about how we are using cookies.
          </p>
        </section>
      </div>
    </div>
  );
}
