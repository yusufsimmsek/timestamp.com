'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section } from './Section';
import { loadFAQ } from '@/lib/contentLoader';
import { cn } from '@/lib/utils';

export function FAQAccordion() {
  const faq = loadFAQ();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#03025d] to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4">
              Everything you need to know about the event.
            </p>
          </motion.div>
        </div>
        
        <div className="space-y-4">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Glow Effect */}
              <div className={cn(
                "absolute -inset-0.5 bg-gradient-to-r from-[#03025d]/40 via-[#03025d]/20 to-[#03025d]/40 rounded-3xl blur-xl transition-opacity duration-500",
                openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              )} />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                  "relative rounded-3xl backdrop-blur-2xl border overflow-hidden transition-all duration-500",
                  "bg-gradient-to-br from-black/80 via-[#03025d]/5 to-black/80",
                  openIndex === index 
                    ? "border-[#03025d]/50 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(3,2,93,0.3)]" 
                    : "border-white/10 group-hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                )}
                style={{
                  boxShadow: openIndex === index 
                    ? '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(3,2,93,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                    : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Holographic Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-[#03025d]/20 via-transparent to-[#03025d]/20 transition-opacity duration-500",
                  openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                )}
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(3,2,93,0.3) 0%, transparent 50%, rgba(3,2,93,0.3) 100%)'
                }}
                />
                
                {/* Animated Grid Pattern */}
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  openIndex === index ? "opacity-[0.08]" : "opacity-[0.02] group-hover:opacity-[0.05]"
                )}
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '24px 24px'
                }}
                />
                
                {/* Corner Accents */}
                <div className={cn(
                  "absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#03025d]/30 to-transparent rounded-br-full transition-opacity duration-500 blur-sm",
                  openIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                )} />
                
                <button
                  onClick={() => toggle(index)}
                  className="relative w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left z-10"
                  aria-expanded={openIndex === index}
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <span className={cn(
                    "text-base sm:text-lg lg:text-xl font-bold pr-4 sm:pr-8 transition-all duration-500",
                    openIndex === index 
                      ? "text-white" 
                      : "text-white/90 group-hover:text-white"
                  )}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="flex-shrink-0"
                  >
                    <div className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                      "backdrop-blur-xl border",
                      openIndex === index
                        ? "bg-white/15 border-[#03025d]/50"
                        : "bg-white/5 border-white/20 group-hover:bg-white/10"
                    )}
                    style={{
                      boxShadow: openIndex === index
                        ? '0 4px 16px rgba(3,2,93,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                        : '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 text-sm sm:text-base text-white/70 leading-relaxed"
                        style={{ transform: 'translateZ(10px)' }}
                      >
                        {item.a}
                      </motion.div>
                      
                      {/* Bottom Accent Line */}
                      <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: '100%', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-0.5 bg-gradient-to-r from-transparent via-[#03025d] to-transparent mx-6 lg:mx-8 mb-6 lg:mb-8"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

