'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio-preview' },
  { label: 'Available Flash', href: '#flash-catalog' },
  { label: 'Process & FAQ', href: '#pricing-and-policies' },
  { label: 'Aftercare', href: '#aftercare-guide' },
  { label: 'Contact', href: '#contact-and-studio' },
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 35,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 30,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    transition: { type: 'spring', stiffness: 380, damping: 35 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 30 },
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('#hero-section');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection based on section visibility
      const scrollPosition = window.scrollY + 120;
      const anchors = [
        '#hero-section',
        '#values-and-metrics',
        '#portfolio-preview',
        '#flash-catalog',
        '#booking-form',
        '#pricing-and-policies',
        '#aftercare-guide',
        '#contact-and-studio',
      ];

      for (const anchor of anchors) {
        const el = document.querySelector(anchor);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveAnchor(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#121212]/95 backdrop-blur-md border-[#1C1C1E]/80 py-3 shadow-lg'
          : 'bg-[#121212]/0 border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#hero-section"
          onClick={(e) => handleNavClick(e, '#hero-section')}
          className="group flex flex-col items-start gap-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B]"
        >
          <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-[#F5F5F7] transition-colors duration-300 group-hover:text-[#C19A6B]">
            JAKE LLEWELLYN
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-[#8E8E93]">
            Custom Illustrative Tattooing
          </span>
        </a>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeAnchor === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-2 text-sm tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] ${
                  isActive ? 'text-[#C19A6B]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C19A6B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Status Badge & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Status Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C1C1E] border border-[#1C1C1E]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#C19A6B] font-semibold">
              Bookings Open
            </span>
          </div>

          {/* CTA Link */}
          <a
            href="#booking-form"
            onClick={(e) => handleNavClick(e, '#booking-form')}
            className="px-5 py-2 text-xs uppercase tracking-widest font-mono bg-[#C19A6B] text-[#F5F5F7] border border-[#C19A6B] hover:bg-transparent hover:text-[#C19A6B] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B]"
          >
            Book Custom
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Small Pulsing Dot for Mobile */}
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#1C1C1E] border border-[#1C1C1E]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C19A6B]"></span>
            </span>
            <span className="text-[8px] uppercase tracking-widest font-mono text-[#C19A6B]">
              Open
            </span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#F5F5F7] hover:text-[#C19A6B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[9px]' : ''
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current transition-opacity duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-[#121212] border-b border-[#1C1C1E] shadow-2xl overflow-hidden md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-1 text-base tracking-wide transition-colors ${
                        activeAnchor === item.href ? 'text-[#C19A6B]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="h-[1px] bg-[#1C1C1E] my-2" />

              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#C19A6B] font-semibold">
                    Bookings Open for Custom & Flash
                  </span>
                </div>

                <a
                  href="#booking-form"
                  onClick={(e) => handleNavClick(e, '#booking-form')}
                  className="w-full py-3 text-center text-xs uppercase tracking-widest font-mono bg-[#C19A6B] text-[#F5F5F7] border border-[#C19A6B] hover:bg-transparent hover:text-[#C19A6B] transition-all duration-300"
                >
                  Book a Custom Piece
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}