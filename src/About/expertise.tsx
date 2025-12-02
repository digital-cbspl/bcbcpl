"use client";
import Image from "next/image";
import { Ser1, Ser2, Ser3, Ser4 } from "../assests/image/image";

export default function ServicesSection() {
  return (
    <section
      className="w-full py-20 px-6 lg:px-12 bg-white"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* CARD 1 */}
        <div
          className="bg-white shadow-xl rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition flex flex-col"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div className="mb-6">
            <div className="w-20 h-16 bg-[#fde7e9] rounded-lg flex items-center justify-center">
              <Image
                src={Ser1.src}
                width={50}
                height={50}
                alt="Icon"
                className="opacity-80"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#101828] mb-4">
            Turnkey Basis Projects
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We produce positive results from growing industrial estates and maintain the construction economy.
          </p>

          <p className="text-[#d80c18] font-semibold text-sm mt-auto text-right cursor-pointer hover:text-[#101828]">
            READ MORE
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="bg-white shadow-xl rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition flex flex-col"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="mb-6">
            <div className="w-20 h-16 bg-[#fde7e9] rounded-lg flex items-center justify-center">
              <Image
                src={Ser2.src}
                width={50}
                height={50}
                alt="Icon"
                className="opacity-80"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#101828] mb-4">
              Unit Price Contract
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We combine expert planning and design to deliver the perfect integrated building solution.
          </p>

          <p className="text-[#d80c18] font-semibold text-sm mt-auto text-right cursor-pointer hover:text-[#101828]">
            READ MORE
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="bg-white shadow-xl rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition flex flex-col"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <div className="mb-6">
            <div className="w-20 h-16 bg-[#fde7e9] rounded-lg flex items-center justify-center">
              <Image
                src={Ser3.src}
                width={50}
                height={50}
                alt="Icon"
                className="opacity-80"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#101828] mb-4">
            Pre-Construction Services
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We prepare all technical, financial, and strategic aspects before construction begins.
          </p>

          <p className="text-[#d80c18] font-semibold text-sm mt-auto text-right cursor-pointer hover:text-[#101828]">
            READ MORE
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className="bg-white shadow-xl rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition flex flex-col"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="mb-6">
            <div className="w-20 h-16 bg-[#fde7e9] rounded-lg flex items-center justify-center">
              <Image
                src={Ser4.src}
                width={50}
                height={50}
                alt="Icon"
                className="opacity-80"
              />
            </div>
          </div>

          <h3 className="text-lg font-bold text-[#101828] mb-4">
            Engineering Procurement & Construction
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We deliver complete projects at a fixed cost with guaranteed quality and transparency.
          </p>

          <p className="text-[#d80c18] font-semibold text-sm mt-auto text-right cursor-pointer hover:text-[#101828]">
            READ MORE
          </p>
        </div>
      </div>
    </section>
  );
}
