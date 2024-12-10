import React from 'react';
import { 
  Code2, Palette, Database, Layout, 
  BrainCircuit, Server, Globe, Cpu,
  Blocks, Layers, Box, Workflow,
  GitBranch, Terminal, Cloud, Shield
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      technologies: [
        { name: 'React', icon: <Blocks className="w-4 h-4" /> },
        { name: 'Vue.js', icon: <Layers className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Box className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <Code2 className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Backend',
      icon: <Server className="w-6 h-6" />,
      technologies: [
        { name: 'Node.js', icon: <Globe className="w-4 h-4" /> },
        { name: 'Python', icon: <BrainCircuit className="w-4 h-4" /> },
        { name: 'Java', icon: <Cpu className="w-4 h-4" /> },
        { name: 'Express', icon: <Workflow className="w-4 h-4" /> },
        { name: 'Django', icon: <Terminal className="w-4 h-4" /> }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-6 h-6" />,
      technologies: [
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
        { name: 'Redis', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Firebase', icon: <Shield className="w-4 h-4" /> }
      ]
    },
    {
      category: 'DevOps',
      icon: <GitBranch className="w-6 h-6" />,
      technologies: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'Docker', icon: <Box className="w-4 h-4" /> },
        { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
        { name: 'CI/CD', icon: <Workflow className="w-4 h-4" /> },
        { name: 'Kubernetes', icon: <Blocks className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-yellow-500 mb-4 flex items-center gap-2">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="space-y-3">
                {skill.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-3 group">
                    <div className="text-gray-400 group-hover:text-yellow-500 transition-colors">
                      {tech.icon}
                    </div>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;