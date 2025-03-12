import React from 'react';

export default function CareersPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero section */}
      <div className="relative bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers and Opportunities</h1>
            <p className="text-xl md:text-2xl opacity-90">Join our team and help bring luxury fragrances to everyone</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 hidden md:block">
          <Image 
            src="/api/placeholder/400/300" 
            alt="Team member working with fragrances" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="md:w-2/3 prose lg:prose-xl">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Join Our Journey</h2>
          
          <p className="text-gray-700">
            Welcome to Olifia's USA Fragrances. We're dedicated to bringing you authentic, high-quality perfumes in convenient 1ml glass spray vials.
          </p>
          
          <p className="text-gray-700">
            Our mission is to help you discover your signature scent without committing to a full bottle. We believe everyone deserves to experience luxury fragrances one spritz at a time.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Why Work With Us?</h3>
            <ul className="space-y-2">
              <li>Passionate team committed to quality</li>
              <li>Opportunities for growth and advancement</li>
              <li>Employee discount on all fragrances</li>
              <li>Flexible work environment</li>
            </ul>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Open Positions</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            {/* Job card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-xl text-blue-700">Fragrance Specialist</h4>
              <p className="text-gray-600 mb-4">Full-time • Remote</p>
              <p className="text-gray-700">Help our customers find their perfect scent match and provide expert fragrance advice.</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Apply Now
              </button>
            </div>
            
            {/* Job card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-xl text-blue-700">Marketing Coordinator</h4>
              <p className="text-gray-600 mb-4">Part-time • Hybrid</p>
              <p className="text-gray-700">Create engaging content and manage social media to spread the word about our unique fragrance experience.</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Company Culture</h3>
            <p className="text-gray-700">
              At Olifia's USA Fragrances, we foster a creative, collaborative environment where ideas flourish and innovation is encouraged. We believe in work-life balance and celebrating each team member's unique contributions.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact section */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl opacity-90 mb-8">Send your resume to careers@olifia.com</p>
          <button className="bg-white text-blue-700 hover:bg-blue-50 py-3 px-8 rounded-md font-semibold text-lg transition-colors">
            View All Positions
          </button>
        </div>
      </div>
    </div>
  );
}