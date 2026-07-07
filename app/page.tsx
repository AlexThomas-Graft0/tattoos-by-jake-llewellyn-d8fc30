import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValuesAndMetrics } from "@/components/ValuesAndMetrics";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { FlashCatalog } from "@/components/FlashCatalog";
import { BookingForm } from "@/components/BookingForm";
import { PricingAndPolicies } from "@/components/PricingAndPolicies";
import { AftercareGuide } from "@/components/AftercareGuide";
import { ContactAndStudio } from "@/components/ContactAndStudio";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"LocalBusiness\",\"name\":\"Tattoos by Jake Llewellyn\",\"description\":\"Tattoos by Jake Llewellyn\",\"url\":\"https://tattoos-by-jake-llewellyn-d8fc30.duckbyte.co\"}" }} />
      <Navbar />
      <div id="hero-section" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <HeroSection />
        </Suspense>
      </div>
      <div id="values-and-metrics" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ValuesAndMetrics />
        </Suspense>
      </div>
      <div id="portfolio-preview" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <PortfolioPreview />
        </Suspense>
      </div>
      <div id="flash-catalog" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <FlashCatalog />
        </Suspense>
      </div>
      <div id="booking-form" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <BookingForm />
        </Suspense>
      </div>
      <div id="pricing-and-policies" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <PricingAndPolicies />
        </Suspense>
      </div>
      <div id="aftercare-guide" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <AftercareGuide />
        </Suspense>
      </div>
      <div id="contact-and-studio" className="scroll-mt-20">
        <Suspense fallback={<div className="min-h-[30vh]" />}>
          <ContactAndStudio />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
