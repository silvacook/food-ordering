"use client";

import React, { useState } from 'react';

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero section */}
      <div className="relative bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl md:text-2xl opacity-90">Everything you need to know about our fragrances</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 hidden md:block">
          <Image 
            src="/api/placeholder/400/300" 
            alt="Perfume documentation" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contents</h2>
              <nav className="space-y-1">
                <button 
                  onClick={() => setActiveTab('getting-started')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'getting-started' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Getting Started
                </button>
                <button 
                  onClick={() => setActiveTab('fragrance-types')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'fragrance-types' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Fragrance Types
                </button>
                <button 
                  onClick={() => setActiveTab('perfume-notes')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'perfume-notes' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Understanding Notes
                </button>
                <button 
                  onClick={() => setActiveTab('application')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'application' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Application Tips
                </button>
                <button 
                  onClick={() => setActiveTab('storage')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'storage' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Storage & Care
                </button>
                <button 
                  onClick={() => setActiveTab('faqs')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'faqs' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  FAQs
                </button>
                <button 
                  onClick={() => setActiveTab('glossary')}
                  className={`block w-full text-left px-4 py-2 rounded-md ${activeTab === 'glossary' ? 'bg-gray-800 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Glossary
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main content area */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Getting Started Section */}
              {activeTab === 'getting-started' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Getting Started with Fragrance Samples</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      Welcome to Olifia's USA Fragrances! Our 1ml glass spray vials are designed to help you explore the world of premium fragrances without committing to a full bottle. Here's how to get started on your fragrance journey.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">How Our Samples Work</h3>
                    <p>
                      Each of our samples contains 1ml of authentic fragrance in a convenient glass spray vial. This provides approximately 10-12 sprays, allowing you to experience the scent over several days to truly appreciate how it develops on your skin.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-gray-800">
                      <h4 className="font-semibold mb-2">Pro Tip</h4>
                      <p className="text-gray-700">
                        Try wearing the same fragrance for 2-3 days in different environments (work, home, outdoors) to fully understand how it performs in various settings.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Finding Your Signature Scent</h3>
                    <p>
                      We recommend starting with our "Discovery Sets" that group similar fragrances together. This allows you to compare similar scents and identify which notes you prefer.
                    </p>
                    
                    <ol className="list-decimal pl-6 mt-4 space-y-2">
                      <li>Begin by identifying fragrance families you're drawn to (floral, woody, citrus, etc.)</li>
                      <li>Order samples from those families</li>
                      <li>Test each fragrance on your skin (not just the paper strip)</li>
                      <li>Pay attention to how the scent evolves over time</li>
                      <li>Note which fragrances receive compliments or make you feel confident</li>
                    </ol>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Sample to Full-Size Program</h3>
                    <p>
                      Found a fragrance you love? Our "Sample Credit" program allows you to apply the cost of your sample toward the purchase of a full-sized bottle. Simply enter your sample order number during checkout to receive the discount.
                    </p>
                  </div>
                  
                  <div className="mt-12 grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Explore</h3>
                      <p className="text-gray-600">Browse our extensive collection of premium fragrance samples</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Sample</h3>
                      <p className="text-gray-600">Test each fragrance thoroughly on your skin over multiple days</p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">Discover</h3>
                      <p className="text-gray-600">Find your perfect signature scent without wasting money</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Fragrance Types Section */}
              {activeTab === 'fragrance-types' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Understanding Fragrance Types</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      Fragrances come in various concentrations, which affect both their strength and longevity. Understanding these differences will help you choose the right product for your needs.
                    </p>
                    
                    <div className="overflow-x-auto my-8">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-3 text-left">Type</th>
                            <th className="border border-gray-300 p-3 text-left">Concentration</th>
                            <th className="border border-gray-300 p-3 text-left">Longevity</th>
                            <th className="border border-gray-300 p-3 text-left">Best For</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-3 font-semibold">Parfum (Extrait)</td>
                            <td className="border border-gray-300 p-3">20-30%</td>
                            <td className="border border-gray-300 p-3">6-8 hours</td>
                            <td className="border border-gray-300 p-3">Special occasions, evening wear</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-semibold">Eau de Parfum (EDP)</td>
                            <td className="border border-gray-300 p-3">15-20%</td>
                            <td className="border border-gray-300 p-3">5-7 hours</td>
                            <td className="border border-gray-300 p-3">Daily wear, work environments</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-semibold">Eau de Toilette (EDT)</td>
                            <td className="border border-gray-300 p-3">5-15%</td>
                            <td className="border border-gray-300 p-3">3-5 hours</td>
                            <td className="border border-gray-300 p-3">Casual wear, summer use</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-3 font-semibold">Eau de Cologne (EDC)</td>
                            <td className="border border-gray-300 p-3">2-4%</td>
                            <td className="border border-gray-300 p-3">2-3 hours</td>
                            <td className="border border-gray-300 p-3">Refreshment, hot weather</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-3 font-semibold">Eau Fraiche</td>
                            <td className="border border-gray-300 p-3">1-3%</td>
                            <td className="border border-gray-300 p-3">1-2 hours</td>
                            <td className="border border-gray-300 p-3">Light refreshment, body spray</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Fragrance Families</h3>
                    <p>
                      Fragrances are typically grouped into "families" based on their dominant characteristics. Here are the main fragrance families you'll encounter:
                    </p>
                  </div>
                  
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 text-lg mb-3">Floral</h3>
                      <p className="text-gray-600 mb-3">
                        Based on flower scents like rose, jasmine, lily, etc. The most popular family, particularly for women's fragrances.
                      </p>
                      <p className="text-gray-700 text-sm italic">
                        Example: Chanel No. 5, Marc Jacobs Daisy
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 text-lg mb-3">Oriental</h3>
                      <p className="text-gray-600 mb-3">
                        Rich, warm scents featuring vanilla, spices, and resins. Often sweet and exotic.
                      </p>
                      <p className="text-gray-700 text-sm italic">
                        Example: Yves Saint Laurent Opium, Tom Ford Black Orchid
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 text-lg mb-3">Woody</h3>
                      <p className="text-gray-600 mb-3">
                        Based on warm woods like sandalwood, cedar, and vetiver. Often masculine, sophisticated scents.
                      </p>
                      <p className="text-gray-700 text-sm italic">
                        Example: Terre d'Hermès, Jo Malone Wood Sage & Sea Salt
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 text-lg mb-3">Fresh</h3>
                      <p className="text-gray-600 mb-3">
                        Clean, energizing scents including citrus, water, and green notes. Perfect for hot weather.
                      </p>
                      <p className="text-gray-700 text-sm italic">
                        Example: Dolce & Gabbana Light Blue, Acqua di Gio
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Perfume Notes Section */}
              {activeTab === 'perfume-notes' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Understanding Perfume Notes</h2>
                  
                  <div className="prose max-w-none">
                    <p>
                      A fragrance doesn't smell the same throughout the day. Instead, it evolves in what perfumers call "notes" - different layers of scent that emerge as time passes.
                    </p>
                    
                    <div className="my-8">
                      <Image 
                        src="/api/placeholder/700/300" 
                        alt="Perfume notes pyramid" 
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">The Three Layers of Fragrance</h3>
                    
                    <div className="space-y-8 mt-6">
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-800">
                        <h4 className="font-semibold text-gray-800 text-lg mb-2">Top Notes (Head Notes)</h4>
                        <p className="text-gray-700 mb-3">
                          These are the first scents you smell when applying a fragrance, but they typically last only 15-30 minutes. They're usually light, fresh, and immediately appealing.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Common top notes:</strong> Citrus (lemon, bergamot, orange), light fruits, herbs
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                        <h4 className="font-semibold text-gray-800 text-lg mb-2">Middle Notes (Heart Notes)</h4>
                        <p className="text-gray-700 mb-3">
                          These emerge as the top notes fade and typically last 2-4 hours. They form the "heart" of the fragrance and its main character.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Common middle notes:</strong> Floral scents (rose, jasmine), spices (cinnamon, cardamom), fruit, green notes
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 text-lg mb-2">Base Notes</h4>
                        <p className="text-gray-700 mb-3">
                          These emerge gradually as the middle notes dissipate and can last 6+ hours. They provide depth and longevity to the fragrance.
                        </p>
                        <p className="text-gray-600 text-sm">
                          <strong>Common base notes:</strong> Woods (sandalwood, cedar), amber, musk, vanilla, resins
                        </p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Why Notes Matter</h3>
                    <p>
                      Understanding notes helps you:
                    </p>
                    <ul className="list-disc pl-6 mt-4 space-y-2">
                      <li>Avoid being misled by the initial scent (top notes) that may change significantly</li>
                      <li>Better describe what you like about a fragrance</li>
                      <li>Find similar fragrances by identifying the notes you prefer</li>
                      <li>Understand why a fragrance might smell different on you than on someone else</li>
                    </ul>
                    
                    <div className="bg-gray-100 p-6 rounded-lg my-8">
                      <h4 className="font-semibold text-gray-800 mb-2">Testing Tip</h4>
                      <p className="text-gray-700">
                        To fully experience all three layers of notes, spray a fragrance on your skin (not clothing) and check its scent at different intervals: immediately after application, 30 minutes later, 2 hours later, and 4+ hours later.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder content for other tabs */}
              {activeTab === 'application' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Application Tips</h2>
                  <p className="text-gray-600">Detailed information about how to properly apply fragrances for optimal results.</p>
                </div>
              )}
              
              {activeTab === 'storage' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Storage & Care</h2>
                  <p className="text-gray-600">Learn how to properly store and care for your fragrances to maintain their quality.</p>
                </div>
              )}
              
              {activeTab === 'faqs' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
                  <p className="text-gray-600">Answers to common questions about our products and fragrances.</p>
                </div>
              )}
              
              {activeTab === 'glossary' && (
                <div>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fragrance Glossary</h2>
                  <p className="text-gray-600">A comprehensive glossary of fragrance terminology.</p>
                </div>
              )}
              
              {/* Page navigation */}
              <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
                <button className="text-gray-600 hover:text-gray-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous section
                </button>
                <button className="text-gray-600 hover:text-gray-800 flex items-center">
                  Next section
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Was this helpful */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-4">Was this documentation helpful?</h3>
              <div className="flex gap-4">
                <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
                  Yes
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-100 transition-colors">
                  No
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Have suggestions for improving this documentation? <a href="#" className="text-gray-800 underline">Let us know</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Need help section */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-xl opacity-90 mb-2">Our fragrance specialists are here to assist you</p>
              <p className="opacity-80">Contact our customer service team for personalized recommendations</p>
            </div>
            <div className="text-right">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}