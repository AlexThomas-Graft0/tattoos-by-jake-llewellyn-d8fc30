'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export function ContactAndStudio() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormState({ name: '', email: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  return (
    <section
      id="contact-and-studio"
      className="relative bg-[#121212] text-[#F5F5F7] font-sans pt-24 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Decorative subtle background gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C19A6B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 7.1: Page Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.25em] text-[#C19A6B] font-semibold block mb-4"
          >
            Connect & Visit
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Get in touch and find the studio.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#8E8E93] leading-relaxed"
          >
            Have a general question, a press inquiry, or want to discuss guest spots and travel? Use the simple form below.{' '}
            <span className="text-[#F5F5F7] italic">
              Please note: To maintain client privacy and a peaceful working environment, the exact address of my private studio is shared only upon confirmed booking and deposit payment.
            </span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/5">
          
          {/* Section 7.2: Studio Operations & Safety */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 space-y-10"
          >
            {/* Studio Image */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200"
                alt="Jake Llewellyn private studio space showing sterilised tools and modern minimalist interior"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-115 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest text-[#C19A6B] bg-[#1C1C1E]/95 px-3 py-1.5 rounded border border-white/10 backdrop-blur-sm">
                  Private Sanctuary
                </span>
              </div>
            </motion.div>

            {/* Studio Location & Hours */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#C19A6B] mb-2 font-semibold">Studio Location</h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Located in the heart of the Arts District (Detailed access and parking instructions are sent directly to booked clients).
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#C19A6B] mb-2 font-semibold">Studio Hours</h3>
                <p className="text-sm text-[#8E8E93] leading-relaxed">
                  Tuesday through Saturday, 11:00 AM – 7:00 PM.<br />
                  <span className="text-[#F5F5F7] font-medium">(By appointment only. Strictly no walk-ins).</span>
                </p>
              </div>
            </motion.div>

            {/* Safety & Sterilization Standards */}
            <motion.div variants={itemVariants} className="p-6 bg-[#1C1C1E] rounded-lg border border-white/5 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#16A34A] animate-pulse" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F7]">Medical-Grade Sterilization</h3>
              </div>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                My studio operates under strict, medical-grade health standards. I use 100% single-use, sterile disposable needles and cartridges. Every surface, power supply, and machine is chemical-barrier wrapped and thoroughly disinfected between every single client.
              </p>
            </motion.div>

            {/* Inclusivity Pledge */}
            <motion.div variants={itemVariants} className="p-6 bg-[#1C1C1E] rounded-lg border border-[#C19A6B]/20 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C19A6B]/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C19A6B]">Inclusivity Pledge</h3>
              <p className="text-sm text-[#8E8E93] leading-relaxed">
                This is a body-positive, safe, and welcoming space for people of all skin tones, sizes, gender identities, and backgrounds. Discrimination, disrespect, or non-consensual behavior of any kind is strictly prohibited in the studio.
              </p>
            </motion.div>
          </motion.div>

          {/* Section 7.3: General Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={itemVariants}
              className="bg-[#1C1C1E] p-8 md:p-10 rounded-lg border border-white/5 relative"
            >
              <h3 className="text-xl font-serif mb-6 text-[#F5F5F7]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Send a General Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#8E8E93] mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g., Silas Thorne"
                      className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/40 focus:outline-none focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#8E8E93] mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g., silas@example.com"
                      className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/40 focus:outline-none focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#8E8E93] mb-2 font-medium">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-[#F5F5F7] focus:outline-none focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] appearance-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Guest Spot / Travel Opportunities">Guest Spot / Travel Opportunities</option>
                      <option value="Collaboration / Art Projects">Collaboration / Art Projects</option>
                      <option value="Press / Media">Press / Media</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#8E8E93]">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#8E8E93] mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#121212] border border-white/10 rounded px-4 py-3 text-sm text-[#F5F5F7] placeholder-[#8E8E93]/40 focus:outline-none focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C19A6B] hover:bg-[#b0895a] text-[#F5F5F7] font-medium py-4 px-6 rounded transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C19A6B] focus:ring-offset-2 focus:ring-offset-[#1C1C1E]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-950/30 border border-emerald-500/30 text-emerald-400 text-sm rounded text-center"
                  >
                    Thank you. Your inquiry has been received. I will review and reply within 3–5 business days.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 7.4: Global Footer */}
        <footer className="pt-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start mb-16">
            
            {/* Left Column */}
            <div className="md:col-span-5 space-y-4">
              <span 
                className="text-2xl font-serif tracking-widest text-[#F5F5F7]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                JAKE LLEWELLYN
              </span>
              <p className="text-sm text-[#8E8E93] max-w-sm leading-relaxed">
                Custom illustrative tattooing designed to age gracefully. Specialize in custom fine-line and high-contrast blackwork.
              </p>
              <p className="text-xs text-[#8E8E93]/60">
                © 2026 Jake Llewellyn. All rights reserved.
              </p>
            </div>

            {/* Center Column (Quick Links) */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#C19A6B] font-semibold">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#portfolio-preview" className="text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#flash-catalog" className="text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]">
                    Available Flash
                  </a>
                </li>
                <li>
                  <a href="#booking-form" className="text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]">
                    Book Custom
                  </a>
                </li>
                <li>
                  <a href="#pricing-and-policies" className="text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]">
                    Policies & FAQ
                  </a>
                </li>
                <li>
                  <a href="#aftercare-guide" className="text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]">
                    Aftercare
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column (Socials & Contact) */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#C19A6B] font-semibold">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block text-xs text-[#8E8E93]/60 uppercase tracking-wider mb-0.5">Email</span>
                  <a href="mailto:jake@jakelewellyntattoo.com" className="text-[#F5F5F7] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B] break-all">
                    jake@jakelewellyntattoo.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs text-[#8E8E93]/60 uppercase tracking-wider mb-0.5">Instagram</span>
                  <a 
                    href="https://instagram.com/jake_llewellyn_tattoo" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#F5F5F7] hover:text-[#C19A6B] transition-colors focus:outline-none focus:text-[#C19A6B]"
                  >
                    @jake_llewellyn_tattoo
                  </a>
                  <span className="block text-xs text-[#8E8E93] mt-1 italic">
                    Note: DMs are unmonitored; please use site forms for inquiries.
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
            <span className="text-[10px] text-[#8E8E93]/40 tracking-wider">
              DESIGNED FOR THE INDIVIDUAL • BUILT TO STAND THE TEST OF TIME
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-[#8E8E93] hover:text-[#C19A6B] transition-colors focus:outline-none flex items-center space-x-1"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <svg className="w-3 h-3 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}