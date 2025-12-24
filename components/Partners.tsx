'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { loadPartners } from '@/lib/contentLoader';
import type { PartnerItem, PartnersGroup } from '@/lib/contentSchemas';
import { cn } from '@/lib/utils';

function PartnerGroup({
  title,
  partners,
  delay = 0,
}: {
  title: string;
  partners: PartnerItem[];
  delay?: number;
}) {
  if (partners.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold mb-8">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => {
          const content = (
            <div className="relative aspect-[3/2] rounded-lg bg-white/5 border border-white/10 p-6 flex items-center justify-center hover:border-accent-primary/50 transition-all group">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          );

          if (partner.url) {
            return (
              <Link
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </Link>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </motion.div>
  );
}

function PartnersContent({ group, title }: { group: PartnersGroup; title: string }) {
  return (
    <div>
      <PartnerGroup
        title="Partners"
        partners={group.partners}
        delay={0.1}
      />
      <PartnerGroup
        title="Media Partners"
        partners={group.mediaPartners}
        delay={0.2}
      />
      <PartnerGroup
        title="Universities"
        partners={group.universities}
        delay={0.3}
      />
      <PartnerGroup
        title="Memberships & Communities"
        partners={group.memberships}
        delay={0.4}
      />
    </div>
  );
}

export function Partners() {
  const partners = loadPartners();
  const [activeTab, setActiveTab] = useState<'current' | 'previous'>('current');

  return (
    <Section id="partners" className="bg-gradient-to-b from-background-alt/30 via-[#03025d]/5 to-background-alt/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/90 to-[#03025d] bg-clip-text text-transparent">
              Partners
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-[#03025d] to-transparent rounded-full mx-auto mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto px-4">
              Our valued partners who make this event possible.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 justify-center">
          {(['current', 'previous'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-semibold transition-all',
                activeTab === tab
                  ? 'bg-accent-primary text-background'
                  : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
              )}
            >
              {tab === 'current' ? 'Current' : 'Previous'}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'current' ? (
            <PartnersContent group={partners.current} title="Current Partners" />
          ) : (
            <PartnersContent group={partners.previous} title="Previous Partners" />
          )}
        </motion.div>
      </div>
    </Section>
  );
}

