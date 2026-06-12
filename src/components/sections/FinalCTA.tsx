import React from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-24 bg-canvas border-b border-hairline relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sticker-purple/5 blur-[100px] pointer-events-none" />
      
      <div className="container-notion max-w-4xl text-center space-y-6 md:space-y-8 relative z-10">
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-display-2 text-ink font-bold tracking-tight">
            Siap bikin operasional bisnis kamu lebih lancar?
          </h2>
          <p className="text-body-md text-ink-muted max-w-xl mx-auto leading-relaxed">
            Mulai langkah modernisasi bisnis Anda hari ini. Setup mudah, tanpa resiko, dan gratis untuk dicoba sekarang juga.
          </p>
        </div>
 
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://lancar-pos-dashboard.vercel.app/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-white text-button-text font-bold rounded-full shadow-elevated hover:bg-primary-active hover:scale-[1.03] active:scale-[0.97] transition-notion flex items-center justify-center gap-2 w-full sm:w-auto text-center"
          >
            Daftar Gratis Sekarang <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-caption text-ink-muted select-none">
            Atau coba dulu sistem tanpa mendaftar &rarr;{" "}
            <a
              href="https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Lihat Demo Dashboard
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
