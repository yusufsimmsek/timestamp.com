import {
  siteConfigSchema,
  speakersSchema,
  gallerySchema,
  scheduleSchema,
  faqSchema,
  partnersSchema,
  type SiteConfig,
  type Speaker,
  type GalleryItem,
  type Schedule,
  type FAQItem,
  type Partners,
} from './contentSchemas';
import siteConfigData from '@/content/site.json';
import speakersData from '@/content/speakers.json';
import galleryData from '@/content/gallery.json';
import scheduleData from '@/content/schedule.json';
import faqData from '@/content/faq.json';
import partnersData from '@/content/partners.json';

// Load and validate content
export function loadSiteConfig(): SiteConfig {
  return siteConfigSchema.parse(siteConfigData);
}

export function loadSpeakers(): Speaker[] {
  return speakersSchema.parse(speakersData);
}

export function loadGallery(): GalleryItem[] {
  return gallerySchema.parse(galleryData);
}

export function loadSchedule(): Schedule {
  return scheduleSchema.parse(scheduleData);
}

export function loadFAQ(): FAQItem[] {
  return faqSchema.parse(faqData);
}

export function loadPartners(): Partners {
  return partnersSchema.parse(partnersData);
}

// Helper to get speaker by slug
export function getSpeakerBySlug(slug: string): Speaker | undefined {
  const speakers = loadSpeakers();
  return speakers.find((s) => s.slug === slug);
}

