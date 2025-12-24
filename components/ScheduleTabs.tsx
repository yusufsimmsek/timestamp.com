'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { loadSchedule } from '@/lib/contentLoader';
import { Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScheduleTabs() {
  const schedule = loadSchedule();
  const day1Schedule = schedule.day1;

  return (
    <Section id="schedule" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
            Agenda Overview
          </h2>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-[#03025d] to-transparent rounded-full mx-auto mb-6 sm:mb-8" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/10 via-[#03025d]/20 to-white/10 border border-[#03025d]/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(3,2,93,0.3)]"
          >
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#03025d]" />
            <p className="text-white font-bold text-base sm:text-lg md:text-xl">
              10:00 – 19:00
            </p>
          </motion.div>
        </motion.div>
        
        {/* Modern Timeline Design */}
        <div className="relative">
          {/* Enhanced Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#03025d] via-[#03025d]/60 to-transparent" />
          <div className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#03025d]/80 via-[#03025d]/40 to-transparent blur-sm" />
          
          <div className="space-y-6 sm:space-y-8">
            {day1Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-0 sm:pl-16 md:pl-20 group"
              >
                {/* Enhanced Timeline Dot with Glow */}
                <div className="hidden sm:block absolute left-3 md:left-5 top-2 w-5 h-5 rounded-full bg-[#03025d] border-4 border-black shadow-[0_0_30px_rgba(3,2,93,0.8)] group-hover:scale-150 group-hover:shadow-[0_0_50px_rgba(3,2,93,1)] transition-all duration-500 z-10" />
                <div className="hidden sm:block absolute left-3 md:left-5 top-2 w-5 h-5 rounded-full bg-[#03025d]/50 blur-xl group-hover:blur-2xl transition-all duration-500 z-0" />
                
                {/* Modern Card Design */}
                <motion.div
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={cn(
                    "relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10",
                    "bg-gradient-to-br from-black/80 via-[#03025d]/10 to-black/80",
                    "border border-white/10 group-hover:border-[#03025d]/50",
                    "backdrop-blur-xl",
                    "shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_60px_rgba(3,2,93,0.3)]",
                    "transition-all duration-500",
                    "overflow-hidden"
                  )}
                >
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#03025d]/0 via-[#03025d]/10 to-[#03025d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 md:gap-8">
                      {/* Time Badge - Enhanced */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="inline-flex flex-col items-start"
                        >
                          <div className="text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-none">
                            {item.startTime}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Title and Description */}
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <motion.h3
                          whileHover={{ x: 4 }}
                          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#03025d] group-hover:to-white transition-all duration-500"
                        >
                          {item.title}
                        </motion.h3>
                        
                        {item.description && (
                          <motion.p
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                            className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
                          >
                            {item.description}
                          </motion.p>
                        )}
                        
                        {item.track && (
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#03025d]/20 border border-[#03025d]/30">
                            <MapPin className="w-3 h-3 text-[#03025d]" />
                            <span className="text-[#03025d] text-xs sm:text-sm font-semibold">
                              {item.track}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#03025d]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </Section>
  );
}

