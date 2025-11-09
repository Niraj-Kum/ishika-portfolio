import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-pink-50 via-slate-50 to-pink-100">
      <div className="container mx-auto px-6 py-24 md:py-40 text-center">
        <p className="text-lg md:text-xl text-pink-600 font-bold uppercase tracking-wider">
          Ishika Verma
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Driving Growth with Words that <span className="text-pink-600">Rank</span> and <span className="text-pink-600">Convert</span>.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg">
          I'm a results-driven content writer specializing in SEO-optimized blogs, articles, and web copy that captivates audiences and secures top Google rankings.
        </p>
        <a
          href="#portfolio"
          className="mt-10 inline-block bg-pink-600 text-white font-bold py-4 px-10 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
