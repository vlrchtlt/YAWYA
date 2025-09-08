import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/yawya-hero.jpg';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section 
      className="hero-section"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` 
      }}
    >
      <div className="max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <Button 
          variant="yawya-hero" 
          size="yawya"
          onClick={onCtaClick}
          className="animate-fade-in animate-delay-300"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;