"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-bg-primary">
            <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    className="relative aspect-square rounded-sm overflow-hidden"
                >
                    <Image
                        src="https://framerusercontent.com/images/cGm2XJwq98gzgMyq02nq3llgq0.png"
                        alt="Contact us"
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
                        <span className="label-caps">Contact</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        Connect with us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="text-ink-muted text-lg"
                    >
                        You can also use the feedback form below to reach out to us directly through our website.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Contact us</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
