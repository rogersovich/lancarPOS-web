"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustrySelector from "@/components/IndustrySelector";

// Modularized sections
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import CoreFeatures from "@/components/sections/CoreFeatures";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Header Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 2 — Hero */}
        <Hero />

        {/* Section 3 — Problem Statement */}
        <Problems />

        {/* Section 4 — Industry Selector */}
        <section id="industri" className="py-12 md:py-20 bg-canvas-soft border-b border-hairline">
          <div className="container-notion text-center space-y-6 md:space-y-12">
            <div className="max-w-2xl mx-auto space-y-2 md:space-y-3">
              <span className="text-eyebrow uppercase tracking-wider text-primary font-bold select-none bg-primary/10 px-2 py-0.5 rounded-full">
                Solusi Cerdas & Fleksibel
              </span>
              <h2 className="text-heading-1 text-ink tracking-tight">
                Satu Sistem, Dashboard Spesifik Industri
              </h2>
              <p className="text-body-md text-ink-muted">
                Pilih bidang usaha Anda untuk melihat visualisasi alur transaksi dan fitur khusus yang disiapkan secara presisi.
              </p>
            </div>

            {/* Custom Industry Switcher Tab Controller */}
            <div className="bg-canvas border border-hairline rounded-2xl p-3 sm:p-4 md:p-6 shadow-soft">
              <IndustrySelector />
            </div>
          </div>
        </section>

        {/* Section 5 — Core Features */}
        <CoreFeatures />

        {/* Section 6 — How It Works */}
        <HowItWorks />

        {/* Section 7 — Testimoni */}
        <Testimonials />

        {/* Section 8 — FAQ */}
        <FAQ />

        {/* Section 9 — Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
