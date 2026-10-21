import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Aksiva Studio completely transformed our web platform. Their mastery of Next.js and Tailwind brought our load times from 4.2 seconds down to under 500ms, and our organic conversion surged by 45%.",
      author: "Reza Pratama",
      title: "Co-Founder & VP of Product",
      company: "Zenith Cloud Systems",
      rating: 5,
    },
    {
      quote:
        "The design system and brand identity Aksiva delivered was nothing short of perfection. They listened closely to our requirements and shipped ahead of deadline. Exceptional professionalism.",
      author: "Nadira Santoso",
      title: "Head of Marketing & Brand",
      company: "Aurora Global FinTech",
      rating: 5,
    },
    {
      quote:
        "Working with Aksiva felt like having a dedicated high-caliber product team in-house. Their transparent pricing, agile weekly sprints, and code cleanliness were refreshing.",
      author: "Adrian Hartono",
      title: "Managing Director",
      company: "Lumina Contemporary",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-aksiva-navy-dark/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-aksiva-orange font-bold font-mono">
            // CLIENT REPUTATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Trusted by Ambitious Brands
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            See how Aksiva Studio empowers forward-thinking companies with world-class digital craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between hover:border-aksiva-orange/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-aksiva-orange gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-aksiva-orange" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10" />
                </div>

                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-slate-400">{t.title} &bull; {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
