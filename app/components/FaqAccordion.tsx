"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I guarantee my industry exclusivity?",
    a: "Once you book a suburb for your industry category, no other contractor in that category can book the same suburb and mail date. Our system automatically blocks competing businesses from the same time slot, giving you 100% exclusivity in your chosen market.",
  },
  {
    q: "What is the minimum volume per mailing?",
    a: "Our minimum mailing volume is 2,500 homes per suburb. Most suburbs range between 3,000–8,000 homes. We'll provide the exact household count for your chosen area during your free strategy session.",
  },
  {
    q: "Can I use my own graphic designer?",
    a: "Absolutely. While our in-house creative team is included at no extra cost, you're welcome to supply print-ready artwork. We'll provide full bleed specifications and file requirements so your designer can deliver exactly what we need.",
  },
  {
    q: "How do we track the calls generated?",
    a: "Every campaign includes a unique local tracking phone number and optional QR code. You'll have access to a live dashboard showing call volume, scan rates, and geographic performance so you can measure your ROI with precision.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-6 py-5 text-left flex justify-between items-center group"
          >
            <span className="font-bold text-on-surface group-hover:text-primary transition-colors">
              {faq.q}
            </span>
            <span
              className="material-symbols-outlined text-outline shrink-0 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              expand_more
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-on-surface-variant leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
