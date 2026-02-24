"use client";

import { motion } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";

/* Lazy-load DotLottieReact — only loads when cards scroll into view */
const DotLottieReact = dynamic(
    () => import("@lottiefiles/dotlottie-react").then(mod => ({ default: mod.DotLottieReact })),
    { ssr: false }
);

type ClientItem = {
    title: string;
    desc: string;
    lottie: string;
};

export default function Business() {
    const clients: ClientItem[] = [
        {
            title: "Individuals",
            desc: "Personalized wealth management, tax return filing, and strategic investment structuring.",
            lottie: "https://assets-v2.lottiefiles.com/a/b2280e20-0ad2-11f0-89e8-bfd5159581b0/dEyT6BfoCt.lottie"
        },
        {
            title: "Partnership Firms",
            desc: "Financial structuring, tax planning, and statutory compliance for joint ventures.",
            lottie: "https://assets-v2.lottiefiles.com/a/46ef1528-a41b-11ee-a79c-6b92c18b54d9/pwdgBFSy1c.lottie"
        },
        {
            title: "LLP (Limited Liability Partnerships)",
            desc: "Governance, compliance, and strategic advisory tailored for limited liability structures.",
            lottie: "https://assets-v2.lottiefiles.com/a/400c9342-117d-11ee-b1e7-f7a13dfaf902/XciAxotqMl.lottie"
        },
        {
            title: "Corporates",
            desc: "Comprehensive compliance, audit, and strategic financial advisory for enterprises.",
            lottie: "https://assets-v2.lottiefiles.com/a/659a4c30-1173-11ee-8489-7b801a7c05c1/lyamqWJNsP.lottie"
        },
        {
            title: "Trusts / NGOs",
            desc: "Governance, specialized auditing, and strict regulatory compliance for non-profits.",
            lottie: "https://assets-v2.lottiefiles.com/a/e118d952-1165-11ee-85d9-575efdf5035a/PCvAJOu0Dd.lottie"
        },
        {
            title: "Residential Societies",
            desc: "Accounting, transparent auditing, and compliance management for housing societies.",
            lottie: "https://assets-v2.lottiefiles.com/a/481759c0-116c-11ee-b865-67dff3c72813/kBWKY3iKjI.lottie"
        },
    ];

    return (
        <section id="clientele" className="py-16 md:py-32 bg-bg-primary">
            <div className="container-wide">
                <div className="flex flex-col border-t border-l border-line">

                    {/* Header Row */}
                    <div className="grid lg:grid-cols-12 border-b border-line">
                        {/* Title Block */}
                        <div className="lg:col-span-8 p-8 md:p-16 lg:p-20 flex flex-col gap-8 lg:border-r border-line justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350 }}
                            >
                                <span className="label-caps">Clientele</span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                                className="max-w-3xl"
                            >
                                Partnering with diverse entities to ensure enduring financial excellence.
                            </motion.h2>
                        </div>

                        {/* Image Block */}
                        <div className="lg:col-span-4 relative aspect-square lg:aspect-auto hidden md:block group overflow-hidden bg-bg-secondary">
                            <Image
                                src="https://framerusercontent.com/images/wkmeJKlMGi87EVDvyvKgshm3cs.png"
                                alt="Business legal consultation"
                                fill
                                className="object-cover group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Grid Row - 3 columns to balance 6 items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        {clients.map((client, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                                className="relative p-8 md:p-12 border-r border-b border-line flex flex-col justify-between min-h-[320px] group hover:bg-bg-secondary transition-colors duration-500 cursor-pointer overflow-hidden"
                            >
                                {/* Layer 1: Ambient Gradient Background */}
                                <div
                                    className={`card-ambient ${i % 3 === 0
                                        ? "ambient-blue"
                                        : i % 3 === 1
                                            ? "ambient-slate"
                                            : "ambient-ink"
                                        }`}
                                />

                                {/* Layer 2: Lottie Animation */}
                                <div className={`absolute transition-opacity duration-700 pointer-events-none z-[1] opacity-[0.12] group-hover:opacity-[0.22] ${i === 4
                                    ? "-right-2 -bottom-2 w-32 h-32 md:w-36 md:h-36"
                                    : i === 5
                                        ? "-right-8 -bottom-8 w-52 h-52 md:w-60 md:h-60"
                                        : "-right-4 -bottom-4 w-40 h-40 md:w-48 md:h-48"
                                    }`}>
                                    <DotLottieReact
                                        src={client.lottie}
                                        autoplay
                                        loop
                                    />
                                </div>

                                {/* Layer 3: Content */}
                                <div className="relative z-10">
                                    <div className="text-4xl md:text-5xl font-serif font-light text-line/20 group-hover:text-accent/40 transition-colors duration-500">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </div>
                                    <div className="flex flex-col gap-4 mt-8">
                                        <h3 className="text-2xl font-serif text-ink group-hover:text-accent transition-colors duration-500">
                                            {client.title}
                                        </h3>
                                        <p className="text-ink-muted text-sm leading-relaxed group-hover:text-ink transition-colors duration-500">
                                            {client.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
