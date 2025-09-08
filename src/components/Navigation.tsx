import React from 'react';
import LanguageToggle from './LanguageToggle';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentLanguage, onLanguageChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/yawya-logo.svg" alt="YAWYA" className="h-5" />
      </div>
      <div className="navbar-right">
        <LanguageToggle 
          currentLanguage={currentLanguage} 
          onLanguageChange={onLanguageChange} 
        />
      </div>
    </nav>
  );
};

export default Navigation;