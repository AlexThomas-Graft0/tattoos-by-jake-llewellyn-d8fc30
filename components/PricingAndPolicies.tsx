'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Eye, 
  ChevronDown, 
  Sparkles, 
  ShieldAlert, 
  HelpCircle, 
  ArrowRight,
  Info
} from 'lucide-react';

interface PricingCard {
  title: string;
  price: string;
  bestFor: string;
  details: string;
  features: string[];
  icon: React.ComponentType<any>;
}

interface PolicyItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  body: string;
  highlight: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function PricingAndPolicies() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pricingCards: PricingCard[] = [
    {
      title: 'Hourly Rate',
      price: '$180 / hour',
      bestFor: 'Small-to-medium custom projects that require open-ended creative adjustments or multi-session progression.',
      details: 'Billed only for actual time spent tattooing. Drawing time and setup are completely free.',
      features: [
        'Pay-as-you-go flexibility',
        'Free design consultations',
        'Perfect for ongoing sleeve work',
        'Zero charges for prep or stencil time'
      ],
      icon: Clock,
    },
    {
      title: 'Half-Day Session',
      price: '$600 flat rate',
      bestFor: 'Medium-sized custom designs or pre-drawn flash pieces that can be completed in a single session.',
      details: 'Covers up to 4 hours of tattooing. Includes a dedicated consultation and stencil fitting.',
      features: [
        'Up to 4 hours of tattoo time',
        'Saves up to $120 vs hourly billing',
        'Ideal for single-session masterpieces',
        'Dedicated custom stencil fitting'
      ],
      icon: Calendar,
    },
    {
      title: 'Full-Day Session',
      price: '$1,100 flat rate',
      bestFor: 'Large-scale work such as full sleeves, backpieces, or extensive torso projects.',
      details: 'Covers up to 7 hours of tattooing. Ideal for maximum progress on highly complex illustrative art.',
      features: [
        'Up to 7 hours of tattoo time',
        'Maximum value for large-scale art',
        'Uninterrupted private studio session',
        'Complimentary aftercare kit included'
      ],
      icon: Eye,
    },
  ];

  const policies: PolicyItem[] = [
    {
      id: 'policy-1',
      title: 'Non-Refundable Booking Deposits',
      icon: Sparkles,
      body: 'To lock in your appointment date, a deposit is required. This deposit is not an extra fee—it goes directly toward the final price of your tattoo on the day of your session.',
      highlight: '$100 non-refundable deposit required to secure any date.',
    },
    {
      id: 'policy-2',
      title: '72-Hour Rescheduling Window',
      icon: Calendar,
      body: 'I understand that life happens. You may reschedule your appointment up to 72 hours before your session without losing your deposit. Cancellations or rescheduling requests made within 72 hours of your slot will forfeit the deposit, and a new deposit will be required to book again.',
      highlight: 'Forfeits deposit if rescheduled with less than 72 hours notice.',
    },
    {
      id: 'policy-3',
      title: 'Day-Of Design Reviews',
      icon: Eye,
      body: 'To protect artistic integrity and prevent design theft, custom drawings are shown in person on the day of your appointment. We set aside plenty of time at the beginning of the session to make minor adjustments to the layout, sizing, and details together.',
      highlight: 'Designs are revealed and polished in-person on session day.',
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: 'Do you tattoo over scars, stretch marks, or existing tattoos?',
      answer: 'Yes. I am happy to tattoo over fully healed scars and stretch marks (they must be at least 1 to 2 years old and completely settled). I also perform select cover-ups if the existing tattoo is light enough to integrate with illustrative blackwork. Please note this in your booking form and upload clear, well-lit photos of the area.',
    },
    {
      question: 'Can I bring a friend to watch my session?',
      answer: 'Because I work out of a quiet, focused private studio space, I ask that you limit your guests to one person. Having a supportive friend is absolutely fine, but a crowded room can distract from the precision required for fine-line illustrative work.',
    },
    {
      question: 'What payment methods do you accept on the day?',
      answer: 'Deposits are paid securely online via credit/debit card. For the remaining balance on the day of your session, cash is highly preferred. I can accept major credit cards at the studio, but please note that card payments are subject to a 3% processing fee.',
    },
    {
      question: 'What should I do if I need a touch-up?',
      answer: 'I offer one free touch-up session within the first year of your tattoo to ensure it looks perfect. Touch-ups are only free if you have followed the recommended aftercare instructions. Contact me directly with a photo of the healed tattoo to arrange a quick session.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70, damping: 15 }
    }
  };

  const faqVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  };

  return (
    <section 
      id="pricing-and-policies" 
      className="relative bg-[#121212] text-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans select-none selection:bg-[#C19A6B] selection:text-[#121212]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,154,107,0.05),transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(28,28,30,0.4),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section 5.1: Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C19A6B]/30 bg-[#C19A6B]/5 text-[#C19A6B] text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] animate-pulse" />
            Pricing & Rules
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F5F5F7] tracking-tight leading-none mb-6">
            Transparent pricing and <br />
            <span className="italic text-[#C19A6B]">studio policies.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8E8E93] leading-relaxed max-w-2xl font-light">
            I believe that getting a tattoo should be an empowering, stress-free experience. 
            That starts with complete clarity on how I work, how much it costs, and what we 
            expect from each other. No hidden fees, no gatekeeping—just clear communication.
          </p>
        </div>

        {/* Section 5.2: Pricing Framework */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        >
          {pricingCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group relative bg-[#1C1C1E] border border-white/5 hover:border-[#C19A6B]/40 transition-all duration-500 rounded-lg p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C19A6B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-lg bg-[#121212] border border-white/5 text-[#C19A6B] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#8E8E93] tracking-widest uppercase">
                      Tier 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif tracking-wide text-[#F5F5F7] mb-2 group-hover:text-[#C19A6B] transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl sm:text-4xl font-serif font-semibold text-[#F5F5F7]">
                      {card.price.split(' ')[0]}
                    </span>
                    <span className="text-sm font-mono text-[#8E8E93]">
                      {card.price.substring(card.price.indexOf(' '))}
                    </span>
                  </div>

                  <p className="text-sm text-[#8E8E93] leading-relaxed mb-6 font-light">
                    {card.bestFor}
                  </p>

                  <div className="h-[1px] bg-white/5 my-6" />

                  <p className="text-xs text-[#8E8E93] italic leading-relaxed mb-6">
                    {card.details}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#F5F5F7]/80">
                        <span className="text-[#C19A6B] mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#booking-form"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-[#121212] hover:bg-[#C19A6B] text-[#F5F5F7] hover:text-[#121212] border border-white/5 hover:border-transparent transition-all duration-300 text-xs font-medium uppercase tracking-wider"
                >
                  Request This Option
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section 5.3: Core Studio Policies */}
        <div className="mb-24">
          <div className="border-t border-white/5 pt-16 mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F7] tracking-tight">
              Core Studio <span className="italic text-[#C19A6B]">Policies</span>
            </h3>
            <p className="text-sm text-[#8E8E93] mt-2 font-light max-w-xl">
              These rules are designed to protect both the integrity of the artwork and your comfort. 
              Please read them carefully before submitting an inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <div 
                  key={policy.id}
                  className="bg-[#1C1C1E] border border-white/5 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded bg-[#C19A6B]/10 text-[#C19A6B]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-serif text-[#F5F5F7] tracking-wide">
                        {policy.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed font-light">
                      {policy.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#C19A6B] shrink-0 mt-0.5" />
                    <span className="text-xs font-mono text-[#C19A6B] leading-normal">
                      {policy.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5.4: Frequently Asked Questions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-16">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C19A6B]/30 bg-[#C19A6B]/5 text-[#C19A6B] text-xs uppercase tracking-widest mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                FAQ
              </div>
              <h3 className="text-3xl font-serif font-light text-[#F5F5F7] tracking-tight leading-tight">
                Got questions? <br />
                <span className="italic text-[#C19A6B]">I have answers.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed mt-4 font-light max-w-sm">
                If you have a query that isn’t covered here, feel free to reach out via the general inquiry form in the contact section below.
              </p>
              <div className="mt-8">
                <a 
                  href="#contact-and-studio"
                  className="inline-flex items-center gap-2 text-xs text-[#C19A6B] hover:text-[#F5F5F7] transition-colors duration-200 uppercase tracking-widest font-mono"
                >
                  Go to general contact
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#1C1C1E] border border-white/5 hover:border-white/10 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none focus:ring-1 focus:ring-[#C19A6B]/50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-serif text-[#F5F5F7] hover:text-[#C19A6B] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#8E8E93] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#C19A6B]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        variants={faqVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#8E8E93] leading-relaxed font-light border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-24 relative rounded-xl overflow-hidden bg-gradient-to-r from-[#1C1C1E] to-[#121212] border border-white/5 p-8 sm:p-12 lg:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(193,154,107,0.08),transparent_60%)] pointer-events-none" />
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-[#F5F5F7] tracking-tight mb-4">
            Ready to secure your session?
          </h4>
          <p className="text-xs sm:text-sm text-[#8E8E93] max-w-xl mx-auto leading-relaxed mb-8 font-light">
            Whether you want a custom illustrative design mapped perfectly to your skin, 
            or wish to claim a retired design from the pre-drawn catalog, we start with the booking form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#booking-form"
              className="w-full sm:w-auto px-8 py-4 bg-[#C19A6B] hover:bg-[#b08b5e] text-[#121212] font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded shadow-lg shadow-[#C19A6B]/10 hover:shadow-none"
            >
              Request a Custom Piece
            </a>
            <a 
              href="#flash-catalog"
              className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/30 text-[#F5F5F7] hover:bg-white/5 font-semibold text-xs uppercase tracking-widest transition-all duration-300 rounded"
            >
              Browse Available Flash
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}