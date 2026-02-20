"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    className="relative aspect-[4/5] rounded-sm overflow-hidden"
                >
                    <Image
                        src="https://framerusercontent.com/images/eSEwqoUA8dRg5NqzdGWvOZRin8.png"
                        alt="Justice Scale"
                        fill
                        className="object-cover"
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
                        <span className="label-caps">About us</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        We build your trust and handle your case with care.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="flex flex-col gap-4 text-ink-muted text-lg"
                    >
                        <p>
                            We understand that child custody matters are deeply personal and often complex, and we are dedicated to supporting you through this challenging time.
                        </p>
                        <p>
                            Custody arrangements significantly affect a child&apos;s well-being and development, making it crucial to ensure that their best interests are always prioritized.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Free consultation</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
