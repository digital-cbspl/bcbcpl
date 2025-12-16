"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Con1, Con2, Con3 } from "../assests/image/image";

export default function Legacy() {
    const [popupImg, setPopupImg] = useState<string | null>(null);

    // Close popup on ESC
    useEffect(() => {
        const closeOnEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setPopupImg(null);
        };
        window.addEventListener("keydown", closeOnEsc);
        return () => window.removeEventListener("keydown", closeOnEsc);
    }, []);

    return (
        <>
            {/* POPUP MODAL */}
            {popupImg && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
                    onClick={() => setPopupImg(null)}
                >
                    <div
                        className="relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={popupImg}
                            width={1200}
                            height={900}
                            alt="Popup"
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <button
                            onClick={() => setPopupImg(null)}
                            className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-black font-semibold"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}

            <section
                className="w-full py-20 px-6 lg:px-12 bg-white"
                data-aos="fade-up"
                data-aos-once="true"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — IMAGE STACK */}
                    <div className="relative w-full" data-aos="zoom-in" data-aos-once="true">

                        {/* Back Image */}
                        <div
                            className="absolute -top-8 -left-6 w-64 h-72 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                            onClick={() => setPopupImg(Con2.src)}
                        >
                            <Image
                                src={Con2.src}
                                width={500}
                                height={500}
                                alt="Construction Image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Main Image */}
                        <div
                            className="relative ml-20 rounded-xl overflow-hidden shadow-2xl h-[500px] max-w-[480px] cursor-pointer"
                            onClick={() => setPopupImg(Con1.src)}
                        >
                            <Image
                                src={Con1.src}
                                width={900}
                                height={700}
                                alt="Construction Image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Small Bottom Image */}
                        <div
                            className="absolute -bottom-10 left-100 w-64 h-52 rounded-lg overflow-hidden shadow-xl cursor-pointer"
                            onClick={() => setPopupImg(Con3.src)}
                        >
                            <Image
                                src={Con3.src}
                                width={500}
                                height={400}
                                alt="Construction Team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Red Experience Badge */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-6 bg-[#d80c18] py-5 px-10 text-white font-bold text-lg rounded-md shadow-xl">
                            18 Years Of <br /> Experiences
                        </div>
                    </div>

                    {/* RIGHT — TEXT SECTION */}
                    <div data-aos="fade-left" data-aos-once="true">
                        <p className="text-[#d80c18] font-semibold tracking-wide mb-4 flex items-center gap-3">
                            Why Choose B.C. Bhuyan Constructions?
                            <span className="h-[2px] w-10 bg-[#101828] inline-block"></span>
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-12 text-justify">
                            <ul>
                                <li className="py-2"><strong>Project Execution:</strong> The company is recognized by rating agencies like Infomerics and CRISIL for its "proven project execution capability," frequently completing projects ahead of or on schedule.</li>
                                <li className="py-2"><strong>Modern Standards:</strong> They utilize high-quality materials and adhere to modern workplace safety and quality management standards to ensure long-term sustainability for every structure.</li>
                                <li className="py-2"><strong>Strategic Location:</strong> Being based in the heart of Odisha allows the company to respond rapidly to the state's growing industrial and urban infrastructure needs as outlined in the <a href="https://investodisha.gov.in/investible-projects/" className="text-red-500 font-bold">Odisha Industrial Development Plan: Vision 2025.</a> </li>
                            </ul>
                        </p>

                        <ul className="mt-8 space-y-4 text-[#101828]">
                            <li className="flex items-start gap-3"><span className="text-[#d80c18] text-xl">✔</span>Deliver ultimate industrial services.</li>
                            <li className="flex items-start gap-3"><span className="text-[#d80c18] text-xl">✔</span>We are committed to serve you better.</li>
                            <li className="flex items-start gap-3"><span className="text-[#d80c18] text-xl">✔</span>Have world’s best team.</li>
                            <li className="flex items-start gap-3"><span className="text-[#d80c18] text-xl">✔</span>No hidden extra charges needed.</li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    );
}
