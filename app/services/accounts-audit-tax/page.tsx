"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const servicesDetails = [
    {
        title: "Preparation & Finalisation of Accounts",
        points: [
            "Ensuring accurate and compliant preparation of financial statements with structured closing of books.",
            "Delivered with precision to support statutory reporting, tax filings, and informed decision-making."
        ]
    },
    {
        title: "Income Tax Return Filing & Tax Planning",
        points: [
            "End-to-end filing of individual and corporate tax returns with adherence to current regulations.",
            "Strategic tax planning to optimise liabilities while maintaining full legal compliance."
        ]
    },
    {
        title: "TDS Returns",
        points: [
            "Comprehensive management of TDS deduction, deposit, and quarterly return filing.",
            "Includes timely compliance monitoring to avoid penalties and ensure seamless reconciliation."
        ]
    },
    {
        title: "Statutory Audits",
        points: [
            "Independent examination of financial statements to ensure regulatory and accounting-standard compliance.",
            "Provides stakeholders with a transparent and reliable assessment of financial health."
        ]
    },
    {
        title: "Internal Audits",
        points: [
            "Risk-based internal audit procedures to assess internal controls, operational efficiency, and governance.",
            "Delivers actionable insights to strengthen processes and safeguard organisational assets."
        ]
    },
    {
        title: "Tax Audits",
        points: [
            "Detailed verification of books and transactions as mandated under the Income Tax Act.",
            "Ensures accuracy in reporting, compliance with tax laws, and risk mitigation during assessments."
        ]
    },
    {
        title: "Social Audits",
        points: [
            "Evaluation of welfare-oriented schemes, CSR initiatives, and institution-specific social obligations.",
            "Provides transparent reporting to stakeholders on effectiveness, utilisation, and impact."
        ]
    },
    {
        title: "Scrutiny Assessment & Appeals",
        points: [
            "Professional representation before tax authorities for scrutiny cases and appellate proceedings.",
            "Includes documentation, strategy, and end-to-end handling to safeguard taxpayer interests."
        ]
    }
];

export default function AccountsAuditTaxPage() {
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
                            Accounts, Audit &<br />Income Tax
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl"
                        >
                            Comprehensive financial and statutory compliance solutions providing precise reporting, intelligent tax planning, and robust audit mechanics.
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
                                className="bg-white p-8 md:p-10 lg:p-12 rounded-[32px] md:rounded-[40px] border border-line shadow-sm hover:shadow-[0_24px_50px_-12px_rgba(10,10,10,0.1)] transition-all duration-500 group"
                            >
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
