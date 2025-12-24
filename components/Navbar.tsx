'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Format', href: '#format' },
  // { label: 'Speakers', href: '#speakers' }, // Temporarily disabled
  { label: 'Gallery', href: '#gallery' },
  { label: 'Agenda', href: '#schedule' },
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
          const sections = ['about', 'format', 'gallery', 'schedule', 'faq']; // 'speakers' and 'partners' temporarily disabled
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-gradient-to-b from-background/90 via-[#03025d]/20 to-background/90 backdrop-blur-lg border-b border-[#03025d]/30'
            : 'bg-transparent',
          // Mobilde padding sabit tut
          'py-2 sm:py-2 lg:py-1.5'
        )}
      >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[64px] lg:min-h-0">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity z-50"
          >
            <Image
              src="/logos/1337 (6).png"
              alt="TIMESTAMP 1337"
              width={120}
              height={120}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                // Mobilde logo boyutu sabit
                "h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24",
                // Scroll sonrası mobilde de aynı boyutta kal
                isScrolled ? "lg:h-20 xl:h-24" : ""
              )}
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
            className={cn(
              "lg:hidden p-2.5 sm:p-3 text-white hover:text-accent-primary transition-colors z-[100] relative",
              "flex items-center justify-center"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
            ) : (
              <Menu size={28} className="sm:w-8 sm:h-8 flex-shrink-0" />
            )}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu - Outside navbar for proper z-index */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Backdrop - Full screen overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black z-[95]"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-accent-primary transition-colors z-10"
              aria-label="Close menu"
            >
              <X size={28} className="sm:w-8 sm:h-8" />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-sm">
              {isHomePage &&
                navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "text-xl sm:text-2xl font-medium text-white hover:text-accent-primary transition-colors py-2 px-4 rounded-lg w-full text-center",
                      activeSection === link.href.slice(1) && "text-accent-primary bg-accent-primary/10"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              
              {/* Partners - Disabled */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="text-xl sm:text-2xl font-medium text-white/40 cursor-not-allowed py-2 px-4"
              >
                Partners
              </motion.span>
              
              {/* Get Ticket Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="w-full max-w-xs mt-2"
              >
                <Link
                  href="/#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full px-8 py-3.5 sm:py-4 bg-gradient-to-r from-white via-white/95 to-white text-background font-bold text-base sm:text-lg rounded-full text-center hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Get Ticket
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}

