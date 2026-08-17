import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { FeaturedWork } from '../components/FeaturedWork';
import { GitHubActivity } from '../components/GitHubActivity';
import { Skills } from '../components/Skills';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { PhotoGallery } from '../components/PhotoGallery';
import { ContactForm } from '../components/ContactForm';

export function Home() {
  const location = useLocation();

  // Handle deep links like "/#contact" coming from other pages.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <FeaturedWork />
      <GitHubActivity />
      <Skills />
      <ExperienceTimeline />
      <PhotoGallery />
      <ContactForm />
    </>
  );
}
