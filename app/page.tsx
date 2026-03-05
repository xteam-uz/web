'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Trust } from '@/components/trust';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { About } from '@/components/about';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Projects />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
