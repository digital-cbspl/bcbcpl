"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cer1, Cer2, Cer3 } from "../assests/image/image";

interface Certificate {
  title: string;
  file: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    title: "ISO 9001-2015",
    file: "/pdfs/ISO 9001-2015.pdf#toolbar=0",
    image: Cer1.src,
  },
  {
    title: "Udyam Registration Certificate",
    file: "/pdfs/Udyam Registration Certificate.pdf#toolbar=0",
    image: Cer2.src,
  },
  {
    title: "ISO Certificate 14001 & 45001",
    file: "/pdfs/ISO Certificate 14001 & 45001.pdf#toolbar=0",
    image: Cer3.src,
  },
];

export default function CertificationPage() {
  const [openPdf, setOpenPdf] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setOpenPdf(cert.file)}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="cursor-pointer p-4 border rounded-xl shadow-sm hover:shadow-lg transition flex flex-col items-center bg-gray-50 group"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md"
                loading="lazy"
              />
              <h3 className="mt-4 text-center font-semibold text-lg text-[#101828] group-hover:text-red-600 transition-colors">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {openPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-[50%] h-[100%] rounded-lg overflow-hidden shadow-xl relative">
            <button
              onClick={() => setOpenPdf(null)}
              className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded"
            >
              Close
            </button>

            <iframe
              src={openPdf}
              className="w-full h-full"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
