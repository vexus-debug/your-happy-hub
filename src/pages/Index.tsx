import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyUs from "@/components/WhyUs";
import ProductsTable from "@/components/ProductsTable";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <ProblemSection />
    <SolutionSection />
    <WhyUs />
    <ProductsTable />
    <Testimonials />
    <CtaBanner />
    <QuoteForm />
    <Footer />
  </div>
);

export default Index;
