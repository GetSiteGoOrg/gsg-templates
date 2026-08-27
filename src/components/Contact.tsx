import { MapPinIcon, ClockIcon, PhoneIcon, MailIcon } from "./icons";

const info = [
  { Icon: MapPinIcon, title: "Address", value: "128 Harborline Ave, Suite 4, Springfield" },
  { Icon: ClockIcon, title: "Hours", value: "Mon–Fri 7am–7pm · Sat 9am–3pm · Urgent care daily" },
  { Icon: PhoneIcon, title: "Phone", value: "(555) 123-4567" },
  { Icon: MailIcon, title: "Email", value: "hello@harborlinehealth.example" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
            Visit us
          </span>
          <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
            Find us &amp; get in touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-6">
            {info.map(({ Icon, title, value }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark text-sm mb-0.5">{title}</h4>
                  <p className="text-sm text-text-muted mb-0">{value}</p>
                </div>
              </div>
            ))}
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold px-7 py-3.5 hover:bg-primary-dark transition-colors w-fit"
            >
              Book an appointment
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden min-h-[280px] flex items-center justify-center bg-gradient-to-br from-primary-light to-primary">
            <span className="font-display text-white/85">[ Map embed goes here ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}