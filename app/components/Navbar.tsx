"use client";

import { useState } from "react";

const navLinks = [
  { label: "Pricing", href: "#pricing", active: false },
  { label: "Benefits", href: "#benefits", active: false },
  { label: "FAQ", href: "#faq", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/95 backdrop-blur-md border-slate-200 shadow-sm">
      <div className="h-20 px-8 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="text-2xl font-black text-blue-900 tracking-tighter shrink-0">
          Local Mail Marketing
        </div>

        <div className="hidden md:flex items-center gap-8 grow justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.active
                  ? "text-sm font-medium tracking-tight text-blue-800 border-b-2 border-blue-800 pb-1"
                  : "text-sm font-medium tracking-tight text-slate-600 hover:text-blue-800 transition-all duration-200"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          
          <a
            href="#lead-form"
            onClick={() => setMobileOpen(false)}
            className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-md hover:bg-primary-container active:scale-95 transition-all"
          >
            Get Started
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-slate-600">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <button className="text-left text-sm font-medium text-slate-600 hover:text-blue-800 transition-colors duration-150">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
