import React from "react";
import { About } from "../assests/image/image";

export default function RoofingHero() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16 lg:py-24"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left visual column */}
        <div className="relative" data-aos="fade-right" data-aos-duration="900">

          {/* dotted pattern top-left */}
          <div
            className="hidden lg:block absolute -left-8 -top-6 w-12 h-20"
            data-aos="fade-down"
            data-aos-duration="900"
          >
            <svg width="12" height="72" viewBox="0 0 12 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6" fill="#1F2937">
                {Array.from({ length: 6 }).map((_, i) => (
                  <rect key={i} x={0} y={i * 12} width="2" height="2" rx="1"></rect>
                ))}
              </g>
            </svg>
          </div>

          {/* main big image */}
          <div
            className="overflow-hidden rounded-tr-[90px] rounded-bl-md shadow-md"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <img
              src={About.src}
              alt="roofing"
              className="w-full h-[520px] object-cover"
            />
          </div>

          {/* red vertical ribbon with award */}
          <div
            className="absolute left-0 top-[40%] transform -translate-y-1/2 -translate-x-1/2"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="bg-[#d80c18] text-white w-28 h-52 flex items-center justify-center relative shadow-lg">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10"></div>
              <div
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                className="text-center font-semibold text-lg leading-tight"
              >
                10+ World Best <br />
                Roofing Award Got
              </div>
            </div>

            {/* small trophy box */}
            <div
              className="mt-3 ml-0 w-28 bg-white p-3 shadow-md border border-white"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto"
              >
                <path
                  d="M8 2h8v2a3 3 0 0 1 3 3v1a4 4 0 0 1-3.5 3.97A6 6 0 0 1 12 18a6 6 0 0 1-3.5-6.03A4 4 0 0 1 5 7V6a3 3 0 0 1 3-3V2z"
                  stroke="#d80c18"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right content column */}
        <div data-aos="fade-left" data-aos-duration="900">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center px-2 py-1 border rounded-full text-sm text-[#d80c18] border-[#d80c18]">
              ABOUT BCBCPL​
            </span>
          </div>

          <h2 className="text-3xl lg:text-3xl font-extrabold text-slate-900 leading-tight mb-6">
            Building Trust Through Service
          </h2>

          <p className="text-gray-500 mb-8 text-justify">
           B. C. Bhuyan Constructions Pvt Ltd (BCBCPL) is an established civil engineering and construction firm headquartered in Bhubaneswar, Odisha. Founded originally as a partnership in 1971 by Late Bhaskar Chandra Bhuyan and later incorporated as a private limited company in 2007, the firm has spent over five decades building a reputation as a premiere government contractor. 
          </p>


          <p className="text-gray-500 mb-8 text-justify">
            <strong>Company Overview and Historical Legacy</strong><br />
            The company was built on the visionary leadership of its founder, Late Bhaskar Chandra Bhuyan, who transitioned from a local civil contractor to a multi-sector entrepreneur. Today, BCBCPL is managed by his sons, Mr. Pradeep Kumar Bhuyan and Mr. Pramod Kumar Bhuyan, who have continued to scale operations while maintaining the firm's core values of integrity and innovation. <br />
            <ul>
              <li className="py-2"><strong>Established Expertise:</strong> With over 50 years of experience, the company specializes in complex infrastructure segments, including the construction of bridges, residential complexes, and heavy industrial facilities.</li>
              <li className="py-2"><strong>Scale of Operations:</strong> As of 2025, the company maintains a robust financial profile, with an estimated total operating income for the 2025 fiscal year.</li>
              <li className="py-2"><strong>Headquarters:</strong> The registered office is located at Plot No. 890, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751010.</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
