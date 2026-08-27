"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I see a dentist and a doctor on the same visit?",
    answer: "Yes — many patients book back-to-back dental and medical appointments in one trip.",
  },
  {
    question: "Do you accept my insurance?",
    answer: "We're in-network with Delta Dental, Cigna, MetLife, Aetna, and Medicare — we'll verify your benefits before your visit.",
  },
  {
    question: "Is urgent care walk-in only?",
    answer: "Walk-ins are welcome, but booking a same-day slot online usually means a shorter wait.",
  },
  {
    question: "Do you see children?",
    answer: "Yes, from infancy through the teen years, across both our dental and pediatric departments.",
  },
  {
    question: "What should I bring to my first visit?",
    answer: "A photo ID, insurance card, and a list of any medications you're currently taking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
            Good to know
          </span>
          <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question} className="bg-surface rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-primary-dark">{faq.question}</span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full border border-primary text-primary flex items-center justify-center text-lg leading-none transition-transform ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-text-muted mb-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}