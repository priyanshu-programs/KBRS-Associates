"use client";

import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A1726] text-white pt-32 pb-0 relative overflow-hidden font-sans">
            <div className="w-full px-6 md:px-12 lg:px-20 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-28">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-1 lg:pr-8">
                        {/* Logo Area */}
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-sm inline-block">
                                <Image
                                    src="/CA-India-Logo.jpg"
                                    alt="KBRS & ASSOCIATES. Logo"
                                    width={24}
                                    height={24}
                                    className="h-6 w-auto mix-blend-multiply"
                                />
                            </div>
                            <span className="font-serif font-bold text-lg tracking-wide uppercase">KBRS & ASSOCIATES.</span>
                        </div>
                        <p className="text-stone-300 text-[15px] leading-[1.8] mt-2 max-w-[280px]">
                            KBRS & ASSOCIATES. is a trusted CA firm with years of experience, offering expert services in financial compliance, taxation, and advisory.
                        </p>
                    </div>

                    {/* Useful Links Column */}
                    <div className="flex flex-col gap-6 lg:pl-12">
                        <h4 className="font-sans text-[17px] font-semibold text-white tracking-wide">Useful Links</h4>
                        <div className="flex flex-col gap-4">
                            {[
                                { label: "INCOME TAX", href: "https://www.incometax.gov.in" },
                                { label: "MCA 21", href: "https://www.mca.gov.in" },
                                { label: "FIFP.GOV.IN", href: "https://www.fifp.gov.in" },
                                { label: "GST.GOV.IN", href: "https://www.gst.gov.in" }
                            ].map((link) => (
                                <a key={link.label} href={link.href} className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 text-stone-300 hover:text-white transition-colors text-[15px]" target="_blank" rel="noreferrer">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-[17px] font-semibold text-white tracking-wide">Socials</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-3 text-stone-300 hover:text-white transition-colors text-[15px]">
                                <Twitter size={18} strokeWidth={1.5} /> Twitter (X)
                            </a>
                            <a href="#" className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-3 text-stone-300 hover:text-white transition-colors text-[15px]">
                                <svg
                                    viewBox="0 0 448 512"
                                    width="18"
                                    height="18"
                                    aria-hidden="true"
                                    className="shrink-0"
                                    fill="currentColor"
                                >
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.8 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.8 94.8 83.9 13.3 5.7 23.7 9.1 31.8 11.7 13.4 4.2 25.6 3.6 35.2 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.4-5-3.8-10.5-6.6z" />
                                </svg>
                                WhatsApp
                            </a>
                            <a href="#" className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-3 text-stone-300 hover:text-white transition-colors text-[15px]">
                                <Facebook size={18} strokeWidth={1.5} /> Facebook
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-6">
                        <h4 className="font-sans text-[17px] font-semibold text-white tracking-wide">Contact Us</h4>
                        <div className="flex flex-col gap-4 text-stone-300 text-[15px]">
                            <a href="tel:+919876543210" className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white transition-colors">
                                +91-9876543210
                            </a>
                            <a href="mailto:cakomalbajaj@gmail.com" className="w-fit relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white transition-colors">
                                cakomalbajaj@gmail.com
                            </a>
                            <address className="not-italic mt-2 leading-[1.8]">
                                123 Business Avenue, Suite 405,<br />
                                Connaught Place, New Delhi 110001
                            </address>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Container */}
                <div className="border-t border-white/[0.08] relative pt-8 pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[15px] z-20 relative">
                        <div className="flex items-center gap-8">
                            <a href="#" className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#F37920] after:transition-transform after:duration-300 hover:after:scale-x-100 text-[#F37920] hover:text-[#ff8d3b] transition-colors font-medium">Terms & Conditions</a>
                            <a href="#" className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 text-stone-300 hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                        <p className="text-stone-300">© 2026 KBRS & ASSOCIATES. All rights reserved.</p>
                    </div>
                </div>
            </div>

            {/* Huge Background Text Flowing Normally at the Bottom - Animated Ticker */}
            <div className="w-full pointer-events-none select-none overflow-hidden pb-[26px] flex"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                <motion.div
                    className="flex w-max"

                    initial={{ x: "0%" }}
                    whileInView={{ x: ["0%", "-25%"] }}
                    viewport={{ once: false, amount: 0.1 }}

                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="font-serif font-extrabold text-[15vw] leading-[0.75] text-white/[0.04] whitespace-nowrap tracking-tight shrink-0 px-8"
                        >
                            KBRS & ASSOCIATES.
                        </span>
                    ))}
                </motion.div>
            </div>
            {/* Inline styles for the animation since standard Tailwind v4 might need it configured in globals */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 4)); }
                }
            `}} />
        </footer>
    );
}
