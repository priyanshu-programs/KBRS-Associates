"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-16 md:py-32 bg-bg-primary">
            <div className="container-wide grid md:grid-cols-2 gap-16 items-center">

                {/* Contact Information Cards (Replacing the Image for now, to hold Address info) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    className="flex flex-col gap-6"
                >
                    <div className="p-8 border border-line bg-bg-secondary flex flex-col gap-4">
                        <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div>
                            <h4 className="text-lg font-serif mb-1 text-ink">Visit Us</h4>
                            <p className="text-ink-muted text-sm leading-relaxed">[KBRS Address Line 1]<br />[KBRS Address Line 2]</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 border border-line bg-bg-secondary flex flex-col gap-4">
                            <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-serif mb-1 text-ink">Email</h4>
                                <a href="mailto:info@kbrs.com" className="text-ink-muted text-sm hover:text-accent transition-colors">info@kbrs.com</a>
                            </div>
                        </div>

                        <div className="p-8 border border-line bg-bg-secondary flex flex-col gap-4">
                            <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-serif mb-1 text-ink">Call</h4>
                                <a href="tel:+910000000000" className="text-ink-muted text-sm hover:text-accent transition-colors">+91 00000 00000</a>
                            </div>
                        </div>
                    </div>
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
                        Connect with KBRS
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.2 }}
                        className="text-ink-muted text-lg"
                    >
                        Reach out to us to discover how our comprehensive financial and compliances solutions can empower your goals.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.3 }}
                    >
                        <button className="btn-primary">Get in Touch</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
