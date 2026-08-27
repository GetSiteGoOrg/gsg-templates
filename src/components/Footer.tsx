import { BrandIcon } from "./icons";

const departments = ["Dental Care", "Family Medicine", "Pediatrics", "Specialty Care"];
const explore = [
  { label: "Providers", href: "#team" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Online", href: "#booking" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/75">
      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-7">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-11">
          <div>
            <a href="#top" className="flex items-center gap-2 text-white font-display font-semibold mb-3">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <BrandIcon className="w-5 h-5 text-white" />
              </span>
              Harborline Health &amp; Dental
            </a>
            <p className="text-white/60 text-sm max-w-[280px] mb-0">
              Dental, family medicine, pediatrics, specialty, and urgent care — all in one clinic.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-3.5">Departments</h4>
            <ul className="flex flex-col gap-2.5">
              {departments.map((d) => (
                <li key={d}>
                  <a href="#departments" className="text-sm hover:text-white transition-colors">
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-3.5">Explore</h4>
            <ul className="flex flex-col gap-2.5">
              {explore.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-wider font-semibold mb-3.5">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href="tel:+15551234567" className="text-sm hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@harborlinehealth.example" className="text-sm hover:text-white transition-colors">
                  hello@harborlinehealth.example
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-white transition-colors">
                  128 Harborline Ave
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-3 text-xs text-white/50">
          <span>© 2026 Harborline Health &amp; Dental. All rights reserved.</span>
          <span>Template by GetSiteGo</span>
        </div>
      </div>
    </footer>
  );
}