'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from './Section';

const formatPillars = [
  {
    title: 'Content-First',
    subtitle: 'High-signal sessions',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Curated Interaction',
    subtitle: 'Meaningful connections',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Builder-Focused',
    subtitle: 'For practitioners',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
  },
  {
    title: 'Community',
    subtitle: 'Long-term relationships',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80',
  },
];

export function Format() {
  return (
    <Section id="format" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
            Format
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#03025d] to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto px-4">
            A one-day, high-signal Web3 & AI conference designed for depth, focus, and meaningful interaction — not scale.
          </p>
        </motion.div>

        {/* Minimal Pillar Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {formatPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#03025d]/30 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group-hover:border-[#03025d]/50 transition-all duration-500 text-center overflow-hidden"
                   style={{
                     boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)'
                   }}
              >
                {/* Background Image for all pillars */}
                {pillar.image && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#03025d] group-hover:to-white transition-all duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-500">
                    {pillar.subtitle}
                  </p>
                  
                  {/* Bottom Accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-[#03025d] to-transparent mt-3 sm:mt-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

