import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. A. Okoye",
    role: "Consultant Ophthalmologist, Lagos",
    quote: "The calibration accuracy is outstanding. Crystal-clear slit lamp optics that exceed expectations. Yorlad didn't just sell us equipment — they trained our entire team.",
    rating: 5,
  },
  {
    name: "VisionCare Clinic",
    role: "Ibadan",
    quote: "Fast delivery and excellent after-sales support. The autorefractor integrates seamlessly with our EMR system. Our refraction time dropped by 40% since switching.",
    rating: 5,
  },
  {
    name: "Mobile Eye Initiative",
    role: "Southwest Nigeria",
    quote: "Field screening kits are rugged and reliable — exactly what we need for our community outreach programs. Yorlad understands rural healthcare challenges.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-bold text-gold uppercase tracking-widest mb-3 font-display">Real Results</p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 leading-tight">
          Don't Take Our Word For It — <br className="hidden md:block" />
          <span className="text-gold">Hear From Their Clinics</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-7 border border-border relative group hover:shadow-lg hover:border-gold/20 transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">{t.quote}</p>
            <div className="pt-4 border-t border-border/60">
              <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
