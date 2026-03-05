'use client';

import { useTranslation } from '@/lib/translation-context';
import { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

export function Navbar() {
  const { t, language, setLanguage, theme, setTheme } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="container-max flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">X</span>
          </div>
          <span className="font-bold text-lg text-foreground">Team</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.projects')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </button>
        </div>

        {/* Language & Theme Switcher */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <div className="flex gap-1">
            <button
              onClick={() => setTheme('light')}
              title="Light mode"
              className={`p-2 rounded transition-colors ${
                theme === 'light' ? 'bg-primary/20' : 'hover:bg-muted'
              }`}
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              title="Dark mode"
              className={`p-2 rounded transition-colors ${
                theme === 'dark' ? 'bg-primary/20' : 'hover:bg-muted'
              }`}
            >
              <Moon size={18} />
            </button>
            <button
              onClick={() => setTheme('system')}
              title="System"
              className={`p-2 rounded transition-colors ${
                theme === 'system' ? 'bg-primary/20' : 'hover:bg-muted'
              }`}
            >
              <Globe size={18} />
            </button>
          </div>

          {/* Language Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-3 py-2 rounded bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              {language.toUpperCase()}
              <svg className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 glass rounded-lg shadow-lg z-50">
                {(['en', 'ru', 'uz'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 transition-colors ${
                      language === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    } ${lang === 'en' ? 'rounded-t-lg' : ''} ${lang === 'uz' ? 'rounded-b-lg' : ''}`}
                  >
                    {lang === 'en' && 'English'}
                    {lang === 'ru' && 'Русский'}
                    {lang === 'uz' && 'Uzbek'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t glass">
          <div className="container-max py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              {t('nav.contact')}
            </button>

            {/* Mobile Language Selector */}
            <div className="border-t pt-4 mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Language</p>
              <div className="flex gap-2">
                {(['en', 'ru', 'uz'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      language === lang
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    {lang === 'en' && 'EN'}
                    {lang === 'ru' && 'RU'}
                    {lang === 'uz' && 'UZ'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
