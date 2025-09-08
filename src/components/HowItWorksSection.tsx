import React from 'react';

interface HowItWorksSectionProps {
  title: string;
  steps: {
    capture: string;
    render: string;
    see: string;
  };
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ title, steps }) => {
  const stepsList = [
    { key: 'capture', text: steps.capture },
    { key: 'render', text: steps.render },
    { key: 'see', text: steps.see },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-accent text-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title animate-fade-in">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stepsList.map((step, index) => (
            <div 
              key={step.key}
              className={`animate-fade-in animate-delay-${(index + 1) * 200}`}
            >
              <div className="mb-4">
                <span className="text-4xl font-favorit-light text-primary">
                  0{index + 1}
                </span>
              </div>
              <p className="section-subtitle text-left">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;