'use client'

import React from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

export function Footer() {
  const quickLinks = [
    { label: 'Portfolio', href: '#portfolio-preview' },
    { label: 'Available Flash', href: '#flash-catalog' },
    { label: 'Book Custom', href: '#booking-form' },
    { label: 'Policies & FAQ', href: '#pricing-and-policies' },
    { label: 'Aftercare Guide', href: '#aftercare-guide' },
    { label: 'Contact & Studio', href: '#contact-and-studio' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#121212] text-[#F5F5F7] border-t border-[#1C1C1E] overflow-hidden">
      {/* Decorative Top Accent Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
        
        {/* Aesthetic Diamond Separator Icon */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-[1px] w-12 bg-[#1C1C1E]"></div>
          <svg className="w-3 h-3 mx-4 text-[#C19A6B]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
          <div className="h-[1px] w-12 bg-[#1C1C1E]"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Column 1: Brand & Philosophy */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-3">
              <a 
                href="#hero-section" 
                onClick={(e) => handleScroll(e, '#hero-section')}
                className="inline-block text-2xl font-serif tracking-widest text-[#F5F5F7] hover:text-[#C19A6B] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B] rounded"
              >
                JAKE LLEWELLYN
              </a>
              <p className="text-xs tracking-[0.2em] text-[#C19A6B] uppercase font-mono flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
                </span>
                Bookings Open
              </p>
            </div>
            <p className="text-sm text-[#8E8E93] leading-relaxed max-w-xs">
              Custom illustrative tattooing designed to age gracefully. Combining classic fine-line craftsmanship with modern precision to respect your body&apos;s natural contours.
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold tracking-wider text-[#F5F5F7] uppercase font-mono">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-sm text-[#8E8E93] hover:text-[#C19A6B] transition-colors duration-200 block py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Socials */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold tracking-wider text-[#F5F5F7] uppercase font-mono">
              Direct Contact
            </h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs text-[#8E8E93] uppercase font-mono">Inquiries & Custom Requests</p>
                <a 
                  href="mailto:jake@jakelewellyntattoo.com"
                  className="text-sm text-[#F5F5F7] hover:text-[#C19A6B] transition-colors duration-200 block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] rounded"
                >
                  jake@jakelewellyntattoo.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#8E8E93] uppercase font-mono">Instagram Showcase</p>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#F5F5F7] hover:text-[#C19A6B] transition-colors duration-200 block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] rounded"
                >
                  @jake_llewellyn_tattoo
                </a>
                <p className="text-xs text-[#8E8E93] italic mt-1">
                  Note: DMs are unmonitored; please use site forms for inquiries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Studio Operations */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-sm font-semibold tracking-wider text-[#F5F5F7] uppercase font-mono">
              Studio Access
            </h3>
            <div className="space-y-3 text-sm text-[#8E8E93]">
              <p className="leading-relaxed">
                Located in the heart of the <strong className="text-[#F5F5F7]">Arts District</strong>. Exact address shared upon confirmed booking.
              </p>
              <div className="pt-2 border-t border-[#1C1C1E] space-y-1">
                <p className="text-xs uppercase font-mono">Studio Hours</p>
                <p className="text-[#F5F5F7]">Tuesday — Saturday</p>
                <p className="text-[#F5F5F7]">11:00 AM — 7:00 PM</p>
                <p className="text-xs text-[#C19A6B] italic mt-1">Strictly by appointment only.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider and Bottom Meta Bar */}
        <div className="mt-16 pt-8 border-t border-[#1C1C1E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs text-[#8E8E93]">
              © 2026 Jake Llewellyn. All rights reserved.
            </p>
            <p className="text-[10px] text-[#8E8E93]/60 tracking-wider uppercase font-mono">
              Medical-grade sterilization standard • Body-positive space
            </p>
          </div>

          {/* Elegant Back to Top Button */}
          <a
            href="#hero-section"
            onClick={(e) => handleScroll(e, '#hero-section')}
            className="group flex items-center gap-3 px-4 py-2 border border-[#1C1C1E] rounded-full text-xs tracking-wider uppercase font-mono text-[#8E8E93] hover:text-[#C19A6B] hover:border-[#C19A6B] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B]"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <svg 
              className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}