import { ToothIcon, FamilyIcon, PediatricsIcon, SpecialtyIcon, UrgentIcon } from "./icons";

const deptPills = [
  { key: "dental", label: "Dental Care", Icon: ToothIcon },
  { key: "family", label: "Family Medicine", Icon: FamilyIcon },
  { key: "pediatrics", label: "Pediatrics", Icon: PediatricsIcon },
  { key: "specialty", label: "Specialty & Diagnostics", Icon: SpecialtyIcon },
  { key: "urgent", label: "Urgent Care", Icon: UrgentIcon },
];

const insuranceLogos = ["Delta Dental", "Cigna", "MetLife", "Aetna", "Medicare"];

export default function Hero() {
  return (
    <section id="top" className="bg-bg-alt">
      <div className="max-w-[1180px] mx-auto px-6 pt-20 pb-16 text-center flex flex-col items-center">
        <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-4">
          One clinic, every kind of care
        </span>
        <h1 className="font-display font-semibold text-primary-dark text-4xl md:text-5xl max-w-3xl leading-tight mb-5">
          Dental, family medicine &amp; specialty care — all under one roof.
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mb-8">
          Whether it&apos;s a cleaning, a check-up, your child&apos;s next vaccine, or a same-day urgent visit, our team handles it without sending you somewhere else.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-7 py-3.5 hover:bg-primary-dark transition-colors">
            Book an appointment
          </a>
          <a href="#departments" className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary-dark font-semibold px-7 py-3.5 hover:bg-primary/5 transition-colors">
            Explore our departments
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {deptPills.map(({ key, label, Icon }) => (
            
             <a key={key}
              href="#departments"
              className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2.5 text-sm font-medium text-text hover:border-primary transition-colors"
            >
              <Icon className="w-4 h-4 text-primary" />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-surface/60 py-5">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center gap-4 justify-center text-sm text-text-muted">
          <span className="font-medium">Insurance &amp; memberships accepted</span>
          <div className="flex flex-wrap justify-center gap-5 font-semibold text-primary-dark/70">
            {insuranceLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}