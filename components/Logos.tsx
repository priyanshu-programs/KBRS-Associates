"use client";

import Image from "next/image";

export default function Logos() {
    const logos = [
        "https://framerusercontent.com/images/uALVrWWy1Wl9UXv56cVPi2NR54.svg",
        "https://framerusercontent.com/images/FxotjgHRXoHzPfagYpTPHXCUAho.svg",
        "https://framerusercontent.com/images/oeoRR1y1Ka5MI18DEjsbSdbzAOw.svg",
        "https://framerusercontent.com/images/3OGgyKLKC7amtoCMXgVgoCi5hvU.svg",
    ];

    return (
        <section className="py-12 border-y border-line bg-bg-primary relative overflow-hidden">
            <div className="container-wide flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                {logos.map((logo, i) => (
                    <Image key={i} src={logo} alt="Partner Logo" width={120} height={28} className="h-7 w-auto" />
                ))}
            </div>
        </section>
    );
}
