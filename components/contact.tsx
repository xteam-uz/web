'use client';

import { useTranslation } from '@/lib/translation-context';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30 border-t">
      <div className="container-max max-w-5xl">
        <div className="section-title">
          <h2>{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground mt-4">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-6 flex flex-col gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-muted-foreground text-sm">info@xteam.com</p>
            </div>
            <div className="glass p-6 flex flex-col gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-muted-foreground text-sm">+998 (99) 123-45-67</p>
            </div>
            <div className="glass p-6 flex flex-col gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground text-sm">Tashkent, Uzbekistan</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 glass p-8 flex flex-col gap-6">
            {submitted && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-700">
                {t('contact.form.success')}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.form.company')}</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
