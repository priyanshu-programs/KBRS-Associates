"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-16 md:pt-20 overflow-hidden">
            <div className="container-wide grid md:grid-cols-2 gap-0 items-stretch min-h-[calc(100vh-5rem)]">
                {/* Left: Text Content — vertically centered, left-aligned */}
                <div className="flex flex-col justify-center gap-6 max-w-md py-16 md:py-24 md:pr-12">
                    <motion.h1
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        className="text-ink"
                    >
                        <span className="whitespace-nowrap">Excellence in Service</span>,{" "}
                        <span className="whitespace-nowrap">Commitment to</span>
                        <br />
                        Compliance.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className="text-ink-muted text-[15px] leading-relaxed max-w-xs"
                    >
                        We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="mt-6"
                    >
                        <button className="btn-primary">
                            Free consultation
                        </button>
                    </motion.div>
                </div>

                {/* Right: Image — bleeds ~112px wider on desktop for a fuller feel */}
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 90, stiffness: 350 }}
                    className="relative min-h-[400px] md:min-h-0 overflow-hidden md:-ml-14 md:-mr-14"
                >
                    <Image
                        src="https://framerusercontent.com/images/Lm7GZ0LtaA4FAPAySOcYQIWlwo.png"
                        alt="Professional team at KBRS & Associates"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
