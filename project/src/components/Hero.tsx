import React from 'react';
import { ArrowRight } from 'lucide-react';
import profile from '../images/Profile.png'
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi There! <br />
            I'm <span className="text-yellow-500">Aditya Rath</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Passionate web developer and AI enthusiast, blending creativity and technology to craft innovative solutions
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-colors"
          >
            Contact Me
            <ArrowRight size={20} />
          </button>
          <a 
            href="https://drive.google.com/file/d/1W38X9bcqHbWfTAZY29Sgd8rF20CQG8kE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-colors inline-block"
          >
            Download Resume
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 relative">
            <div className="absolute inset-0 rounded-full bg-yellow-500 blur-lg opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-yellow-500 overflow-hidden shadow-xl">
              <img 
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;