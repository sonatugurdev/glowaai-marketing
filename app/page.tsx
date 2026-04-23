import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { PatientBenefits } from "@/components/patient-benefits";
import { Features } from "@/components/features";
import { CompetitiveStrip } from "@/components/competitive-strip";
import { Quote } from "@/components/quote";
import { FAQ } from "@/components/faq";
import { DemoForm } from "@/components/demo-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <PatientBenefits />
        <Features />
        <CompetitiveStrip />
        <Quote />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
