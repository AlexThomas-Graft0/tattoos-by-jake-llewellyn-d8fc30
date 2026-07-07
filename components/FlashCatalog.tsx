'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

interface FlashItem {
  id: string;
  title: string;
  image: string;
  size: string;
  priceTier: string;
  status: 'available' | 'pending' | 'claimed';
  idealPlacement: string;
  description: string;
}

const flashCatalogData: FlashItem[] = [
  {
    id: 'wandering-crane',
    title: 'The Wandering Crane',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    size: 'Approx. 6" x 4"',
    priceTier: '$350 - $450',
    status: 'available',
    idealPlacement: 'Forearm, calf, or shoulder',
    description: 'High-contrast line art of a nesting crane surrounded by water ripples. Drawn with delicate stippling and clean organic curves.'
  },
  {
    id: 'dagger-bramble',
    title: 'Dagger & Bramble',
    image: 'https://images.unsplash.com/photo-1515462277126-270d878326e5?auto=format&fit=crop&q=80&w=800',
    size: 'Approx. 7" x 3"',
    priceTier: '$400 - $500',
    status: 'pending',
    idealPlacement: 'Outer arm, shin, or thigh',
    description: 'Ornate medieval dagger wrapped in thick blackberry brambles. Features bold black fills contrasted against fine-line leaf structures.'
  },
  {
    id: 'solitary-wolf',
    title: 'Solitary Wolf',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=800',
    size: 'Approx. 5" x 5"',
    priceTier: '$300 - $400',
    status: 'claimed',
    idealPlacement: 'Upper arm or thigh',
    description: 'Geometric frame surrounding a hand-stippled profile of a howling wolf. A retired piece demonstrating classic woodcut textures.'
  },
  {
    id: 'astrologers-hourglass',
    title: 'The Astrologer’s Hourglass',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=800',
    size: 'Approx. 8" x 4.5"',
    priceTier: '$500 - $600',
    status: 'available',
    idealPlacement: 'Forearm, calf, or back of arm',
    description: 'Classic woodcut style hourglass with stars spilling from the glass. Features heavy black outline work and detailed cosmic stippling.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};

export function FlashCatalog() {
  const [filter, setFilter] = useState<'all' | 'available' | 'pending' | 'claimed'>('all');
  const [selectedDesign, setSelectedDesign] = useState<FlashItem | null>(null);

  const filteredItems = flashCatalogData.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  const handleClaimClick = (item: FlashItem) => {
    // Store selected design in sessionStorage so the booking form can pre-fill it if needed
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('selectedFlashDesign', item.title);
    }
  };

  return (
    <section
      id="flash-catalog"
      className="relative bg-[#121212] text-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center border-t border-neutral-900"
    >
      {/* Subtle Background Artistry */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C19A6B] mb-3 block">
            Original Art Catalog
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#F5F5F7] tracking-tight leading-none mb-6">
            Pre-drawn flash designs.
          </h2>
          <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed font-sans max-w-2xl">
            These are original, one-of-a-kind illustrative designs ready to be tattooed. Once a design is claimed, it is retired and will never be tattooed again. Browse the current sheets below, select a piece that speaks to you, and reserve it instantly.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 mb-12 border-b border-neutral-800">
          <div className="flex flex-wrap gap-2 p-1 bg-[#1C1C1E] rounded-md border border-neutral-800/60">
            {(['all', 'available', 'pending', 'claimed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-300 ${
                  filter === status
                    ? 'bg-[#C19A6B] text-[#121212] font-semibold'
                    : 'text-[#8E8E93] hover:text-[#F5F5F7]'
                }`}
              >
                {status === 'all' ? 'All Sheets' : status}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-[#8E8E93] flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C19A6B] animate-pulse" />
            Showing {filteredItems.length} Unique Designs
          </div>
        </div>

        {/* Catalog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {filteredItems.map((item) => {
            const isAvailable = item.status === 'available';
            const isPending = item.status === 'pending';
            const isClaimed = item.status === 'claimed';

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`group relative flex flex-col bg-[#1C1C1E] rounded-lg border overflow-hidden transition-all duration-500 ${
                  isClaimed
                    ? 'border-neutral-900 opacity-60 filter grayscale'
                    : 'border-neutral-800 hover:border-[#C19A6B]/40'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    {isAvailable && (
                      <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#121212]/90 border border-[#C19A6B] text-[#C19A6B] rounded-full backdrop-blur-sm">
                        Available
                      </span>
                    )}
                    {isPending && (
                      <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#121212]/90 border border-[#8E8E93] text-[#8E8E93] rounded-full backdrop-blur-sm">
                        Pending
                      </span>
                    )}
                    {isClaimed && (
                      <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#1C1C1E] text-[#8E8E93] rounded-full">
                        Claimed
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-[#F5F5F7] mb-2 group-hover:text-[#C19A6B] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8E93] font-sans line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specifications */}
                    <div className="space-y-2 border-t border-neutral-800/80 pt-4 mb-6">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#8E8E93] font-sans">Ideal For:</span>
                        <span className="text-[#F5F5F7] font-mono text-right max-w-[180px] truncate">
                          {item.idealPlacement}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#8E8E93] font-sans">Size:</span>
                        <span className="text-[#F5F5F7] font-mono">{item.size}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#8E8E93] font-sans">Price Tier:</span>
                        <span className="text-[#C19A6B] font-mono font-medium">{item.priceTier}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div>
                    {isAvailable && (
                      <a
                        href="#booking-form"
                        onClick={() => handleClaimClick(item)}
                        className="block w-full text-center py-3 px-4 bg-[#C19A6B] hover:bg-[#b0895a] text-[#121212] text-xs font-mono uppercase tracking-wider font-semibold rounded transition-all duration-300 focus-visible:ring-1 focus-visible:ring-[#C19A6B] outline-none"
                      >
                        Claim This Flash Design
                      </a>
                    )}

                    {isPending && (
                      <button
                        disabled
                        className="w-full py-3 px-4 bg-transparent border border-neutral-800 text-[#8E8E93] text-xs font-mono uppercase tracking-wider rounded cursor-not-allowed text-center"
                      >
                        Inquire (Pending)
                      </button>
                    )}

                    {isClaimed && (
                      <div className="w-full py-3 px-4 bg-[#121212] text-neutral-600 text-xs font-mono uppercase tracking-wider rounded text-center border border-neutral-900">
                        Retired Artwork
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Educational Info Footer */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-lg bg-[#1C1C1E] border border-neutral-800/80">
          <div className="lg:col-span-8">
            <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">
              How Flash Booking Works
            </h4>
            <p className="text-xs text-[#8E8E93] leading-relaxed max-w-3xl">
              Unlike custom designs, pre-drawn flash pieces require no initial design consultation. They are already complete works of art, waiting for the perfect canvas. Booking a flash piece secures the design for you exclusively. A $100 non-refundable deposit is required at booking, which goes directly toward the flat rate pricing listed above.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="#pricing-and-policies"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C19A6B] hover:text-[#F5F5F7] transition-colors duration-300 group"
            >
              Read Pricing & Policies
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}