"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Package, 
  TrendingUp, 
  Layers, 
  Users, 
  ShieldCheck 
} from "lucide-react";

const fUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CoreFeatures() {
  return (
    <section id="fitur" className="py-12 md:py-20 bg-canvas border-b border-hairline">
      <div className="container-notion text-center space-y-6 md:space-y-12">
        <div className="max-w-2xl mx-auto space-y-2 md:space-y-3">
          <span className="text-eyebrow uppercase tracking-wider text-ink-faint font-bold select-none bg-canvas-soft border border-hairline px-3 py-1 rounded-full inline-block">
            Fitur Utama
          </span>
          <h2 className="text-heading-1 text-ink tracking-tight">
            Semua Kebutuhan POS dalam Satu Akun
          </h2>
          <p className="text-body-md text-ink-muted">
            Didesain dengan arsitektur modern untuk memastikan operasional bisnis berjalan cepat, aman, dan mudah dimonitor.
          </p>
        </div>

        {/* 2x3 Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Feature 1 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-sky/15 text-primary flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">⚡ Kasir Cepat</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Produk terlaris di baris pertama, pencarian item hitungan detik, dan penghitungan kembalian otomatis bebas human error.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-teal/15 text-sticker-teal flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">📦 Stok Real-time</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Stok otomatis berkurang di setiap penjualan. Notifikasi email dikirim otomatis saat persediaan barang mulai menipis.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-orange/15 text-sticker-orange flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">📊 Laporan Otomatis</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Laporan harian, mingguan, dan bulanan siap dianalisis. Export mudah ke format PDF atau Excel kapan saja Anda butuhkan.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-purple/15 text-sticker-purple-deep flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">🏪 Multi-outlet</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Pantau semua transaksi dan pergerakan stok cabang-cabang bisnis Anda hanya dalam satu akun konsol Owner.
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-green/15 text-sticker-green flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">👥 Manajemen Tim</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Pembagian peran akses (Role Owner, Manager, Kasir) dengan kewenangan yang tepat demi menjaga kerahasiaan data bisnis.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div variants={fUp} className="bg-surface border border-hairline rounded-xl p-6 text-left space-y-3 shadow-soft hover:shadow-elevated transition-notion">
            <div className="w-10 h-10 rounded-lg bg-sticker-pink/15 text-sticker-pink flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-title text-ink font-bold">🔒 Aman & Terpantau</h4>
            <p className="text-body-sm text-ink-secondary leading-relaxed">
              Setiap transaksi tercatat dalam audit log. Fitur void (pembatalan) transaksi membutuhkan approval langsung dari Owner.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
