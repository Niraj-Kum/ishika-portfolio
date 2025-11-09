import type { ReactElement } from 'react';

export interface PortfolioItem {
  title: string;
  description: string;
  type: 'Blog Post' | 'Article' | 'Landing Page' | 'PR Post';
  ranking: string;
  keyword?: string;
  link: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  description: string;
  // Fix: Replaced JSX.Element with ReactElement and added import to solve "Cannot find namespace 'JSX'" error.
  icon: ReactElement;
}

export interface Testimonial {
  quote: string;
  name: string;
}