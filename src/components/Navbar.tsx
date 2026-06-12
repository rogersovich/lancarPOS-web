"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-md border-b border-hairline shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-notion flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-body-sm shadow-soft transition-notion group-hover:scale-105">
              LP
            </div>
            <span className="text-title font-bold text-ink tracking-tight">
              Lancar<span className="text-primary">Pos</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-body-sm font-semibold text-ink-muted">
            <Link href="/#fitur" className="hover:text-ink transition-notion">
              Fitur
            </Link>
            <Link href="/#industri" className="hover:text-ink transition-notion">
              Solusi Industri
            </Link>
            <Link href="/#cara-kerja" className="hover:text-ink transition-notion">
              Cara Kerja
            </Link>
            <Link href="/#faq" className="hover:text-ink transition-notion">
              FAQ
            </Link>
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-hairline bg-canvas hover:bg-canvas-soft text-button-text text-ink-secondary font-semibold rounded-full shadow-soft transition-notion"
            >
              Coba Demo
            </a>
            <a
              href="https://lancar-pos-dashboard.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white text-button-text hover:bg-primary-active font-semibold rounded-full shadow-soft transition-notion flex items-center gap-1 hover:scale-[1.02] active:scale-[0.98]"
            >
              Daftar Gratis <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-md md:hidden hover:bg-canvas-soft border border-hairline/40 transition-notion cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-canvas border-b border-hairline shadow-elevated p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 text-body-md font-semibold text-ink-secondary">
              <Link
                href="/#fitur"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-hairline/50 hover:text-primary transition-notion"
              >
                Fitur
              </Link>
              <Link
                href="/#industri"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-hairline/50 hover:text-primary transition-notion"
              >
                Solusi Industri
              </Link>
              <Link
                href="/#cara-kerja"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-hairline/50 hover:text-primary transition-notion"
              >
                Cara Kerja
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="py-2 border-b border-hairline/50 hover:text-primary transition-notion"
              >
                FAQ
              </Link>
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://lancar-pos-dashboard.vercel.app/login?demo=true&industry=fnb"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center border border-hairline bg-canvas hover:bg-canvas-soft text-button-text text-ink font-semibold rounded-full shadow-soft transition-notion"
              >
                Coba Demo
              </a>
              <a
                href="https://lancar-pos-dashboard.vercel.app/register"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 text-center bg-primary text-white text-button-text font-semibold rounded-full shadow-soft transition-notion flex items-center justify-center gap-1.5"
              >
                Daftar Gratis <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
