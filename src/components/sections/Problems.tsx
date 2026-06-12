"use client";

import React from "react";
import { motion } from "framer-motion";

const fUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Problems() {
  return (
    <section className="py-12 md:py-20 bg-canvas border-b border-hairline">
      <div className="container-notion text-center space-y-6 md:space-y-12">
        <div className="max-w-2xl mx-auto space-y-2 md:space-y-3">
          <span className="text-eyebrow uppercase tracking-wider text-ink-faint font-bold select-none bg-canvas-soft border border-hairline px-3 py-1 rounded-full inline-block">
            Realita Operasional UMKM
          </span>
          <h2 className="text-heading-1 text-ink tracking-tight">
            Apakah Hal Ini Terjadi di Bisnis Anda?
          </h2>
          <p className="text-body-md text-ink-muted">
            Sebagian besar pemilik UMKM menengah masih berkutat dengan kendala operasional harian yang melelahkan.
          </p>
        </div>

        {/* Problem Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Card 1 */}
          <motion.div
            variants={fUp}
            className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-4 shadow-soft hover:shadow-elevated hover:border-sticker-orange transition-notion group"
          >
            <div className="w-12 h-12 rounded-xl bg-sticker-orange/15 border border-sticker-orange/20 flex items-center justify-center text-[22px] group-hover:scale-105 transition-notion select-none">
              📒
            </div>
            <h4 className="text-title text-ink font-bold leading-tight">
              &ldquo;Masih catat di buku atau Excel?&rdquo;
            </h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Rekap harian makan waktu berjam-jam setiap malam, mudah salah tulis, dan sulit dilacak jika terjadi selisih uang kasir.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fUp}
            className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-4 shadow-soft hover:shadow-elevated hover:border-sticker-pink transition-notion group"
          >
            <div className="w-12 h-12 rounded-xl bg-sticker-pink/15 border border-sticker-pink/20 flex items-center justify-center text-[22px] group-hover:scale-105 transition-notion select-none">
              📦
            </div>
            <h4 className="text-title text-ink font-bold leading-tight">
              &ldquo;Stok habis baru ketahuan pas dicari?&rdquo;
            </h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Tidak ada pengawasan stok real-time atau peringatan otomatis. Restock selalu terlambat, membuat pelanggan kecewa dan beralih ke toko lain.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fUp}
            className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-4 shadow-soft hover:shadow-elevated hover:border-primary transition-notion group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-[22px] group-hover:scale-105 transition-notion select-none">
              📊
            </div>
            <h4 className="text-title text-ink font-bold leading-tight">
              &ldquo;Laporan bulanan harus bikin manual?&rdquo;
            </h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Menghabiskan akhir pekan merekap data penjualan dan nota yang menumpuk demi menghitung untung-rugi bersih usaha Anda.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
