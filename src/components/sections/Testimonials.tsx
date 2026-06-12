"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      initial: "B",
      name: "Budi",
      role: "Toko Bangunan Maju Jaya, Bekasi",
      quote: "Sebelumnya rekap stok tiap malam pakai Excel bikin kepala pusing. Sekarang buka dashboard LancarPos langsung keliatan semua secara real-time.",
      colorClass: "bg-sticker-orange text-white",
    },
    {
      initial: "S",
      name: "Sari",
      role: "Warung Kopi Nusantara, Bandung",
      quote: "Kasirnya simpel banget, karyawan baru 10 menit ditraining udah bisa pakai sendiri untuk input transaksi dan pembayaran e-wallet.",
      colorClass: "bg-sticker-teal text-white",
    },
    {
      initial: "D",
      name: "Dewi",
      role: "Bersih Laundry, Surabaya",
      quote: "Laporan harian masuk ke email tiap malam, saya ga perlu buka aplikasi lagi kalau lagi liburan atau santai di rumah. Sangat praktis.",
      colorClass: "bg-sticker-purple text-sticker-purple-deep",
    },
    {
      initial: "A",
      name: "Adi",
      role: "Martabak Manis Pecenongan, Jakarta",
      quote: "Fitur varian topping-nya ngebantu banget biar ga salah catat orderan. Print struk dapur langsung otomatis nyala begitu kasir input.",
      colorClass: "bg-sticker-pink text-white",
    },
    {
      initial: "L",
      name: "Linda",
      role: "Boutique Cantik, Yogyakarta",
      quote: "Suka banget sama fiturnya. Pencatatan pengeluaran operasional toko juga bisa masuk, jadi ketahuan profit bersih bulanan asli tanpa meleset.",
      colorClass: "bg-sticker-sky text-primary",
    },
    {
      initial: "R",
      name: "Rian",
      role: "Bengkel Motor Sejahtera, Medan",
      quote: "Bisa monitor penjualan dari mana aja lewat HP. Stok sparepart juga otomatis berkurang pas ada penjualan jasa servis. Juara pokoknya!",
      colorClass: "bg-sticker-green text-white",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 768) {
        setCardsInView(1);
      } else if (window.innerWidth < 1024) {
        setCardsInView(2);
      } else {
        setCardsInView(3);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = testimonials.length - cardsInView;
  const clampedIndex = Math.min(currentIndex, maxIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const active = Math.min(prev, maxIndex);
      return active === 0 ? maxIndex : active - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const active = Math.min(prev, maxIndex);
      return active === maxIndex ? 0 : active + 1;
    });
  };



  return (
    <section id="testimoni" className="py-12 md:py-20 bg-canvas border-b border-hairline overflow-hidden">
      <div className="container-notion text-center space-y-6 md:space-y-12">
        <div className="max-w-2xl mx-auto space-y-2 md:space-y-3">
          <span className="text-eyebrow uppercase tracking-wider text-ink-faint font-bold select-none bg-canvas-soft border border-hairline px-3 py-1 rounded-full inline-block">
            Kisah Sukses Mitra
          </span>
          <h2 className="text-heading-1 text-ink tracking-tight">
            Dipercaya oleh Ratusan Pemilik Bisnis
          </h2>
          <p className="text-body-md text-ink-muted">
            Dengarkan langsung ulasan dari mereka yang telah merapikan manajemen tokonya bersama LancarPos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto text-left">
          <div className="overflow-hidden px-1 py-4">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${clampedIndex} * (100% + 24px) / ${cardsInView})`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `calc(${100 / cardsInView}% - ${(24 * (cardsInView - 1)) / cardsInView}px)`,
                  }}
                  className="shrink-0 bg-canvas border border-hairline rounded-xl p-6 shadow-soft hover:shadow-elevated hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="text-body-sm text-ink-secondary italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-hairline flex items-center gap-3 select-none">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-caption shadow-soft ${t.colorClass}`}>
                      {t.initial}
                    </div>
                    <div>
                      <h5 className="font-bold text-ink text-body-sm leading-none">{t.name}</h5>
                      <span className="text-[11px] text-ink-faint leading-none block mt-1">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 border border-hairline rounded-lg bg-canvas text-ink-secondary hover:bg-canvas-soft hover:text-ink transition-notion shadow-soft flex items-center justify-center cursor-pointer"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-1.5 px-3">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    clampedIndex === idx 
                      ? "w-6 bg-primary" 
                      : "w-2 bg-hairline hover:bg-ink-faint"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 border border-hairline rounded-lg bg-canvas text-ink-secondary hover:bg-canvas-soft hover:text-ink transition-notion shadow-soft flex items-center justify-center cursor-pointer"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

