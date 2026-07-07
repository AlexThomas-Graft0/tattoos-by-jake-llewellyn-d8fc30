'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  healed: string;
  alt: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1590246814883-57f511e76533?auto=format&fit=crop&q=80&w=1000',
    title: 'Botanical Sleeve',
    subtitle: 'Detailed botanical sleeve cascading down a forearm.',
    healed: 'Healed 2 years',
    alt: 'Detailed botanical sleeve cascading down a forearm, showing beautifully settled fine lines.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&q=80&w=1000',
    title: 'Illustrative Heron',
    subtitle: 'Illustrative blackwork heron situated on a ribcage.',
    healed: 'Healed 1 year',
    alt: 'Illustrative blackwork heron on a ribcage, displaying rich gradients and soft stippling.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1000',
    title: 'Woodcut Hourglass',
    subtitle: 'Fine-line woodcut-style hourglass on a calf.',
    healed: 'Healed 3 years',
    alt: 'Fine-line woodcut-style hourglass on a calf, demonstrating long-term ink legibility.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15
    }
  }
};

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20
    }
  }
};

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-play carousel slowly, paused on interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen bg-[#121212] text-[#F5F5F7] flex flex-col justify-between overflow-x-hidden font-sans selection:bg-[#C19A6B] selection:text-[#121212]"
    >
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,154,107,0.06),transparent_45%)] pointer-events-none" />

      {/* Global Navigation Header */}
      <motion.header 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Mark */}
          <a 
            href="#hero-section" 
            className="font-serif text-xl md:text-2xl tracking-[0.2em] hover:text-[#C19A6B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C19A6B] focus:ring-offset-4 focus:ring-offset-[#121212] rounded"
          >
            JAKE LLEWELLYN
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-[#8E8E93]">
            <a href="#portfolio-preview" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Portfolio</a>
            <a href="#flash-catalog" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Available Flash</a>
            <a href="#booking-form" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Book Custom</a>
            <a href="#pricing-and-policies" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Process & FAQ</a>
            <a href="#aftercare-guide" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Aftercare</a>
            <a href="#contact-and-studio" className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus:underline underline-offset-4">Contact</a>
          </nav>

          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-medium">
              Bookings Open
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F5F5F7] hover:text-[#C19A6B] focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-white/5 bg-[#1C1C1E] overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-sm uppercase tracking-[0.2em] text-[#8E8E93]">
                <a 
                  href="#portfolio-preview" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  Portfolio
                </a>
                <a 
                  href="#flash-catalog" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  Available Flash
                </a>
                <a 
                  href="#booking-form" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  Book a Custom Piece
                </a>
                <a 
                  href="#pricing-and-policies" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  The Process & FAQ
                </a>
                <a 
                  href="#aftercare-guide" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  Aftercare
                </a>
                <a 
                  href="#contact-and-studio" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F5F7] transition-colors"
                >
                  Contact
                </a>
                <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C19A6B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C19A6B]"></span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-medium">
                    Bookings Open
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Content Area */}
      <div className="flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Editorial Text & CTAs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Fine Line Accent / Studio Tag */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C19A6B]"></span>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C19A6B] font-medium">
                Private Tattoo Studio
              </p>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-[#F5F5F7] leading-[1.15] tracking-tight"
            >
              Custom illustrative tattoos designed to age gracefully with your body.
            </motion.h1>

            {/* Subcopy */}
            <motion.p 
              variants={itemVariants} 
              className="text-[#8E8E93] text-base md:text-lg leading-relaxed max-w-2xl font-light"
            >
              Welcome to the private studio of Jake Llewellyn. I specialize in custom illustrative and blackwork tattooing, combining classic fine-line craftsmanship with modern precision. Every design is built to respect your body&apos;s natural contours and stand the test of time.
            </motion.p>

            {/* Action Triggers */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a 
                href="#booking-form"
                className="group relative px-8 py-4 bg-[#C19A6B] text-[#121212] font-semibold text-sm uppercase tracking-[0.15em] text-center transition-all duration-300 hover:bg-[#b0895c] hover:shadow-[0_4px_20px_rgba(193,154,107,0.3)] focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:ring-offset-2 focus:ring-offset-[#121212] rounded-none"
              >
                Request a Custom Piece
              </a>
              
              <a 
                href="#flash-catalog"
                className="px-8 py-4 border border-white/20 hover:border-white/60 text-[#F5F5F7] font-semibold text-sm uppercase tracking-[0.15em] text-center transition-all duration-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] rounded-none"
              >
                Browse Available Flash
              </a>
            </motion.div>

            {/* Minimalist Trust Indicator */}
            <motion.div 
              variants={itemVariants} 
              className="pt-8 border-t border-white/5 flex items-center justify-between max-w-md text-xs uppercase tracking-[0.15em] text-[#8E8E93]"
            >
              <div>
                <span className="block text-lg font-serif text-[#F5F5F7] mb-1">8+ Years</span>
                Practice
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="block text-lg font-serif text-[#F5F5F7] mb-1">1,200+</span>
                Tattoos Completed
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="block text-lg font-serif text-[#F5F5F7] mb-1">100%</span>
                Original Art
              </div>
            </motion.div>
          </motion.div>

          {/* Right Block: Signature Healed Works Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex flex-col justify-center"
          >
            {/* Visual Frame */}
            <div className="relative aspect-[3/4] w-full bg-[#1C1C1E] border border-white/5 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={CAROUSEL_ITEMS[currentIndex].image} 
                    alt={CAROUSEL_ITEMS[currentIndex].alt}
                    className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Tag/Badge Overlays */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3 py-1.5 bg-[#121212]/90 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">
                  {CAROUSEL_ITEMS[currentIndex].healed}
                </span>
              </div>

              {/* Captions Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C19A6B] mb-1 font-medium">
                  Signature Artwork
                </p>
                <h3 className="text-2xl font-serif text-[#F5F5F7] mb-2">
                  {CAROUSEL_ITEMS[currentIndex].title}
                </h3>
                <p className="text-xs text-[#8E8E93] leading-relaxed max-w-sm line-clamp-2">
                  {CAROUSEL_ITEMS[currentIndex].subtitle}
                </p>
              </div>

              {/* Navigation Controls Overlay */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                <button 
                  onClick={handlePrev}
                  className="p-3 bg-[#121212]/90 border border-white/10 hover:border-[#C19A6B] text-[#F5F5F7] hover:text-[#C19A6B] transition-colors focus:outline-none rounded-none"
                  aria-label="Previous signature piece"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="p-3 bg-[#121212]/90 border border-white/10 hover:border-[#C19A6B] text-[#F5F5F7] hover:text-[#C19A6B] transition-colors focus:outline-none rounded-none"
                  aria-label="Next signature piece"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress indicators / Pagination dots */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#8E8E93] tracking-widest uppercase">
              <span>0{CAROUSEL_ITEMS[currentIndex].id} / 0{CAROUSEL_ITEMS.length}</span>
              <div className="flex gap-2">
                {CAROUSEL_ITEMS.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#C19A6B]' : 'w-2 bg-white/20'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Anchor Scroll Indicator */}
      <div className="w-full border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs uppercase tracking-[0.2em] text-[#8E8E93]">
          <span>© 2026 Jake Llewellyn</span>
          <a 
            href="#portfolio-preview" 
            className="flex items-center gap-2 hover:text-[#C19A6B] transition-colors focus:outline-none focus:underline"
          >
            <span>Explore Portfolio</span>
            <svg className="w-3.5 h-3.5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}