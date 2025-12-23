'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin } from 'lucide-react';
import { loadSiteConfig } from '@/lib/contentLoader';
import { scrollToSection } from '@/lib/utils';

export function Hero() {
  const siteConfig = loadSiteConfig();

  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ willChange: 'transform' }}
      >
        <source src="/videos/timestamp.web.mp4" type="video/mp4" />
      </video>
      
      {/* Gradient Overlay with #03025d */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#03025d]/30 to-black z-[1]" />
      
      {/* Background Effects with gradient colors */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#03025d]/22 to-black/55 rounded-full blur-[110px] animate-pulse pointer-events-none z-[2]" />
      
      {/* Gradient Glow Effects */}
      <div className="absolute top-1/4 left-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#03025d]/18 to-black/45 rounded-full blur-[130px] pointer-events-none z-[2]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-black/55 to-[#03025d]/14 rounded-full blur-[110px] pointer-events-none z-[2]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-5xl"
        >
          {/* Date & Venue Pill with gradient */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#03025d]/30 via-black/40 to-[#03025d]/30 backdrop-blur-md border border-white/10 shadow-lg"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 flex-shrink-0" />
              <span className="whitespace-nowrap">{siteConfig.dates}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white font-medium">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 flex-shrink-0" />
              <span className="whitespace-nowrap">{siteConfig.venue}</span>
            </div>
          </motion.div>

          {/* Main Headline with Modern Gradient Style */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.9] sm:leading-[0.85]">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 font-extrabold"
              >
                SHAPE NEXT
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block text-white font-black"
              >
                TIMESTAMP
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block gradient-text-dark font-black"
              >
                1337
              </motion.span>
            </h1>
            
            {siteConfig.subtitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-lg text-white/70 font-semibold tracking-[0.2em] uppercase mt-6"
              >
                {siteConfig.subtitle}
              </motion.p>
            )}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl font-light"
          >
            {siteConfig.seo.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6"
          >
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-white to-white/95 text-black font-bold text-sm rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] text-center"
            >
              {siteConfig.cta.primary}
            </Link>
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 bg-gradient-to-r from-[#03025d]/20 via-black/30 to-[#03025d]/20 backdrop-blur-md text-white font-bold text-sm rounded-full hover:bg-gradient-to-r hover:from-[#03025d]/30 hover:via-black/40 hover:to-[#03025d]/30 transition-all duration-300 hover:border-white/30 text-center"
            >
              {siteConfig.cta.secondary}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

