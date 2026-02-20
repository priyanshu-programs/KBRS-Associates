"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Business() {
    return (
        <section className="py-20 md:py-32 bg-bg-secondary">
            <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    >
                        <span className="label-caps">For Business</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        Our attorneys offer client-focused guidance to businesses.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="text-ink-muted text-lg"
                    >
                        In the current intricate and rapidly evolving legal environment, having a reliable legal partner can significantly impact your success.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Free consultation</button>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    className="relative aspect-[4/5] rounded-sm overflow-hidden order-1 md:order-2"
                >
                    <Image
                        src="https://framerusercontent.com/images/wkmeJKlMGi87EVDvyvKgshm3cs.png"
                        alt="Business legal consultation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
            </div>
        </section>
    );
}
