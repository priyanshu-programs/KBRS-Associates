"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const servicesDetails = [
    {
        title: "Trade License / Shop & Establishment Registration",
        points: [
            "Assistance with obtaining mandatory local trade and establishment registrations.",
            "Ensures effortless compliance with municipal and state regulations."
        ]
    },
    {
        title: "MSME / FSSAI / RERA / Import-Export Code Registrations",
        points: [
            "End-to-end support for industry-specific registrations critical for business operations.",
            "Covers documentation, submission, and advisory for smooth approval."
        ]
    },
    {
        title: "Digital Signature & Professional Tax Registration",
        points: [
            "Facilitates issuance of Digital Signature Certificates and enrolment under professional tax laws.",
            "Enables legally valid authentication and statutory compliance."
        ]
    },
    {
        title: "Trade Mark Registration",
        points: [
            "Comprehensive assistance in trademark search, application filing, and objection handling.",
            "Protects brand identity through enforceable intellectual property rights."
        ]
    }
];

export default function RegistrationServicesPage() {
    return (
        <div className="min-h-screen bg-bg-primary text-ink">
            <Navbar />

            <main className="pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="container-wide">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 md:mb-12"
                    >
                        <Link href="/#services" className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors font-medium text-sm md:text-base group">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Services
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <div className="max-w-4xl mb-16 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="label-caps text-ink-muted mb-6 inline-block"
                        >
                            Service Details
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-ink mb-6"
                        >
                            Registration<br />Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl"
                        >
                            End-to-end licensing and registration services ensuring full statutory compliance across all business verticals.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                        {servicesDetails.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="h-full"
                            >
                                <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] border border-line shadow-sm hover:shadow-[0_24px_50px_-12px_rgba(10,10,10,0.1)] transition-all duration-500 group h-full">
                                    <h3 className="text-2xl md:text-3xl font-serif text-ink mb-6 transition-colors group-hover:text-[#2272A5]">
                                        {service.title}
                                    </h3>
                                    <ul className="flex flex-col gap-4">
                                        {service.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex gap-4 items-start">
                                                <div className="mt-1 flex-shrink-0 text-[#2272A5]/70 group-hover:text-[#2272A5] transition-colors">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <p className="text-base text-ink-muted leading-relaxed group-hover:text-ink/80 transition-colors">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
