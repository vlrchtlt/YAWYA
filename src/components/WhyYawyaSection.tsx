import React from 'react';

interface WhyYawyaSectionProps {
  title: string;
  points: string[];
}

const WhyYawyaSection: React.FC<WhyYawyaSectionProps> = ({ title, points }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title animate-fade-in">{title}</h2>
        <div className="space-y-8 mt-12">
          {points.map((point, index) => (
            <div 
              key={index} 
              className={`animate-fade-in animate-delay-${(index + 1) * 200}`}
            >
              <p className="section-subtitle">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyYawyaSection;