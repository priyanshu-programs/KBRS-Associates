"use client";

import { motion } from "motion/react";

export default function Services() {
    const services = [
        {
            title: "Divorce and separation",
            desc: "We provide guidance and representation through the divorce process, working to ensure fair outcomes.",
        },
        {
            title: "Child Custody",
            desc: "We guide families through custody decisions to secure stable, supportive arrangements for all parties.",
        },
        {
            title: "Adoption and Guardianship",
            desc: "We assist clients in navigating adoption and guardianship processes, securing loving, legally recognized relationships.",
        },
        {
            title: "DUI and Traffic Violations",
            desc: "We provide aggressive representation in DUI and traffic cases to minimize penalties and safeguard your driving record.",
        },
    ];

    return (
        <section id="services" className="py-20 md:py-32">
            <div className="container-wide flex flex-col gap-16">
                <div className="flex flex-col gap-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    >
                        <span className="label-caps">Start with us</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        Straightforward legal services with no hidden surprises.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-line">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                            className="p-8 border-r border-b border-line flex flex-col gap-12 group hover:bg-bg-secondary card-hover"
                        >
                            <h3 className="text-2xl font-serif">{service.title}</h3>
                            <div className="flex flex-col gap-6 mt-auto">
                                <p className="text-ink-muted leading-relaxed">{service.desc}</p>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 text-sm font-medium underline underline-offset-4 group-hover:text-ink transition-colors"
                                >
                                    Learn more
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
