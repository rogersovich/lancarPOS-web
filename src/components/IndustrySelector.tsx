"use client";

import React, { useState } from "react";
import MockupDashboard from "./MockupDashboard";
import { Shirt, Coffee, Home, ChevronRight } from "lucide-react";

type Industry = "laundry" | "fnb" | "toko-bangunan";

interface FeatureItem {
  label: string;
  desc: string;
}

interface IndustryData {
  id: Industry;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  themeColor: string;
  textColor: string;
  bulletColor: string;
  features: FeatureItem[];
  demoUrl: string;
}

export default function IndustrySelector() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("fnb");

  const industries: IndustryData[] = [
    {
      id: "laundry",
      title: "Laundry",
      subtitle: "Kiloan & Satuan",
      icon: <Shirt className="w-5 h-5" />,
      themeColor: "bg-sticker-purple/15 text-sticker-purple-deep border-sticker-purple/20",
      textColor: "text-sticker-purple-deep",
      bulletColor: "bg-sticker-purple",
      features: [
        {
          label: "Pencatatan Kiloan & Satuan",
          desc: "Catat dan kelola setiap transaksi layanan per kilogram atau satuan secara fleksibel."
        },
        {
          label: "Pelacakan Status Real-time",
          desc: "Pantau tahapan pencucian pelanggan secara langsung: proses &rarr; selesai &rarr; diambil."
        },
        {
          label: "Estimasi Selesai Otomatis",
          desc: "Sistem menghitung estimasi waktu rampung secara otomatis untuk menghindari komplain pelanggan."
        }
      ],
      demoUrl: "https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=laundry"
    },
    {
      id: "fnb",
      title: "F&B",
      subtitle: "Cafe & Restoran",
      icon: <Coffee className="w-5 h-5" />,
      themeColor: "bg-primary/10 text-primary border-primary/20",
      textColor: "text-primary",
      bulletColor: "bg-primary",
      features: [
        {
          label: "Kategori Menu Terorganisir",
          desc: "Kelompokkan menu dengan kategori makanan, minuman, dan snack secara rapih."
        },
        {
          label: "Opsi Layanan Fleksibel",
          desc: "Kelola pesanan makan di tempat (dine-in) atau bawa pulang (takeaway) dengan mudah."
        },
        {
          label: "Analisis Produk Terlaris",
          desc: "Laporan otomatis menyajikan menu terpopuler harian untuk optimasi stok bahan baku."
        }
      ],
      demoUrl: "https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
    },
    {
      id: "toko-bangunan",
      title: "Toko Bangunan",
      subtitle: "Grosir & Eceran",
      icon: <Home className="w-5 h-5" />,
      themeColor: "bg-sticker-orange/15 text-sticker-orange-deep border-sticker-orange/20",
      textColor: "text-sticker-orange-deep",
      bulletColor: "bg-sticker-orange",
      features: [
        {
          label: "Dual Pricing Otomatis",
          desc: "Kelola harga eceran dan harga grosir (borongan) secara otomatis untuk setiap item."
        },
        {
          label: "Satuan Multi-Konversi",
          desc: "Stok fleksibel terhitung dalam berbagai satuan (Sak, Batang, M², atau Unit) dengan akurat."
        },
        {
          label: "Notifikasi Limit Kritis",
          desc: "Peringatan otomatis dikirimkan saat persediaan barang material mulai melewati ambang batas minimum."
        }
      ],
      demoUrl: "https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=toko-bangunan"
    }
  ];

  const current = industries.find((ind) => ind.id === activeIndustry)!;

  return (
    <div className="space-y-8">
      {/* Selector Tabs Row */}
      <div className="flex flex-col sm:flex-row gap-2.5 max-w-2xl mx-auto p-1.5 bg-canvas-soft border border-hairline rounded-xl select-none">
        {industries.map((ind) => {
          const isActive = activeIndustry === ind.id;
          return (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind.id)}
              className={`flex-1 flex items-center justify-between p-3.5 rounded-lg border text-left transition-notion cursor-pointer ${
                isActive
                  ? "bg-canvas border-hairline shadow-soft text-ink"
                  : "bg-transparent border-transparent text-ink-muted hover:bg-canvas-soft hover:text-ink-secondary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md ${isActive ? ind.themeColor : "bg-hairline/60 text-ink-muted"}`}>
                  {ind.icon}
                </div>
                <div>
                  <h4 className="font-bold leading-none text-body-sm">{ind.title}</h4>
                  <span className="text-[11px] text-ink-faint font-medium mt-1 inline-block">
                    {ind.subtitle}
                  </span>
                </div>
              </div>
              
              {isActive && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Layout - Two Columns on Large Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left features column - Widened and redesigned layout */}
        <div className="lg:col-span-5 space-y-7 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-eyebrow uppercase tracking-wider text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full inline-block select-none">
              USP LancarPos
            </span>
            <h3 className="text-heading-2 text-ink tracking-tight">
              Dashboard Spesifik Untuk Kebutuhan <span className="text-primary">{current.title}</span>
            </h3>
            <p className="text-body-md text-ink-secondary leading-relaxed">
              LancarPos dirancang khusus dengan menyesuaikan alur kerja industri Anda. Kami menyajikan antarmuka spesifik untuk kelancaran bisnis Anda.
            </p>
          </div>

          {/* Premium Vertical Timeline Feature List */}
          <div className="relative border-l border-hairline/80 pl-6 ml-2.5 space-y-5">
            {current.features.map((feat, idx) => (
              <div key={idx} className="relative text-left">
                {/* Dynamic colored timeline bullet */}
                <div className={`absolute -left-[30.5px] top-1.5 w-2.5 h-2.5 rounded-full border border-canvas shadow-soft ${current.bulletColor}`} />
                <h4 className="font-bold text-ink text-body-sm leading-none">{feat.label}</h4>
                <p className="text-[12px] text-ink-muted leading-relaxed mt-1">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Fully balanced CTA buttons row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={current.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-5 bg-primary text-white text-button-text font-bold rounded-full shadow-soft hover:bg-primary-active hover:scale-[1.01] active:scale-[0.99] transition-notion flex items-center justify-center gap-1.5"
            >
              Coba Demo {current.title} <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-5 bg-canvas border border-hairline text-ink-secondary text-button-text font-bold rounded-full shadow-soft hover:bg-canvas-soft text-center transition-notion flex items-center justify-center"
            >
              Lihat Demo Umum
            </a>
          </div>
        </div>

        {/* Right dashboard column - Set to lg:col-span-7 to balance the 5-col split */}
        <div className="lg:col-span-7">
          <MockupDashboard industry={activeIndustry} />
        </div>
      </div>
    </div>
  );
}
