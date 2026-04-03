import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 500, suffix: "+", label: "Clinics Equipped" },
  { value: 12, suffix: "mo", label: "Warranty Standard" },
  { value: 24, suffix: "hr", label: "Quote Turnaround" },
  { value: 36, suffix: "", label: "States Covered" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display font-extrabold text-3xl md:text-4xl text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="Medical equipment" className="w-full h-full object-cover scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/85 to-primary-dark/90" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </div>

    <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2.5 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 text-sm font-medium text-gold-light mb-8 animate-fade-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
          </span>
          Trusted by 500+ clinics across Nigeria
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary-foreground leading-[1.08] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Your Patients Deserve{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              Better Equipment
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8 C60 2, 140 2, 298 8" stroke="hsl(42 92% 52%)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-xl font-sans animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Premium ophthalmic & surgical instruments — certified, calibrated, and delivered to your door. Stop compromising on quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {["ISO-certified instruments", "On-site installation", "12-month warranty"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 bg-gold text-accent-foreground px-7 py-4 rounded-xl font-bold hover:bg-gold-light transition-all text-sm shadow-lg shadow-gold/25"
          >
            Get Your Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 border border-primary-foreground/25 text-primary-foreground px-7 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all text-sm backdrop-blur-sm"
          >
            <Play className="w-4 h-4" />
            Explore Products
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
        {stats.map((s) => (
          <div key={s.label} className="bg-primary-foreground/[0.07] backdrop-blur-sm border border-gold/15 rounded-2xl p-5 text-center">
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="text-xs text-primary-foreground/60 mt-1 font-medium tracking-wide uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
