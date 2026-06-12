import React from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-canvas-soft border-b border-hairline">
      <div className="container-notion max-w-3xl space-y-6 md:space-y-12">
        <div className="text-center space-y-2 md:space-y-3">
          <span className="text-eyebrow uppercase tracking-wider text-primary font-bold select-none bg-primary/10 px-2.5 py-1 rounded-full inline-block">
            Pertanyaan Umum
          </span>
          <h2 className="text-heading-1 text-ink tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-body-md text-ink-muted">
            Temukan jawaban cepat untuk beberapa hal yang sering ditanyakan sebelum memulai.
          </p>
        </div>

        {/* Native Accordion using Exclusive Details layout */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <details name="faq" className="group bg-canvas border border-hairline rounded-xl p-4.5 shadow-soft open:shadow-elevated transition-all duration-300">
            <summary className="flex justify-between items-center font-bold text-ink cursor-pointer list-none select-none text-body-md">
              <span>Apakah data saya aman?</span>
              <ChevronDown className="w-4.5 h-4.5 text-ink-muted group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="mt-3 text-body-sm text-ink-secondary leading-relaxed border-t border-hairline/60 pt-3">
              Data bisnis Anda tersimpan secara terenkripsi dan terisolasi secara aman di server awan. Data Anda tidak akan bisa diakses oleh bisnis lain. Kami juga menyediakan fitur export dan backup data kapan saja secara gratis dalam format CSV/Excel.
            </div>
          </details>

          {/* FAQ 2 */}
          <details name="faq" className="group bg-canvas border border-hairline rounded-xl p-4.5 shadow-soft open:shadow-elevated transition-all duration-300">
            <summary className="flex justify-between items-center font-bold text-ink cursor-pointer list-none select-none text-body-md">
              <span>Apakah bisa dipakai tanpa internet?</span>
              <ChevronDown className="w-4.5 h-4.5 text-ink-muted group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="mt-3 text-body-sm text-ink-secondary leading-relaxed border-t border-hairline/60 pt-3">
              LancarPos membutuhkan koneksi internet aktif untuk memproses transaksi, memperbarui inventaris stok, dan sinkronisasi data secara instan ke dasbor Owner. Kami tidak menyediakan dukungan mode offline untuk saat ini.
            </div>
          </details>

          {/* FAQ 3 */}
          <details name="faq" className="group bg-canvas border border-hairline rounded-xl p-4.5 shadow-soft open:shadow-elevated transition-all duration-300">
            <summary className="flex justify-between items-center font-bold text-ink cursor-pointer list-none select-none text-body-md">
              <span>Bisnis saya bukan Laundry, F&B, atau Toko Bangunan. Apakah bisa pakai?</span>
              <ChevronDown className="w-4.5 h-4.5 text-ink-muted group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="mt-3 text-body-sm text-ink-secondary leading-relaxed border-t border-hairline/60 pt-3">
              Saat ini LancarPos sengaja difokuskan ke tiga industri tersebut agar kami dapat memberikan pengalaman fitur yang sangat relevan dan mendalam. Industri retail atau jasa lain sedang masuk dalam rencana pengembangan kami di fase berikutnya.
            </div>
          </details>

          {/* FAQ 4 */}
          <details name="faq" className="group bg-canvas border border-hairline rounded-xl p-4.5 shadow-soft open:shadow-elevated transition-all duration-300">
            <summary className="flex justify-between items-center font-bold text-ink cursor-pointer list-none select-none text-body-md">
              <span>Apakah ada kontrak jangka panjang?</span>
              <ChevronDown className="w-4.5 h-4.5 text-ink-muted group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="mt-3 text-body-sm text-ink-secondary leading-relaxed border-t border-hairline/60 pt-3">
              Sama sekali tidak ada. LancarPos bersifat pay-as-you-go. Anda bebas memulai, menonaktifkan, atau mengaktifkan kembali akun Anda kapan saja tanpa biaya pinalti atau administrasi tambahan.
            </div>
          </details>

          {/* FAQ 5 */}
          <details name="faq" className="group bg-canvas border border-hairline rounded-xl p-4.5 shadow-soft open:shadow-elevated transition-all duration-300">
            <summary className="flex justify-between items-center font-bold text-ink cursor-pointer list-none select-none text-body-md">
              <span>Bagaimana cara migrasi dari aplikasi kasir lama?</span>
              <ChevronDown className="w-4.5 h-4.5 text-ink-muted group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <div className="mt-3 text-body-sm text-ink-secondary leading-relaxed border-t border-hairline/60 pt-3">
              Anda bisa meng-import seluruh database daftar produk, harga, dan SKU secara instan menggunakan file CSV. Untuk data riwayat transaksi lama dari aplikasi lain, sayangnya tidak dapat di-import untuk saat ini demi menjaga konsistensi audit log database.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
