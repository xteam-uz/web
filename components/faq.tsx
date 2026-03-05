'use client';

import { useTranslation } from '@/lib/translation-context';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { key: 'pricing' },
    { key: 'timeline' },
    { key: 'tech' },
    { key: 'support' },
  ];

  return (
    <section className="py-20 border-t">
      <div className="container-max max-w-3xl">
        <div className="section-title">
          <h2>{t('faq.title')}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ key }, idx) => (
            <div key={idx} className="glass rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-left">{t(`faq.items.${key}.q`)}</h3>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 border-t text-muted-foreground">
                  {t(`faq.items.${key}.a`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
