import React from 'react';

interface FooterProps {
  legal: string;
  contact: string;
  social: string;
}

const Footer: React.FC<FooterProps> = ({ legal, contact, social }) => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#legal" className="hover:text-primary transition-colors">{legal}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{contact}</a>
          </div>
          <div className="flex space-x-6">
            <span className="font-favorit-light">{social}</span>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 YAWYA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;