"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { logo } from "../assests/image/image";

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const [aboutHover, setAboutHover] = useState(false);
  const [projectsHover, setProjectsHover] = useState(false);

  return (
    <>
      {/* TOPBAR */}
      <div className="w-full bg-[#d80c18] text-white py-2 px-3 sm:px-4 lg:px-20">
        <div
          className="
            max-w-screen-2xl mx-auto
            flex flex-wrap items-center
            justify-between 
            gap-y-2 text-xs sm:text-sm
            md:flex-nowrap md:gap-y-0
          "
        >
          {/* Left: contacts */}
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="leading-none">
                +91 9237976291 / 9437017204
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="leading-none">
                <a href="mailto:ho_bcbhuyan@bcbcppl.in">
                  ho_bcbhuyan@bcbcppl.in
                </a>
              </span>
            </div>
          </div>

          {/* Right: socials */}
          <div className="flex items-center gap-3">
            <Twitter size={16} className="cursor-pointer" />
            <Facebook size={16} className="cursor-pointer" />
            <Instagram size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-3 sm:px-4 lg:px-20">
          {/* Logo */}
          <Link href="/">
            <img
              src={logo.src}
              className="h-14 sm:h-16 md:h-20 w-auto"
              alt="logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-lg font-bold text-black">
            {/* Home */}
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-red-600" : "hover:text-red-600"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <div
              className="group relative cursor-pointer flex items-center gap-1"
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <span
                className={`${
                  pathname.startsWith("/About")
                    ? "text-red-600"
                    : "text-black hover:text-red-600"
                }`}
              >
                About
              </span>
              <span className="text-red-600 font-bold select-none">
                {aboutHover ? "−" : "+"}
              </span>

              <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-52 py-2 z-50">
                <Link
                  href="/About"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  About Us
                </Link>
                <Link
                  href="/About/Visioner"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Visioner
                </Link>
                <Link
                  href="/About/Management"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Management
                </Link>
                <Link
                  href="/About/Certifications"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Certifications
                </Link>
                <Link
                  href="/About/Crew"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Our Crew
                </Link>
                <Link
                  href="/About/Equipment"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Equipment & Machinery
                </Link>
              </div>
            </div>

            {/* Expertise */}
            <Link
              href="/Expertise"
              className={`${
                pathname.startsWith("/Expertise")
                  ? "text-red-600"
                  : "hover:text-red-600"
              }`}
            >
              Expertise
            </Link>

            {/* Projects */}
            <div
              className="group relative cursor-pointer flex items-center gap-1"
              onMouseEnter={() => setProjectsHover(true)}
              onMouseLeave={() => setProjectsHover(false)}
            >
              <span
                className={`${
                  pathname.startsWith("/Project")
                    ? "text-red-600"
                    : "text-black hover:text-red-600"
                }`}
              >
                Projects
              </span>
              <span className="text-red-600 font-bold select-none">
                {projectsHover ? "−" : "+"}
              </span>

              <div className="absolute left-0 top-full mt-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-40 py-2 z-50">
                <Link
                  href="/Project/Ongoing"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Ongoing
                </Link>
                <Link
                  href="/Project/Completed"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600"
                >
                  Completed
                </Link>
              </div>
            </div>

            <Link
              href="/Gallery"
              className={`${
                pathname.startsWith("/Gallery")
                  ? "text-red-600"
                  : "hover:text-red-600"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/Career"
              className={`${
                pathname.startsWith("/Career")
                  ? "text-red-600"
                  : "hover:text-red-600"
              }`}
            >
              Career
            </Link>

            <Link
              href="/Contact"
              className={`${
                pathname.startsWith("/Contact")
                  ? "text-red-600"
                  : "hover:text-red-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/Contact"
            className="hidden lg:inline-block bg-red-600 px-5 py-2.5 rounded text-white text-xs md:text-sm font-semibold hover:bg-[#102039]"
          >
            GET A QUOTE →
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-black"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-3 py-3 flex flex-col gap-2 text-sm">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`py-1 ${
                  pathname === "/" ? "text-red-600 font-semibold" : ""
                }`}
              >
                Home
              </Link>

              {/* About */}
              <button
                className="flex justify-between items-center py-1 w-full text-left"
                onClick={() => setAboutOpen((prev) => !prev)}
              >
                <span
                  className={`${
                    pathname.startsWith("/About") ? "text-red-600" : ""
                  }`}
                >
                  About
                </span>
                <span className="text-xs">{aboutOpen ? "-" : "+"}</span>
              </button>

              {aboutOpen && (
                <div className="pl-4 flex flex-col gap-1 pb-1">
                  <Link
                    href="/About"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/About/Visioner"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Visioner
                  </Link>
                  <Link
                    href="/About/Management"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Management
                  </Link>
                  <Link
                    href="/About/Certifications"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Certifications
                  </Link>
                  <Link
                    href="/About/Crew"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Our Crew
                  </Link>
                  <Link
                    href="/About/Equipment"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Equipment & Machinery
                  </Link>
                </div>
              )}

              {/* Projects */}
              <button
                className="flex justify-between items-center py-1 w-full text-left"
                onClick={() => setProjectsOpen((prev) => !prev)}
              >
                <span
                  className={`${
                    pathname.startsWith("/Project") ? "text-red-600" : ""
                  }`}
                >
                  Projects
                </span>
                <span className="text-xs">{projectsOpen ? "-" : "+"}</span>
              </button>

              {projectsOpen && (
                <div className="pl-4 flex flex-col gap-1 pb-1">
                  <Link
                    href="/Project/Ongoing"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Ongoing
                  </Link>
                  <Link
                    href="/Project/Completed"
                    onClick={() => setMobileOpen(false)}
                    className="py-1"
                  >
                    Completed
                  </Link>
                </div>
              )}

              <Link
                href="/Expertise"
                onClick={() => setMobileOpen(false)}
                className={`py-1 ${
                  pathname.startsWith("/Expertise")
                    ? "text-red-600 font-semibold"
                    : ""
                }`}
              >
                Expertise
              </Link>

              <Link
                href="/Gallery"
                onClick={() => setMobileOpen(false)}
                className={`py-1 ${
                  pathname.startsWith("/Gallery")
                    ? "text-red-600 font-semibold"
                    : ""
                }`}
              >
                Gallery
              </Link>

              <Link
                href="/Career"
                onClick={() => setMobileOpen(false)}
                className={`py-1 ${
                  pathname.startsWith("/Career")
                    ? "text-red-600 font-semibold"
                    : ""
                }`}
              >
                Career
              </Link>

              <Link
                href="/Contact"
                onClick={() => setMobileOpen(false)}
                className={`py-1 ${
                  pathname.startsWith("/Contact")
                    ? "text-red-600 font-semibold"
                    : ""
                }`}
              >
                Contact
              </Link>

              <Link
                href="/quote"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-red-600 px-4 py-2 rounded text-white text-xs font-semibold w-full text-center"
              >
                GET A QUOTE →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
