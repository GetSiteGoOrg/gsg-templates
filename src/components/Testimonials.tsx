"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "I can get my kid's check-up and my own dental cleaning booked the same afternoon. One clinic, one parking lot — it's made a real difference.",
    name: "Jordan K.",
    role: "Patient since 2021",
  },
  {
    quote: "Booked a same-day urgent care slot online at 9pm, was seen the next morning. Genuinely saved my week.",
    name: "Priya S.",
    role: "Patient since 2023",
  },
  {
    quote: "My specialist referral happened down the hall, not across town. That alone is worth switching clinics for.",
    name: "Daniel O.",
    role: "Patient since 2019",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
            Patient stories
          </span>
          <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
            Don&apos;t just take our word for it
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="text-accent text-xl mb-4">★★★★★</div>
          <p className="font-display text-xl md:text-2xl text-primary-dark mb-6 leading-relaxed">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="font-semibold text-primary-dark">{current.name}</div>
          <div className="text-sm text-text-muted">{current.role}</div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  active === i ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}