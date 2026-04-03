import { ArrowRight, Sparkles, Eye, Stethoscope } from "lucide-react";

const SolutionSection = () => (
  <section className="py-20 md:py-28 bg-gradient-to-b from-primary/[0.03] to-background relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The Yorlad Difference
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 leading-tight">
          What If Your Equipment <span className="text-primary">Just Worked?</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          Imagine walking into your clinic every morning knowing your instruments are accurate, your patients are safe, and help is one call away.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="relative bg-card rounded-2xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-display">1</div>
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-bold text-foreground text-lg mb-2">Tell Us What You Need</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Fill out a quick form or send a WhatsApp message. We'll understand your clinic size, patient volume, and budget — no pressure.
          </p>
          <a href="#quote" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
            Start here <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="relative bg-card rounded-2xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold text-accent-foreground text-sm font-bold flex items-center justify-center font-display">2</div>
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
            <Stethoscope className="w-6 h-6 text-gold" />
          </div>
          <h3 className="font-display font-bold text-foreground text-lg mb-2">Get a Tailored Quote</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Within 24 hours you'll receive a detailed proposal with pricing, delivery timeline, and installation plan — everything transparent.
          </p>
          <span className="text-gold text-sm font-semibold">Usually same-day</span>
        </div>

        <div className="relative bg-card rounded-2xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-display">3</div>
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h3 className="font-display font-bold text-foreground text-lg mb-2">We Install & Support</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Our engineers deliver, install, and calibrate on-site. Then we train your team and stay available for 12 months of warranty support.
          </p>
          <span className="text-gold text-sm font-semibold">Full peace of mind</span>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
