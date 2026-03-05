'use client';

import { useTranslation } from '@/lib/translation-context';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      <div className="container-max flex flex-col items-center text-center gap-8 py-20 relative z-10">
        {/* Glow Badge */}
        <div className="glow-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>{t('hero.trusted')}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary group"
          >
            {t('hero.cta')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="btn-secondary"
          >
            {t('nav.services')}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 h-screen overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
}
