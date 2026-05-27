import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SectionNav } from "@/components/section-nav";
import { HowItWorks } from "@/components/how-it-works";
import { ROISection } from "@/components/roi-section";
import { VideoSection } from "@/components/video-section";
import { ResultsSection } from "@/components/results-section";
import { AdvisorsSection } from "@/components/advisors-section";
import { RedirectSection } from "@/components/redirect-section";
import { FAQSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Nav />
      <SectionNav />
      <main>
        <Hero />
        <HowItWorks />
        <ROISection />
        <VideoSection />
        <ResultsSection />
        <AdvisorsSection />
        <RedirectSection />
        <FAQSection />
      </main>
      <SiteFooter />
    </>
  );
}
