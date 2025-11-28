"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function CareerPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
      offset: 50,
    });
  }, []);

  return (
    <div className="w-full">

      {/* INTRO SECTION */}
      <section className="py-16 px-6 md:px-20">
        <div
          className="max-w-4xl text-center mx-auto"
          data-aos="fade-up"
        >
          <h2
            className="text-3xl font-semibold mb-4"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            Build Your Future With Us
          </h2>

          <p
            className="text-gray-600 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join a passionate team committed to delivering excellence in construction,
            innovation, and engineering. Explore opportunities to grow, lead, and
            contribute to impactful real-world projects.
          </p>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="py-10 px-6 md:px-20 bg-gray-100">
        <h2
          className="text-2xl font-semibold mb-8"
          data-aos="fade-right"
        >
          Current Openings
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold mb-2">Site Engineer</h3>
            <p className="text-gray-600 text-sm mb-4">
              Oversee site work, coordinate teams, and maintain project standards.
            </p>
            <p className="text-gray-800 font-medium mb-1">Location: Orissa</p>
            <p className="text-gray-800 font-medium mb-1">Type: Full Time</p>
            <p className="text-gray-800 font-medium mb-4">Experience: 2–4 Years</p>

            <button className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-[#102039] transition">
              Apply Now
            </button>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold mb-2">Project Manager</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lead full project lifecycles, planning, execution and delivery.
            </p>
            <p className="text-gray-800 font-medium mb-1">Location: Orissa</p>
            <p className="text-gray-800 font-medium mb-1">Type: Full Time</p>
            <p className="text-gray-800 font-medium mb-4">Experience: 5+ Years</p>

            <button className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-[#102039] transition">
              Apply Now
            </button>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold mb-2">Civil Engineer</h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage on-site activities, supervise manpower, and ensure safety.
            </p>
            <p className="text-gray-800 font-medium mb-1">Location: Orissa</p>
            <p className="text-gray-800 font-medium mb-1">Type: Full Time</p>
            <p className="text-gray-800 font-medium mb-4">Experience: 1–3 Years</p>

            <button className="px-4 py-2 bg-red-600 text-white rounded-md cursor-pointer hover:bg-[#102039] transition">
              Apply Now
            </button>
          </div>

        </div>
      </section>

      {/* APPLY CTA */}
      <section className="py-16 px-6 md:px-20">
        <div
          className="bg-gray-900 text-white rounded-2xl p-10 text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl font-semibold mb-4">Didn’t Find Your Role?</h2>
          <p className="text-gray-300 mb-6">
            Share your resume with us. We’re always looking for talented people.
          </p>

          <button className="px-6 py-3 bg-red-600 text-white rounded-md cursor-pointer hover:bg-white hover:text-[#102039] transition">
            Send Resume
          </button>
        </div>
      </section>
    </div>
  );
}
