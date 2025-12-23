'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from './Section';
import { loadGallery } from '@/lib/contentLoader';
import { cn } from '@/lib/utils';

export function GalleryGrid() {
  const gallery = loadGallery();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  return (
    <>
      <Section id="gallery" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4">
              Moments from previous events and community gatherings.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden border border-white/10 cursor-pointer group hover:border-[#03025d]/50 transition-all hover:shadow-[0_0_20px_rgba(3,2,93,0.3)]"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-accent-primary transition-colors"
                aria-label="Close"
              >
                <X size={32} />
              </button>
              
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={gallery[selectedIndex].src}
                  alt={gallery[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              <div className="absolute top-1/2 -left-12 -translate-y-1/2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              
              <div className="absolute top-1/2 -right-12 -translate-y-1/2">
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <p className="text-center text-white mt-4">
                {selectedIndex + 1} / {gallery.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

