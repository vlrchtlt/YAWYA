import React from 'react';

interface VisionSectionProps {
  text: string;
}

const VisionSection: React.FC<VisionSectionProps> = ({ text }) => {
  return (
    <section className="vision-section px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <p className="section-title animate-fade-in">{text}</p>
      </div>
    </section>
  );
};

export default VisionSection;