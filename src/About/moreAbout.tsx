"use client";
import Image from "next/image";
import { MoreAbout } from "../assests/image/image";

export default function WorkPerformance() {
    return (
        <section
            className="w-full py-20 bg-white px-6 lg:px-12"
            data-aos="fade-up"
            data-aos-once="true"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div data-aos="fade-right" data-aos-once="true">
                    <p className="text-[#d80c18] font-semibold tracking-wide mb-4 flex items-center gap-3">
                        Core Service Sectors
                        <span className="h-[2px] w-10 bg-[#101828] inline-block"></span>
                    </p>

                    {/* <p className="text-gray-600 leading-relaxed mb-12 text-justify">
                        The company’s capabilities are broadly categorized into three major sectors:
                        <ul>
                            <li className="py-2"><strong>Buildings & Residential:</strong> Construction of High-Rise Apartments, Institutional and commercial complexes for government schemes.</li>
                            <li className="py-2"><strong>Civil Infrastructure:</strong> Expertise in the "public nature" of civil works, including road construction, bridges, and Turnkey development projects in Puri and Bhubaneswar under the ABADHA scheme.</li>
                        </ul>
                    </p> */}
                    <div className="text-gray-600 leading-relaxed mb-12 text-justify">
                        <p className="mb-4">
                            The company’s capabilities are broadly categorized into three major sectors:
                        </p>

                        <ul className="list-disc pl-5">
                            <li className="py-2">
                                <strong>Buildings & Residential:</strong> Construction of High-Rise Apartments, Institutional and commercial complexes for government schemes.
                            </li>
                            <li className="py-2">
                                <strong>Civil Infrastructure:</strong> Expertise in the "public nature" of civil works, including road construction, bridges, and Turnkey development projects in Puri and Bhubaneswar under the ABADHA scheme.
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-6">

                        {/* Circle */}
                        <div
                            className="relative"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            <svg className="w-24 h-24">
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="42"
                                    stroke="#e5e7eb"
                                    strokeWidth="8"
                                    fill="none"
                                />
                                <circle
                                    cx="48"
                                    cy="48"
                                    r="42"
                                    stroke="#d80c18"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray="264"
                                    strokeDashoffset="40"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#d80c18]">
                                85%
                            </span>
                        </div>

                        {/* Text */}
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                            <h3 className="text-2xl font-semibold text-[#101828] mb-2">
                                Satisfied Customer
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">
                                Trusted by our customers for consistent quality, timely delivery, and
                                dependable project support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    className="relative rounded-xl overflow-hidden shadow-xl"
                    data-aos="fade-left"
                    data-aos-once="true"
                >
                    <Image
                        src={MoreAbout.src}
                        alt="Work Performance"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
