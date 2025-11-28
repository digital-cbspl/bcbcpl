"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Testi } from "../assests/image/image";

export default function TestimonialCarousel() {

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: false,
        });
    }, []);

    const testimonials = [
        {
            name: "Mr. Robey Alexa",
            role: "CEO, Xara Agency",
            img: Testi.src,
            text: "Morem ipsum dolor sit amcons ctetur adipisc ing elit a flora p sum dolor sitte amet consect eture. Borem.",
        },
        {
            name: "Mr. Robey Alexa",
            role: "CEO, Xara Agency",
            img: Testi.src,
            text: "Morem ipsum dolor sit amcons ctetur adipisc ing elit a flora p sum dolor sitte amet consect eture. Borem.",
        },
        {
            name: "Mr. Robey Alexa",
            role: "CEO, Xara Agency",
            img: Testi.src,
            text: "Morem ipsum dolor sit amcons ctetur adipisc ing elit a flora p sum dolor sitte amet consect eture. Borem.",
        },
        {
            name: "Mr. Robey Alexa",
            role: "CEO, Xara Agency",
            img: Testi.src,
            text: "Morem ipsum dolor sit amcons ctetur adipisc ing elit a flora p sum dolor sitte amet consect eture. Borem.",
        },
        {
            name: "Mr. Robey Alexa",
            role: "CEO, Xara Agency",
            img: Testi.src,
            text: "Morem ipsum dolor sit amcons ctetur adipisc ing elit a flora p sum dolor sitte amet consect eture. Borem.",
        },
    ];

    return (
        <section
            className="w-full bg-gray-100 py-20 px-6"
            data-aos="fade-in"
        >
            <div
                className="text-center mb-12"
                data-aos="fade-up"
            >
                <p className="text-red-500 font-medium tracking-wide">OUR TESTIMONIALS</p>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-snug">
                    How BCBCPL has changed lives? <br />Hear from our newest members.
                </h2>
            </div>

            <div
                data-aos="zoom-in"
                data-aos-delay="150"
            >
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-white border border-gray-200 shadow-sm rounded-2xl p-10 h-full"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex text-yellow-400 gap-1 mb-4 text-xl">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    “{item.text}”
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.img}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-500 text-sm">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
