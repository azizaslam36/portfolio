import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './Skills';
import gallery1 from '../assets/photos/gallery-placeholder-1.svg';
import gallery2 from '../assets/photos/gallery-placeholder-2.svg';
import gallery3 from '../assets/photos/gallery-placeholder-3.svg';
import gallery4 from '../assets/photos/gallery-placeholder-4.svg';

const photos = [
  { src: gallery1, caption: 'Add a photo — desk setup, workspace, or a build in progress' },
  { src: gallery2, caption: 'Add a photo — a project screenshot or demo moment' },
  { src: gallery3, caption: 'Add a photo — a team or internship moment' },
  { src: gallery4, caption: 'Add a photo — anything behind the work' },
];

export function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="border-b border-ink-900/10 dark:border-white/10 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Behind the work"
          title="Gallery"
          description="Drop your own images into src/assets/photos and swap the imports in PhotoGallery.tsx — placeholders shown until then."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-ink-900/10 dark:border-white/10"
              aria-label={`Open photo: ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-lime hover:text-lime"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-lime hover:text-lime sm:left-6"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.figure
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg"
            >
              <img
                src={photos[openIndex].src}
                alt={photos[openIndex].caption}
                className="max-h-[70vh] w-full rounded-xl object-contain"
              />
              <figcaption className="mt-4 text-center font-mono text-xs text-white/70">
                {photos[openIndex].caption}
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length));
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-lime hover:text-lime sm:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
