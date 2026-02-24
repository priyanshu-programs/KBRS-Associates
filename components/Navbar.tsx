"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Team", href: "#team" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-black/10">
            <div className="container-wide flex items-center justify-between h-16 md:h-20">
                <div className="flex items-center gap-5 md:gap-8">
                    {/* Firm Typographic Logo */}
                    <a href="/" className="flex items-center gap-4 group">
                        {/* CA India Logo */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/CA-India-Logo.jpg"
                                alt="CA India Logo"
                                width={64}
                                height={48}
                                className="h-8 md:h-10 w-auto mix-blend-multiply"
                                priority
                            />
                        </div>

                        {/* Text Block */}
                        <div className="flex flex-col justify-center">
                            <span className="font-serif text-base md:text-xl font-bold text-ink leading-tight mb-0.5">KBRS & Associates</span>
                            <span className="font-sans text-[0.55rem] md:text-[0.6rem] tracking-[0.25em] font-bold text-accent uppercase leading-none mt-1">Chartered Accountants</span>
                        </div>
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 text-ink-muted hover:text-ink transition-colors font-medium text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="group relative overflow-hidden bg-accent text-white text-sm py-2 px-6 !rounded-[6px] font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-lg flex items-center justify-center"
                    >
                        {/* Diagonal Shine */}
                        <span className="absolute inset-0 -translate-x-[150%] group-hover:animate-[btn-shine_0.75s_ease-out_forwards] z-0 pointer-events-none">
                            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg]"></div>
                        </span>

                        {/* Rolling Text Wrapper */}
                        <span className="relative z-10 block overflow-hidden h-[1.25em]">
                            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full leading-[1.25em]">
                                Contact
                            </span>
                            <span className="absolute top-0 left-0 block w-full text-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0 leading-[1.25em]">
                                Contact
                            </span>
                        </span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-ink"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-bg-primary border-b border-line px-4 py-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative w-fit after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 text-ink-muted hover:text-ink transition-colors font-medium text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="group relative overflow-hidden bg-accent text-white text-center py-3 mt-2 !rounded-[6px] font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-lg flex items-center justify-center"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Diagonal Shine */}
                        <span className="absolute inset-0 -translate-x-[150%] group-hover:animate-[btn-shine_0.75s_ease-out_forwards] z-0 pointer-events-none">
                            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg]"></div>
                        </span>

                        {/* Rolling Text Wrapper */}
                        <span className="relative z-10 block overflow-hidden h-[1.25em]">
                            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full leading-[1.25em]">
                                Contact
                            </span>
                            <span className="absolute top-0 left-0 block w-full text-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0 leading-[1.25em]">
                                Contact
                            </span>
                        </span>
                    </a>
                </motion.div>
            )}

        </nav>
    );
}
