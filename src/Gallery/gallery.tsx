"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7 } from "../assests/image/image";

const images = [
    { src: Gallery1.src, title: "Conference Internal Meeting" },
    { src: Gallery2.src, title: "Office Enterance" },
    { src: Gallery3.src, title: "Office Internal Discussion with Sr. GM" },
    { src: Gallery4.src, title: "Office Lobby" },
    { src: Gallery5.src, title: "Office Reception Area" },
    { src: Gallery6.src, title: "Office Team Photo" },
    { src: Gallery7.src, title: "Office Workstation" },
    // { src: "/gallery/g8.jpg", title: "Image 8" },
];

// Different AOS animations
const aosAnimations = [
    "fade-up",
    "fade-right",
    "fade-left",
    "zoom-in",
    "flip-left",
    "flip-right",
    "zoom-in-up",
    "zoom-in-down",
];

export default function GalleryPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const nextImage = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const prevImage = () => {
        if (activeIndex === null) return;
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    return (
        <section className="w-full py-16 px-4 lg:px-10 bg-white">
             <div className="max-w-7xl mx-auto">
             <h2
                className="text-4xl font-extrabold text-center text-[#101828] mb-12"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
            >
                GALLERY
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        data-aos={aosAnimations[index % aosAnimations.length]}
                        data-aos-delay={index * 120}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                        onClick={() => setActiveIndex(index)}
                    >
                        <Image
                            src={img.src}
                            alt={img.title}
                            width={500}
                            height={350}
                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 px-5 transition-opacity duration-300 flex items-center text-center justify-center">
                            <p className="text-white text-lg font-semibold">{img.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {activeIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    data-aos="fade-in"
                >
                    <button
                        onClick={() => setActiveIndex(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold"
                        data-aos="fade-down"
                    >
                        ✕
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white text-4xl font-bold"
                        data-aos="fade-right"
                    >
                        ‹
                    </button>

                    <Image
                        src={images[activeIndex].src}
                        alt="large"
                        width={900}
                        height={600}
                        data-aos="zoom-in"
                        className="max-h-[80vh] w-auto rounded-lg"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white text-4xl font-bold"
                        data-aos="fade-left"
                    >
                        ›
                    </button>
                </div>
            )}
            </div>
        </section>
    );
}
