'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Sparkles, Heart, Check, ArrowRight } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  description: string;
}

interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const metrics: MetricItem[] = [
  {
    value: '8+',
    label: 'Years of Practice',
    description: 'Refining illustrative blackwork techniques in a dedicated, private studio environment.',
  },
  {
    value: '1,200+',
    label: 'Custom Tattoos',
    description: 'Individually tailored pieces designed specifically to fit unique body contours.',
  },
  {
    value: '100%',
    label: 'Original Designs',
    description: 'Never repeated, never copied. Built exclusively for your personal narrative.',
  },
];

const values: ValueItem[] = [
  {
    id: '01',
    title: 'Artistic Integrity',
    description: "I do not copy other artists' designs or chase fleeting internet trends. Every tattoo I perform is either drawn specifically for your body or selected from my catalog of original, one-of-a-kind flash sheets.",
    icon: Sparkles,
  },
  {
    id: '02',
    title: 'Bodily Autonomy & Safety',
    description: 'Your physical and emotional comfort is my priority. My studio is a quiet, private, and sterile environment. All skin tones, body types, and identities are met with respect, warmth, and professional care.',
    icon: ShieldCheck,
  },
  {
    id: '03',
    title: 'Built to Last',
    description: 'I balance delicate linework with bold, structural black placement. This ensures that your tattoo remains crisp, legible, and beautiful as your skin naturally ages over the decades.',
    icon: Heart,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
    },
  },
};

export function ValuesAndMetrics() {
  return (
    <section
      id="values-and-metrics"
      className="relative bg-[#121212] text-[#F5F5F7] py-24 lg:py-32 overflow-hidden border-b border-[#1C1C1E] font-sans"
    >
      {/* Decorative subtle background grid element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1c1e_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C19A6B] font-mono block mb-3">
            01 / Studio Philosophy
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F5F5F7] leading-[1.15] mb-6">
            A professional, collaborative, and safe space for art.
          </h2>
          <p className="text-lg text-[#8E8E93] leading-relaxed font-light">
            I believe that getting a tattoo should be an empowering, stress-free experience. 
            That starts with complete clarity on how I work, how much it costs, and what we 
            expect from each other. No hidden fees, no gatekeeping—just clear communication.
          </p>
        </div>

        {/* Real-Time Trust Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-[#1C1C1E] py-12 bg-[#121212]"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col justify-between p-2"
            >
              <div>
                <span className="text-5xl lg:text-6xl font-serif text-[#C19A6B] font-light tracking-tight block mb-2">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold tracking-wider uppercase text-[#F5F5F7] block mb-3">
                  {metric.label}
                </span>
              </div>
              <p className="text-sm text-[#8E8E93] leading-relaxed font-light">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        >
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative bg-[#1C1C1E] border border-transparent hover:border-[#C19A6B]/30 transition-all duration-300 p-8 flex flex-col justify-between rounded-none h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-[#C19A6B] tracking-widest font-bold">
                      {value.id}
                    </span>
                    <IconComponent className="h-5 w-5 text-[#8E8E93] group-hover:text-[#C19A6B] transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#F5F5F7] mb-4 font-light">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#8E8E93] leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Studio Operations & Safety Pledge Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          
          {/* Visual Side Frame */}
          <div className="lg:col-span-5 relative group overflow-hidden border border-[#1C1C1E]">
            <div className="absolute inset-0 bg-black/40 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1605497746444-ac9dbd324ce4?auto=format&fit=crop&w=1000&q=80"
              alt="Medical-grade sterile tattoo setup and tools"
              className="w-full h-[350px] lg:h-[450px] object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 right-6">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C19A6B] block mb-1">
                Sterile Workspace
              </span>
              <p className="text-xs text-[#8E8E93] font-light">
                100% disposable single-use tools, disinfected continuously.
              </p>
            </div>
          </div>

          {/* Operational Details & Inclusivity Pledge */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C19A6B] font-mono block mb-3">
                Safety & Standards
              </span>
              <h3 className="text-3xl font-serif text-[#F5F5F7] font-light mb-4">
                Strict medical-grade sterilization.
              </h3>
              <p className="text-[#8E8E93] text-sm leading-relaxed font-light">
                My studio operates under strict health guidelines. Every single surface, 
                power supply, and machine is chemical-barrier wrapped and thoroughly disinfected 
                between every single client. I use only 100% single-use, sterile disposable needles 
                and cartridges.
              </p>
            </div>

            <div className="p-6 bg-[#1C1C1E] border-l-2 border-[#C19A6B]">
              <h4 className="text-[#F5F5F7] text-base font-semibold uppercase tracking-wider mb-2">
                Inclusivity Pledge
              </h4>
              <p className="text-[#8E8E93] text-sm leading-relaxed font-light">
                This is a body-positive, safe, and welcoming space for people of all skin tones, 
                sizes, gender identities, and backgrounds. Discrimination, disrespect, or non-consensual 
                behavior of any kind is strictly prohibited in the studio.
              </p>
            </div>

            {/* Quick Actions / Navigation Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C19A6B] hover:bg-[#b08b5e] text-[#F5F5F7] text-sm font-medium tracking-wider uppercase transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:ring-offset-2 focus:ring-offset-[#121212]"
              >
                Request a Custom Piece
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#pricing-and-policies"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#8E8E93]/30 hover:border-[#F5F5F7] text-[#F5F5F7] text-sm font-medium tracking-wider uppercase transition-colors duration-300"
              >
                Review Studio Policies
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}