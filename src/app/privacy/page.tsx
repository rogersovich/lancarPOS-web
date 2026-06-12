import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 py-12 md:py-20 bg-canvas-soft/40">
        <div className="container-notion max-w-3xl">
          {/* Back breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 text-caption font-semibold text-ink-muted hover:text-ink transition-notion"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
          </div>

          {/* Document Content */}
          <article className="bg-canvas border border-hairline rounded-xl p-8 md:p-12 shadow-soft space-y-8 text-left">
            <header className="border-b border-hairline pb-6 space-y-2">
              <h1 className="text-display-2 text-ink font-bold tracking-tight">Kebijakan Privasi</h1>
              <p className="text-caption text-ink-faint">Terakhir diperbarui: 12 Juni 2026</p>
            </header>

            <div className="space-y-6 text-body-sm text-ink-secondary leading-relaxed">
              <p>
                Selamat datang di LancarPos. Kami sangat menghargai kepercayaan Anda dan berkomitmen untuk melindungi informasi pribadi serta data bisnis Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan layanan dasbor POS kami.
              </p>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">1. Data yang Kami Kumpulkan</h3>
                <p>Kami mengumpulkan beberapa informasi dasar saat Anda menggunakan platform kami:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Informasi Pendaftaran:</strong> Nama lengkap, alamat email, nomor telepon, dan password terenkripsi saat Anda membuat akun.</li>
                  <li><strong>Informasi Bisnis:</strong> Nama outlet/toko, kategori industri (Laundry, F&B, Toko Bangunan), alamat outlet, dan detail produk/stok.</li>
                  <li><strong>Data Transaksi:</strong> Informasi mengenai pesanan, riwayat penjualan, metode pembayaran, total transaksi, dan audit log kasir.</li>
                  <li><strong>Data Log:</strong> Alamat IP, jenis peramban (browser), sistem operasi, dan waktu aktivitas Anda di platform kami.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">2. Bagaimana Kami Menggunakan Data Anda</h3>
                <p>Informasi yang kami kumpulkan digunakan untuk tujuan berikut:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Menyediakan, mengoperasikan, dan memelihara fitur dasbor kasir serta manajemen stok LancarPos.</li>
                  <li>Memproses transaksi kasir dan mengirimkan rekapitulasi laporan harian/bulanan ke alamat email Owner.</li>
                  <li>Mengirimkan notifikasi peringatan otomatis saat stok produk tertentu di outlet Anda mulai menipis.</li>
                  <li>Meningkatkan kinerja aplikasi, memperbaiki bug, dan mengembangkan fitur-fitur baru yang relevan dengan industri Anda.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">3. Perlindungan & Keamanan Data</h3>
                <p>
                  Keamanan data bisnis Anda adalah prioritas utama kami. Seluruh data transaksi, informasi stok, dan detail akun disimpan di server awan (cloud) yang terisolasi dan terenkripsi menggunakan teknologi enkripsi 256-bit standar industri. 
                </p>
                <p>
                  Akses data dibatasi secara ketat berdasarkan kewenangan peran tim (Owner, Manager, Kasir) yang Anda tentukan sendiri pada pengaturan akun dasbor.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">4. Hak-Hak Anda</h3>
                <p>Sebagai pengguna, Anda memiliki kendali penuh atas data Anda:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Mendapatkan akses dan salinan seluruh data transaksi bisnis Anda kapan saja.</li>
                  <li>Melakukan ekspor (export) database produk dan stok ke dalam file format CSV atau Excel secara mandiri.</li>
                  <li>Mengajukan penutupan akun dan penghapusan seluruh riwayat data secara permanen dari server kami dengan menghubungi support.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">5. Hubungi Kami</h3>
                <p>
                  Jika Anda memiliki pertanyaan, masukan, atau keluhan mengenai kebijakan privasi ini, silakan hubungi kami melalui halaman Kontak atau kirim email langsung ke <a href="mailto:dimasroger89@gmail.com" className="text-primary font-semibold hover:underline">dimasroger89@gmail.com</a>.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
