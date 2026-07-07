'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface FormData {
  concept: string;
  style: 'illustrative' | 'blackwork' | 'mix' | '';
  placement: string;
  size: string;
  name: string;
  email: string;
  phone: string;
  days: string[];
  isOfAge: boolean;
}

const initialFormData: FormData = {
  concept: '',
  style: '',
  placement: '',
  size: '',
  name: '',
  email: '',
  phone: '',
  days: [],
  isOfAge: false,
};

const stepContainerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: 'easeOut' } 
  },
  exit: { 
    opacity: 0, 
    y: -15, 
    transition: { duration: 0.3, ease: 'easeIn' } 
  }
};

export function BookingForm() {
  const [step, setStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Anatomy hot spots to auto-fill placement field
  const anatomySpots = [
    { label: 'Chest', x: '50%', y: '25%' },
    { label: 'Spine / Back', x: '50%', y: '40%' },
    { label: 'Left Forearm', x: '25%', y: '48%' },
    { label: 'Right Forearm', x: '75%', y: '48%' },
    { label: 'Outer Thigh', x: '35%', y: '65%' },
    { label: 'Calf', x: '65%', y: '80%' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (day: string) => {
    setFormData((prev) => {
      const currentDays = [...prev.days];
      if (currentDays.includes(day)) {
        return { ...prev, days: currentDays.filter((d) => d !== day) };
      } else {
        return { ...prev, days: [...currentDays, day] };
      }
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (uploadedFiles.length >= 3) return;
    
    // Simulate premium file upload by reading names
    const files = Array.from(e.dataTransfer.files);
    const newFiles = files.slice(0, 3 - uploadedFiles.length).map(f => f.name);
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const simulateFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (uploadedFiles.length >= 3) return;
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newFiles = files.slice(0, 3 - uploadedFiles.length).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const selectStyle = (style: 'illustrative' | 'blackwork' | 'mix') => {
    setFormData((prev) => ({ ...prev, style }));
  };

  const selectAnatomySpot = (label: string) => {
    setFormData((prev) => ({ ...prev, placement: label }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.concept || !formData.style)) {
      alert('Please fill out your core concept and select a style focus.');
      return;
    }
    if (step === 2 && (!formData.placement || !formData.size)) {
      alert('Please specify your desired body placement and approximate sizing.');
      return;
    }
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please complete your contact details.');
      return;
    }
    if (formData.days.length === 0) {
      alert('Please select at least one preferred day of the week.');
      return;
    }
    if (!formData.isOfAge) {
      alert('You must confirm that you are 18 years of age or older to submit.');
      return;
    }
    setStep('success');
  };

  return (
    <section 
      id="booking-form" 
      className="relative min-h-screen bg-[#121212] text-[#F5F5F7] py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-800 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#C19A6B_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C19A6B] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C19A6B] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#C19A6B] uppercase bg-[#C19A6B]/10 rounded-full mb-4">
            Custom Intake Pipeline
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#F5F5F7] tracking-tight mb-6">
            Request a custom tattoo project.
          </h2>
          <p className="text-[#8E8E93] text-base md:text-lg leading-relaxed">
            Let’s collaborate on something original. Please complete this step-by-step form to share your ideas. 
            This structured approach helps me understand your creative vision, estimate the session length, 
            and ensure we are a perfect artistic fit before we meet in the studio.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#1C1C1E] rounded-2xl border border-neutral-800/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Sidebar Info & Progress Tracker */}
          <div className="lg:col-span-4 bg-black/40 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-neutral-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C19A6B] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C19A6B]">Jake Llewellyn Studio</span>
              </div>

              {/* Progress Steps */}
              <div className="space-y-6">
                {[
                  { stepNum: 1, title: 'The Concept', desc: 'Imagery & style' },
                  { stepNum: 2, title: 'Placement & Size', desc: 'Anatomical fitting' },
                  { stepNum: 3, title: 'Logistics', desc: 'Contact & schedule' }
                ].map((s) => {
                  const isActive = step === s.stepNum;
                  const isCompleted = typeof step === 'number' && step > s.stepNum || step === 'success';
                  
                  return (
                    <div key={s.stepNum} className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono border transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#C19A6B] border-[#C19A6B] text-black font-semibold' 
                          : isCompleted 
                            ? 'bg-neutral-800 border-neutral-700 text-[#C19A6B]' 
                            : 'border-neutral-800 text-neutral-600'
                      }`}>
                        {isCompleted ? '✓' : s.stepNum}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isActive ? 'text-[#F5F5F7]' : 'text-neutral-500'}`}>
                          {s.title}
                        </p>
                        <p className="text-xs text-neutral-600 font-mono mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Policy Notice */}
            <div className="mt-12 pt-8 border-t border-neutral-900 hidden lg:block">
              <p className="text-xs text-neutral-500 leading-relaxed font-mono">
                * Complete transparency: A $100 non-refundable deposit is required once custom designs are accepted. Review pricing at <a href="#pricing-and-policies" className="text-[#C19A6B] hover:underline">Policies</a>.
              </p>
            </div>
          </div>

          {/* Dynamic Form Area */}
          <div className="lg:col-span-8 p-8 lg:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  variants={stepContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-serif text-[#F5F5F7] mb-2">Step 1: The Concept</h3>
                    <p className="text-xs text-[#8E8E93]">Define the creative baseline of your tattoo.</p>
                  </div>

                  {/* Concept Description */}
                  <div className="space-y-2">
                    <label htmlFor="concept" className="block text-sm font-medium text-[#F5F5F7]">
                      What is your custom concept? <span className="text-[#C19A6B]">*</span>
                    </label>
                    <p className="text-xs text-[#8E8E93] mb-2">
                      Describe the core imagery, elements, and mood you want to capture. Keep it concise but descriptive.
                    </p>
                    <textarea
                      id="concept"
                      name="concept"
                      rows={4}
                      value={formData.concept}
                      onChange={handleInputChange}
                      placeholder="e.g., A barn owl clutching a bunch of dried lavender, executed in a dark illustrative woodcut style with stippled shading..."
                      className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-4 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors resize-none outline-none font-sans"
                    />
                  </div>

                  {/* Style Selector */}
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-[#F5F5F7]">
                      Which style elements align with your vision? <span className="text-[#C19A6B]">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: 'illustrative', label: 'Illustrative', desc: 'Fine-line, realistic textures, organic shapes' },
                        { id: 'blackwork', label: 'Blackwork', desc: 'High-contrast, heavy black, graphic lines' },
                        { id: 'mix', label: 'A mix of both', desc: 'Hybrid balance of lines & bold shading' }
                      ].map((styleOption) => {
                        const isSelected = formData.style === styleOption.id;
                        return (
                          <button
                            key={styleOption.id}
                            type="button"
                            onClick={() => selectStyle(styleOption.id as 'illustrative' | 'blackwork' | 'mix')}
                            className={`p-4 rounded-lg border text-left transition-all duration-200 focus:outline-none ${
                              isSelected 
                                ? 'bg-[#C19A6B]/5 border-[#C19A6B] ring-1 ring-[#C19A6B]' 
                                : 'bg-[#121212] border-neutral-800/80 hover:border-neutral-700'
                            }`}
                          >
                            <span className={`block text-sm font-medium ${isSelected ? 'text-[#C19A6B]' : 'text-[#F5F5F7]'}`}>
                              {styleOption.label}
                            </span>
                            <span className="block text-xs text-[#8E8E93] mt-1 leading-snug">
                              {styleOption.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Drag-and-Drop Image Uploader */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#F5F5F7]">
                      Upload reference images (Max 3 files)
                    </label>
                    <p className="text-xs text-[#8E8E93] mb-3">
                      Upload photos of my past work, design elements you love, or photos of the body area to be tattooed. No work by other tattoo artists will be copied directly.
                    </p>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        isDragging ? 'border-[#C19A6B] bg-[#C19A6B]/5' : 'border-neutral-800 bg-[#121212]'
                      }`}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/png, image/jpeg"
                        onChange={simulateFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        disabled={uploadedFiles.length >= 3}
                      />
                      <svg className="mx-auto h-8 w-8 text-neutral-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs text-neutral-400">
                        <span className="text-[#C19A6B] font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-[10px] text-neutral-600 mt-1">PNG, JPEG up to 10MB each</p>
                    </div>

                    {/* File List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {uploadedFiles.map((fileName, index) => (
                          <div key={index} className="flex items-center justify-between bg-black/30 p-2 px-3 rounded text-xs border border-neutral-800">
                            <span className="text-neutral-300 truncate max-w-[80%]">{fileName}</span>
                            <button 
                              type="button" 
                              onClick={() => removeFile(index)}
                              className="text-neutral-500 hover:text-red-400 transition-colors"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Navigation Button */}
                  <div className="pt-4 border-t border-neutral-900 flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-[#C19A6B] text-[#F5F5F7] text-sm font-medium rounded hover:bg-[#b08b5f] transition-colors focus:ring-2 focus:ring-[#C19A6B] focus:ring-offset-2 focus:ring-offset-[#1C1C1E]"
                    >
                      Continue to Placement
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  variants={stepContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-serif text-[#F5F5F7] mb-2">Step 2: Placement & Size</h3>
                    <p className="text-xs text-[#8E8E93]">Ensure the canvas matches the scale of the artwork.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {/* Body Placement */}
                      <div className="space-y-2">
                        <label htmlFor="placement" className="block text-sm font-medium text-[#F5F5F7]">
                          Where on your body will this tattoo go? <span className="text-[#C19A6B]">*</span>
                        </label>
                        <p className="text-xs text-[#8E8E93] mb-2">
                          Please specify the exact location (e.g., &quot;Left outer forearm&quot;, &quot;Right shoulder blade&quot;).
                        </p>
                        <input
                          type="text"
                          id="placement"
                          name="placement"
                          value={formData.placement}
                          onChange={handleInputChange}
                          placeholder="e.g., Right thigh, outer side"
                          className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-3 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors outline-none"
                        />
                      </div>

                      {/* Sizing */}
                      <div className="space-y-2">
                        <label htmlFor="size" className="block text-sm font-medium text-[#F5F5F7]">
                          Estimated size in inches <span className="text-[#C19A6B]">*</span>
                        </label>
                        <p className="text-xs text-[#8E8E93] mb-2">
                          Give your best estimate of the height and width of the design. Sizing will be finalized in person to fit your anatomy, but a starting point is crucial for booking.
                        </p>
                        <input
                          type="text"
                          id="size"
                          name="size"
                          value={formData.size}
                          onChange={handleInputChange}
                          placeholder="e.g., 6 inches tall by 4 inches wide"
                          className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-3 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors outline-none"
                        />
                      </div>
                    </div>

                    {/* Anatomy Guide Column */}
                    <div className="bg-[#121212] rounded-xl border border-neutral-800 p-6 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-mono text-[#C19A6B] uppercase block mb-1">Visual Component</span>
                        <h4 className="text-sm font-medium text-[#F5F5F7] mb-2">Human Anatomy Guide</h4>
                        <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                          Select a target zone to quickly pre-fill the location or visualize standard placement zones.
                        </p>
                      </div>

                      {/* Interactive Minimalist Figure */}
                      <div className="relative w-full h-56 bg-black/20 rounded-lg flex items-center justify-center border border-neutral-900 overflow-hidden">
                        {/* Styled SVG Silhouette representation */}
                        <svg className="h-48 text-neutral-800 opacity-60" viewBox="0 0 100 200" fill="currentColor">
                          <path d="M50 10 C45 10 42 15 42 22 C42 30 45 35 50 35 C55 35 58 30 58 22 C58 15 55 10 50 10 Z M50 37 C40 37 34 45 34 60 C34 75 32 100 32 110 C32 112 34 115 36 115 C38 115 40 110 40 100 C40 90 42 80 44 80 L44 140 C44 165 42 185 41 195 C41 198 43 200 46 200 C49 200 50 195 50 180 L50 120 L50 180 C50 195 51 200 54 200 C57 200 59 198 59 195 C58 185 56 165 56 140 L56 80 C58 80 60 90 60 100 C60 110 62 115 64 115 C66 115 68 112 68 110 C68 100 66 75 66 60 C66 45 60 37 50 37 Z" />
                        </svg>

                        {/* Interactive spots */}
                        {anatomySpots.map((spot) => (
                          <button
                            key={spot.label}
                            type="button"
                            onClick={() => selectAnatomySpot(spot.label)}
                            className="absolute w-3 h-3 rounded-full bg-[#C19A6B] border border-black cursor-pointer hover:scale-150 transition-all duration-200 group focus:outline-none"
                            style={{ left: spot.x, top: spot.y }}
                          >
                            <span className="absolute left-1/2 bottom-5 -translate-x-1/2 bg-black text-[#F5F5F7] text-[10px] py-0.5 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-800">
                              {spot.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="pt-4 border-t border-neutral-900 flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-5 py-2.5 text-sm font-medium text-[#8E8E93] hover:text-[#F5F5F7] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-6 py-3 bg-[#C19A6B] text-[#F5F5F7] text-sm font-medium rounded hover:bg-[#b08b5f] transition-colors focus:ring-2 focus:ring-[#C19A6B]"
                    >
                      Continue to Logistics
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-3"
                  variants={stepContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-serif text-[#F5F5F7] mb-2">Step 3: Logistics & Contact</h3>
                    <p className="text-xs text-[#8E8E93]">Provide your contact info and scheduling availability.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-medium text-[#F5F5F7]">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g., Eleanor Vance"
                        className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-3 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors outline-none"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-[#F5F5F7]">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., eleanor@example.com"
                        className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-3 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors outline-none"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5 md:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-[#F5F5F7]">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., (555) 019-2834"
                        className="w-full bg-[#121212] border border-neutral-800 rounded-lg p-3 text-[#F5F5F7] text-sm placeholder-neutral-600 focus:border-[#C19A6B] focus:ring-1 focus:ring-[#C19A6B] transition-colors outline-none"
                        required
                      />
                    </div>

                    {/* Schedule Preferences */}
                    <div className="space-y-3 md:col-span-2">
                      <label className="block text-sm font-medium text-[#F5F5F7]">
                        What days of the week work best for your appointment?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {['Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'].map((day) => {
                          const isChecked = formData.days.includes(day);
                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => handleCheckboxChange(day)}
                              className={`p-3 rounded text-xs font-medium border text-center transition-all ${
                                isChecked 
                                  ? 'bg-[#C19A6B]/10 border-[#C19A6B] text-[#C19A6B]' 
                                  : 'bg-[#121212] border-neutral-800/80 hover:border-neutral-700 text-neutral-400'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Age Verification Checkbox */}
                    <div className="md:col-span-2 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.isOfAge}
                          onChange={(e) => setFormData((prev) => ({ ...prev, isOfAge: e.target.checked }))}
                          className="mt-1 w-4 h-4 rounded bg-[#121212] border-neutral-800 text-[#C19A6B] focus:ring-[#C19A6B] focus:ring-offset-[#1C1C1E] accent-[#C19A6B]"
                        />
                        <span className="text-xs text-neutral-400 leading-relaxed">
                          I confirm that I am 18 years of age or older. (Required to submit)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submission and Back Buttons */}
                  <div className="pt-4 border-t border-neutral-900 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-full sm:w-auto text-sm font-medium text-[#8E8E93] hover:text-[#F5F5F7] transition-colors py-2"
                    >
                      Back to Placement
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#C19A6B] text-[#F5F5F7] text-sm font-medium rounded hover:bg-[#b08b5f] transition-all focus:ring-2 focus:ring-[#C19A6B]"
                    >
                      Submit Custom Project Request
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'success' && (
                <motion.div
                  key="success"
                  variants={stepContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="py-12 text-center max-w-lg mx-auto space-y-6"
                >
                  <div className="w-16 h-16 bg-[#C19A6B]/10 border border-[#C19A6B]/40 text-[#C19A6B] rounded-full flex items-center justify-center mx-auto text-2xl">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[#F5F5F7] mb-3">Request Submitted Successfully</h3>
                    <p className="text-sm text-[#8E8E93] leading-relaxed">
                      I review all custom requests within 3 to 5 business days. If your project is accepted, you will receive an email containing a direct booking link to select your appointment time and pay your secure deposit.
                    </p>
                  </div>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(initialFormData);
                        setUploadedFiles([]);
                        setStep(1);
                      }}
                      className="px-6 py-2.5 border border-neutral-800 hover:border-neutral-700 text-xs font-medium rounded text-neutral-300 transition-colors"
                    >
                      Submit Another Concept
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Informational Sub-Footer Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono text-neutral-500 border-t border-neutral-900 pt-10">
          <div>
            <h4 className="text-neutral-400 font-sans font-medium mb-2 uppercase tracking-wider">Design Integrity Commitment</h4>
            <p className="leading-relaxed">
              Every custom illustrative tattoo is designed precisely for your anatomy and never repeated. Jake Llewellyn reserves full creative direction to ensure longevity, line stability, and composition depth.
            </p>
          </div>
          <div>
            <h4 className="text-neutral-400 font-sans font-medium mb-2 uppercase tracking-wider">Next Steps After Submission</h4>
            <p className="leading-relaxed">
              Upon approval, you will receive custom sizing recommendations and a booking calendar. An initial $100 non-refundable deposit is required to reserve any date. For more details, consult the <a href="#pricing-and-policies" className="text-[#C19A6B] hover:underline">pricing framework</a>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}