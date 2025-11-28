"use client";

import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <section
      className="w-full mx-auto bg-gray-100 px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div
          className="text-center lg:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text-gray-500 text-base sm:text-lg mb-3">
            B.C. Bhuyan Constructions Pvt. Ltd.
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-snug mb-4 sm:mb-6">
            Over 4 decades of <br className="hidden sm:block" />
            infra-excellence
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            A trusted construction company delivering durable, high-quality projects
            with precise execution and on-time delivery.
          </p>
        </div>

        {/* Right Stats Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div
            className="bg-white shadow-sm rounded-xl p-6 sm:p-8 lg:p-10 border-b-4 border-red-600 text-center"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">
              <CountUp
                end={490}
                suffix="+"
                duration={2}
                enableScrollSpy={true}
                scrollSpyDelay={200}
              />
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Building Projects
            </p>
          </div>

          <div
            className="bg-white shadow-sm rounded-xl p-6 sm:p-8 lg:p-10 border-b-4 border-red-600 text-center"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">
              <CountUp
                end={20000}
                suffix="+"
                duration={2}
                enableScrollSpy={true}
                scrollSpyDelay={200}
              />
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Water Pipelines
            </p>
          </div>

          <div
            className="bg-white shadow-sm rounded-xl p-6 sm:p-8 lg:p-10 border-b-4 border-red-600 text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">
              <CountUp
                end={3500}
                suffix="+"
                duration={2}
                enableScrollSpy={true}
                scrollSpyDelay={200}
              />
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Land Irrigated in (ACRES)
            </p>
          </div>

          <div
            className="bg-white shadow-sm rounded-xl p-6 sm:p-8 lg:p-10 border-b-4 border-red-600 text-center"
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-1 sm:mb-2">
              <CountUp
                end={110000}
                duration={2}
                enableScrollSpy={true}
                scrollSpyDelay={200}
              />
            </h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Employees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
