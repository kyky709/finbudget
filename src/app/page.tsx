import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Logos,
  Features,
  HowItWorks,
  Showcase,
  Testimonials,
  Pricing,
  FAQ,
  CTA,
  Newsletter,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
