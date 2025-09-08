import React from 'react';

interface LanguageToggleProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' },
  ];

  return (
    <div className="language-toggle">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            className={`language-button ${currentLanguage === lang.code ? 'active' : ''}`}
            onClick={() => onLanguageChange(lang.code)}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <span className="text-xs mx-1">/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageToggle;