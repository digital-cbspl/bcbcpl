"use client";

import { useEffect, useState } from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7 } from "../assests/image/image";

export default function HeroBanner() {
  const slides = [
    {
      image: Banner1.src,
      title: "Puri Railway Station",
      subtitle: "Quality construction and reliable project delivery",
      tagline: "PROVIDES THE BEST SERVICES",
    },
    {
      image: Banner3.src,
      title: "Multi Stored Water Complex (OPDCL), Bhubaneswar",
      subtitle: "From planning to execution, we handle everything",
      tagline: "YOUR TRUST, OUR COMMITMENT",
    },
    {
      image: Banner2.src,
      title: "Fish Market, Basta",
      subtitle: "Delivering durable and modern infrastructure",
      tagline: "BUILDING YOUR VISION",
    },
    {
      image: Banner4.src,
      title: "Aluminium Park, Angul",
      subtitle: "Building strong foundations with precision and expertise",
      tagline: "INNOVATION THAT DRIVES PROGRESS",
    },
    {
      image: Banner5.src,
      title: "District Headquarter Hospital, Bhadrak",
      subtitle: "Crafting infrastructure that supports future growth",
      tagline: "QUALITY YOU CAN RELY ON",
    },
    {
      image: Banner6.src,
      title: "Electronics Manufacturing Cluster (EMC) Park",
      subtitle: "Excellence in every phase from concept to completion",
      tagline: "TURNING IDEAS INTO REALITY",
    },
    {
      image: Banner7.src,
      title: "HMVTI",
      subtitle: "Constructing impactful spaces with unmatched professionalism",
      tagline: "SHAPING FUTURE-READY INFRASTRUCTURE",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="relative w-full h-[85vh] flex items-center overflow-hidden"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* <div className="absolute inset-0 bg-black/0"></div> */}
      {/* LEFT TO MIDDLE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent"></div>


      {/* TEXT CONTENT */}
      <div className="container relative z-20 mx-auto pl-10 lg:pl-20">
        <div
          className="max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          key={current}
        >
          <p className="text-black font-bold tracking-[8px] mb-4 flex items-center gap-3">
            <span className="border-2 border-red-500 bg-black rounded-full w-4 h-4 inline-block"></span>
            {slides[current].tagline}
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-black mt-6 max-w-lg font-bold">
            {slides[current].subtitle}
          </p>

          <div className="flex items-center gap-6 mt-8">
            {/* <a
              href="/services"
              className="bg-red-600 text-white px-8 py-4 rounded-md text-sm font-semibold hover:bg-[#102039] transition-all"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              VIEW PROJECTS →
            </a> */}
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 flex flex-col gap-4 z-30">
        <a
          href="#"
          className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded hover:bg-red-600 transition-all"
        >
          <Facebook size={20} className="text-white" />
        </a>

        <a
          href="#"
          className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded hover:bg-red-600 transition-all"
        >
          <Linkedin size={20} className="text-white" />
        </a>

        <a
          href="#"
          className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded hover:bg-red-600 transition-all"
        >
          <Youtube size={20} className="text-white" />
        </a>
      </div>

      {/* PAGINATION DOTS RIGHT SIDE */}
     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`w-4 h-4 rounded-full transition-all border border-white ${
        current === index ? "bg-red-600 scale-125" : "bg-black/50"
      }`}
    ></button>
  ))}
</div>
    </section>
  );
}
