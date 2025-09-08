import React from 'react';

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-accent text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title animate-fade-in">{title}</h2>
        <p className="section-subtitle mt-8 animate-fade-in animate-delay-200">{description}</p>
      </div>
    </section>
  );
};

export default AboutSection;