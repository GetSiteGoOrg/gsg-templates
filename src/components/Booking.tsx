"use client";

import { useState } from "react";

const services = [
  { name: "Dental Cleaning & Exam", duration: "~45 min" },
  { name: "Annual Physical", duration: "~40 min" },
  { name: "Pediatric Well-Visit", duration: "~30 min" },
  { name: "Urgent Care Visit", duration: "~30 min · same-day" },
];

const times = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];

function getUpcomingDates(count: number) {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }
  return dates;
}

const stepLabels = ["Service", "Date", "Time", "Details"];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastName, setLastName] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const dates = getUpcomingDates(14);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    const clientToken = process.env.NEXT_PUBLIC_CLIENT_TOKEN;
    // No token configured — this is a demo/preview deployment.
    // Skip the real API call entirely, just show the confirmation.
    if (!clientToken) {
      setConfirmed(true);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientToken: process.env.NEXT_PUBLIC_CLIENT_TOKEN,
          customerName: `${firstName} ${lastName}`,
          customerEmail: email,
          customerPhone: phone,
          serviceRequested: service,
          appointmentDate: date?.toISOString().split("T")[0],
          appointmentTime: time,
          notes,
        }),
      });

      if (!res.ok) {
        const error = await res.json().catch(() => ({ message: "Something went wrong" }));
        throw new Error(error.message || "Something went wrong");
      }

      setConfirmed(true);
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setService(null);
    setDate(null);
    setTime(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setConfirmed(false);
  };

  if (confirmed) {
    return (
      <section id="booking" className="py-24 bg-bg-alt">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-xl mx-auto bg-surface rounded-3xl p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-primary-dark text-2xl mb-3">
              You&apos;re booked, {firstName}!
            </h3>
            <p className="text-text-muted max-w-md mx-auto mb-6">
              {service} on {date?.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at {time}. A confirmation has been sent to {email}.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary-dark font-semibold px-7 py-3 hover:bg-primary/5 transition-colors"
            >
              Book another appointment
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-bg-alt">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
            Book online
          </span>
          <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl mb-3">
            Grab your appointment in under 2 minutes
          </h2>
          <p className="text-text-muted mb-0">Pick a department and service, choose a time, and you&apos;re set.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-surface rounded-3xl p-6 md:p-8">
        <div className="flex mb-8">
            {stepLabels.map((label, i) => {
                const num = i + 1;
                const active = step === num;
                const done = step > num;
                return (
                <div key={label} className="flex-1 text-center relative">
                  {i !== 0 && (
                    <div className={`absolute h-0.5 top-[14px] left-[-50%] w-full ${done ? "bg-primary" : "bg-border"}`} />
                    )}
                    <div
                    className={`relative z-10 w-[30px] h-[30px] rounded-full border-2 flex items-center justify-center mx-auto mb-2 text-sm font-bold ${
                        done
                        ? "bg-primary border-primary text-white"
                        : active
                        ? "border-primary text-primary bg-surface"
                        : "border-border text-text-muted bg-surface"
                    }`}
                    >
                    {num}
                    </div>
                    <span className={`text-xs font-semibold ${active ? "text-primary-dark" : "text-text-muted"}`}>{label}</span>
                </div>
                );
            })}
            </div>

          {step === 1 && (
            <div>
              <h3 className="font-display font-semibold text-primary-dark text-xl mb-5">What do you need?</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {services.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setService(s.name)}
                    className={`text-left rounded-2xl border-2 px-5 py-4 transition-colors ${
                      service === s.name ? "border-primary bg-primary/5" : "border-border"
                    }`}
                  >
                    <strong className="block text-primary-dark mb-1">{s.name}</strong>
                    <span className="text-sm text-text-muted">{s.duration}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  disabled={!service}
                  onClick={() => setStep(2)}
                  className="rounded-full bg-primary text-white font-semibold px-7 py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="font-display font-semibold text-primary-dark text-xl mb-5">Choose a date</h3>
              <div className="flex gap-3 overflow-x-auto pb-2 mb-6">
                {dates.map((d) => {
                  const selected = date?.toDateString() === d.toDateString();
                  return (
                    <button
                      key={d.toISOString()}
                      onClick={() => setDate(d)}
                      className={`shrink-0 flex flex-col items-center rounded-2xl border-2 px-4 py-3 min-w-[72px] transition-colors ${
                        selected ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <span className="text-xs text-text-muted">{d.toLocaleDateString(undefined, { weekday: "short" })}</span>
                      <span className="font-display font-semibold text-primary-dark text-lg">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="rounded-full border-2 border-primary text-primary-dark font-semibold px-7 py-3 hover:bg-primary/5 transition-colors">
                  Back
                </button>
                <button
                  disabled={!date}
                  onClick={() => setStep(3)}
                  className="rounded-full bg-primary text-white font-semibold px-7 py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="font-display font-semibold text-primary-dark text-xl mb-5">Choose a time</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-6">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                      time === t ? "border-primary bg-primary/5 text-primary-dark" : "border-border text-text"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(2)} className="rounded-full border-2 border-primary text-primary-dark font-semibold px-7 py-3 hover:bg-primary/5 transition-colors">
                  Back
                </button>
                <button
                  disabled={!time}
                  onClick={() => setStep(4)}
                  className="rounded-full bg-primary text-white font-semibold px-7 py-3 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-display font-semibold text-primary-dark text-xl mb-4">Your details</h3>
              <div className="bg-bg-alt rounded-2xl px-5 py-4 mb-6 text-sm text-text-muted">
                {service} · {date?.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} · {time}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">First name</label>
                  <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full rounded-xl border border-border px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">Last name</label>
                  <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full rounded-xl border border-border px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">Email</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-border px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-1.5">Phone</label>
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-border px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-primary-dark mb-1.5">Anything we should know? (optional)</label>
                <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full rounded-xl border border-border px-4 py-2.5 focus:outline-none focus:border-primary" />
              </div>

              {submitError && <p className="text-sm text-red-600 mb-4">{submitError}</p>}

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(3)} className="rounded-full border-2 border-primary text-primary-dark font-semibold px-7 py-3 hover:bg-primary/5 transition-colors">
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-primary text-white font-semibold px-7 py-3 hover:bg-primary-dark disabled:opacity-60 transition-colors"
                >
                  {submitting ? "Confirming..." : "Confirm appointment"}
                </button>
              </div>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          This form is a front-end preview. Connect it to email, a scheduling backend, or your EHR to go live.
        </p>
      </div>
    </section>
  );
}