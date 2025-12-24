'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Format', href: '#format' },
  // { label: 'Speakers', href: '#speakers' }, // Temporarily disabled
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  // { label: 'Partners', href: '#partners' }, // Temporarily disabled - will be activated later
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          
          // Update active section based on scroll position
          const sections = ['about', 'format', 'gallery', 'faq']; // 'speakers' and 'partners' temporarily disabled
          const scrollPosition = window.scrollY + 100;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                setActiveSection(section);
                break;
              }
            }
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.slice(1);
      scrollToSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const isHomePage = pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-gradient-to-b from-background/90 via-[#03025d]/20 to-background/90 backdrop-blur-lg border-b border-[#03025d]/30 py-1.5'
          : 'bg-transparent py-2'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity z-50"
          >
            <Image
              src="/logos/1337 (6).png"
              alt="TIMESTAMP 1337"
              width={120}
              height={120}
              className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {isHomePage &&
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    activeSection === link.href.slice(1)
                      ? 'text-accent-primary'
                      : 'text-white/80 hover:text-accent-primary'
                  )}
                >
                  {link.label}
                </a>
              ))}
            {/* Speakers link temporarily disabled - will be reactivated later */}
            {/* <Link
              href="/speakers"
              className={cn(
                'text-sm font-medium transition-colors',
                pathname === '/speakers'
                  ? 'text-accent-primary'
                  : 'text-white/80 hover:text-accent-primary'
              )}
            >
              Speakers
            </Link> */}
            {/* Partners link temporarily disabled - will be activated later */}
            <span className="text-sm font-medium text-white/40 cursor-not-allowed">
              Partners
            </span>
            <Link
              href="/#about"
              className="px-6 py-2.5 bg-gradient-to-r from-white via-white/95 to-white text-background font-bold text-sm rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Get Ticket
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {isHomePage &&
            navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-medium text-white hover:text-accent-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          {/* Speakers link temporarily disabled - will be reactivated later */}
          {/* <Link
            href="/speakers"
            className="text-2xl font-medium text-white hover:text-accent-primary transition-colors"
          >
            Speakers
          </Link> */}
          {/* Partners link temporarily disabled - will be activated later */}
          <span className="text-2xl font-medium text-white/40 cursor-not-allowed">
            Partners
          </span>
          <Link
            href="/#about"
            className="px-8 py-3 bg-accent-primary text-background font-bold text-lg rounded-full"
          >
            Get Ticket
          </Link>
        </div>
      </div>
    </nav>
  );
}

