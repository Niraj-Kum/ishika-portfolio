import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-pink-500 to-pink-600">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Have a Project in Mind?
        </h2>
        <p className="max-w-2xl mx-auto text-pink-100 mb-8">
          Let's work together to create content that ranks, engages, and converts. I'm ready to help you achieve your business goals.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-pink-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default CTA;
