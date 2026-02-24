"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="bg-[#FFFFFF] py-24 md:py-32">
            <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    className="relative aspect-square md:aspect-[4/5] rounded-sm overflow-hidden"
                >
                    <Image
                        src="https://framerusercontent.com/images/eSEwqoUA8dRg5NqzdGWvOZRin8.png"
                        alt="Justice Scale"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
                <div className="flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    >
                        <span className="label-caps">About K B R S & ASSOCIATES</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        We deliver comprehensive, technology-driven, and client-focused financial solutions.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="flex flex-col gap-4 text-ink-muted text-lg leading-relaxed"
                    >
                        <p>
                            <span className="font-semibold text-ink">KBRS</span> is a progressive Chartered Accountancy firm established by two dynamic finance professionals with a shared vision—to deliver comprehensive, technology-driven, and client-focused financial solutions. With over three decades of combined experience across global banking, taxation, audit, compliance, and advisory domains, the firm offers an integrated suite of services tailored for <span className="font-semibold text-ink">Individuals</span>, <span className="font-semibold text-ink">Corporates</span>, <span className="font-semibold text-ink">LLPs</span>, <span className="font-semibold text-ink">Partnership Firms</span>, <span className="font-semibold text-ink">Trusts</span>, and <span className="font-semibold text-ink">Societies</span>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
