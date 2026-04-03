import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import logo from "@/assets/yorlad-logo.png";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background py-16 relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Yorlad" className="h-9 w-9 object-contain brightness-200" />
            <span className="font-display text-lg font-extrabold">Yorlad</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            Nigeria's trusted supplier of premium medical and ophthalmic equipment. Precision you can trust — since day one.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Contact</h3>
          <div className="space-y-3 text-sm text-background/70">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+234 (0) 9034584484 / 08059855065</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>hello@yorlad.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>Axiom Plaza, 279 Old Abeokuta Road, Agege, Lagos</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <span>Mon–Fri, 9:00 AM – 5:00 PM WAT</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Quick Links</h3>
          <div className="space-y-2.5 text-sm text-background/70">
            <a href="#products" className="block hover:text-gold transition-colors">Products</a>
            <a href="#why-us" className="block hover:text-gold transition-colors">Why Yorlad</a>
            <a href="#testimonials" className="block hover:text-gold transition-colors">Testimonials</a>
            <a href="#quote" className="block hover:text-gold transition-colors">Request a Quote</a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Yorlad Services. All rights reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-1.5 text-xs text-background/50 hover:text-background/80 transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Back to top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
