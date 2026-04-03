import { AlertTriangle, Clock, XCircle, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: XCircle,
    title: "Unreliable Suppliers",
    desc: "Cheap imports that break within months. No calibration. No support. Patients suffer, and your reputation takes the hit.",
  },
  {
    icon: Clock,
    title: "Weeks of Downtime",
    desc: "When equipment fails, your clinic stops earning. Every day without a working slit lamp or tonometer is revenue — and trust — lost.",
  },
  {
    icon: TrendingDown,
    title: "Misdiagnosis Risk",
    desc: "Poorly calibrated instruments lead to inaccurate readings. One wrong IOP measurement can mean a missed glaucoma diagnosis.",
  },
  {
    icon: AlertTriangle,
    title: "No After-Sales Support",
    desc: "Most suppliers disappear after the sale. When you need recalibration or parts, you're on your own.",
  },
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm font-bold text-destructive uppercase tracking-widest mb-3 font-display">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4 leading-tight">
          Nigerian Clinics Deserve Better Than <span className="text-destructive">This</span>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          Too many eye clinics across Nigeria are stuck with subpar equipment from unreliable vendors. The consequences are real — and they affect your patients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {painPoints.map((p, i) => (
          <div
            key={p.title}
            className="group bg-card rounded-2xl p-6 border border-border hover:border-destructive/30 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
              <p.icon className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-display font-bold text-foreground text-base mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
