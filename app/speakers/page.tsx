import { notFound } from 'next/navigation';

// TEMPORARILY DISABLED - Will be reactivated later
// Original code preserved below in comments

export default function SpeakersPage() {
  // Return 404 - page is temporarily disabled
  notFound();
}

/* ORIGINAL CODE - Uncomment to reactivate:
'use client';

import { useState, useMemo } from 'react';
import { SpeakerCard } from '@/components/SpeakerCard';
import { loadSpeakers } from '@/lib/contentLoader';
import type { Speaker } from '@/lib/contentSchemas';
import { Search, X } from 'lucide-react';

export default function SpeakersPage() {
  const allSpeakers = loadSpeakers();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allSpeakers.forEach((speaker) => {
      speaker.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allSpeakers]);

  // Filter speakers
  const filteredSpeakers = useMemo(() => {
    return allSpeakers.filter((speaker) => {
      const matchesSearch =
        searchQuery === '' ||
        speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === null || speaker.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [allSpeakers, searchQuery, selectedTag]);

  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            All Speakers
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Meet the experts, innovators, and thought leaders sharing their insights.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-text-muted focus:outline-none focus:border-accent-primary transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-accent-primary text-background'
                  : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-accent-primary text-background'
                    : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 text-center text-text-muted">
          {filteredSpeakers.length} speaker{filteredSpeakers.length !== 1 ? 's' : ''} found
        </div>

        {filteredSpeakers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpeakers.map((speaker, index) => (
              <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-lg">No speakers found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
*/

