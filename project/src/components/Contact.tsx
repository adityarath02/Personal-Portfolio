import React from 'react';
import { Mail, Phone, MapPin, Send, LinkedinIcon, GithubIcon } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-yellow-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">adityarath.dev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-yellow-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+91-7847876760</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-yellow-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Bhubaneswar,Odisha,India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-yellow-500">
                  <LinkedinIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://www.linkedin.com/in/aditya-rath-8a6956241/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-yellow-500 transition-colors"
                    >
                      Connect with me
                      <span className="inline-block ml-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-yellow-500">
                  <GithubIcon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <div className="flex items-center gap-2">
                    <a 
                      href="https://github.com/adityarath02" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-yellow-500 transition-colors"
                    >
                      Check out my projects
                      <span className="inline-block ml-1">→</span>
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-colors"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;