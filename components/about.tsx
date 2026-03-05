'use client';

import { useTranslation } from '@/lib/translation-context';

export function About() {
  const { t } = useTranslation();

  const stats = [
    { key: 'clients', icon: '👥' },
    { key: 'projects', icon: '📊' },
    { key: 'team', icon: '👨‍💻' },
    { key: 'years', icon: '📅' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30 border-t">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2>{t('about.title')}</h2>
              <p className="text-muted-foreground mt-2">{t('about.subtitle')}</p>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('about.description')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ key, icon }) => (
                <div key={key} className="glass p-6 text-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <p className="font-bold text-lg">{t(`about.stats.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="glass h-96 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-muted-foreground">Innovation & Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
