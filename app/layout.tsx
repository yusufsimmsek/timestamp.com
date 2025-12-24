import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Loading } from '@/components/Loading';
import { loadSiteConfig } from '@/lib/contentLoader';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = loadSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timestamp1337.com';
  
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.seo.title}`,
    },
    description: siteConfig.seo.description,
    keywords: ['Web3', 'AI', 'Blockchain', 'Conference', 'Ankara', 'Timestamp 1337', 'Crypto', 'Technology'],
    authors: [{ name: 'Timestamp 1337' }],
    creator: 'Timestamp 1337',
    publisher: 'Timestamp 1337',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteUrl,
      siteName: 'Timestamp 1337',
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: siteConfig.seo.ogImage 
        ? [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.seo.title }]
        : [{ url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630, alt: siteConfig.seo.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      creator: '@timestamp1337',
      images: siteConfig.seo.ogImage 
        ? [siteConfig.seo.ogImage]
        : [`${siteUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/logos/1337 (6).png', sizes: '192x192', type: 'image/png' },
        { url: '/logos/1337 (6).png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
      ],
      other: [
        { rel: 'mask-icon', url: '/icon.svg', color: '#03025d' },
      ],
      shortcut: '/icon.svg',
    },
    manifest: '/site.webmanifest',
  };
}

export function generateViewport() {
  return {
    themeColor: '#03025d',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteConfig = loadSiteConfig();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://timestamp1337.com';
  
  // Structured Data (JSON-LD) for Event
  const eventStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: siteConfig.seo.title,
    description: siteConfig.seo.description,
    startDate: siteConfig.startDate || '2026-03-01',
    endDate: siteConfig.endDate || '2026-03-01',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: siteConfig.venue,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ankara',
        addressCountry: 'TR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: siteConfig.organizer || 'CANKAYA BLOCKCHAIN',
      url: siteUrl,
    },
    image: siteConfig.seo.ogImage 
      ? `${siteUrl}${siteConfig.seo.ogImage}`
      : `${siteUrl}/og-image.jpg`,
    url: siteUrl,
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Script
          id="event-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventStructuredData) }}
        />
        <Loading />
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Global modern glow background (applies to all pages) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[520px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(3,2,93,0.18)_0%,_rgba(0,0,0,0)_65%)] blur-2xl" />
            <div className="absolute top-1/3 -left-56 h-[520px] w-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.10)_0%,_rgba(0,0,0,0)_62%)] blur-2xl" />
            <div className="absolute bottom-0 -right-72 h-[620px] w-[620px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(3,2,93,0.12)_0%,_rgba(0,0,0,0)_62%)] blur-2xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.45)_70%,_rgba(0,0,0,0.85)_100%)]" />
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

