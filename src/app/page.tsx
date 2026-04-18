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
