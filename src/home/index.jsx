import Header from '@/components/custom/Header';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto px-6 lg:px-16 py-16">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Build Your <span className="text-teal-400">Resume</span> with AI
            </h1>
            <p className="text-xl text-gray-300">
              Simplify your job search journey. Create professional resumes and practice mock interviews effortlessly.
            </p>
          </div>
          {/* Visual Content */}
          <div className="lg:w-1/2 flex justify-center">
            {/* Placeholder for any visual content */}
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-teal-400 text-5xl mb-6">
                <i className="fas fa-pen-nib"></i>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {['Write Your Form', 'Edit with AI', 'Share & Collaborate'][index]}
              </h3>
              <p className="text-gray-600">
                {[
                  'Our AI helps you design a customized form to gather all necessary details for crafting the perfect resume.',
                  'Let AI assist in structuring, formatting, and refining your resume for maximum impact.',
                  'Seamlessly share your resume and gather feedback to create the best version of yourself.',
                ][index]}
              </p>
            </div>
          ))}
        </section>

        {/* Final Call-to-Action */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Join thousands of professionals who have transformed their careers.
          </p>
          <Link to={'/dashboard'}>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-lg font-medium py-3 px-10 rounded-full shadow-lg hover:shadow-2xl hover:from-pink-400 hover:to-purple-500 transition-all duration-300">
              Build Your Resume Now
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
