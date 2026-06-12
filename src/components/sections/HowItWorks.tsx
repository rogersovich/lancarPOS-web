"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  Database, 
  CreditCard, 
  Sparkles, 
  Upload, 
  Check, 
  Loader2, 
  FileSpreadsheet, 
  Receipt,
  Play,
  Pause
} from "lucide-react";

// Mockup Components for Preview screens
function Screen0() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 sm:p-6 h-full flex flex-col justify-between bg-canvas text-left">
      <div>
        <div className="flex items-center justify-between border-b border-hairline pb-2 sm:pb-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-sticker-purple/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sticker-purple" />
            </div>
            <span className="text-xs font-semibold text-ink-secondary">Pendaftaran LancarPos</span>
          </div>
          <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">Langkah 1/2</span>
        </div>
        
        <h5 className="text-xs sm:text-sm font-bold text-ink mb-0.5 sm:mb-1">Selamat Datang di LancarPos!</h5>
        <p className="text-[10px] sm:text-xs text-ink-muted mb-3 sm:mb-4">Pilih jenis industri untuk kustomisasi dashboard otomatis:</p>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { id: "fnb", name: "Cafe & Resto", emoji: "☕", desc: "Meja & Kitchen", color: "border-sticker-orange" },
            { id: "laundry", name: "Laundry Kiloan", emoji: "🧺", desc: "Antrean & Timbangan", color: "border-sticker-purple" },
            { id: "retail", name: "Toko Bangunan", emoji: "🔨", desc: "Multi-satuan & Stok", color: "border-sticker-sky" },
          ].map((ind) => {
            const isHovered = step === 1 && ind.id === "fnb";
            const isSelected = step >= 2 && ind.id === "fnb";
            return (
              <div
                key={ind.id}
                className={`p-2 sm:p-3 border rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 relative ${
                  isSelected 
                    ? "border-primary bg-primary/5 shadow-sm scale-105" 
                    : isHovered 
                    ? "border-primary/50 bg-canvas-soft translate-y-[-2px]" 
                    : "border-hairline bg-canvas"
                }`}
              >
                <span className="text-xl sm:text-2xl mb-1 sm:mb-1.5 select-none">{ind.emoji}</span>
                <span className="text-[9px] sm:text-[11px] font-bold text-ink leading-tight">{ind.name}</span>
                <span className="text-[8px] sm:text-[9px] text-ink-faint mt-0.5 leading-tight">{ind.desc}</span>
                {isSelected && (
                  <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-primary text-white flex items-center justify-center shadow-soft">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 sm:mt-4">
        {step >= 3 ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 sm:p-2.5 rounded-lg bg-sticker-green/10 border border-sticker-green/20 flex items-center gap-2.5 shadow-sm"
          >
            <span className="text-base sm:text-lg">✨</span>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-[11px] font-semibold text-sticker-green leading-normal">Layout POS F&B Berhasil Diaktifkan!</p>
              <p className="text-[8px] sm:text-[9px] text-ink-secondary truncate">Fitur Meja & Varian Rasa otomatis ditambahkan ke menu.</p>
            </div>
          </motion.div>
        ) : (
          <div className="h-8 sm:h-10 border border-dashed border-hairline rounded-lg flex items-center justify-center text-[9px] sm:text-[10px] text-ink-faint">
            Menunggu pemilihan industri...
          </div>
        )}
      </div>
    </div>
  );
}

function Screen1() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { name: "Kopi Aren Premium", category: "Minuman", price: "Rp 18.000", stock: 120, emoji: "☕" },
    { name: "Croissant Almond", category: "Makanan", price: "Rp 24.000", stock: 45, emoji: "🥐" },
    { name: "Ice Matcha Latte", category: "Minuman", price: "Rp 20.000", stock: 85, emoji: "🍵" },
  ];

  return (
    <div className="p-4 sm:p-6 h-full flex flex-col justify-between bg-canvas text-left">
      <div>
        <div className="flex items-center justify-between border-b border-hairline pb-2 sm:pb-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs font-semibold text-ink-secondary">Manajemen Katalog Produk</span>
          </div>
          <div className="flex gap-1.5">
            <button className="px-1.5 sm:px-2 py-0.5 border border-hairline rounded text-[9px] sm:text-[10px] bg-canvas text-ink-secondary hover:bg-canvas-soft">
              + Tambah
            </button>
            <button className="px-1.5 sm:px-2 py-0.5 border border-hairline rounded text-[9px] sm:text-[10px] bg-primary text-white font-medium hover:bg-primary-active flex items-center gap-1">
              <Upload className="w-2 sm:w-2.5 h-2 sm:h-2.5" /> Import CSV
            </button>
          </div>
        </div>

        {step === 0 && (
          <div className="h-28 sm:h-40 border-2 border-dashed border-hairline rounded-xl flex flex-col items-center justify-center text-center p-3 sm:p-4">
            <FileSpreadsheet className="w-6 sm:w-8 h-6 sm:h-8 text-ink-faint mb-1.5 sm:mb-2" />
            <span className="text-[11px] sm:text-xs font-semibold text-ink">Seret file CSV katalog di sini</span>
            <span className="text-[9px] sm:text-[10px] text-ink-faint mt-0.5 sm:mt-1">Atau klik untuk menelusuri folder komputer</span>
          </div>
        )}

        {step === 1 && (
          <div className="h-28 sm:h-40 border border-hairline rounded-xl flex flex-col items-center justify-center p-4 sm:p-6 space-y-2 sm:space-y-3 bg-canvas-soft">
            <div className="flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-spin" />
              <span className="text-[11px] sm:text-xs font-semibold text-ink">Mengunggah katalog-menu.csv...</span>
            </div>
            <div className="w-full bg-hairline h-1.5 sm:h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "15%" }}
                animate={{ width: "90%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="bg-primary h-full rounded-full"
              />
            </div>
            <span className="text-[9px] sm:text-[10px] text-ink-faint">Mengunggah baris 42 dari 100...</span>
          </div>
        )}

        {step >= 2 && (
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-ink-faint px-1">
              <span>NAMA PRODUK</span>
              <div className="flex gap-6 sm:gap-8">
                <span>STOK</span>
                <span>HARGA</span>
              </div>
            </div>
            <div className="space-y-1 sm:space-y-1.5 max-h-[105px] sm:max-h-[140px] overflow-hidden">
              {products.map((p, idx) => {
                const showRow = step >= 2 && (idx === 0 || step === 3);
                if (!showRow) return null;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.15 }}
                    className="p-1.5 sm:p-2 border border-hairline rounded-lg bg-canvas flex items-center justify-between hover:border-primary/20 transition-notion"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs sm:text-sm select-none">{p.emoji}</span>
                      <div className="truncate">
                        <p className="text-[10px] sm:text-[11px] font-bold text-ink truncate leading-tight">{p.name}</p>
                        <p className="text-[8px] sm:text-[9px] text-ink-faint leading-none">{p.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:gap-6 items-center text-right">
                      <span className="text-[9px] sm:text-[10px] font-mono font-medium text-ink-secondary bg-canvas-soft px-1 sm:px-1.5 py-0.5 rounded border border-hairline">
                        {p.stock}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-ink-secondary">{p.price}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 sm:mt-4">
        {step >= 2 ? (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-1.5 sm:p-2 rounded-lg bg-primary/5 border border-primary/15 flex items-center gap-2"
          >
            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary stroke-[3]" />
            <span className="text-[9px] sm:text-[10px] text-ink-secondary font-medium">Katalog Berhasil Diimpor! 3 menu terdaftar ke sistem.</span>
          </motion.div>
        ) : (
          <div className="h-5 sm:h-6" />
        )}
      </div>
    </div>
  );
}

function Screen2() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 sm:p-4 h-full flex flex-col sm:flex-row bg-canvas text-left gap-2 sm:gap-3 overflow-hidden">
      {/* Menu / POS Grid */}
      <div className="flex-1 flex flex-col justify-between gap-2">
        <div>
          <div className="flex items-center justify-between border-b border-hairline pb-1.5 mb-1.5">
            <span className="text-[9px] sm:text-[10px] font-bold text-ink-secondary uppercase tracking-wider">Layar POS Kasir</span>
            <span className="text-[8px] sm:text-[9px] text-sticker-green bg-sticker-green/10 px-1.5 py-0.5 rounded font-bold">● Online</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {[
              { name: "Kopi Aren", price: "18k", emoji: "☕", id: 1 },
              { name: "Croissant", price: "24k", emoji: "🥐", id: 2 },
              { name: "Ice Matcha", price: "20k", emoji: "🍵", id: 3 },
              { name: "Red Velvet", price: "22k", emoji: "🍰", id: 4 },
            ].map((item) => {
              const isAdded = (item.id === 1 && step >= 1) || (item.id === 2 && step >= 2);
              return (
                <div
                  key={item.id}
                  className={`p-1.5 sm:p-2 border rounded-lg flex items-center gap-1.5 sm:gap-2 transition-all duration-200 relative ${
                    isAdded ? "border-primary bg-primary/5 scale-[1.02]" : "border-hairline bg-canvas hover:border-hairline/80"
                  }`}
                >
                  <span className="text-base sm:text-lg select-none">{item.emoji}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] font-bold text-ink truncate leading-tight">{item.name}</p>
                    <p className="text-[8px] sm:text-[9px] text-ink-muted leading-tight">Rp {item.price}</p>
                  </div>
                  {isAdded && (
                    <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-primary text-white flex items-center justify-center text-[7px] font-bold">
                      1
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tips Banner */}
        <div className="bg-canvas-soft border border-hairline p-1.5 rounded-lg text-[8px] sm:text-[9px] text-ink-muted leading-normal sm:block hidden">
          💡 <span className="font-medium text-ink-secondary">QRIS Dinamis Otomatis</span>: QR code terbuat instan sesuai nominal belanja.
        </div>
      </div>

      {/* Cart Summary Sidebar */}
      <div className="w-full border-t border-hairline pt-2 flex flex-col justify-between sm:w-[150px] sm:border-t-0 sm:border-l sm:pl-3 relative sm:bg-canvas-soft bg-canvas-soft/40 p-2 sm:p-4 rounded-lg sm:rounded-none sm:-m-4">
        <div className="space-y-1 sm:space-y-2 flex-1">
          <p className="text-[9px] sm:text-[10px] font-bold text-ink border-b border-hairline pb-1.5 flex items-center gap-1">
            <Receipt className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" /> Ringkasan
          </p>

          <div className="space-y-0.5 sm:space-y-1 max-h-[50px] sm:max-h-[100px] overflow-auto">
            {step >= 1 && (
              <div className="flex justify-between items-center text-[8px] sm:text-[9px] text-ink">
                <span className="truncate max-w-[80px]">1x Kopi Aren</span>
                <span className="font-mono font-medium">Rp 18.000</span>
              </div>
            )}
            {step >= 2 && (
              <div className="flex justify-between items-center text-[8px] sm:text-[9px] text-ink">
                <span className="truncate max-w-[80px]">1x Croissant</span>
                <span className="font-mono font-medium">Rp 24.000</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Payment Info */}
        <div className="space-y-1.5 sm:space-y-2 pt-1.5 border-t border-hairline sm:bg-canvas-soft">
          <div className="flex justify-between items-center">
            <span className="text-[8px] sm:text-[9px] text-ink-muted font-medium">TOTAL:</span>
            <span className="text-xs font-bold text-primary font-mono">
              Rp {step === 0 ? "0" : step === 1 ? "18.000" : "42.000"}
            </span>
          </div>

          {step < 3 && (
            <button className={`w-full py-1 sm:py-1.5 rounded text-[9px] sm:text-[10px] font-bold text-white transition-notion flex items-center justify-center gap-1 ${
              step >= 1 ? "bg-primary hover:bg-primary-active" : "bg-ink-faint cursor-not-allowed"
            }`}>
              Bayar QRIS
            </button>
          )}

          {step === 3 && (
            <div className="text-center py-1 bg-primary/10 border border-primary/20 rounded flex items-center justify-center gap-1 text-[8px] sm:text-[9px] text-primary font-bold">
              <Loader2 className="w-2.5 h-2.5 animate-spin" /> Menghubungkan QRIS
            </div>
          )}

          {step >= 4 && (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-1 sm:p-1.5 bg-sticker-green/10 border border-sticker-green/20 rounded text-center"
            >
              <p className="text-[9px] sm:text-[10px] font-bold text-sticker-green flex items-center justify-center gap-1">
                ✓ LUNAS
              </p>
              <p className="text-[7px] sm:text-[8px] text-ink-muted leading-none mt-0.5">Metode: QRIS Gopay</p>
            </motion.div>
          )}
        </div>

        {/* Pop-up QR code modal */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 bg-canvas/95 flex flex-col items-center justify-center p-2 text-center z-30"
          >
            <p className="text-[8px] sm:text-[9px] font-bold text-ink mb-1">Scan QRIS Dinamis</p>
            {/* Mock QR box */}
            <div className="w-14 sm:w-20 h-14 sm:h-20 bg-ink p-1 rounded-md mb-1 sm:mb-1.5 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between h-[45%]">
                <div className="w-2.5 sm:w-4 h-2.5 sm:h-4 bg-canvas border-2 border-ink" />
                <div className="w-2.5 sm:w-4 h-2.5 sm:h-4 bg-canvas border-2 border-ink" />
              </div>
              <div className="flex justify-between items-end h-[45%]">
                <div className="w-2.5 sm:w-4 h-2.5 sm:h-4 bg-canvas border-2 border-ink" />
                <div className="w-2.5 sm:w-4 h-2.5 sm:h-4 bg-canvas flex items-center justify-center"><div className="w-1 h-1.5 bg-ink" /></div>
              </div>
            </div>
            <p className="text-[7px] sm:text-[8px] text-primary animate-pulse font-medium">Menunggu pembayaran...</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-advance step every 6 seconds if autoplay is active
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const steps = [
    {
      step: "01",
      title: "Daftar & Pilih Industri",
      desc: "Buat akun dalam 1 menit, pilih kategori industri bisnis Anda. Dashboard layout POS langsung menyesuaikan otomatis.",
      icon: UserPlus,
      colorClass: "bg-sticker-purple/15 text-sticker-purple-deep border-sticker-purple/20",
    },
    {
      step: "02",
      title: "Setup Katalog Produk",
      desc: "Input daftar produk atau upload file CSV/Excel. Ribuan data barang langsung terorganisir rapi dalam sekejap.",
      icon: Database,
      colorClass: "bg-sticker-sky/15 text-primary border-sticker-sky/20",
    },
    {
      step: "03",
      title: "Mulai Transaksi!",
      desc: "Kasir siap melayani pelanggan. Setiap pembayaran QRIS otomatis terverifikasi dan tercatat ke laporan keuangan real-time.",
      icon: CreditCard,
      colorClass: "bg-sticker-orange/15 text-sticker-orange-deep border-sticker-orange/20",
    },
  ];

  return (
    <section id="cara-kerja" className="py-12 md:py-20 bg-canvas-soft border-b border-hairline overflow-hidden">
      <div className="container-notion space-y-6 md:space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 md:space-y-3">
          <span className="text-eyebrow uppercase tracking-wider text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full inline-block select-none">
            Kemudahan Integrasi
          </span>
          <h2 className="text-heading-1 text-ink tracking-tight">
            Mulai Operasional dalam 3 Langkah
          </h2>
          <p className="text-body-md text-ink-muted leading-relaxed">
            LancarPos dirancang tanpa kerumitan. Hanya butuh beberapa menit sampai kasir Anda siap melayani pelanggan pertama.
          </p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: Stepper Interactive Cards */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={st.step}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsAutoplay(false);
                  }}
                  onMouseEnter={() => {
                    setActiveIndex(idx);
                    setIsAutoplay(false);
                  }}
                  className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 relative select-none ${
                    isActive 
                      ? "border-primary bg-canvas shadow-soft scale-[1.02] z-10" 
                      : "border-hairline bg-canvas/60 hover:bg-canvas hover:border-hairline/80 shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Circle Icon Container */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isActive 
                          ? st.colorClass 
                          : "bg-canvas border-hairline text-ink-faint"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Text Details */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-primary">Langkah {st.step}</span>
                        {isActive && (
                          <span className="text-[10px] text-sticker-teal bg-sticker-teal/10 px-1.5 py-0.5 rounded font-medium animate-pulse">
                            Aktif
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-ink tracking-tight">{st.title}</h4>
                      <p className="text-xs text-ink-secondary leading-relaxed">{st.desc}</p>
                    </div>
                  </div>

                  {/* Sleek Autoplay micro progress bar */}
                  {isActive && isAutoplay && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Mock Browser Window Frame Container */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-canvas border border-hairline rounded-2xl shadow-elevated overflow-hidden h-auto min-h-[300px] sm:min-h-[350px] md:aspect-[4/3] md:h-full flex flex-col relative group">
              {/* Mock Browser Header */}
              <div className="bg-canvas-soft border-b border-hairline px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 max-w-xs mx-auto bg-canvas border border-hairline rounded-md py-1 px-3 text-[10px] text-ink-muted text-center font-mono flex items-center justify-center gap-1 shadow-inner">
                  <span className="text-sticker-teal">https://</span>app.lancarpos.co/setup
                </div>
                <div className="w-12 flex justify-end">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAutoplay(!isAutoplay);
                    }}
                    className="p-1 rounded hover:bg-canvas-soft text-ink-muted transition-notion flex items-center justify-center"
                    title={isAutoplay ? "Pause Autoplay" : "Mulai Autoplay"}
                  >
                    {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              
              {/* Mock Browser Page Canvas with slide transition */}
              <div className="flex-1 bg-canvas overflow-hidden relative min-h-[300px] md:h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="h-full"
                  >
                    {activeIndex === 0 && <Screen0 />}
                    {activeIndex === 1 && <Screen1 />}
                    {activeIndex === 2 && <Screen2 />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Action Suggestion Footnote */}
        <p className="text-[11px] text-ink-faint italic flex items-center justify-center gap-1.5 select-none pt-4 text-center">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> Setup cepat selesai tanpa membutuhkan instalasi hardware khusus.
        </p>

      </div>
    </section>
  );
}
