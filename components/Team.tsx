"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Team() {
    const members = [
        {
            name: "Michael Thompson Johnson",
            role: "Senior Litigation Attorney",
            img: "https://framerusercontent.com/images/w5VihEmuVDWSYPB0fAsnkhw1elE.webp",
        },
        {
            name: "Adison Dorwart",
            role: "Senior Litigation Attorney",
            img: "https://framerusercontent.com/images/snS7HjaFglv37FSmEIoy2SdohY.webp",
        },
        {
            name: "Cristofer Gouse",
            role: "Senior Litigation Attorney",
            img: "https://framerusercontent.com/images/S0rygf3yNx1ODs9g5pfKM1oUuTk.webp",
        },
    ];

    return (
        <section className="py-20 md:py-32">
            <div className="container-wide flex flex-col gap-16">
                <div className="flex flex-col gap-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350 }}
                    >
                        <span className="label-caps">Our team</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                        className=""
                    >
                        At Legalist Always, we pride ourselves on having a diverse and dedicated group of legal professionals.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 75 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                            className="flex flex-col gap-4 group cursor-pointer"
                        >
                            <div className="relative aspect-square rounded-sm overflow-hidden">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-ink p-3 rounded-sm text-white">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-serif">{member.name}</h3>
                                    <p className="text-ink-muted text-sm">{member.role}</p>
                                </div>
                                <div className="md:hidden lg:block">
                                    <div className="bg-ink p-3 rounded-sm text-white">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
