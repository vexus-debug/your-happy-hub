import { Shield, Truck, Wrench, CreditCard, Headphones, Award } from "lucide-react";

const features = [
  { icon: Award, title: "ISO-Certified Equipment", desc: "Every instrument meets international quality standards — no grey-market imports, ever." },
  { icon: Wrench, title: "Expert Installation", desc: "Our engineers install and calibrate on-site. Your first measurement is accurate from day one." },
  { icon: Truck, title: "Nationwide Delivery", desc: "Lagos warehouse to any state in Nigeria. We handle logistics so you don't have to." },
  { icon: Shield, title: "12-Month Warranty", desc: "Full parts and labour warranty with optional annual maintenance contracts for total peace of mind." },
  { icon: Headphones, title: "Dedicated Support", desc: "A real person answers when you call. Technical support, spare parts, and recalibration — always available." },
  { icon: CreditCard, title: "Flexible Payment", desc: "Structured payment plans for hospitals and clinics. We'll work with your procurement process." },
];

const WhyUs = () => (
  <section id="why-us" className="py-20 md:py-28 bg-muted/40 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3 font-display">Why Yorlad</p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 leading-tight">
          We Don't Just Sell Equipment — <br className="hidden md:block" />
          <span className="text-primary">We Partner With Your Practice</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          From the moment you reach out to years after installation, Yorlad is invested in your clinic's success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-base mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
