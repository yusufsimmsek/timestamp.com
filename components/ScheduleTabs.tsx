'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { loadSchedule } from '@/lib/contentLoader';
import { Clock } from 'lucide-react';

export function ScheduleTabs() {
  const schedule = loadSchedule();
  const day1Schedule = schedule.day1;

  return (
    <Section id="schedule" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
            Agenda Overview
          </h2>
          <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#03025d] to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#03025d]" />
            <p className="text-white font-semibold text-sm sm:text-base md:text-lg">
              10:00 – 19:00
            </p>
          </div>
        </motion.div>
        
        {/* Timeline Design */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#03025d]/50 via-[#03025d]/30 to-transparent" />
          
          <div className="space-y-10 sm:space-y-12">
            {day1Schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-20 md:pl-28 group"
              >
                {/* Timeline Dot */}
                <div className="hidden sm:block absolute left-6 md:left-10 top-1.5 w-4 h-4 rounded-full bg-[#03025d] border-4 border-black shadow-[0_0_20px_rgba(3,2,93,0.6)] group-hover:scale-150 transition-all duration-500 z-10" />
                
                {/* Content Layout */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                  {/* Time Badge */}
                  <div className="w-full sm:w-20 md:w-24 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-[#03025d] font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-none"
                    >
                      {item.startTime}
                    </motion.div>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#03025d] group-hover:to-white transition-all duration-500"
                      style={{
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)'
                      }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

