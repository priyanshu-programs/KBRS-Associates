"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function Office() {
    const offices = [
        { city: "New York", address: "NY 123 Legal Avenue, Suite 456", zip: "New York, NY 10001" },
        { city: "Los Angeles", address: "CA 789 Justice Blvd, Floor 3", zip: "Los Angeles, CA 90001" },
        { city: "Chicago", address: "IL 456 Law Street, Suite 101", zip: "Chicago, IL 60601" },
    ];

    return (
        <section id="location" className="py-20 md:py-32 bg-bg-secondary">
            <div className="container-wide grid lg:grid-cols-2 gap-16 items-start">
                <div className="flex flex-col gap-12 sticky top-32">
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        >
                            <span className="label-caps">Our office sites</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                            className=""
                        >
                            Visit us at any of our locations
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                            className="text-ink-muted text-lg"
                        >
                            to experience our personalized approach to legal representation.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Contact us</button>
                    </motion.div>
                </div>

                <div className="flex flex-col gap-6">
                    {offices.map((office, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                            className="p-8 bg-bg-primary rounded-sm flex items-center gap-8 border border-line card-hover"
                        >
                            <div className="bg-bg-secondary p-4 rounded-sm">
                                <Image
                                    src="https://framerusercontent.com/images/EUCkcUN00CIOesoAAXPbc3CYVOY.svg"
                                    alt="Location"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-serif">{office.city}</h3>
                                <div className="text-ink-muted text-sm">
                                    <p>{office.address}</p>
                                    <p>{office.zip}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
