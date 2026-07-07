'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

type TabType = 'prep' | 'healing';

interface PrepStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface HealingPhase {
  id: string;
  phase: string;
  title: string;
  duration: string;
  guidelines: {
    subtitle?: string;
    text: string;
  }[];
}

const PREP_STEPS: PrepStep[] = [
  {
    id: 'prep-1',
    number: '01',
    title: 'Hydrate & Nourish',
    description: 'Drink plenty of water the day before your appointment. Eat a hearty, protein-rich meal 2 hours before you arrive. Low blood sugar significantly lowers your pain tolerance.',
  },
  {
    id: 'prep-2',
    number: '02',
    title: 'Rest Your Body',
    description: 'Get a full 8 hours of sleep the night before. Being tired makes long sessions much harder to manage.',
  },
  {
    id: 'prep-3',
    number: '03',
    title: 'Avoid Alcohol & Thinners',
    description: 'Do not consume alcohol, aspirin, or ibuprofen for 24 hours before your session. These thin your blood, which causes excess bleeding and pushes ink out of the skin during application.',
  },
  {
    id: 'prep-4',
    number: '04',
    title: 'Wear the Right Clothes',
    description: 'Wear loose, comfortable, dark clothing that easily exposes the area being tattooed. Expect that ink may get on your clothes, so choose items you do not mind staining.',
  },
];

const HEALING_PHASES: HealingPhase[] = [
  {
    id: 'phase-1',
    phase: 'Phase 1',
    title: 'The Protective Bandage',
    duration: 'Days 1 to 3',
    guidelines: [
      {
        subtitle: 'If we used Medical Adhesive Film (Saniderm/Dermalize):',
        text: 'Leave the film on for 3 to 5 days. It is completely normal for bodily fluid and ink to pool beneath the film—it may look messy, but this is a natural healing environment. If the seal breaks, leaks, or water gets inside, remove the film immediately under warm running water.',
      },
      {
        subtitle: 'If we used Traditional Cling Wrap:',
        text: 'Leave the plastic wrap on for 2 to 4 hours. Do not re-wrap the tattoo after removing it.',
      },
    ],
  },
  {
    id: 'phase-2',
    phase: 'Phase 2',
    title: 'Gentle Washing',
    duration: 'Days 1 to 14',
    guidelines: [
      {
        text: 'Wash the tattoo twice a day (morning and night) using lukewarm water and a mild, fragrance-free liquid soap (such as Dr. Bronner\'s Baby Mild or Dial Gold).',
      },
      {
        text: 'Use your clean hands only. Never use a washcloth, sponge, or loofah, as they harbor bacteria and are too abrasive.',
      },
      {
        text: 'Pat dry gently with a clean, single-use paper towel. Let it air dry for 10 minutes before applying lotion.',
      },
    ],
  },
  {
    id: 'phase-3',
    phase: 'Phase 3',
    title: 'Moisturizing',
    duration: 'Days 3 to 21',
    guidelines: [
      {
        text: 'Apply a very thin layer of fragrance-free, white lotion (such as Lubriderm or Cetaphil) or a dedicated tattoo salve 2 to 3 times a day.',
      },
      {
        subtitle: 'Crucial Rule:',
        text: 'Do not over-moisturize. The tattoo should never look shiny, wet, or greasy. If you apply too much, gently blot away the excess with a clean paper towel. Over-saturation can trap bacteria and cause scabbing.',
      },
    ],
  },
  {
    id: 'phase-4',
    phase: 'Phase 4',
    title: 'Crucial Things to Avoid',
    duration: 'First 3 Weeks',
    guidelines: [
      {
        subtitle: 'No Submerging in Water:',
        text: 'Avoid baths, swimming pools, hot tubs, lakes, and oceans. Short showers are perfectly fine.',
      },
      {
        subtitle: 'No Sun Exposure:',
        text: 'Keep the healing tattoo completely out of direct sunlight. Once it is fully healed, always apply SPF 30+ sunscreen to prevent the lines from fading.',
      },
      {
        subtitle: 'No Scratching or Picking:',
        text: 'Your tattoo will itch and flake like a sunburn as it heals. This is normal. Let the dry skin flake off naturally. Picking off scabs will pull the ink out, leaving blank spots in your tattoo.',
      },
    ],
  },
];

const tabVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeIn' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export function AftercareGuide() {
  const [activeTab, setActiveTab] = useState<TabType>('prep');

  return (
    <section
      id="aftercare-guide"
      className="relative bg-[#121212] text-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
    >
      {/* Decorative Subtle Grid Lines to reinforce editorial structure */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C19A6B] text-xs font-mono tracking-[0.25em] uppercase block mb-3">
            The Longevity Protocol
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[#F5F5F7] mb-6">
            How to prepare and heal your tattoo.
          </h2>
          <div className="w-16 h-px bg-[#C19A6B] mx-auto mb-6" />
          <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed">
            A great tattoo is a collaborative effort. My job is to execute a clean, precise application in a sterile environment. Your job is to prepare your body beforehand and protect the art as it heals. Follow this guide to ensure your illustrative piece heals beautifully.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-[#1C1C1E] p-1.5 rounded-none border border-neutral-800 relative">
            <button
              onClick={() => setActiveTab('prep')}
              className={`relative px-6 py-3 text-sm font-mono uppercase tracking-wider transition-colors duration-300 z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] ${
                activeTab === 'prep' ? 'text-[#121212]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'
              }`}
            >
              Pre-Session Prep
            </button>
            <button
              onClick={() => setActiveTab('healing')}
              className={`relative px-6 py-3 text-sm font-mono uppercase tracking-wider transition-colors duration-300 z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] ${
                activeTab === 'healing' ? 'text-[#121212]' : 'text-[#8E8E93] hover:text-[#F5F5F7]'
              }`}
            >
              Post-Session Healing
            </button>

            {/* Slider background */}
            <motion.div
              layoutId="activeTabBackground"
              className="absolute top-1.5 bottom-1.5 bg-[#C19A6B]"
              initial={false}
              animate={{
                left: activeTab === 'prep' ? '6px' : 'calc(50% + 2px)',
                right: activeTab === 'prep' ? 'calc(50% + 2px)' : '6px',
              }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeTab === 'prep' ? (
              <motion.div
                key="prep-panel"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Left Side: Visual Context */}
                <div className="relative group overflow-hidden border border-neutral-800 bg-[#1C1C1E] min-h-[300px] md:min-h-full flex flex-col justify-end p-8">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=1200"
                    alt="Tattoo studio preparation"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="relative z-20">
                    <span className="text-[#C19A6B] text-xs font-mono uppercase tracking-wider mb-2 block">
                      Before Your Appointment
                    </span>
                    <h3 className="text-2xl font-serif text-[#F5F5F7] mb-3">
                      Arrive Ready
                    </h3>
                    <p className="text-[#8E8E93] text-sm leading-relaxed max-w-md">
                      Taking care of your body prior to the session ensures optimal skin canvas quality, higher pain tolerance, and a smoother process overall.
                    </p>
                  </div>
                </div>

                {/* Right Side: Step-by-step Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 gap-6"
                >
                  {PREP_STEPS.map((step) => (
                    <motion.div
                      key={step.id}
                      variants={itemVariants}
                      className="bg-[#1C1C1E] border border-neutral-800 p-6 flex gap-6 hover:border-[#C19A6B]/50 transition-colors duration-300"
                    >
                      <div className="text-2xl font-serif text-[#C19A6B] font-light flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-[#F5F5F7] mb-2">
                          {step.title}
                        </h4>
                        <p className="text-[#8E8E93] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="healing-panel"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8"
              >
                {/* Timeline Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {HEALING_PHASES.map((phase, idx) => (
                    <div
                      key={phase.id}
                      className="bg-[#1C1C1E] border border-neutral-800 p-6 flex flex-col justify-between relative hover:border-[#C19A6B]/40 transition-colors duration-300"
                    >
                      {/* Visual top border accent */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-800 group-hover:bg-[#C19A6B] transition-colors" />

                      <div>
                        <div className="flex justify-between items-baseline mb-4">
                          <span className="text-xs font-mono text-[#C19A6B] uppercase tracking-wider">
                            {phase.phase}
                          </span>
                          <span className="text-xs text-[#8E8E93] font-mono">
                            {phase.duration}
                          </span>
                        </div>

                        <h3 className="text-xl font-serif text-[#F5F5F7] mb-4">
                          {phase.title}
                        </h3>

                        <div className="space-y-4">
                          {phase.guidelines.map((guide, gIdx) => (
                            <div key={gIdx} className="text-sm">
                              {guide.subtitle && (
                                <span className="block text-[#F5F5F7] font-medium mb-1">
                                  {guide.subtitle}
                                </span>
                              )}
                              <p className="text-[#8E8E93] leading-relaxed">
                                {guide.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {idx < 3 && (
                        <div className="hidden lg:block absolute -right-3.5 top-1/2 transform -translate-y-1/2 z-10 text-neutral-800">
                          <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Section 6.4: Safety Alert Box */}
        <div className="mt-16 bg-[#1C1C1E] border-l-4 border-[#C19A6B] p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-5 h-5 text-[#C19A6B]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h4 className="text-lg font-serif text-[#F5F5F7] font-medium">
                  When to seek medical advice:
                </h4>
              </div>
              <p className="text-[#8E8E93] text-sm leading-relaxed">
                Mild redness, swelling, and tenderness are normal for the first 3 to 4 days. However, if you experience spreading redness, extreme heat radiating from the tattoo, yellow discharge, or a fever, contact me immediately and consult a healthcare professional.
              </p>
            </div>
            <a
              href="#contact-and-studio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C19A6B] hover:text-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C19A6B] py-2"
            >
              <span>Contact Studio</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="mt-16 text-center border-t border-neutral-800 pt-12">
          <p className="text-[#8E8E93] text-sm mb-4">
            Have questions about a custom design or specific skin needs?
          </p>
          <a
            href="#booking-form"
            className="inline-block bg-[#C19A6B] text-[#F5F5F7] px-8 py-4 text-xs font-mono uppercase tracking-widest hover:bg-[#b08b5e] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] focus-visible:ring-[#C19A6B]"
          >
            Request a Custom Piece
          </a>
        </div>
      </div>
    </section>
  );
}