import React from 'react';
import { Code, Coffee, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Code size={24} />, value: '3+', label: 'Years Experience' },
    { icon: <Coffee size={24} />, value: '50+', label: 'Projects Completed' },
    { icon: <Heart size={24} />, value: '100+', label: 'Happy Clients' },
    { icon: <Lightbulb size={24} />, value: '∞', label: 'Ideas Generated' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience crafting 
                digital solutions that make a difference. My journey began with a curiosity about 
                how websites work and has evolved into a deep love for creating seamless user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while brainstorming the 
                next big idea.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <div className="aspect-square bg-white rounded-2xl shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                  <p className="text-gray-600">Developer & Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;