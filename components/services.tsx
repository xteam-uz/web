'use client';

import { useTranslation } from '@/lib/translation-context';
import { Cog, Database, MessageCircle, Globe, Smartphone, Lightbulb } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  const services = [
    { icon: Database, key: 'crm' },
    { icon: Cog, key: 'erp' },
    { icon: MessageCircle, key: 'telegram' },
    { icon: Globe, key: 'web' },
    { icon: Smartphone, key: 'mobile' },
    { icon: Lightbulb, key: 'consulting' },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30 border-t">
      <div className="container-max">
        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground mt-4">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, key }, idx) => (
            <div key={key} className="group glass p-8 flex flex-col gap-4 hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold">{t(`services.items.${key}.name`)}</h3>
              <p className="text-muted-foreground text-sm flex-grow">{t(`services.items.${key}.desc`)}</p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
