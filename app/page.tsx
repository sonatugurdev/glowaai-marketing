import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Quote } from "@/components/quote";
import { FAQ } from "@/components/faq";
import { Waitlist } from "@/components/waitlist";
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
        <Features />
        <Quote />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
