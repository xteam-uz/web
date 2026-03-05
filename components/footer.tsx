'use client';

import { useTranslation } from '@/lib/translation-context';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">X</span>
              </div>
              <span className="font-bold text-lg">Team</span>
            </div>
            <p className="text-sm opacity-80">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Email: info@xteam.com</li>
              <li>Phone: +998 (99) 123-45-67</li>
              <li>Tashkent, Uzbekistan</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.social')}</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Github size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 XTeam. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
