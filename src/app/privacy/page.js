"use client"

import Image from 'next/image';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="text-blue-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-xl md:text-2xl mt-4">
            Your privacy is important to us. Please read our policies carefully.
          </p>
        </div>
        {/* Optional Hero Image */}
        <div className="mt-8 flex justify-center">
          <Image 
            src="/privacy-policy.svg" 
            alt="Privacy Policy" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-md" 
          />
        </div>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to protecting your personal information and your right to privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              <strong>Personal Data:</strong> Information that can be used to identify you, such as your name and email address.
            </li>
            <li>
              <strong>Usage Data:</strong> Details on how you use our website, including your IP address, browser type, and pages visited.
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Data collected via cookies to enhance your browsing experience.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you, including for customer service and support</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            We may use cookies, web beacons, and other tracking technologies to collect and store your information when you visit our website. These tools help us improve your experience and the overall performance of our site.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Third-Party Disclosure</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to trusted partners who assist us in operating our website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or delete your personal data at any time. Please contact us to exercise these rights or if you have any questions regarding our Privacy Policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Privacy Policy periodically to reflect changes in our practices or legal requirements. When we do, we will update the "Last Updated" date at the top of this page.
          </p>
        </section>
      </div>
    </div>
  );
}
