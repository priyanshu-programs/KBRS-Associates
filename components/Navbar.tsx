"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Location", href: "#location" },
        { name: "Blog", href: "#blog" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-line">
            <div className="container-wide flex items-center justify-between h-16 md:h-20">
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center">
                        <Image
                            src="https://framerusercontent.com/images/FGTZF3HSNvTqghtlWIiY2zRLnU.svg"
                            alt="KBRS Logo"
                            width={120}
                            height={32}
                            className="h-8 w-auto"
                            priority
                        />
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-ink-muted hover:text-ink transition-colors font-medium text-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary text-sm py-2 px-5">
                        Contact
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
                            className="text-ink-muted hover:text-ink transition-colors font-medium text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-primary text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>
                </motion.div>
            )}
        </nav>
    );
}
