'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Simple Clean Loading Animation
 */

export function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDisplayTime = 1000;
    const maxDisplayTime = 2500;

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, minDisplayTime + Math.random() * (maxDisplayTime - minDisplayTime));

    const safetyTimeout = setTimeout(() => {
      setIsLoading(false);
    }, maxDisplayTime + 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Simple Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#03025d]/5 to-black" />

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ 
                scale: 0.9, 
                opacity: 0,
              }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            >
              {/* Simple Glow */}
              <div className="absolute inset-0 -m-8 rounded-full bg-[#03025d]/15 blur-2xl" />

              {/* Logo Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/logos/1337 (6).png"
                  alt="TIMESTAMP 1337"
                  fill
                  className="object-contain"
                  priority
                  quality={100}
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                />
              </div>
            </motion.div>

            {/* Simple Loading Dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#03025d]"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
