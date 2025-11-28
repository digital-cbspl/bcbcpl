"use client";

import React from "react";
import { Building, Landmark, Factory } from "lucide-react";

export default function Sectors() {
  return (
    <section
      className="w-full py-20 bg-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Centered heading */}
        <h2
          className="text-center text-3xl font-semibold text-gray-900 mb-12"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Our Sectors
        </h2>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div
            className="border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-12 h-12 text-red-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-semibold mb-4">Buildings</h3>

            <p className="text-gray-600 leading-relaxed">
              We offer substantial construction experience, competitive pricing, 
              financial strength, integrity and a commitment to your project that is 
              supported by a foundation of quality and workplace safety.
            </p>

            <button className="mt-6 text-red-600 font-semibold flex items-center gap-2 hover:cursor-pointer hover:text-[#102039]">
              Know More →
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-3 mb-6">
              <Landmark className="w-12 h-12 text-red-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-semibold mb-4">Civil Infrastructure</h3>

            <p className="text-gray-600 leading-relaxed">
              The geographical diversity, project complexity and public nature of civil 
              work results in an exceptionally challenging industry that demands a high 
              level of technical construction expertise.
            </p>

            <button className="mt-6 text-red-600 font-semibold flex items-center gap-2 hover:cursor-pointer hover:text-[#102039]">
              Know More →
            </button>
          </div>

          {/* Card 3 */}
          <div
            className="border border-gray-200 rounded-xl p-10 hover:shadow-lg transition-all"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <div className="flex items-center gap-3 mb-6">
              <Factory className="w-12 h-12 text-red-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-semibold mb-4">Industrial</h3>

            <p className="text-gray-600 leading-relaxed">
              Industrial construction companies respond to the unique needs of clients 
              in petrochemical, oil and gas, pulp and paper, mining, and power and 
              renewable industries.
            </p>

            <button className="mt-6 text-red-600 font-semibold flex items-center gap-2 hover:cursor-pointer hover:text-[#102039]">
              Know More →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
