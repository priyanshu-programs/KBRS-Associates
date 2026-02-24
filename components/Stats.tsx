"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Stats() {
    const stats = [
        { value: "10k", label: "Clients worldwide" },
        { value: "20+", label: "Team experts" },
        { value: "50+", label: "Awards & honors" },
    ];

    return (
        <section className="py-16 md:py-32 bg-bg-secondary text-ink">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        >
                            <span className="label-caps">KBRS</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                            className="text-ink"
                        >
                            For over 25 years, we&apos;ve been helping clients navigate their legal challenges.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                            className="text-ink/80 text-lg"
                        >
                            To simplify the complexities of law. To provide our clients with peace of mind. To foster growth and success by alleviating legal pressures.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Free consultation</button>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        className="relative aspect-video rounded-sm overflow-hidden"
                    >
                        <Image
                            src="https://framerusercontent.com/images/gjFVDEK4Q2K2l1GdEnlIm4f8Kc.png"
                            alt="Team shaking hands"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 75 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                                className="flex flex-col gap-2"
                            >
                                <span className="text-4xl md:text-5xl font-serif font-bold text-accent">{stat.value}</span>
                                <span className="text-ink/80 text-sm md:text-base">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
