const team = [
    { name: "Dr. Amara Chen", role: "Lead Dentist, DDS", bio: "15 years in family & cosmetic dentistry." },
    { name: "Dr. Marcus Lee", role: "Family Physician, MD", bio: "General & preventive medicine for all ages." },
    { name: "Dr. Priya Nair", role: "Pediatrician, MD", bio: "Gentle care from newborns through teens." },
    { name: "Dr. Sofia Ramirez", role: "Internal Medicine, MD", bio: "Specialty consults & chronic care management." },
  ];
  
  export default function Team() {
    return (
      <section id="team" className="py-24 bg-surface">
        <div className="max-w-[1180px] mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-primary-light mb-3 inline-block">
              Meet the team
            </span>
            <h2 className="font-display font-semibold text-primary-dark text-3xl md:text-4xl">
              The providers behind every department
            </h2>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-2xl bg-bg-alt flex items-center justify-center mb-4 text-text-muted text-sm">
                  [ Photo ]
                </div>
                <h3 className="font-display font-semibold text-primary-dark text-lg mb-0.5">{member.name}</h3>
                <span className="block text-sm font-medium text-primary mb-2">{member.role}</span>
                <p className="text-sm text-text-muted mb-0">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }