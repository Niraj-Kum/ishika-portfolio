import React from 'react';
import type { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
          {item.type}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-pink-600 transition-colors">{item.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{item.description}</p>
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 py-1 px-3 rounded-md">
              🏆 {item.ranking}
            </span>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors group-hover:underline">
              Read More &rarr;
            </a>
          </div>
          {item.keyword && (
            <p className="text-xs text-slate-500 mt-3 text-left">
              Ranking for: <span className="font-medium text-slate-700">"{item.keyword}"</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
