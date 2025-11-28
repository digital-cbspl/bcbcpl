"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Eqp1, Eqp2, Eqp3 } from "../assests/image/image";

export default function EquipmentSection() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    return (
        <section className="w-full py-20 bg-white">
            
            {/* Limit width for left-right spacing */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <h2
                    className="text-4xl font-bold text-center mb-12"
                    style={{ color: "#101828" }}
                    data-aos="fade-up"
                >
                    Equipment & Machinery
                </h2>

                {/* TOP 3 IMAGES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    <div data-aos="zoom-in">
                        <Image
                            src={Eqp1.src}
                            width={800}
                            height={500}
                            alt="equipment"
                            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="150">
                        <Image
                            src={Eqp2.src}
                            width={800}
                            height={500}
                            alt="equipment"
                            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300">
                        <Image
                            src={Eqp3.src}
                            width={800}
                            height={500}
                            alt="equipment"
                            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* LISTS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* COLUMN 1 */}
                    <ul className="space-y-4 text-lg" data-aos="fade-right">
                        {[
                            "Excavators",
                            "Batching Plants 15Cum/Hr-25Cum/Hr",
                            "Concrete Pums with Accessories",
                            "Trucks/Tippers",
                            "Transit Mixtures",
                            "Tractors with Trolleys",
                            "Water Tankers",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2"
                                style={{ color: "#101828" }}
                            >
                                <span className="mt-1 block" style={{ color: "#d80c18" }}>●</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* COLUMN 2 */}
                    <ul className="space-y-4 text-lg" data-aos="fade-up" data-aos-delay="150">
                        {[
                            "Tower Cranes",
                            "Material Hoists",
                            "Passenger Hoists",
                            "Steel Shuttering & staging materials",
                            "Bar Bending & Cutting Machines",
                            "DG sets 30KVA-125kva",
                            "Needle Vibrators",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2"
                                style={{ color: "#101828" }}
                            >
                                <span className="mt-1 block" style={{ color: "#d80c18" }}>●</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* COLUMN 3 */}
                    <ul className="space-y-4 text-lg" data-aos="fade-left" data-aos-delay="300">
                        {[
                            "Plate Vibrators",
                            "Screed Vibrators",
                            "Welding Machines",
                            "Total Station with Staff",
                            "Level Machines with Staff",
                            "Lab Testing Equipments",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2"
                                style={{ color: "#101828" }}
                            >
                                <span className="mt-1 block" style={{ color: "#d80c18" }}>●</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}
