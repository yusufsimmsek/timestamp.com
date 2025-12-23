'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { loadSiteConfig } from '@/lib/contentLoader';
import { Twitter, Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const siteConfig = loadSiteConfig();

  const socialIcons = [
    { icon: Twitter, key: 'twitter', href: siteConfig.socials.twitter },
    { icon: Linkedin, key: 'linkedin', href: siteConfig.socials.linkedin },
    { icon: Instagram, key: 'instagram', href: siteConfig.socials.instagram },
    { icon: Youtube, key: 'youtube', href: siteConfig.socials.youtube },
    { icon: Github, key: 'github', href: siteConfig.socials.github },
  ].filter((item) => item.href);

  const quickLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Format', href: '/#format' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Partners', href: '/partners' },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-alt via-[#03025d]/10 to-background-alt" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `
               linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }}
      />
      
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#03025d]/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 space-y-4 sm:space-y-6"
          >
            <Link href="/" className="block w-fit group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/logos/1337 (3).png"
                  alt="TIMESTAMP 1337"
                  width={128}
                  height={128}
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(3,2,93,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(3,2,93,0.7)] transition-all duration-500"
                  style={{ imageRendering: 'crisp-edges' }}
                  priority
                />
              </motion.div>
            </Link>
            <p className="text-white/70 max-w-md text-xs sm:text-sm leading-relaxed">
              {siteConfig.seo.description}
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialIcons.map(({ icon: Icon, key, href }, index) => (
                <motion.a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#03025d]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#03025d]/50 transition-all duration-500"
                       style={{
                         boxShadow: '0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                       }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#03025d] transition-colors duration-500" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-[#03025d] to-transparent group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {siteConfig.organizer && (
                <li className="text-white font-semibold">{siteConfig.organizer}</li>
              )}
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-[#03025d] group-hover:scale-110 transition-transform duration-300" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 text-[#03025d] group-hover:scale-110 transition-transform duration-300" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                </li>
              )}
              {siteConfig.contact.address && (
                <li className="flex items-start gap-2 text-white/70">
                  <MapPin className="w-4 h-4 text-[#03025d] mt-0.5 flex-shrink-0" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              )}
              {siteConfig.contact.website && (
                <li>
                  <a
                    href={`https://${siteConfig.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-[#03025d] group-hover:scale-110 transition-transform duration-300" />
                    <span>{siteConfig.contact.website}</span>
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
          </p>
          <motion.div
            className="flex items-center gap-2 text-xs text-white/60"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Systems Operational</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

