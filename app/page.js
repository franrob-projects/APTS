import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesGrid from "@/components/FeaturesGrid";
import FeaturesListicle from "@/components/FeaturesListicle";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesGrid />
        <FeaturesListicle />
        <FAQ />
        <FeaturesAccordion />
        <CTA />
      </main>
      <Footer />
    </>
  );
}