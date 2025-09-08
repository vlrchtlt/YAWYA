import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhyYawyaSection from '@/components/WhyYawyaSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VisionSection from '@/components/VisionSection';
import ForMaisonsSection from '@/components/ForMaisonsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const { t, currentLanguage, setLanguage } = useTranslations();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request",
      description: "Thank you for your interest. We'll contact you soon.",
    });
  };

  const handlePrivatePresentation = () => {
    toast({
      title: "Private Presentation",
      description: "Your request has been received. We'll be in touch shortly.",
    });
  };

  return (
    <div className="smooth-scroll">
      <Navigation 
        currentLanguage={currentLanguage}
        onLanguageChange={setLanguage}
      />
      
      <main>
        <HeroSection
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          ctaText={t.hero.cta}
          onCtaClick={handleDemoRequest}
        />
        
        <WhyYawyaSection
          title={t.whyYawya.title}
          points={t.whyYawya.points}
        />
        
        <HowItWorksSection
          title={t.howItWorks.title}
          steps={t.howItWorks.steps}
        />
        
        <VisionSection
          text={t.vision.text}
        />
        
        <ForMaisonsSection
          title={t.forMaisons.title}
          description={t.forMaisons.description}
          ctaText={t.forMaisons.cta}
          onCtaClick={handlePrivatePresentation}
        />
        
        <AboutSection
          title={t.about.title}
          description={t.about.description}
        />
      </main>
      
      <Footer
        legal={t.footer.legal}
        contact={t.footer.contact}
        social={t.footer.social}
      />
    </div>
  );
};

export default Index;
