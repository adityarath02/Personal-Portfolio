import React, { useState } from 'react';
import { X } from 'lucide-react';
import anime from '../images/Anime.png'
import portfolio from '../images/portfolio.png'
import gradmemoir from '../images/gradmemoir.png'
import emotionmirror from '../images/emotion mirror.png'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AnimeAsPerMood',
      category: 'Web Development',
      image: anime ,
      description: 'AnimeAsPerMood is a mood-based anime recommendation system that lets users discover anime perfectly suited to their emotional state. Built with React.js for an intuitive user interface and styled with Tailwind CSS for a sleek, responsive design, the project integrates the Jikan API to access a rich collection of anime. Users can select their current mood—be it happy, sad, relaxed, or adventurous—using mood buttons. Once a mood is chosen, the system generates a curated list of anime recommendations tailored to that emotion. If the user wants more options, they can regenerate the suggestions with a single click. Anime MoodMate combines simplicity and functionality, offering anime enthusiasts a personalized and dynamic way to explore new shows.'
    },
    {
      title: 'GradMemoir',
      category: 'FullStack Web Application',
      image: gradmemoir,
      description: 'Developed an interactive platform for final-year students to document college journeys, showcase projects, and share reflections. Features include experience journals, legacy messages, and project showcases to inspire and guide future students.'
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      image: portfolio,
      description: 'My personal portfolio website is a modern, responsive platform showcasing my skills, projects, and professional journey. Designed with a minimalistic aesthetic and a clean blue gradient color scheme, it provides a seamless browsing experience. Built with HTML, CSS, and responsive design principles, the website is intuitive and accessible across devices.The portfolio features sections like Home, About, Projects, and Contact, with a top navigation bar for smooth navigation. Each project is displayed with detailed descriptions, technologies used, and visuals for better understanding. The Contact section allows visitors to connect easily through a user-friendly form or links to my professional profiles. This portfolio reflects my dedication to creativity, attention to detail, and technical expertise.'
    },
    {
      title: 'Emotion Mirror',
      category: 'AI Therapy Asistant',
      image: emotionmirror,
      description: 'Developed Emotion Mirror, an AI-powered reflective journaling app that leverages multimodal emotion analysis to help users articulate their emotions, track mental health patterns, and foster self-acceptance through empathetic AI interaction.'
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-7">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                {projects[selectedProject].title}
              </h3>
              <p className="text-yellow-500 mb-4">
                {projects[selectedProject].category}
              </p>
              <p className="text-gray-600">
                {projects[selectedProject].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;