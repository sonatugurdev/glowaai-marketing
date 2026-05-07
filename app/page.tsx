import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Features } from "@/components/features";
import { BeforeAfter } from "@/components/before-after";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { DemoForm } from "@/components/demo-form";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <BeforeAfter />
        <Metrics />
        <Testimonials />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
