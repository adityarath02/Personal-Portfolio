import React from 'react';
import { Users, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users />, value: '2+', label: 'Years Experience' },
    { icon: <Briefcase />, value: '10+', label: 'Projects Done' },
    { icon: <Award />, value: '5+', label: 'Hackathons' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Professional Web Developer & Designer
            </h3>
            <p className="text-gray-600 mb-6">
              I am Aditya Rath, a passionate web developer, AI enthusiast, and creative content creator with a knack for blending technology and artistry. As a final-year student at KIIT University, I specialize in building innovative digital solutions using modern technologies like the MERN stack and AI-driven tools. I founded Social Alchemy Labs, where I help businesses grow through strategic marketing and engaging content. An award-winning photographer and social media strategist, I bring both technical expertise and creative vision to every project I undertake. With a strong foundation in Python, NLP, and Generative AI, I am dedicated to creating impactful solutions that inspire and connect.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-yellow-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">What I Do!</h3>
            <div className="space-y-4">
              {['Web Design', 'App Development', 'AI Support & Development', 'Machine Learning Models', 'Content Creation', 'Photography', 'UI/UX Design', 'Branding', 'Social Media Marketing'].map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;