"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden">
            <div className="container-wide grid md:grid-cols-2 gap-0 items-stretch min-h-[calc(100vh-5rem)]">
                {/* Left: Text Content — vertically centered, left-aligned */}
                <div className="flex flex-col justify-center gap-6 max-w-md md:pr-12">
                    <motion.h1
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        className="text-ink"
                    >
                        <span className="md:whitespace-nowrap">Excellence in Service</span>,{" "}
                        <span className="md:whitespace-nowrap">Commitment to</span>
                        <br className="hidden md:block" />
                        Compliance.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className="text-ink-muted text-[15px] leading-relaxed max-w-xs border-l-4 border-accent pl-4"
                    >
                        We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service.
                    </motion.p>
                </div>

                {/* Right: Image — bleeds ~112px wider on desktop for a fuller feel */}
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 90, stiffness: 350 }}
                    className="relative min-h-[300px] md:min-h-0 overflow-hidden md:-ml-14 md:-mr-14 mt-8 md:mt-0"
                >
                    <Image
                        src="/hero image.jpg"
                        alt="Professional team at KBRS & Associates"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
