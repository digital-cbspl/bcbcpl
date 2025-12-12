"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import {
    Kalingastudio1,
    Kalingastudio10,
    Kalingastudio11,
    Kalingastudio12,
    Kalingastudio2,
    Kalingastudio3,
    Kalingastudio4,
    Kalingastudio5,
    Kalingastudio6,
    Kalingastudio7,
    Kalingastudio8,
    Kalingastudio9,
} from "@/src/assests/image/image";

export default function KalingaStudio() {
    const images = [
        Kalingastudio1.src,
        Kalingastudio2.src,
        Kalingastudio3.src,
        Kalingastudio4.src,
        Kalingastudio5.src,
        Kalingastudio6.src,
        Kalingastudio7.src,
        Kalingastudio8.src,
        Kalingastudio9.src,
        Kalingastudio10.src,
        Kalingastudio11.src,
        Kalingastudio12.src,
    ];

    const [index, setIndex] = useState<number | null>(null);
    const touchStart = useRef<number>(0);
    const touchEnd = useRef<number>(0);

    /* -------------------------
       KEYBOARD CONTROLS
       ------------------------- */
    useEffect(() => {
        if (index === null) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [index]);

    /* -------------------------
       SWIPE HANDLERS (MOBILE)
       ------------------------- */
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEnd.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const swipeDistance = touchStart.current - touchEnd.current;

        if (swipeDistance > 75) nextImage(); // swipe left → next
        if (swipeDistance < -75) prevImage(); // swipe right → previous
    };

    /* -------------------------
       LIGHTBOX NAVIGATION
       ------------------------- */
    const nextImage = () => {
        if (index === null) return;
        setIndex((prev) => ((prev! + 1) % images.length));
    };

    const prevImage = () => {
        if (index === null) return;
        setIndex((prev) => (prev! - 1 + images.length) % images.length);
    };

    const closeLightbox = () => setIndex(null);

    return (
        <div className="w-full bg-white">

            {/* TOP SECTION */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 py-14 px-6 lg:px-12">

                {/* LEFT – PROJECT INFORMATION */}
                <div className="bg-[#101828] text-white p-6 rounded-lg lg:col-span-1">
                    <h2 className="text-xl font-bold mb-4">Project Information</h2>

                    <InfoRow label="Client:" value="" />
                    <InfoRow label="Location:" value="Bhubaneswar" />
                    <InfoRow label="Area(sf):" value="550,000 sf" />
                    <InfoRow label="Year:" value="2019" />
                    <InfoRow label="Budget:" value="" />
                    <InfoRow label="Architect:" value="" />
                    <InfoRow label="Sector:" value="" />
                </div>

                {/* RIGHT – CONTENT */}
                <div className="lg:col-span-2">
                    <h1 className="text-4xl font-bold mb-6 text-[#e7000b]">Redevelopment of Kalinga Studio</h1>

                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem veritatis quo et ullam,
                        ducimus itaque earum dolorem? Consectetur, et, aut. A, corporis officia eius dicta explicabo
                        saepe nesciunt, mollitia minima, atque maiores optio cum.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cum fugit officia dolores eligendi,
                        rem. Quibusdam quasi impedit perspiciatis iure maiores, eaque numquam doloremque.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, nam adipisci dolores laborum
                        earum. Unde cum, ut nostrum nihil alias, laudantium molestiae, vitae quidem dolorem officiis ipsum.
                    </p>
                </div>
            </section>

            {/* GALLERY */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className="w-full h-[220px] overflow-hidden rounded-md cursor-pointer"
                        >
                            <Image
                                src={img}
                                alt="Gallery"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* LIGHTBOX FULLSCREEN */}
            {index !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-[999] flex flex-col items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* CLOSE */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-5 right-5 text-white text-4xl font-bold"
                    >
                        ×
                    </button>

                    {/* PREVIOUS */}
                    <button
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
                        onClick={prevImage}
                    >
                        ‹
                    </button>

                    {/* NEXT */}
                    <button
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-5xl px-4"
                        onClick={nextImage}
                    >
                        ›
                    </button>

                    {/* MAIN IMAGE */}
                    <div className="transition-all duration-500">
                        <Image
                            src={images[index]}
                            alt="Full"
                            width={1600}
                            height={1000}
                            className="max-h-[80vh] w-auto rounded-lg shadow-xl"
                        />
                    </div>

                    {/* THUMBNAILS STRIP */}
                    <div className="flex gap-3 mt-6 overflow-x-auto max-w-[90vw] pb-3">
                        {images.map((thumb, tIndex) => (
                            <div
                                key={tIndex}
                                onClick={() => setIndex(tIndex)}
                                className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border 
                                    ${index === tIndex ? "border-white" : "border-gray-500"}`}
                            >
                                <Image
                                    src={thumb}
                                    alt="Thumbnail"
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* SUB COMPONENT */
function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="border-b border-gray-700 py-1 mb-1">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-gray-300 text-sm">{value}</p>
        </div>
    );
}
