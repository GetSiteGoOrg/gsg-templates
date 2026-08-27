const items = [
    { num: "01", title: "No-surprise pricing", description: "You'll know the cost before any treatment starts — always." },
    { num: "02", title: "On-time appointments", description: "Real buffer time between visits, so your slot starts on time." },
    { num: "03", title: "One record, every department", description: "Your dental, medical, and specialty visits stay in one chart." },
    { num: "04", title: "Same-day availability", description: "Urgent slots held open every day for both dental and medical needs." },
  ];
  
  export default function WhyUs() {
    return (
      <section id="why" className="py-24 bg-bg-alt">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
              Why patients stay with us
            </span>
            <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
              Care built around how people actually feel at the clinic
            </h2>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.num} className="text-center">
                <div className="font-display text-2xl text-accent-dark mb-2.5">{item.num}</div>
                <h3 className="font-display font-semibold text-primary-dark text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted mb-0">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }