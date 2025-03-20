"use client"

import Image from 'next/image';
import React from 'react';

export default function FragranceNews() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-700 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Latest Fragrance News</h1>
          <p className="text-xl md:text-2xl opacity-90 mt-4">
            Stay updated with the newest trends and releases in the world of scents.
          </p>
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* News Item 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/api/placeholder/600/400?text=Midnight+Bloom"
              alt="Midnight Bloom Debuts"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">Midnight Bloom Debuts</h2>
              <p className="text-gray-700">
                Discover the allure of the new Midnight Bloom fragrance, blending rich floral notes with a hint of spice for a captivating scent.
              </p>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/api/placeholder/600/400?text=Eco-Friendly+Scents"
              alt="Eco-Friendly Scents on the Rise"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">Eco-Friendly Scents on the Rise</h2>
              <p className="text-gray-700">
                Brands are embracing sustainable practices with innovative eco-friendly ingredients, leading to a new wave of environmentally conscious fragrances.
              </p>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/api/placeholder/600/400?text=Reviving+Classics"
              alt="Reviving Classics"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">Reviving Classics</h2>
              <p className="text-gray-700">
                A modern twist on classic fragrances is gaining momentum, as heritage scents are reimagined for today&apos;s market with a fresh perspective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}