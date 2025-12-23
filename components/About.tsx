'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from './Section';
import { loadSiteConfig } from '@/lib/contentLoader';

// Özgün SVG Icon Components
const PracticalSolutionsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L40 24H56L44 36L48 52L32 44L16 52L20 36L8 24H24L32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M32 20V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.6"/>
    <path d="M24 28L32 32L40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
  </svg>
);

const AIBlockchainIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="36" y="20" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M20 28H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="20" cy="28" r="2" fill="currentColor"/>
    <circle cx="44" cy="28" r="2" fill="currentColor"/>
    <path d="M32 12V20M32 36V44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M12 32H20M44 32H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 24L12 20M48 24L52 20M16 40L12 44M48 40L52 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const LongTermValueIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16C24 16 18 22 18 30C18 38 24 44 32 44C40 44 46 38 46 30C46 22 40 16 32 16Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M32 8V16M32 44V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 32H24M40 32H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 24L20 20M40 24L44 20M24 40L20 44M40 40L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <circle cx="32" cy="30" r="4" fill="currentColor" opacity="0.3"/>
    <path d="M28 30L32 34L36 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StrategicLocationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12L40 24H56L48 36L52 48L32 40L12 48L16 36L8 24H24L32 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="20" y="28" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M26 32H38M26 36H38M26 40H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="52" r="2" fill="currentColor"/>
    <path d="M32 48V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const EcosystemBridgeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="32" cy="44" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M26 23L30 38M38 23L34 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 26L44 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M12 20L14 20M50 20L52 20M32 38L32 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="44" cy="20" r="2" fill="currentColor" opacity="0.6"/>
    <circle cx="32" cy="44" r="2" fill="currentColor" opacity="0.6"/>
  </svg>
);

const CompliantGrowthIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12C42 12 50 20 50 30C50 40 42 48 32 48C22 48 14 40 14 30C14 20 22 12 32 12Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M32 8V12M32 48V52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 32H12M52 32H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 20L16 16M44 20L48 16M20 40L16 44M44 40L48 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path d="M24 30L30 36L40 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="30" r="3" fill="currentColor" opacity="0.2"/>
  </svg>
);

export function About() {
  const siteConfig = loadSiteConfig();

  const visionPoints = [
    {
      icon: PracticalSolutionsIcon,
      title: 'Practical Solutions',
      description: 'Scalable Web3 infrastructure that delivers real value',
    },
    {
      icon: AIBlockchainIcon,
      title: 'AI × Blockchain',
      description: 'The real intersection of artificial intelligence and blockchain',
    },
    {
      icon: LongTermValueIcon,
      title: 'Long-term Value',
      description: 'Sustainable innovation over short-term trends',
    },
  ];

  const ankaraPoints = [
    {
      icon: StrategicLocationIcon,
      title: 'Strategic Location',
      description: 'Where technology, academia, and regulation intersect',
    },
    {
      icon: EcosystemBridgeIcon,
      title: 'Ecosystem Bridge',
      description: 'Connecting startups, universities, and decision-makers',
    },
    {
      icon: CompliantGrowthIcon,
      title: 'Compliant Growth',
      description: 'Supporting sustainable and compliant Web3 development',
    },
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
                Vision
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-[#03025d] to-transparent rounded-full" />
            </div>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Timestamp 1337 was created to offer a focused, high-quality alternative to large, crowded conferences. 
              Instead of scale, we prioritize <span className="text-white font-semibold">clarity, relevance, and meaningful interaction</span>.
            </p>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Our goal is to bring together builders, innovators, investors, and institutions in an environment 
              where <span className="text-white font-semibold">real conversations lead to real outcomes</span>.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(3,2,93,0.2)] group order-1 lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=80"
              alt="Event venue - Timestamp 1337 Conference"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Fallback background in case image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#03025d]/20 via-black/40 to-black/60" />
          </motion.div>
        </div>

        {/* Web3 & AI Vision - Modernized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
              Web3 & AI Vision
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed px-4">
              We believe the future of Web3 and AI will be shaped not by hype, but by <span className="text-white font-semibold">strong infrastructure, responsible innovation, and cross-disciplinary collaboration</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="group relative perspective-1000"
                  style={{ perspective: '1000px' }}
                >
                  {/* 3D Glow Effect - Outer */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03025d]/60 via-[#03025d]/40 to-[#03025d]/60 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  
                  {/* 3D Glow Effect - Inner */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#03025d]/30 via-transparent to-[#03025d]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main 3D Card */}
                  <motion.div
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.02,
                      z: 50
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-black/90 via-[#03025d]/10 to-black/80 border border-white/10 group-hover:border-[#03025d]/50 transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(3,2,93,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#03025d]/20 via-transparent to-[#03025d]/20" 
                         style={{
                           backgroundImage: 'linear-gradient(135deg, rgba(3,2,93,0.3) 0%, transparent 50%, rgba(3,2,93,0.3) 100%)'
                         }}
                    />
                    
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" 
                         style={{
                           backgroundImage: `
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                           `,
                           backgroundSize: '24px 24px',
                           backgroundPosition: '0 0, 0 0'
                         }}
                    />
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#03025d]/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#03025d]/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: 'linear-gradient(90deg, transparent, rgba(3,2,93,0.5), transparent)',
                           backgroundSize: '200% 100%',
                           animation: 'shimmer 3s infinite'
                         }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                      {/* 3D Icon Container */}
                      <motion.div 
                        className="mb-4 sm:mb-6 relative"
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-[#03025d]/40 blur-2xl rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Icon Container */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/15 via-[#03025d]/20 to-black/40 border border-white/20 group-hover:border-[#03025d]/60 flex items-center justify-center transition-all duration-500"
                             style={{
                               boxShadow: '0 8px 32px rgba(3,2,93,0.4), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                               transform: 'translateZ(30px)'
                             }}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_0_8px_rgba(3,2,93,0.8)]" />
                        </div>
                      </motion.div>
                      
                      {/* Title with 3D Effect */}
                      <h4 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#03025d] group-hover:to-white transition-all duration-500"
                          style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 0 20px rgba(3,2,93,0.3)',
                            transform: 'translateZ(10px)'
                          }}
                      >
                        {point.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500"
                         style={{ transform: 'translateZ(5px)' }}
                      >
                        {point.description}
                      </p>
                      
                      {/* Bottom Accent Line - Animated */}
                      <motion.div 
                        className="mt-4 sm:mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#03025d] to-transparent"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '100%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        style={{ transform: 'translateZ(15px)' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* The Role of Ankara - Modernized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
              The Role of Ankara
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed px-4">
              Hosted at <span className="text-white font-semibold">CoZone</span>, Timestamp 1337 leverages Ankara's unique ecosystem where 
              technology, academia, and regulation intersect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ankaraPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="group relative perspective-1000"
                  style={{ perspective: '1000px' }}
                >
                  {/* 3D Glow Effect - Outer */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#03025d]/60 via-[#03025d]/40 to-[#03025d]/60 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                  
                  {/* 3D Glow Effect - Inner */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#03025d]/30 via-transparent to-[#03025d]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main 3D Card */}
                  <motion.div
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.02,
                      z: 50
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-black/90 via-[#03025d]/10 to-black/80 border border-white/10 group-hover:border-[#03025d]/50 transition-all duration-500 overflow-hidden"
                    style={{
                      boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(3,2,93,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#03025d]/20 via-transparent to-[#03025d]/20" 
                         style={{
                           backgroundImage: 'linear-gradient(135deg, rgba(3,2,93,0.3) 0%, transparent 50%, rgba(3,2,93,0.3) 100%)'
                         }}
                    />
                    
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" 
                         style={{
                           backgroundImage: `
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                           `,
                           backgroundSize: '24px 24px',
                           backgroundPosition: '0 0, 0 0'
                         }}
                    />
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#03025d]/30 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#03025d]/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: 'linear-gradient(90deg, transparent, rgba(3,2,93,0.5), transparent)',
                           backgroundSize: '200% 100%',
                           animation: 'shimmer 3s infinite'
                         }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                      {/* 3D Icon Container */}
                      <motion.div 
                        className="mb-4 sm:mb-6 relative"
                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {/* Icon Glow */}
                        <div className="absolute inset-0 bg-[#03025d]/40 blur-2xl rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Icon Container */}
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/15 via-[#03025d]/20 to-black/40 border border-white/20 group-hover:border-[#03025d]/60 flex items-center justify-center transition-all duration-500"
                             style={{
                               boxShadow: '0 8px 32px rgba(3,2,93,0.4), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)',
                               transform: 'translateZ(30px)'
                             }}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-[0_0_8px_rgba(3,2,93,0.8)]" />
                        </div>
                      </motion.div>
                      
                      {/* Title with 3D Effect */}
                      <h4 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#03025d] group-hover:to-white transition-all duration-500"
                          style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 0 20px rgba(3,2,93,0.3)',
                            transform: 'translateZ(10px)'
                          }}
                      >
                        {point.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500"
                         style={{ transform: 'translateZ(5px)' }}
                      >
                        {point.description}
                      </p>
                      
                      {/* Bottom Accent Line - Animated */}
                      <motion.div 
                        className="mt-4 sm:mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#03025d] to-transparent"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '100%', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                        style={{ transform: 'translateZ(15px)' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

