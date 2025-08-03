import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { BlogHeader } from '@/components/BlogHeader';
import { BlogContent } from '@/components/BlogContent';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <BlogContent />
      </div>
    </LanguageProvider>
  );
};

export default Index;
