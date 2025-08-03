import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/data/translations';
import { LanguageSelector } from './LanguageSelector';


export const BlogHeader: React.FC = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <header className="relative overflow-hidden bg-gradient-hero py-12 md:py-24">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-16 right-10 md:top-32 md:right-20 w-12 h-12 md:w-20 md:h-20 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-16 md:bottom-20 md:left-32 w-8 h-8 md:w-16 md:h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 lg:mb-12">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 lg:mb-8 animate-slide-up">
              <div className="text-center sm:text-right">
                <div className="text-white/80 text-base sm:text-lg font-medium mb-2">Amino Security Guide</div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-primary rounded-full mx-auto sm:mx-0"></div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-8 animate-slide-up leading-tight text-center sm:text-right">
              {t.title}
            </h1>
            
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4 animate-fade-in">
              <div className="w-16 sm:w-32 h-1 bg-gradient-primary rounded-full"></div>
              <div className="w-8 sm:w-16 h-1 bg-white/30 rounded-full"></div>
              <div className="w-4 sm:w-8 h-1 bg-white/20 rounded-full"></div>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <LanguageSelector />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
    </header>
  );
};