import logo from "@/assets/yorlad-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Yorlad Logo" className="h-10 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#quote" className="hidden sm:inline-flex bg-gold text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-gold-light transition-colors">
            Get a Quote
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3 animate-fade-in">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)} className="block bg-gold text-accent-foreground text-center px-5 py-3 rounded-xl text-sm font-bold">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
