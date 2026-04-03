import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const interests = ["Diagnostic", "Surgical", "Consumables", "Accessories"];

const QuoteForm = () => {
  const [form, setForm] = useState({ name: "", email: "", facility: "", interest: "", requirements: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Yorlad, I'd like to request a quote.\n\nName: ${form.name}\nEmail: ${form.email}\nFacility: ${form.facility}\nInterest: ${form.interest}\nRequirements: ${form.requirements}`;
    window.open(`https://wa.me/2349034584484?text=${encodeURIComponent(message)}`, "_blank");
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <section id="quote" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-3 font-display">Let's Talk</p>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3 leading-tight">
              Get Your <span className="text-primary">Free Quote</span> Today
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Tell us what you need and our team will prepare a tailored proposal within 24 hours. No obligations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5 font-display">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Dr. Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5 font-display">Email Address</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="jane@clinic.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5 font-display">Facility Name</label>
              <input
                type="text"
                required
                maxLength={200}
                value={form.facility}
                onChange={(e) => update("facility", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="VisionCare Medical Center"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5 font-display">Primary Interest</label>
              <select
                required
                value={form.interest}
                onChange={(e) => update("interest", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              >
                <option value="">Select a category</option>
                {interests.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1.5 font-display">Requirements</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.requirements}
                onChange={(e) => update("requirements", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                placeholder="Models, quantities, delivery timeline, budget range..."
              />
            </div>
            <button
              type="submit"
              className="group w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
