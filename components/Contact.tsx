import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Ready to Elevate Your Content?</h2>
        <p className="max-w-2xl mx-auto text-slate-300 mt-4 mb-10">
          I'm currently available for freelance projects. If you're looking for a content writer who can drive results, I'd love to hear from you.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6">
          <a
            href="mailto:ishikaverma3131@gmail.com"
            className="inline-block bg-pink-500 text-white font-bold py-4 px-10 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/ishika-verma-content-writer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;