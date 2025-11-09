import React from 'react';
import type { PortfolioItem, Skill, Testimonial } from './types';

// Icons for Skills
const SeoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const BlogIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);
const ArticleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const LandingPageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const ResearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);
const HealthIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);


// Data
export const SKILLS: Skill[] = [
    { name: 'SEO Content Strategy', description: "Crafting roadmaps that turn search traffic into loyal customers.", icon: <SeoIcon /> },
    { name: 'Blog Posts', description: "Engaging, well-researched posts that establish authority and drive traffic.", icon: <BlogIcon /> },
    { name: 'In-depth Articles', description: "Comprehensive articles that provide real value and become go-to resources.", icon: <ArticleIcon /> },
    { name: 'Research Articles', description: "Data-driven content that provides unique insights and builds credibility.", icon: <ResearchIcon /> },
    { name: 'Health & Lifestyle', description: "Relatable and informative content that connects with readers on a personal level.", icon: <HealthIcon /> },
    { name: 'Landing Pages', description: "Persuasive copy that converts visitors into customers.", icon: <LandingPageIcon /> },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        title: "Choosing Business Email Hosting for Better Deliverability",
        description: "A comprehensive guide on selecting the right business email hosting to enhance email deliverability and build brand trust, crucial for modern digital communication.",
        type: "Blog Post",
        ranking: "#1 on Google (India)",
        keyword: "how to choose business email hosting",
        link: "https://www.cantech.in/blog/choose-business-email-hosting-to-improve-deliverability-and-brand-trust/",
        imageUrl: "https://picsum.photos/seed/server room/600/400"
    },
    {
        title: "The Power of Segmentation: Why Only 18% of Marketers Get It Right",
        description: "This blog post delves into the importance of email list segmentation, exploring why so few marketers leverage it fully and how it can dramatically improve campaign performance.",
        type: "Blog Post",
        ranking: "#1 on Google (India)",
        keyword: "fully segmented lists",
        link: "https://www.datainfometrix.com/blog/only-18-percent-of-marketers-are-using-fully-segmented-lists/",
        imageUrl: "https://picsum.photos/seed/marketing chart/600/400"
    },
    {
        title: "How to Acquire a USA CFO Email List for Free",
        description: "A strategic guide for B2B marketers on ethically and effectively acquiring a high-value email list of CFOs in the USA, without any cost.",
        type: "Blog Post",
        ranking: "#3 on Google (India)",
        keyword: "usa cfo email list for free",
        link: "https://www.datainfometrix.com/blog/how-to-acquire-a-usa-cfo-email-list-for-free/",
        imageUrl: "https://picsum.photos/seed/business directory/600/400"
    },
    {
        title: "Selecting the Right B2B Data Vendors",
        description: "An article guiding businesses on how to choose the best B2B data vendors to fuel their sales and marketing efforts, ensuring data quality and ROI.",
        type: "Article",
        ranking: "High Ranking (India)",
        keyword: "b2b data vendors",
        link: "https://www.powerhomebiz.com/managing-and-growing/technology/b2b-data-vendors.htm",
        imageUrl: "https://picsum.photos/seed/data center/600/400"
    },
    {
        title: "Selling Software to the Healthcare Industry",
        description: "A detailed blog post covering the nuances and strategies for successfully marketing and selling software solutions to the complex healthcare sector.",
        type: "Blog Post",
        ranking: "Top 25 Result (India)",
        keyword: "sell software to healthcare industry",
        link: "https://www.datainfometrix.com/blog/how-to-sell-software-to-the-healthcare-industry/",
        imageUrl: "https://picsum.photos/seed/medical software/600/400"
    },
    {
        title: "Email Marketing Guide for Future-Ready B2B Sales",
        description: "A forward-looking guide on leveraging email marketing to build a robust B2B sales pipeline, focusing on automation, personalization, and modern tactics.",
        type: "Article",
        ranking: "Featured Article (India)",
        keyword: "b2b email marketing guide",
        link: "https://www.appclonescript.com/email-marketing-guide-for-future-ready-b2b-sales/",
        imageUrl: "https://picsum.photos/seed/email campaign/600/400"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "The results are plain to see. Our organic traffic has seen a steady climb since we brought her on board. The articles she writes don't just sit there—they rank and consistently perform.",
        name: "Aarav P.",
    },
    {
        quote: "I was struggling to find the right words for our new landing page, and she nailed it on the first draft. The copy feels like *us*, but better. Our conversion rate has already improved. Seriously impressive.",
        name: "Priya S.",
    },
    {
        quote: "Finally, a writer who understands that SEO isn't just about keywords. She gets the search intent behind the topic and structures her articles in a way that just works for Google and our readers. It's clean, strategic, and effective.",
        name: "Rohan M.",
    },
    {
        quote: "The level of detail in her research saved my team hours of work. For our industry, accuracy is everything, and she delivered meticulously researched pieces that gave us instant credibility. A total pro.",
        name: "Sameer J.",
    },
    {
        quote: "Working with her is just easy. She's communicative, always on time, and the quality is consistent. I never have to worry about chasing down deliverables, which is a huge relief for any project manager.",
        name: "Anjali D.",
    },
    {
        quote: "Our audience absolutely loves the lifestyle content. The comment sections are more active than ever. She has a real talent for writing in a way that feels personal and gets people talking.",
        name: "Vikram K.",
    }
];