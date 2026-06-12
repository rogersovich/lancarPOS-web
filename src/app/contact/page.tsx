"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Send, CheckCircle2, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Silakan lengkapi semua kolom form.");
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading("Sedang mengirim pesan Anda...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok && data.success) {
        toast.success("Pesan terkirim!", { id: toastId });
        setIsSubmitted(true);
        if (data.simulated) {
          toast.warning("Simulasi: Resend API Key belum di-config.", { duration: 5000 });
        }
      } else {
        toast.error(data.error || "Gagal mengirim pesan. Silakan coba lagi.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast.error("Terjadi kesalahan koneksi. Silakan coba lagi.", { id: toastId });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 py-12 md:py-20 bg-canvas-soft/40">
        <div className="container-notion max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-eyebrow uppercase tracking-wider text-primary font-bold bg-primary/10 px-2.5 py-1 rounded-full inline-block">
                  Hubungi Kami
                </span>
                <h1 className="text-heading-1 text-ink tracking-tight font-bold">
                  Butuh Bantuan? Kami Siap Melayani
                </h1>
                <p className="text-body-md text-ink-secondary leading-relaxed">
                  Apakah Anda memiliki pertanyaan mengenai implementasi LancarPos untuk bisnis Anda, kendala sistem, atau ingin mengajukan kerja sama? Hubungi kami langsung.
                </p>
              </div>

              {/* Direct email card */}
              <div className="p-5 bg-canvas border border-hairline rounded-xl shadow-soft space-y-4">
                <h4 className="font-bold text-ink flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" /> Kirim Email Manual
                </h4>
                <p className="text-body-sm text-ink-secondary leading-relaxed">
                  Jika Anda lebih memilih menggunakan aplikasi email pribadi, kirim pesan langsung ke alamat email berikut:
                </p>
                <div className="p-3 bg-canvas-soft border border-hairline rounded-md text-left flex items-center justify-between group">
                  <a 
                    href="mailto:dimasroger89@gmail.com" 
                    className="font-mono font-bold text-primary hover:underline text-body-sm truncate"
                  >
                    dimasroger89@gmail.com
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("dimasroger89@gmail.com");
                      toast.success("Alamat email berhasil disalin!");
                    }}
                    className="text-[11px] font-semibold text-ink-muted hover:text-ink transition-notion cursor-pointer shrink-0 ml-2 bg-canvas px-2 py-1 rounded border border-hairline"
                  >
                    Salin
                  </button>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:col-span-7">
              <div className="bg-canvas border border-hairline rounded-xl p-6 md:p-8 shadow-soft">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form-view"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-bold text-ink text-heading-3">Form Kontak Support</h3>
                        <p className="text-caption text-ink-muted mt-1">
                          Lengkapi form di bawah dan support team kami akan membalas secepatnya.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-caption font-bold text-ink-secondary">
                            Nama Lengkap
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Masukkan nama Anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-body-sm text-ink outline-none focus:border-primary focus:shadow-soft transition-notion"
                            required
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-caption font-bold text-ink-secondary">
                            Alamat Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-body-sm text-ink outline-none focus:border-primary focus:shadow-soft transition-notion"
                            required
                          />
                        </div>

                        {/* Subject Input */}
                        <div className="space-y-1.5">
                          <label htmlFor="subject" className="text-caption font-bold text-ink-secondary">
                            Subjek
                          </label>
                          <input
                            id="subject"
                            type="text"
                            placeholder="Tulis subjek pesan"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-body-sm text-ink outline-none focus:border-primary focus:shadow-soft transition-notion"
                            required
                          />
                        </div>

                        {/* Message Input */}
                        <div className="space-y-1.5">
                          <label htmlFor="message" className="text-caption font-bold text-ink-secondary">
                            Pesan
                          </label>
                          <textarea
                            id="message"
                            placeholder="Tulis detail pesan atau pertanyaan Anda di sini..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="w-full px-3.5 py-2.5 bg-canvas border border-hairline rounded-md text-body-sm text-ink outline-none focus:border-primary focus:shadow-soft transition-notion resize-none"
                            required
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`w-full py-3 bg-primary text-white text-button-text font-bold rounded-full shadow-soft hover:bg-primary-active hover:scale-[1.01] active:scale-[0.99] transition-notion flex items-center justify-center gap-2 ${
                            isLoading ? "opacity-80 cursor-not-allowed" : "cursor-pointer"
                          }`}
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4.5 h-4.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Mengirim Pesan...
                            </>
                          ) : (
                            <>
                              Kirim Pesan <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="py-12 text-center space-y-6 flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-sticker-green/10 text-sticker-green flex items-center justify-center border-4 border-sticker-green/20">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-ink text-heading-2 tracking-tight">Pesan Berhasil Terkirim</h3>
                        <p className="text-body-md text-ink-secondary max-w-sm mx-auto leading-relaxed">
                          Pesan kamu sudah terkirim. Kami akan membalas dalam 1–2 hari kerja.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setEmail("");
                          setSubject("");
                          setMessage("");
                        }}
                        className="px-5 py-2 bg-canvas-soft border border-hairline text-caption font-semibold rounded-full hover:bg-hairline/50 transition-notion flex items-center gap-1 cursor-pointer"
                      >
                        Kirim Pesan Lainnya <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
