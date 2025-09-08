import React from 'react';
import { Button } from '@/components/ui/button';

interface ForMaisonsSectionProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick: () => void;
}

const ForMaisonsSection: React.FC<ForMaisonsSectionProps> = ({ 
  title, 
  description, 
  ctaText, 
  onCtaClick 
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title animate-fade-in">{title}</h2>
        <p className="section-subtitle mt-8 animate-fade-in animate-delay-200">{description}</p>
        <Button 
          variant="yawya-black" 
          size="yawya"
          onClick={onCtaClick}
          className="mt-12 animate-fade-in animate-delay-400"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default ForMaisonsSection;