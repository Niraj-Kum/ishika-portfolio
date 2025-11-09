import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">What My Clients Say</h2>
            <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto rounded"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg relative">
               <svg className="absolute top-4 left-4 h-12 w-12 text-pink-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.33 8.329Q7.791 9.493 6.941 11.234t-0.85 3.848q0 2.536 1.449 4.314t3.89 1.778v2.213q-4.335 0-6.83-2.923t-2.495-7.378q0-4.408 2.308-7.858t6.13-4.59v3.529zM24.33 8.329Q22.791 9.493 21.941 11.234t-0.85 3.848q0 2.536 1.449 4.314t3.89 1.778v2.213q-4.335 0-6.83-2.923t-2.495-7.378q0-4.408 2.308-7.858t6.13-4.59v3.529z"></path>
              </svg>
              <p className="text-slate-700 italic relative z-10">"{testimonial.quote}"</p>
              <div className="mt-6 text-right">
                <p className="font-bold text-slate-800">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
