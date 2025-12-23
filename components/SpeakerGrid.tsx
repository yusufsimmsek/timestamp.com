'use client';

import Link from 'next/link';
import { Section } from './Section';
import { SpeakerCard } from './SpeakerCard';
import { loadSpeakers } from '@/lib/contentLoader';

export function SpeakerGrid() {
  const speakers = loadSpeakers().slice(0, 6);

  return (
    <Section id="speakers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Learn from industry leaders and innovators shaping the future of Web3
            and AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>
        
        {/* "View All Speakers" link temporarily disabled - will be reactivated later */}
        {/* <div className="text-center">
          <Link
            href="/speakers"
            className="inline-block px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all"
          >
            View All Speakers →
          </Link>
        </div> */}
      </div>
    </Section>
  );
}

