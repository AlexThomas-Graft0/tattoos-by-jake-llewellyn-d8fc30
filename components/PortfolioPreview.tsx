'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface PortfolioItem {
  id: string;
  title: string;
  style: 'Illustrative' | 'Blackwork';
  state: 'Healed Work' | 'Fresh Ink';
  stateLabel: string;
  image: string;
  alt: string;
  description: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'The Herons of the Delta',
    style: 'Illustrative',
    state: 'Healed Work',
    stateLabel: 'Healed (3 Years)',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    alt: 'Detailed illustrative blackwork thigh tattoo of a heron standing among tall water reeds, showing clean, healed grey shading.',
    description: 'A custom thigh piece exploring classical woodcut shading and organic form flow. Specifically designed to adapt to the movement of the leg muscle while maintaining visual clarity from a distance.',
  },
  {
    id: '2',
    title: 'Botanical Spine',
    style: 'Illustrative',
    state: 'Healed Work',
    stateLabel: 'Healed (18 Months)',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80&w=800',
    alt: 'Fine-line botanical spine tattoo featuring detailed eucalyptus leaves and fern fronds, perfectly healed and settled into the skin.',
    description: 'Delicate eucalyptus and fern fronds climbing the spine. Soft tones and fine-line detailing settle beautifully, mirroring the spine\'s natural curvature.',
  },
  {
    id: '3',
    title: 'Ouroboros & Hourglass',
    style: 'Blackwork',
    state: 'Fresh Ink',
    stateLabel: 'Fresh Ink',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=800',
    alt: 'High-contrast blackwork forearm tattoo of a snake eating its tail around a classic woodcut hourglass with deep black fills and stippled shading.',
    description: 'A heavy-contrast, graphic forearm piece emphasizing deep solid blacks and dynamic stippling texture. Built for maximum longevity and high-impact readability.',
  },
  {
    id: '4',
    title: 'Nocturnal Moth',
    style: 'Blackwork',
    state: 'Healed Work',
    stateLabel: 'Healed (2 Years)',
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=800',
    alt: 'Symmetrical stipple-shaded moth chest tattoo with delicate moon phases above it, showing soft, healed gradients.',
    description: 'Symmetrical chest placement utilizing dot-work gradients and dark solid wings. A study in sacred geometry and organic symmetry.',
  },
  {
    id: '5',
    title: 'Shattered Relic',
    style: 'Illustrative',
    state: 'Fresh Ink',
    stateLabel: 'Fresh Ink',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
    alt: 'Fresh illustrative thigh tattoo depicting a cracked, classical marble statue face entwined with detailed ivy leaves.',
    description: 'A cracked classical sculpture face intertwined with detailed ivy leaves. Merges heavy illustrative cross-hatching with delicate botanical elements.',
  },
  {
    id: '6',
    title: 'The Alchemist\'s Study',
    style: 'Illustrative',
    state: 'Healed Work',
    stateLabel: 'Healed (4 Years)',
    image: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&q=80&w=800',
    alt: 'Healed fine-line celestial map tattoo on an outer shoulder, displaying legible constellations and crisp astrological symbols after four years.',
    description: 'A detailed celestial map featuring astrological alignments and ultra-fine coordinate lines. Proves that fine-line details can stay crisp for years with proper depth control.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

export function PortfolioPreview() {
  const [selectedStyle, setSelectedStyle] = useState<'All Styles' | 'Illustrative' | 'Blackwork'>('All Styles');
  const [selectedState, setSelectedState] = useState<'All States' | 'Healed Work' | 'Fresh Ink'>('All States');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem]);

  const filteredItems = portfolioData.filter((item) => {
    const matchesStyle = selectedStyle === 'All Styles' || item.style === selectedStyle;
    const matchesState = selectedState === 'All States' || item.state === selectedState;
    return matchesStyle && matchesState;
  });

  return (
    <section
      id="portfolio-preview"
      className="relative bg-[#121212] text-[#F5F5F7] py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Structural Accent Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-[#C19A6B] text-sm font-mono tracking-widest uppercase block mb-4">
            Curated Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#F5F5F7] mb-6 leading-[1.1]">
            A record of craft on skin.
          </h2>
          <p className="text-[#8E8E93] text-lg sm:text-xl leading-relaxed font-sans">
            True quality in tattooing is measured by how a piece heals. Browse a curated archive of my custom illustrative and blackwork projects. Use the filters below to view fresh sessions or see how these designs settle beautifully into the skin years down the road.
          </p>
        </div>

        {/* Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 mb-12 border-b border-zinc-800">
          {/* Style Filter */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-mono text-[#8E8E93]">Filter by Style</span>
            <div className="flex flex-wrap gap-2">
              {(['All Styles', 'Illustrative', 'Blackwork'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
                >
                  <span className={selectedStyle === style ? 'text-[#C19A6B]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'}>
                    {style}
                  </span>
                  {selectedStyle === style && (
                    <motion.div
                      layoutId="activeStyleUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C19A6B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Healing State Filter */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-mono text-[#8E8E93]">Healing State</span>
            <div className="flex flex-wrap gap-2">
              {(['All States', 'Healed Work', 'Fresh Ink'] as const).map((state) => (
                <button
                  key={state}
                  onClick={() => setSelectedState(state)}
                  className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
                >
                  <span className={selectedState === state ? 'text-[#C19A6B]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'}>
                    {state === 'All States' ? 'All Healing States' : state}
                  </span>
                  {selectedState === state && (
                    <motion.div
                      layoutId="activeStateUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C19A6B]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#1C1C1E] border border-zinc-800 hover:border-[#C19A6B]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent opacity-60" />
                  
                  {/* Absolute Badge */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#121212]/90 border border-zinc-800 text-xs font-mono text-[#C19A6B]">
                    {item.stateLabel}
                  </span>
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex gap-2 mb-3">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#8E8E93] border border-zinc-800 px-2.5 py-0.5 rounded-full">
                        {item.style}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#F5F5F7] group-hover:text-[#C19A6B] transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8E8E93] line-clamp-2 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveItem(item)}
                    className="w-full py-3 border border-zinc-800 hover:border-[#C19A6B] text-center text-sm tracking-wide font-mono transition-all duration-300 hover:bg-[#C19A6B]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B]"
                    aria-label={`View details of ${item.title}`}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-zinc-800 bg-[#1C1C1E]/50">
            <p className="text-[#8E8E93] font-serif text-xl">No works match your selected filter criteria.</p>
            <button
              onClick={() => {
                setSelectedStyle('All Styles');
                setSelectedState('All States');
              }}
              className="mt-4 px-6 py-2 bg-[#C19A6B] text-[#F5F5F7] text-sm font-mono hover:bg-[#b08b5e] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Portfolio Footer CTA */}
        <div className="mt-24 md:mt-32 border-t border-zinc-800 pt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-serif text-[#F5F5F7] mb-4">
            Ready to start your own project?
          </h3>
          <p className="text-[#8E8E93] leading-relaxed mb-8">
            Let’s collaborate on an original design tailored to your body’s unique canvas.
          </p>
          <a
            href="#booking-form"
            className="inline-block bg-[#C19A6B] hover:bg-[#b08b5e] text-[#F5F5F7] font-mono tracking-wider uppercase text-sm px-8 py-4 transition-all duration-300 hover:tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212]"
          >
            Request a Custom Piece
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              className="relative bg-[#1C1C1E] border border-zinc-800 max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row text-[#F5F5F7] shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto md:min-h-[500px] bg-zinc-950 relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#C19A6B]">
                      {activeItem.style}
                    </span>
                    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-[#8E8E93]">
                      {activeItem.stateLabel}
                    </span>
                  </div>

                  <h3 id="modal-title" className="text-3xl sm:text-4xl font-serif text-[#F5F5F7] mb-4">
                    {activeItem.title}
                  </h3>

                  <p className="text-[#8E8E93] text-base leading-relaxed mb-8">
                    {activeItem.description}
                  </p>

                  <div className="border-t border-zinc-800 pt-6 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E8E93] font-mono">Healing State</span>
                      <span className="text-[#F5F5F7] font-semibold">{activeItem.state}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E8E93] font-mono">Artist</span>
                      <span className="text-[#F5F5F7] font-semibold">Jake Llewellyn</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#8E8E93] font-mono">Style Focus</span>
                      <span className="text-[#F5F5F7] font-semibold">{activeItem.style} Tattooing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
                  <a
                    href="#booking-form"
                    onClick={() => setActiveItem(null)}
                    className="flex-grow text-center bg-[#C19A6B] hover:bg-[#b08b5e] text-[#F5F5F7] font-mono uppercase tracking-wider text-xs py-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B]"
                  >
                    Inquire About Similar Piece
                  </a>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="px-6 py-4 border border-zinc-800 hover:border-zinc-600 text-center text-xs font-mono tracking-wider uppercase transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Top-Right Absolute Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-[#121212]/80 border border-zinc-800 text-[#8E8E93] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C19A6B]"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}