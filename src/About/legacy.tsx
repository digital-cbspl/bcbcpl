"use client";
import Image from "next/image";
import { Con1, Con2, Con3 } from "../assests/image/image";

export default function Legacy() {
    return (
        <section
            className="w-full py-20 px-6 lg:px-12 bg-white"
            data-aos="fade-up"
            data-aos-once="true"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT — IMAGE STACK */}
                <div
                    className="relative w-full"
                    data-aos="zoom-in"
                    data-aos-once="true"
                >

                    {/* Back Image */}
                    <div
                        className="absolute -top-8 -left-6 w-64 h-72 rounded-lg overflow-hidden shadow-xl"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-once="true"
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
                        className="relative ml-20 rounded-xl overflow-hidden shadow-2xl h-[500px] max-w-[480px]"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-once="true"
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
                        className="absolute -bottom-10 left-100 w-64 h-52 rounded-lg overflow-hidden shadow-xl"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-once="true"
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
                    <div
                        className="absolute top-1/2 -translate-y-1/2 right-6 bg-[#d80c18] py-5 px-10 text-white font-bold text-lg rounded-md shadow-xl"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        data-aos-once="true"
                    >
                        18 Years Of <br /> Experiences
                    </div>
                </div>

                {/* RIGHT — TEXT SECTION */}
                <div data-aos="fade-left" data-aos-once="true">
                    <p className="text-[#d80c18] font-semibold tracking-wide mb-4 flex items-center gap-3">
                        OUR LEGACY
                        <span className="h-[2px] w-10 bg-[#101828] inline-block"></span>
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-12 text-justify">
                        Since our inception in [year], we have undertaken a diverse range of projects,
                        ranging from infrastructure development to commercial complexes, residential
                        buildings, and government facilities. Led by a team of seasoned professionals,
                        we have continuously raised the bar in construction standards, earning the trust
                        and confidence of our clients and stakeholders.
                    </p>

                    {/* LIST */}
                    <ul className="mt-8 space-y-4 text-[#101828]">
                        <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                            <span className="text-[#d80c18] text-xl">✔</span>
                            Deliver ultimate industrial services.
                        </li>

                        <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
                            <span className="text-[#d80c18] text-xl">✔</span>
                            We are committed to serve you better.
                        </li>

                        <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
                            <span className="text-[#d80c18] text-xl">✔</span>
                            Have world’s best team.
                        </li>

                        <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
                            <span className="text-[#d80c18] text-xl">✔</span>
                            No hidden extra charges needed.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
