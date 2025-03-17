import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero section */}
      <div className="bg-[#9e473b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl md:text-2xl opacity-90">Discover the story behind Olifia&apos;s USA Fragrances</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-[#9e473b] mb-6">Our Story</h2>
            <div className="prose lg:prose-xl">
              <p className="text-gray-700">
                Welcome to Olifia&apos;s USA Fragrances. We&apos;re dedicated to bringing you authentic, high-quality perfumes in convenient 1ml glass spray vials.
              </p>
              <p className="text-gray-700">
                Our mission is to help you discover your signature scent without committing to a full bottle. We believe everyone deserves to experience luxury fragrances one spritz at a time.
              </p>
              <p className="text-gray-700">
                Founded in 2020, our journey began with a simple observation: finding the perfect fragrance often means investing in expensive full-sized bottles before knowing if they truly match your style and personality.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/founder.svg"
              width={500}
              height={500}  
              alt="Our founder with fragrance collection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#9e473b] mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9e473b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#9e473b] mb-2">Quality</h3>
              <p className="text-gray-600">We source only authentic, premium fragrances to ensure you experience the true essence of each scent.</p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9e473b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#9e473b] mb-2">Accessibility</h3>
              <p className="text-gray-600">We make luxury fragrances accessible to everyone through our affordable sample-sized options.</p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#9e473b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#9e473b] mb-2">Sustainability</h3>
              <p className="text-gray-600">Our sample-sized approach reduces waste and helps you make environmentally conscious fragrance choices.</p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#9e473b] mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src="/founder1.svg"
                width={400}
                height={500}  
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#9e473b]">Elena Rodriguez</h3>
                <p className="text-gray-500 mb-4">Founder & CEO</p>
                <p className="text-gray-700">Fragrance enthusiast with over 15 years of experience in the luxury perfume industry.</p>
              </div>
            </div>

            {/* Team member 2 - Fixed the image display */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="/man.svg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Team member" 
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#9e473b]">Marcus Chen</h3>
                <p className="text-gray-500 mb-4">Chief Software Developer</p>
                <p className="text-gray-700">Certified perfumer with a knack for identifying the perfect scent for every personality.</p>
              </div>
            </div>

            {/* Team member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/employee.svg"
                width={400}
                height={500} 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#9e473b]">Sophia Patel</h3>
                <p className="text-gray-500 mb-4">Customer Experience Manager</p>
                <p className="text-gray-700">Dedicated to ensuring every customer finds their signature scent with personalized recommendations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-[#9e473b] mb-8 text-center">Our Journey</h2>
          <div className="relative border-l-4 border-[#9e473b] ml-12 pl-8 py-4 space-y-16">
            {/* Timeline item 1 */}
            <div className="relative">
              <div className="absolute -left-14 top-0 w-10 h-10 bg-[#9e473b] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">2020: The Beginning</h3>
              <p className="text-gray-700">Olifia&apos;s USA Fragrances was founded with a simple goal: make luxury fragrances accessible to everyone.</p>
            </div>

            {/* Timeline item 2 */}
            <div className="relative">
              <div className="absolute -left-14 top-0 w-10 h-10 bg-[#9e473b] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#9e473b] mb-2">2022: Expansion</h3>
              <p className="text-gray-700">Our collection grew to over 200 premium fragrances, and we launched our personalized scent matching service.</p>
            </div>

            {/* Timeline item 3 */}
            <div className="relative">
              <div className="absolute -left-14 top-0 w-10 h-10 bg-[#9e473b] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#9e473b] mb-2">2024: Today</h3>
              <p className="text-gray-700">We continue to grow our collection and community, helping fragrance lovers everywhere discover their perfect scent.</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-amber-50 p-8 rounded-lg shadow-md mb-16">
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <p className="text-xl italic text-gray-700 mb-6">&quot;Olifia&apos;s has completely changed how I shop for fragrances. I&apos;ve discovered scents I never would have tried otherwise, without wasting money on full bottles I don&apos;t love.&quot;</p>
            <div>
              <h4 className="font-bold text-[#9e473b]">Rebecca Johnson</h4>
              <p className="text-gray-600">Loyal Customer Since 2021</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#9e473b] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-xl opacity-90 mb-8">We&apos;d love to hear from you and answer any questions</p>
          <button className="bg-white text-[#9e473b] hover:bg-amber-50 py-3 px-8 rounded-md font-semibold text-lg transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}