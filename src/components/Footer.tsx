
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-tech-dark text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold gradient-text">Sanjiv Gupta</h3>
            <p className="text-gray-400 mt-1">AI/ML/LLM Engineer & Data Engineer</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">© {currentYear} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
