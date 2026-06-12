import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
              <h1 className="text-display-2 text-ink font-bold tracking-tight">Syarat & Ketentuan</h1>
              <p className="text-caption text-ink-faint">Terakhir diperbarui: 12 Juni 2026</p>
            </header>

            <div className="space-y-6 text-body-sm text-ink-secondary leading-relaxed">
              <p>
                Selamat datang di LancarPos. Sebelum Anda mendaftar akun atau mencoba demo layanan dasbor Point of Sale (POS) kami, mohon untuk membaca Syarat & Ketentuan Penggunaan ini dengan seksama. Dengan mengakses atau menggunakan LancarPos, Anda setuju untuk terikat oleh ketentuan-ketentuan berikut.
              </p>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">1. Ketentuan Akun & Pendaftaran</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Anda harus memberikan alamat email yang aktif dan data informasi bisnis yang valid saat melakukan registrasi gratis.</li>
                  <li>Anda bertanggung jawab penuh untuk menjaga kerahasiaan kata sandi akun dan aktivitas transaksi apa pun yang terjadi di bawah kredensial akun Anda.</li>
                  <li>LancarPos berhak menangguhkan akun yang terbukti melakukan penyalahgunaan sistem atau terindikasi melakukan aktivitas transaksi ilegal/melanggar hukum Indonesia.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">2. Penggunaan Layanan & Akun Demo</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Layanan demo yang kami sediakan menggunakan data dummy/simulasi dan ditujukan murni untuk sarana uji coba fitur sebelum mendaftar.</li>
                  <li>Anda tidak diperkenankan memasukkan data sensitif pribadi atau rahasia keuangan asli ke dalam akun simulasi demo publik.</li>
                  <li>Layanan kasir LancarPos saat ini dirancang spesifik untuk segmen UMKM Laundry, F&B, dan Toko Bangunan. Penggunaan di luar kategori tersebut mungkin tidak memberikan performa layout yang optimal.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">3. Ketersediaan Layanan (Uptime) & Internet</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>LancarPos adalah aplikasi berbasis cloud. Anda memerlukan koneksi internet aktif yang stabil untuk menggunakan fitur transaksi kasir dan inventaris stok.</li>
                  <li>Kami berusaha menjaga ketersediaan sistem tetap berjalan 24/7. Namun, kami tidak bertanggung jawab atas kegagalan transaksi kasir yang diakibatkan oleh gangguan jaringan internet operator Anda atau force majeure.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">4. Batasan Tanggung Jawab</h3>
                <p>
                  LancarPos menyediakan sistem manajemen kasir dan stok untuk mempermudah operasional Anda. Kami tidak bertanggung jawab atas kerugian finansial, selisih kas kasir, kehilangan stok fisik barang, atau kesalahan pelaporan pajak bisnis Anda yang diakibatkan oleh kelalaian input atau human error dari tim internal toko Anda.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-heading-3 text-ink font-bold">5. Perubahan Ketentuan</h3>
                <p>
                  LancarPos berhak memperbarui Syarat & Ketentuan ini sewaktu-waktu. Jika ada perubahan material, kami akan memberikan pemberitahuan di halaman landing page ini atau melalui email terdaftar Anda sebelum perubahan tersebut berlaku efektif.
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
