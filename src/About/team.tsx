"use client";

import Image from "next/image";
import { Youtube, Linkedin, Facebook } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Member1, Member2, Member3 } from "../assests/image/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    youtube: string;
    linkedin: string;
    facebook: string;
  };
}

export default function TeamSection() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Mr. Pradeep Kumar Bhuyan",
      role: "Managing Director",
      image: Member1.src,
      socials: {
        youtube: "https://youtube.com/",
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
      },
    },
    {
      name: "Mrs. Milee Bhuyan",
      role: "Director",
      image: Member2.src,
      socials: {
        youtube: "https://youtube.com/",
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
      },
    },
    {
      name: "Mr. Pramod Kumar Bhuyan",
      role: "Director",
      image: Member3.src,
      socials: {
        youtube: "https://youtube.com/",
        linkedin: "https://linkedin.com/in/",
        facebook: "https://facebook.com/",
      },
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="bg-[#f8f6f1] rounded-2xl overflow-hidden shadow-sm group relative"
          >
            {/* SOCIAL ICONS – TOP RIGHT */}
            <div className="absolute top-5 right-5 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <a
                href={member.socials.youtube}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#d80c18] hover:bg-[#101828] text-white rounded-full shadow"
              >
                <Youtube size={17} />
              </a>

              <a
                href={member.socials.linkedin}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#d80c18] hover:bg-[#101828] text-white rounded-full shadow"
              >
                <Linkedin size={17} />
              </a>

              <a
                href={member.socials.facebook}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#d80c18] hover:bg-[#101828] text-white rounded-full shadow"
              >
                <Facebook size={17} />
              </a>
            </div>

            {/* IMAGE */}
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              className="w-full h-[380px] object-cover object-top"
            />

            {/* WHITE CARD */}
            <div className="relative bg-white px-6 pt-7 pb-5 rounded-t-[50px] -mt-10">
              <h3 className="text-xl font-semibold leading-tight">{member.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
