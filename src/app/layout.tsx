import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LancarPos — POS Dashboard untuk UMKM Indonesia",
  description:
    "Kasir, stok, dan laporan bisnis dalam satu dashboard. Dirancang khusus untuk Laundry, F&B, dan Toko Bangunan.",
  openGraph: {
    title: "LancarPos — POS Dashboard untuk UMKM Indonesia",
    description:
      "Kasir, stok, dan laporan bisnis dalam satu dashboard. Dirancang khusus untuk Laundry, F&B, dan Toko Bangunan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-canvas-soft text-ink">
        {children}
        <Toaster position="bottom-right" richColors toastOptions={{
          style: {
            borderRadius: '12px',
            fontFamily: 'var(--font-inter)',
          }
        }} />
      </body>
    </html>
  );
}
