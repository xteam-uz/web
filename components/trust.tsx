'use client';

import { useTranslation } from '@/lib/translation-context';
import { CheckCircle, Users, Zap, Award } from 'lucide-react';

export function Trust() {
  const { t } = useTranslation();

  const features = [
    { icon: Award, key: 'experience' },
    { icon: Users, key: 'team' },
    { icon: Zap, key: 'support' },
    { icon: CheckCircle, key: 'quality' },
  ];

  return (
    <section className="py-20 border-t">
      <div className="container-max">
        <div className="section-title">
          <h2>{t('trust.title')}</h2>
          <p className="text-lg text-muted-foreground mt-4">{t('trust.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, key }, idx) => (
            <div key={key} className="glass p-8 flex flex-col gap-4 animate-fade-in hover:border-primary/50 transition-all duration-300" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">{t(`trust.items.${key}.title`)}</h3>
              <p className="text-muted-foreground text-sm">{t(`trust.items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
