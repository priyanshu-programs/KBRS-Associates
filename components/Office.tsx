"use client";

import { motion } from "motion/react";

export default function Office() {
    const offices = [
        { city: "New York", address: "NY 123 Legal Avenue, Suite 456", zip: "New York, NY 10001" },
        { city: "Los Angeles", address: "CA 789 Justice Blvd, Floor 3", zip: "Los Angeles, CA 90001" },
        { city: "Chicago", address: "IL 456 Law Street, Suite 101", zip: "Chicago, IL 60601" },
    ];

    return (
        <section id="location" className="py-16 md:py-32 bg-bg-secondary text-ink">
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
                            className="text-ink"
                        >
                            Visit us at any of our locations
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                            className="text-ink/80 text-lg"
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
                            className="p-8 bg-bg-primary flex items-center gap-8 border border-line card-hover text-ink"
                        >
                            <div className="bg-accent p-4 flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
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
