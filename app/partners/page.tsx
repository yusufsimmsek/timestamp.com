'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
      animate={{ opacity: 1, y: 0 }}
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

export default function PartnersPage() {
  const partners = loadPartners();
  const [activeTab, setActiveTab] = useState<'current' | 'previous'>('current');

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Partners
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Our valued partners who make this event possible.
          </p>
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
    </div>
  );
}

