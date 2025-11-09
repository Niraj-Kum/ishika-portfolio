import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">My Expertise</h2>
            <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto rounded"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="bg-pink-50 p-4 rounded-full transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-800">{skill.name}</h3>
              <p className="mt-2 text-slate-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
