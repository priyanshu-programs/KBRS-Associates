"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32">
            <div className="container-wide flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-1/3">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    >
                        <span className="label-caps">Testimonials</span>
                    </motion.div>
                </div>
                <div className="lg:w-2/3 flex flex-col gap-12">
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        >
                            <Image
                                src="https://framerusercontent.com/images/0b8lg87quRilDHSW81DzUJtshaU.svg"
                                alt="Quote"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                            className="text-3xl md:text-4xl font-serif leading-tight"
                        >
                            KBRS Always has been an invaluable partner in navigating the complexities of business law.
                        </motion.p>
                        <div className="flex items-center gap-5">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                                className="relative w-16 h-16 rounded-full overflow-hidden"
                            >
                                <Image
                                    src="https://framerusercontent.com/images/hUvl62PeOMVDv3mGNm2Q9eNpfig.png"
                                    alt="Sarah Mitchell"
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                            >
                                <p className="font-bold text-ink">Sarah Mitchell</p>
                                <p className="text-ink-muted text-sm">Small Business Owner</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
