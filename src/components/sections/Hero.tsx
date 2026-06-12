"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, UserCheck } from "lucide-react";

const fUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white py-12 md:py-28">
      {/* Constellation Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Glowing Stars */}
        <div className="absolute top-1/4 left-1/5 w-2.5 h-2.5 rounded-full bg-sticker-sky blur-[1px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-sticker-pink blur-[1px] animate-pulse delay-700" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-sticker-purple blur-[0.5px] animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 rounded-full bg-sticker-orange blur-[1.5px] animate-pulse delay-300" />
        
        {/* Ambient gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sticker-purple/10 blur-[120px]" />
      </div>
 
      <div className="container-notion grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Hero Text */}
        <div className="lg:col-span-7 space-y-4 md:space-y-6 text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sticker-sky text-eyebrow"
          >
            <Sparkles className="w-4 h-4 text-sticker-sky animate-spin" style={{ animationDuration: "3s" }} />
            <span>POS Spesifik UMKM Laundry, F&B, & Toko Bangunan</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fUp}
            className="text-display-1 font-bold leading-none tracking-tighter"
          >
            Kasir, stok, dan laporan bisnis kamu — semua dalam satu dashboard.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fUp}
            className="text-body-md text-white/80 max-w-xl leading-relaxed"
          >
            LancarPos dirancang khusus dengan fitur industri yang relevan. Setup 5 menit, langsung operasional untuk bisnis Laundry, F&B, dan Toko Bangunan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fUp}
            className="flex flex-col sm:flex-row gap-3 pt-1"
          >
            <a
              href="https://lancar-pos-dashboard.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white text-button-text font-bold rounded-full shadow-elevated hover:bg-primary-active hover:scale-[1.03] active:scale-[0.97] transition-notion flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              Daftar Gratis <ArrowRight className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-ink-secondary text-button-text font-bold rounded-full shadow-elevated hover:bg-canvas-soft hover:scale-[1.03] active:scale-[0.97] transition-notion flex items-center justify-center gap-2 border border-white/10 w-full sm:w-auto text-center"
            >
              <Play className="w-4 h-4 text-primary fill-primary" /> Coba Demo
            </a>
          </motion.div>
        </div>

        {/* Hero Visual Mockup Teaser */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative bg-white/95 rounded-xl border border-white/10 shadow-elevated p-4 text-ink-secondary space-y-4 max-w-sm mx-auto"
          >
            {/* Header Dots */}
            <div className="flex gap-1.5 border-b border-hairline pb-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-sticker-pink" />
              <div className="w-2.5 h-2.5 rounded-full bg-sticker-orange" />
              <div className="w-2.5 h-2.5 rounded-full bg-sticker-teal" />
            </div>
            
            {/* Dashboard Teaser Card Content */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-ink-faint font-semibold uppercase tracking-wider">Performa Hari Ini</span>
                <span className="text-[10px] text-sticker-green bg-sticker-green/10 border border-sticker-green/20 px-1.5 py-0.5 rounded font-bold">+18.5%</span>
              </div>
              <h4 className="text-heading-3 text-ink font-bold leading-none">Rp 2.450.000</h4>
              <div className="w-full h-2 bg-canvas-soft rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary rounded-full" />
              </div>
            </div>

            <div className="border-t border-hairline pt-3 flex items-center justify-between text-[12px]">
              <div className="flex items-center gap-1.5 text-ink-muted">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>72 Transaksi Selesai</span>
              </div>
              <span className="font-semibold text-primary">Lihat Detail</span>
            </div>
          </motion.div>

          {/* Absolute sticker decorations */}
          <div className="absolute top-[-20px] right-[-10px] bg-sticker-purple text-sticker-purple-deep border border-sticker-purple-deep/10 font-bold px-3 py-1.5 rounded-full shadow-elevated text-eyebrow flex items-center gap-1.5 rotate-6 hover:rotate-0 transition-notion select-none">
            <Sparkles className="w-3.5 h-3.5" /> Setup 5 Menit
          </div>
          
          <div className="absolute bottom-[-15px] left-[-10px] bg-sticker-orange text-white font-bold px-3 py-1.5 rounded-full shadow-elevated text-eyebrow flex items-center gap-1.5 -rotate-6 hover:rotate-0 transition-notion select-none">
            <UserCheck className="w-3.5 h-3.5" /> Siap Pakai
          </div>
        </div>
      </div>
    </section>
  );
}
