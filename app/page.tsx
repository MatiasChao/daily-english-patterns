import { Example } from "@/components/landing/example";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SocialProof } from "@/components/landing/social-proof";
import { Statistics } from "@/components/landing/statistics";
import { Testimonial } from "@/components/landing/testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Example />
        <Statistics />
        <Testimonial />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
