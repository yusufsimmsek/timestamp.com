'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';
import type { Speaker } from '@/lib/contentSchemas';
import { cn } from '@/lib/utils';

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
}

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
};

export function SpeakerCard({ speaker, index }: SpeakerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent-primary/50 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative aspect-square mb-6 rounded-xl overflow-hidden border border-white/10">
        <Image
          src={speaker.photo}
          alt={speaker.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
      <p className="text-sm text-accent-primary mb-3">{speaker.role}</p>
      <p className="text-sm text-text-muted mb-4 line-clamp-3">{speaker.bio}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {speaker.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {Object.entries(speaker.socials).map(([key, url]) => {
          if (!url) return null;
          const Icon = socialIcons[key as keyof typeof socialIcons];
          if (!Icon) return null;
          
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              aria-label={key}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}

