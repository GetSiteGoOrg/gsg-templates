"use client";

import { useState } from "react";
import { BrandIcon, PhoneIcon } from "./icons";

const navLinks = [
  { href: "#departments", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#team", label: "Providers" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold text-primary-dark text-lg">
          <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
            <BrandIcon className="w-5 h-5 text-white" />
          </span>
          <span className="hidden sm:inline">Harborline Health &amp; Dental</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-text">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+15551234567" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary-dark">
            <PhoneIcon className="w-4 h-4" />
            (555) 123-4567
          </a>
          <a
            href="#booking"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold px-6 py-3 hover:bg-primary-dark transition-colors"
          >
            Book Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-6 h-0.5 bg-primary-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary-dark transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-text">
              {link.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold px-6 py-3">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}