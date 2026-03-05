'use client';

import { useTranslation } from '@/lib/translation-context';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online marketplace with payment integration',
      category: 'Web Development',
      image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
    },
    {
      title: 'CRM System',
      description: 'Enterprise customer relationship management platform',
      category: 'CRM Solutions',
      image: 'bg-gradient-to-br from-green-500/20 to-teal-500/20',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile application for financial transactions',
      category: 'Mobile Development',
      image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
    },
    {
      title: 'ERP Solution',
      description: 'Comprehensive business management and automation',
      category: 'ERP Systems',
      image: 'bg-gradient-to-br from-indigo-500/20 to-blue-500/20',
    },
  ];

  return (
    <section id="projects" className="py-20 border-t">
      <div className="container-max">
        <div className="section-title">
          <h2>{t('projects.title')}</h2>
          <p className="text-lg text-muted-foreground mt-4">{t('projects.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="glass overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-primary/20 rounded-lg"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="inline-block w-fit">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-2">
                  {t('projects.viewMore')} <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
