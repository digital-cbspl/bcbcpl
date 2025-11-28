"use client";

import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
    ArrowRight,
    InstagramIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../assests/image/image";

export default function Footer({ visits }: { visits: number | null }) {
    return (
        <footer className="bg-gray-200 text-black pt-16 pb-5">
            <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LOGO + ABOUT */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Image
                            src={logo.src}
                            alt="Company Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-sm leading-relaxed">
                        We’re committed to elevating the construction experience for our
                        clients. With a passion for innovation and quality craftsmanship.
                    </p>

                    <div className="flex gap-3 mt-6">
                        {[
                            { icon: Facebook, url: "https://facebook.com" },
                            { icon: Twitter, url: "https://twitter.com" },
                            { icon: InstagramIcon, url: "https://instagram.com" },
                            { icon: Linkedin, url: "https://linkedin.com" },
                        ].map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.url}
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-md border border-gray-400 hover:bg-red-600 hover:text-white transition"
                            >
                                <item.icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* USEFUL LINKS */}
                <div>
                    <h3 className="text-xl font-semibold mb-5">Useful Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <Link href="/About" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> About Us
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Our Services
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Ongoing Projects
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Completed Projects
                            </Link>
                        </li>

                        <li>
                            <Link href="/Contact" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* QUICK SERVICES */}
                <div>
                    <h3 className="text-xl font-semibold mb-5">Latest Projects</h3>
                    <ul className="space-y-4 text-sm">
                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Puri Railway Station
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Redevelopment of Kalinga Studio
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Biju Patanaik Adarsha Vidyalaya
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Basic Science Building of IIT-BBSR
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
                                <ArrowRight size={16} /> Railway Bridge
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="text-xl font-semibold mb-5">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Receive expert tips, company updates, and construction industry highlights every month.
                    </p>

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-md border border-gray-400 bg-white mb-4 outline-none"
                    />

                    <button className="w-full bg-red-600 hover:bg-[#102039] cursor-pointer text-white py-3 rounded-md font-semibold transition">
                        SUBSCRIBE NOW
                    </button>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-400 mt-15 pt-4 text-sm px-6 md:px-20 text-center flex flex-col md:flex-row justify-between items-center container mx-auto gap-4">
                <p>© 2025 BCBCPL | All Rights Reserved || Developed by <a href="" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">CBSPL</a>.</p>

                <div className="flex gap-8">
                    <a className="hover:text-red-600 cursor-pointer">Terms of Use</a>
                    <a className="hover:text-red-600 cursor-pointer">Privacy Policy</a>
                    <a href="/Career" className="hover:text-red-600 cursor-pointer">Career</a>
                    Total Visits: {visits ?? "Loading..."}
                </div>

                {/* Visit Counter */}
                
            </div>
        </footer>
    );
}
