import { ArrowRight } from "lucide-react";

const CtaBanner = () => (
  <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary-foreground mb-4 leading-tight">
        Ready to Upgrade Your Clinic?
      </h2>
      <p className="text-primary-foreground/75 text-base max-w-lg mx-auto mb-8 leading-relaxed">
        Join 500+ Nigerian clinics that chose precision, reliability, and a partner who stays long after the sale.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#quote"
          className="group inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-xl font-bold hover:bg-gold-light transition-all text-sm shadow-lg shadow-gold/25"
        >
          Request Your Free Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://wa.me/2349034584484?text=Hi%20Yorlad%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20equipment."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-primary-foreground/25 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all text-sm"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
