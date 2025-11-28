"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import {
    Ong1,
    Ong2,
    Ong3,
    Ong4,
    Ong5,
    Ong6,
    Ong7,
    Ong8,
} from "../assests/image/image";

interface ProjectCardProps {
    image: string;
    title: string;
    link: string;
    delay: number;
}

const ProjectCard: FC<ProjectCardProps> = ({ image, title, link, delay }) => {
    return (
        <a
            href={link}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={delay}
            className="relative group cursor-pointer overflow-hidden rounded-xl block"
        >
            <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <h3 className="absolute inset-0 flex items-center justify-center text-center text-white text-xl font-semibold opacity-0 transition-all duration-500 group-hover:opacity-100 z-20">
                {title}
            </h3>

            <div className="absolute bottom-4 right-4 bg-[#d80c18] w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 z-30">
                <ArrowUpRight className="text-white" size={20} />
            </div>
        </a>
    );
};

const OngoingProjects: FC = () => {
    const projects = [
        { image: Ong1.src, title: "Puri Railway Station", link: "/" },
        { image: Ong2.src, title: "Salegaon-Budhapank in East Coast Railway", link: "/" },
        { image: Ong3.src, title: "Redevelopment of Kalinga Studio", link: "/" },
        { image: Ong4.src, title: "Biju Patanaik Adarsha Vidyalaya", link: "/" },
        { image: Ong5.src, title: "Housing Projects for Sevayats at Harachandi Sahi, Puri", link: "/" },
        { image: Ong6.src, title: "Beach Road Extension, Acharya Harihar Square", link: "/" },
        { image: Ong7.src, title: "Workstation", link: "/" },
        { image: Ong8.src, title: "Studio", link: "/" },
    ];

    return (
        <section className="w-full py-16 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((p, index) => (
                    <ProjectCard
                        key={index}
                        image={p.image}
                        title={p.title}
                        link={p.link}
                        delay={index * 100}
                    />
                ))}
            </div>
        </section>
    );
};

export default OngoingProjects;
