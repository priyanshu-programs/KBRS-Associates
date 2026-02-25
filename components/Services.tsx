"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            num: "01",
            title: "Accounts, Audit & Income Tax",
            desc: "Preparation & Finalisation of Accounts",
            items: [
                "Income Tax Return Filing & Tax Planning",
                "TDS Returns",
                "Statutory Audits",
                "Internal Audits",
                "Tax Audits",
                "Social Audits",
                "Scrutiny Assessment & Appeals"
            ],
            colSpan: "lg:col-span-1 md:col-span-1 col-span-1",
            style: "bg-white text-[#152B44]",
            tagStyle: "border-line text-[#152B44]/80 group-hover:border-[#152B44]/20 group-hover:text-[#152B44]",
            titleStyle: "text-[#152B44] group-hover:text-[#2272A5]",
            descStyle: "text-[#152B44]/80",
            learnMoreStyle: "text-[#152B44] group-hover:bg-[#2272A5] group-hover:text-white",
            arrowStyle: "group-hover:text-white",
            dividerStyle: "border-line group-hover:border-[#152B44]/10",
            link: "/services/accounts-audit-tax"
        },
        {
            num: "02",
            title: "GST & Corporate Laws",
            desc: "GST Registration, Returns, and Litigation Handling",
            items: [
                "Company Formation & Striking Off",
                "Partnerships & LLP Formation",
                "Trust Formation & Advisory",
                "ROC Filings",
                "GST Annual Audits",
                "Notices & Representation",
                "Corporate Governance & Compliance Advisory"
            ],
            colSpan: "lg:col-span-2 md:col-span-2 col-span-1",
            style: "bg-[#A5BBD4] text-[#152B44]",
            tagStyle: "border-white/40 bg-white/50 text-[#152B44]/80 group-hover:border-[#2272A5]/40 group-hover:text-[#152B44]",
            titleStyle: "text-[#152B44] group-hover:text-[#2272A5]",
            descStyle: "text-[#152B44]/80",
            learnMoreStyle: "text-[#152B44] group-hover:bg-[#2272A5] group-hover:text-white",
            arrowStyle: "group-hover:text-white",
            dividerStyle: "border-[#152B44]/30 group-hover:border-[#152B44]/50",
            link: "/services/gst-corporate-laws"
        },
        {
            num: "03",
            title: "Registration Services",
            desc: "End-to-end licensing and registration ensuring full statutory compliance.",
            items: [
                "Trade License / Shop & Establishment Registration",
                "MSME / FSSAI / RERA / Import-Export Code Registrations",
                "Digital Signature & Professional Tax Registration",
                "Trade Mark Registration"
            ],
            colSpan: "lg:col-span-2 md:col-span-2 col-span-1",
            style: "bg-[#152B44] text-white",
            tagStyle: "border-white/20 text-white/80 group-hover:border-white/40 group-hover:text-white",
            titleStyle: "text-white",
            descStyle: "text-white/70",
            learnMoreStyle: "text-white group-hover:bg-white group-hover:text-[#152B44]",
            arrowStyle: "group-hover:text-[#152B44]",
            dividerStyle: "border-white/10 group-hover:border-white/20",
            link: "/services/registration-services"
        },
        {
            num: "04",
            title: "Other Services",
            desc: "Business Valuation, Project Financing, and SOP.",
            items: [
                "Business Valuation",
                "Bank Funding / Project Financing",
                "SOP Preparation & Implementation",
                "PF/ ESI Returns and Filings",
                "Comprehensive Training in Finance, Corporate Laws and Basic AI",
                "Accounting & Allied Services to International Clients"
            ],
            colSpan: "lg:col-span-1 md:col-span-1 col-span-1",
            style: "bg-[#2272A5] text-white",
            tagStyle: "border-white/20 text-white/90 group-hover:border-white/40",
            titleStyle: "text-white",
            descStyle: "text-white/90",
            learnMoreStyle: "text-white group-hover:bg-white group-hover:text-[#2272A5]",
            arrowStyle: "group-hover:text-[#2272A5]",
            dividerStyle: "border-white/20 group-hover:border-white/30",
            link: "/services/other-allied-services"
        },
    ];

    return (
        <section id="services" className="py-16 md:py-32 bg-[#F5F9FD]">
            <div className="container-wide flex flex-col gap-12 md:gap-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350 }}
                        >
                            <span className="label-caps text-ink-muted">Our Services</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 58, stiffness: 350, delay: 0.1 }}
                            className="text-ink"
                        >
                            Explore our comprehensive financial solutions.
                        </motion.h2>
                    </div>
                </div>

                {/* Highly structured Bento Box Grid to match the image exactly */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((service, i) => {
                        const CardContent = (
                            <div className={`flex ${service.colSpan.includes('col-span-2') ? 'flex-col lg:flex-row' : 'flex-col'} gap-8 lg:gap-16 relative z-10 h-full`}>
                                {/* Left Side: Title & Desc */}
                                <div className="flex flex-col gap-6 flex-1">
                                    <h3 className={`text-3xl lg:text-4xl font-serif tracking-tight transition-colors duration-500 ${service.titleStyle}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed transition-colors duration-500 md:max-w-md ${service.descStyle}`}>
                                        {service.desc}
                                    </p>

                                    <ul className="flex flex-col gap-3 mt-4 mb-4">
                                        {service.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm transition-colors duration-500">
                                                <div
                                                    className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-colors duration-500 ${service.style.includes('bg-white')
                                                        ? 'bg-[#152B44]/80 group-hover:bg-[#152B44]'
                                                        : service.style.includes('bg-[#A5BBD4]')
                                                            ? 'bg-[#152B44]/70 group-hover:bg-[#152B44]'
                                                            : 'bg-white/60 group-hover:bg-white'
                                                        }`}
                                                />
                                                <span className={service.descStyle}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom Learn More button always stays at the bottom */}
                                <div className="flex flex-col justify-end">
                                    {/* Learn More - Premium Circle Arrow */}
                                    <div className={`mt-auto pt-6 border-t flex items-center justify-between gap-6 transition-colors duration-500 ${service.dividerStyle}`}>
                                        <span className={`uppercase tracking-widest text-xs font-semibold ${service.titleStyle}`}>Explore</span>
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${service.learnMoreStyle}`}>
                                            <ArrowRight className={`w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ${service.arrowStyle}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                                className={`h-full ${service.colSpan}`}
                            >
                                <div className={`
                                    ${service.style}
                                    relative p-8 md:p-12 flex flex-col justify-between 
                                    group hover:shadow-[0_24px_50px_-12px_rgba(10,10,10,0.15)] hover:-translate-y-2 transition-all duration-700 cursor-pointer overflow-hidden 
                                    min-h-[380px] h-full rounded-[32px] md:rounded-[48px]
                                `}>
                                    {service.link ? (
                                        <Link href={service.link} className="block w-full h-full">
                                            {CardContent}
                                        </Link>
                                    ) : (
                                        CardContent
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
