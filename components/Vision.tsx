"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

// --- New component block to place above the default export ---
const Word = ({
    children,
    progress,
    range
}: {
    children: string,
    progress: any,
    range: [number, number]
}) => {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <motion.span
            style={{ opacity }}
            className="inline-block"
        >
            {children}
        </motion.span>
    );
};

export default function Vision() {
    const containerRef = useRef<HTMLElement>(null);

    // Track scroll progress within this specific component's boundaries
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Start tracking when the top of the element is 80% down the viewport
        // Stop tracking (finish filling text) when the top of the element reaches the center (50%) of the viewport
        offset: ["start 0.8", "start 0.35"]
    });

    // Wrap the raw scroll progress in a spring to smooth out mouse wheel jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const text = "\" To be a trusted financial partner that combines global expertise with local understanding, empowering clients to achieve sustainable growth through strategic, compliant, and technology-enabled financial solutions. \"";
    const words = text.split(" ");

    return (
        <section
            id="vision"
            ref={containerRef}
            className="py-16 md:py-32 bg-[#F5F9FD] flex items-center justify-center px-6"
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h2 className="sr-only">Our Vision</h2>

                <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-ink font-medium leading-[1.3] text-center flex flex-wrap justify-center gap-x-2 md:gap-x-3 gap-y-3">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);

                        return (
                            <Word
                                key={i}
                                progress={smoothProgress}
                                range={[start, end]}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </p>

                {/* Subtitle that fades in as the text finishes revealing */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.8, 1], [0, 1]),
                        y: useTransform(smoothProgress, [0.8, 1], [20, 0])
                    }}
                    className="mt-16 flex items-center gap-4"
                >
                    <div className="w-12 h-px bg-ink" />
                    <span className="text-sm font-medium tracking-[0.2em] uppercase text-ink">Our Vision</span>
                    <div className="w-12 h-px bg-ink" />
                </motion.div>
            </div>
        </section>
    );
}
