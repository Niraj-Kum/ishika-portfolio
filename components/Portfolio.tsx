
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import PortfolioCard from './PortfolioCard';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">My Work</h2>
            <div className="mt-4 h-1 w-24 bg-pink-500 mx-auto rounded"></div>
            <p className="mt-6 max-w-2xl mx-auto text-slate-600">Here's a selection of projects that showcase my ability to deliver high-ranking and engaging content.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
