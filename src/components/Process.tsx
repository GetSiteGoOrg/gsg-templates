const steps = [
    { num: "1", title: "Pick a department", description: "Choose dental, family medicine, pediatrics, specialty, or urgent care." },
    { num: "2", title: "Book online", description: "Select a date and time that works — no phone tag required." },
    { num: "3", title: "Check in", description: "Arrive, or check in early online, and we'll have your chart ready." },
    { num: "4", title: "Ongoing care", description: "Follow-ups and referrals stay within the same clinic and record." },
  ];
  
  export default function Process() {
    return (
      <section id="process" className="py-24 bg-bg-alt">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
              How it works
            </span>
            <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
              From booking to visit, in four simple steps
            </h2>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-surface rounded-2xl border border-border p-7">
                <div className="w-[38px] h-[38px] rounded-[11px] bg-primary text-white font-semibold flex items-center justify-center mb-4 font-display">
                  {step.num}
                </div>
                <h4 className="font-semibold text-primary-dark text-base mb-2">{step.title}</h4>
                <p className="text-sm text-text-muted mb-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }