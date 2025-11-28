"use client";

import { useEffect, useState } from "react";
import HeroBanner from "../components/banner";
import RoofingHero from "../components/about";
import Counter from "../components/counter";
import Sectors from "../components/Sector";
import TestimonialCarousel from "../components/testimonial";
import ContactSection from "../components/contact";
import Footer from "../layout/footer"; // IMPORTANT

export default function Home() {

  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => {
        setVisits(data.visits);
      });
  }, []);

  return (
    <>
      <HeroBanner />
      <RoofingHero />
      <Counter />
      <Sectors />
      <TestimonialCarousel />
      <ContactSection />
    </>
  );
}
