"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FC } from "react";
import {
  Comp1,
  Comp2,
  Comp3,
  Comp4,
  Comp5,
  Comp6,
  Comp7,
  Comp8,
  Comp9,
  Comp10,
  Comp11,
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

      <h3 className="absolute inset-0 flex items-center text-center justify-center text-white text-xl font-semibold opacity-0 transition-all duration-500 group-hover:opacity-100 z-20">
        {title}
      </h3>

      <div className="absolute bottom-4 right-4 bg-[#d80c18] w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 z-30">
        <ArrowUpRight className="text-white" size={20} />
      </div>
    </a>
  );
};

const CompletedProjects: FC = () => {
  const projects = [
    { image: Comp1.src, title: "Basic Science Building of IIT-BBSR", link: "/" },
    { image: Comp2.src, title: "Railway Bridge", link: "/" },
    { image: Comp3.src, title: "Academic Block of IGIT Sarang", link: "/" },
    { image: Comp4.src, title: "OPTCL (TECH -TOWER)", link: "/" },
    { image: Comp5.src, title: "Kalinga Hockey Stadium", link: "/" },
    { image: Comp6.src, title: "IIT-BBSR", link: "/" },
    { image: Comp7.src, title: "200 Seater Girls Hostel", link: "/" },
    { image: Comp8.src, title: "SBR Womens College, Berhampur", link: "/" },
    { image: Comp9.src, title: "Multipurpose Indoor Stadium, Bhubaneswar", link: "/" },
    { image: Comp10.src, title: "Mission Shakti Bhawan", link: "/" },
    { image: Comp11.src, title: "Urban Hostel", link: "/" },
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

export default CompletedProjects;
