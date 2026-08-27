"use client";

import { useState } from "react";
import { ToothIcon, FamilyIcon, PediatricsIcon, SpecialtyIcon, UrgentIcon } from "./icons";

interface Service {
  title: string;
  description: string;
}

interface Department {
  key: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  badge: string;
  heading: string;
  services: Service[];
}

const departments: Department[] = [
  {
    key: "dental",
    label: "Dental Care",
    Icon: ToothIcon,
    badge: "🦷 Dental Care",
    heading: "Cleanings, cosmetic work, and emergency dental — for the whole family",
    services: [
      { title: "Cleanings & Exams", description: "Routine care and X-rays to catch small issues early." },
      { title: "Cosmetic Dentistry", description: "Whitening, veneers, and bonding for a smile you love." },
      { title: "Orthodontics", description: "Clear aligners and braces for kids, teens, and adults." },
      { title: "Emergency Dental", description: "Sudden pain or a broken tooth? Same-day slots held daily." },
    ],
  },
  {
    key: "family",
    label: "Family Medicine",
    Icon: FamilyIcon,
    badge: "🩺 Family Medicine",
    heading: "Everyday care for every stage of life",
    services: [
      { title: "Annual Physicals", description: "Full check-ups to track your health year over year." },
      { title: "Vaccinations", description: "Flu shots, boosters, and travel vaccines, walk-in friendly." },
      { title: "Chronic Care Management", description: "Ongoing support for diabetes, blood pressure, and more." },
      { title: "Women's Health", description: "Preventive screenings and wellness visits." },
    ],
  },
  {
    key: "pediatrics",
    label: "Pediatrics",
    Icon: PediatricsIcon,
    badge: "🧸 Pediatrics",
    heading: "A calm, friendly first-doctor experience for kids",
    services: [
      { title: "Well-Child Visits", description: "Growth tracking and check-ups from infancy through teens." },
      { title: "Immunizations", description: "On-schedule vaccines tracked with your child's records." },
      { title: "Sick Visits", description: "Same-day appointments when your child isn't feeling well." },
      { title: "Developmental Screenings", description: "Milestone checks to catch and support early on." },
    ],
  },
  {
    key: "specialty",
    label: "Specialty & Diagnostics",
    Icon: SpecialtyIcon,
    badge: "🔬 Specialty & Diagnostics",
    heading: "In-house testing and specialist consults — fewer referrals elsewhere",
    services: [
      { title: "Lab Testing", description: "On-site bloodwork with fast turnaround on results." },
      { title: "Cardiology Consults", description: "Heart health screening and ongoing monitoring." },
      { title: "Dermatology", description: "Skin checks, mole screening, and treatment plans." },
      { title: "Imaging & X-ray", description: "Digital imaging on-site — no separate facility needed." },
    ],
  },
  {
    key: "urgent",
    label: "Urgent Care",
    Icon: UrgentIcon,
    badge: "🚑 Urgent Care",
    heading: "Walk in today — no appointment needed for urgent issues",
    services: [
      { title: "Walk-in Illness & Injury", description: "Sprains, fevers, cuts — seen same day, no appointment." },
      { title: "Minor Procedures", description: "Stitches, splints, and minor wound care on-site." },
      { title: "Same-Day Sick Visits", description: "For when you can't wait for a scheduled appointment." },
      { title: "School & Work Physicals", description: "Fast-turnaround physicals for forms and clearance." },
    ],
  },
];

export default function Departments() {
  const [active, setActive] = useState("dental");
  const activeDept = departments.find((d) => d.key === active)!;

  return (
    <section id="departments" className="py-24 bg-surface">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
            Find your care
          </span>
          <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl mb-3">
            Whatever kind of clinic visit you need, start here
          </h2>
          <p className="text-text-muted mb-0">
            Tap a department to see what we offer — no guessing which doctor or building you need.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {departments.map(({ key, label, Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`inline-flex items-center gap-2 rounded-full border-[1.5px] px-5.5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? "bg-primary border-primary text-white" : "bg-surface border-border text-text-muted"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                    isActive ? "bg-white/20" : "bg-bg-alt"
                  }`}
                >
                  <Icon className={`w-[11px] h-[11px] ${isActive ? "text-white" : "text-primary"}`} />
                </span>
                {label}
              </button>
            );
          })}
        </div>

        <div>
          <div className="flex items-center gap-8 flex-wrap mb-10">
            <div className="flex-1 min-w-[260px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-bg-alt px-4 py-2 text-sm font-semibold text-primary-dark mb-2.5">
                {activeDept.badge}
              </span>
              <h3 className="font-display font-semibold text-primary-dark text-2xl">
                {activeDept.heading}
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4.5">
            {activeDept.services.map((service) => (
              <div
                key={service.title}
                className="flex gap-4 items-start bg-surface border border-border rounded-2xl px-6 py-5.5 hover:shadow-sm hover:-translate-y-0.5 transition-all"
              >
                <div className="w-[42px] h-[42px] rounded-[11px] bg-bg-alt flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark mb-1">{service.title}</h4>
                  <p className="text-sm text-text-muted mb-0">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}