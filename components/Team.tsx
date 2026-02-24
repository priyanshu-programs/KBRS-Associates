"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";

type Member = {
    name: string;
    role: string;
    cardSubtitle: string;
    modalName: string;
    modalRole: string;
    modalRoleColor?: string;
    desc: React.ReactNode[];
    img: string;
    linkedin: string;
    mail: string;
    phone: string;
};

export default function Team() {
    const members: Member[] = [
        {
            name: "CA Komal Bhotika",
            role: "Partner",
            cardSubtitle: "Chartered Accountant | GST & Taxation Expert | Independent Director",
            modalName: "CA KOMAL BHOTIKA",
            modalRole: "Chartered Accountant | GST & Taxation Expert | Independent Director",
            modalRoleColor: "#0F4366",
            desc: [
                <>
                    Komal is an accomplished Chartered Accountant and Company Secretary with a robust background in{" "}
                    <strong className="font-semibold text-ink">Auditing</strong>,{" "}
                    <strong className="font-semibold text-ink">Taxation</strong>,{" "}
                    <strong className="font-semibold text-ink">GST Litigation</strong>, and{" "}
                    <strong className="font-semibold text-ink">Financial Compliance</strong>, she brings over a decade of experience in advising clients on complex statutory and regulatory matters.
                </>,
                <>
                    Her leadership in{" "}
                    <strong className="font-semibold text-ink">Indirect Taxation</strong> earned her the role of{" "}
                    <strong className="font-semibold text-ink">Special Invitee to the GST & Indirect Taxes Committee of ICAI (2024)</strong>. She is also a{" "}
                    <strong className="font-semibold text-ink">Certified Information System Auditor (DISA)</strong> and{" "}
                    <strong className="font-semibold text-ink">Certified Social Auditor</strong>, with strong credentials in Bank Audits and Governance.
                </>,
                <>
                    A passionate advocate for financial literacy and women’s empowerment, she regularly conducts educational workshops and delivers lectures at ICAI and professional forums. She currently serves as an{" "}
                    <strong className="font-semibold text-ink">Independent Woman Director on listed companies</strong>, offering strategic insight into governance, risk management, and financial oversight.
                </>
            ],
            img: "https://framerusercontent.com/images/w5VihEmuVDWSYPB0fAsnkhw1elE.webp", // Placeholder
            linkedin: "#",
            mail: "mailto:contact@kbrs.com",
            phone: "tel:+910000000000"
        },
        {
            name: "CA Richa Sureka",
            role: "Partner",
            cardSubtitle: "Chartered Accountant | Banking & Financial Advisory Expert",
            modalName: "CA RICHA SUREKA",
            modalRole: "Chartered Accountant | Banking & Financial Advisory Expert",
            modalRoleColor: "#0F4366",
            desc: [
                <>
                    With nearly 20 years of global experience in the Banking & Financial Services industry, Richa has served in leadership roles with premier institutions like HSBC and Deutsche Bank across India, USA, UK, Hong Kong, and Germany. Her expertise lies in{" "}
                    <strong className="font-semibold text-ink">Financial Advisory</strong>,{" "}
                    <strong className="font-semibold text-ink">Business Consultancy</strong>,{" "}
                    <strong className="font-semibold text-ink">Project Financing</strong>,{" "}
                    <strong className="font-semibold text-ink">Credit Evaluation</strong>, and{" "}
                    <strong className="font-semibold text-ink">Process Re-engineering</strong>.
                </>,
                <>
                    A strategic thinker with a practical, results-oriented approach, she brings deep insight into{" "}
                    <strong className="font-semibold text-ink">Accounts</strong>,{" "}
                    <strong className="font-semibold text-ink">Taxation</strong>,{" "}
                    <strong className="font-semibold text-ink">Regulatory Compliance</strong>,{" "}
                    <strong className="font-semibold text-ink">SOP design</strong>, and{" "}
                    <strong className="font-semibold text-ink">Implementation</strong>. She has successfully led cross-functional transformation projects, driving significant process efficiencies and cost savings.
                </>,
                <>
                    Her certifications in{" "}
                    <strong className="font-semibold text-ink">Valuation (ICAI)</strong>,{" "}
                    <strong className="font-semibold text-ink">SME Finance (IIBF)</strong>, and{" "}
                    <strong className="font-semibold text-ink">Investment Advisory (CISI, UK)</strong> complement her strong foundation in financial management and corporate governance. A technology and AI enthusiast, she champions automation-led efficiency and innovation in finance.
                </>
            ],
            img: "https://framerusercontent.com/images/snS7HjaFglv37FSmEIoy2SdohY.webp", // Placeholder
            linkedin: "#",
            mail: "mailto:contact@kbrs.com",
            phone: "tel:+910000000000"
        }
    ];

    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [hoverCursor, setHoverCursor] = useState<{ x: number; y: number; index: number | null }>({
        x: 0,
        y: 0,
        index: null
    });

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = "hidden";
            // Check if there's a scrollbar, to prevent layout shift we could add padding-right, but hidden is generally fine
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedMember]);

    return (
        <section id="team" className="py-16 md:py-32 bg-[#F5F9FD]">
            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-black/50 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl bg-bg-primary shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] rounded-[10px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 z-10 p-2 text-ink-muted hover:text-ink transition-colors bg-white/50 backdrop-blur-md rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Section */}
                            <div className="relative w-full md:w-[45%] h-[300px] md:h-auto shrink-0 bg-bg-secondary">
                                <Image
                                    src={selectedMember.img}
                                    alt={selectedMember.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 45vw"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto modal-scroll" data-lenis-prevent>
                                <div className="flex flex-col gap-2 mb-6">
                                    <h3 className="text-2xl md:text-3xl font-serif text-ink tracking-tight">
                                        {selectedMember.modalName}
                                    </h3>
                                    {/* Using a cyan-ish blue matching the screenshot reference */}
                                    <p
                                        className="font-medium tracking-wide"
                                        style={{ color: selectedMember.modalRoleColor ?? "#59A5A4" }}
                                    >
                                        {selectedMember.modalRole}
                                    </p>
                                </div>
                                <div className="space-y-4 text-ink-muted leading-relaxed text-[14px] md:text-[15px]">
                                    {selectedMember.desc.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The outer container is very wide to give breathing room on massive screens */}
            <div className="container-wide flex flex-col gap-16">

                {/* 
                  The alignment secret: Both the Header block and the Grid block share the exact same 
                  wrapper `max-w-[816px] mx-auto`. 
                  816px = 376px (card 1) + 64px (gap-16) + 376px (card 2)
                  This guarantees the left edge of the text perfectly hits the left edge of the first image.
                */}
                <div className="max-w-[816px] mx-auto w-full flex flex-col gap-16 px-4 xl:px-0">

                    {/* Header aligns exactly with the card grid by sharing the structural max-width */}
                    <div className="flex flex-col gap-6">
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
                            className="max-w-2xl"
                        >
                            Led by dynamic finance professionals with a shared vision.
                        </motion.h2>
                    </div>

                    {/* Card Grid */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-16 w-full">
                        {members.map((member, i) => (
                            <motion.div
                                onClick={() => setSelectedMember(member)}
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", damping: 58, stiffness: 350, delay: i * 0.1 }}
                                // Forces the card to max out at 376px wide on desktop
                                className="flex flex-col gap-4 group cursor-pointer w-full md:w-1/2 max-w-[376px]"
                            >
                                {/* Image Block - Enforcing the exact 376x392 visual ratio */}
                                <div
                                    className="relative aspect-[376/392] overflow-hidden bg-bg-secondary w-full cursor-none"
                                    onMouseEnter={() => setHoverCursor((prev) => ({ ...prev, index: i }))}
                                    onMouseLeave={() => setHoverCursor((prev) => ({ ...prev, index: null }))}
                                    onMouseMove={(event) => {
                                        const rect = event.currentTarget.getBoundingClientRect();
                                        setHoverCursor({
                                            x: event.clientX - rect.left,
                                            y: event.clientY - rect.top,
                                            index: i
                                        });
                                    }}
                                >
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 376px"
                                    />
                                    {hoverCursor.index === i && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", damping: 20, stiffness: 400 }}
                                            className="pointer-events-none absolute z-20"
                                            style={{
                                                left: hoverCursor.x,
                                                top: hoverCursor.y,
                                                transform: "translate(-50%, -50%)"
                                            }}
                                        >
                                            {/* Proofing against light & dark backgrounds with a high-contrast dark glass pill */}
                                            <div className="flex items-center gap-2.5 bg-ink/90 backdrop-blur-md supports-[backdrop-filter]:bg-ink/70 border border-white/10 px-4 py-2 rounded-full shadow-2xl">
                                                <span className="w-1.5 h-1.5 rounded-full bg-bg-primary animate-pulse" />
                                                <span className="text-white text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
                                                    READ MORE
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Info & Action Block - Clean text below image */}
                                <div className="grid grid-cols-[1fr_auto] items-start gap-3 mt-2">
                                    <div className="flex flex-col gap-1.5 max-w-[280px]">
                                        <h3 className="text-xl md:text-[22px] font-serif font-medium text-ink tracking-tight leading-tight">{member.name}</h3>
                                        <p className="text-ink-muted text-[13px] leading-tight">{member.cardSubtitle}</p>
                                        <p className="text-[15px] text-[#0F4366] font-medium leading-tight">{member.role}</p>
                                    </div>

                                    {/* Action Button - also triggers modal via parent click */}
                                    <div className="w-12 h-12 bg-ink flex items-center justify-center flex-shrink-0 transition-transform duration-300 rounded-sm mt-1">
                                        <ArrowRight className="w-5 h-5 text-bg-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-45" />
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
