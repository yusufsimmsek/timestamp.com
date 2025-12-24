import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Format } from '@/components/Format';
// import { SpeakerGrid } from '@/components/SpeakerGrid'; // Temporarily disabled
import { GalleryGrid } from '@/components/GalleryGrid';
import { ScheduleTabs } from '@/components/ScheduleTabs';
import { FAQAccordion } from '@/components/FAQAccordion';
// import { Partners } from '@/components/Partners'; // Temporarily disabled - will be activated later

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Format />
      {/* Featured Speakers section temporarily disabled - will be reactivated later */}
      {/* <SpeakerGrid /> */}
      <GalleryGrid />
      <ScheduleTabs />
      <FAQAccordion />
      {/* <Partners /> */}
    </>
  );
}

