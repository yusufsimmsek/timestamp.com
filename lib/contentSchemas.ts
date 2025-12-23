import { z } from 'zod';

// Site Config Schema
export const siteConfigSchema = z.object({
  siteName: z.string(),
  subtitle: z.string().optional(),
  dates: z.string(),
  venue: z.string(),
  organizer: z.string().optional(),
  cta: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  socials: z.object({
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    github: z.string().optional(),
  }),
  contact: z.object({
    email: z.string().email(),
    phone: z.string().optional(),
    address: z.string().optional(),
    website: z.string().optional(),
  }),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional(),
  }),
});

// Speaker Schema
export const speakerSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  photo: z.string(),
  socials: z.object({
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
  }),
  tags: z.array(z.string()),
});

export const speakersSchema = z.array(speakerSchema);

// Gallery Schema
export const galleryItemSchema = z.object({
  src: z.string(),
  alt: z.string(),
  year: z.number().optional(),
  category: z.string().optional(),
});

export const gallerySchema = z.array(galleryItemSchema);

// Schedule Schema
export const scheduleItemSchema = z.object({
  startTime: z.string(),
  duration: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  track: z.string().nullable(),
});

export const scheduleSchema = z.object({
  day1: z.array(scheduleItemSchema),
  day2: z.array(scheduleItemSchema),
});

// FAQ Schema
export const faqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
});

export const faqSchema = z.array(faqItemSchema);

// Partner Schema
export const partnerItemSchema = z.object({
  name: z.string(),
  logo: z.string(),
  url: z.string().nullable().optional(),
});

export const partnersGroupSchema = z.object({
  partners: z.array(partnerItemSchema),
  mediaPartners: z.array(partnerItemSchema),
  universities: z.array(partnerItemSchema),
  memberships: z.array(partnerItemSchema),
});

export const partnersSchema = z.object({
  current: partnersGroupSchema,
  previous: partnersGroupSchema,
});

// Type exports
export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type Speaker = z.infer<typeof speakerSchema>;
export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type ScheduleItem = z.infer<typeof scheduleItemSchema>;
export type Schedule = z.infer<typeof scheduleSchema>;
export type FAQItem = z.infer<typeof faqItemSchema>;
export type PartnerItem = z.infer<typeof partnerItemSchema>;
export type PartnersGroup = z.infer<typeof partnersGroupSchema>;
export type Partners = z.infer<typeof partnersSchema>;

