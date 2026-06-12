import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-canvas-soft border-t border-hairline py-12 md:py-16 text-caption text-ink-muted">
      <div className="container-notion grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white font-black text-[12px]">
              LP
            </div>
            <span className="text-body-md font-bold text-ink tracking-tight">
              LancarPos
            </span>
          </Link>
          <p className="max-w-xs text-ink-secondary leading-relaxed">
            Kasir, stok, dan laporan bisnis kamu — semua dalam satu dashboard terintegrasi. Dirancang khusus untuk Laundry, F&B, dan Toko Bangunan di Indonesia.
          </p>
        </div>

        {/* Navigation Columns */}
        <div>
          <h5 className="font-bold text-ink mb-3 uppercase tracking-wider text-[11px]">
            Halaman Utama
          </h5>
          <ul className="space-y-2.5 font-medium">
            <li>
              <Link href="/#fitur" className="hover:text-primary transition-notion">
                Fitur Utama
              </Link>
            </li>
            <li>
              <Link href="/#cara-kerja" className="hover:text-primary transition-notion">
                Cara Kerja
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-primary transition-notion">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-notion font-semibold text-primary">
                Kontak & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h5 className="font-bold text-ink mb-3 uppercase tracking-wider text-[11px]">
            Dokumen & Hukum
          </h5>
          <ul className="space-y-2.5 font-medium">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-notion">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-notion">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-notion border-t border-hairline mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-ink-faint">
          © {new Date().getFullYear()} LancarPos. Hak Cipta Dilindungi.
        </p>
        <div className="flex gap-4 text-[12px] text-ink-faint">
          <span>Dibuat dengan ❤️ untuk UMKM Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
