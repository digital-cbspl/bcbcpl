"use client";

import { Founder } from "../assests/image/image";

export default function Visioner() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-white">
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 gap-8 items-stretch
          lg:grid-cols-12 lg:gap-8
        "
      >
        {/* LEFT IMAGE */}
        <div
          className="p-4 flex items-stretch justify-center lg:justify-start lg:col-span-4"
          data-aos="fade-right"
          data-aos-offset="100"
        >
          <div className="w-full rounded-sm overflow-hidden shadow-lg max-w-xs sm:max-w-full">
            <img
              src={Founder.src}
              alt="profile"
              className="object-cover w-full h-64 sm:h-72 lg:h-[320px]"
              draggable={false}
            />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          className="relative bg-[#f3f4f6] p-8 sm:p-10 rounded-sm shadow-sm text-center lg:text-left lg:col-span-8"
          data-aos="fade-left"
          data-aos-offset="100"
        >
          {/* top-right red triangle */}
          <div className="absolute right-0 top-0 w-0 h-0 border-l-[80px] border-l-transparent border-b-[80px] border-b-[#d80c18]" />

          <div className="max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-extrabold text-[#101828] mb-2">
              Late Bhaskar Chandra Bhuyan
            </h2>
            <p className="text-sm text-gray-700 mb-6">
              (16th April, 1948 - 26th Jan, 2010 )
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Pioneering his journey in construction, Late Bhaskar Chandra Bhuyan
              transitioned from civil contractor to serving diverse sectors,
              including State and Central Governments. A proud Odisha native, his
              visionary spirit propelled him to establish enterprises spanning
              construction, engineering, architecture, and finance, shaping a
              legacy of excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
