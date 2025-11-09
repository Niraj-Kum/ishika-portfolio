import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">A Passion for Performance-Driven Content</h2>
            <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto rounded"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="md:w-1/3">
            <img
              src="https://picsum.photos/seed/professional woman/500/500"
              alt="Ishika Verma, professional content writer"
              className="rounded-lg shadow-xl mx-auto w-72 h-72 md:w-96 md:h-96 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Hello! I'm Ishika Verma. In a world increasingly saturated with AI-generated text, I craft content that stands out by being authentically human. I blend the art of storytelling with the science of SEO to create content that doesn't just rank—it resonates, connects, and builds trust with your audience.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              While algorithms can assemble words, they can't capture the nuance of human emotion or the power of a well-told story. My passion is creating content—from in-depth articles to persuasive landing pages—that feels genuine and delivers real results. I specialize in turning complex topics into clear, compelling narratives that drive organic traffic and elevate brand authority. Let's create content that truly connects and converts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
