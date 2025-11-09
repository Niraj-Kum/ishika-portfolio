import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-6 py-6 text-center border-t border-slate-700">
        <p>&copy; {new Date().getFullYear()} Ishika Verma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;