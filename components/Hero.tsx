import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes heroSlideRight {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes heroSlideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-slide-right {
                    opacity: 0;
                    animation: heroSlideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .hero-slide-up {
                    opacity: 0;
                    animation: heroSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}} />
            <div className="container-wide grid md:grid-cols-2 gap-0 items-stretch min-h-[calc(100vh-5rem)]">
                {/* Left: Text Content — vertically centered, left-aligned */}
                <div className="flex flex-col justify-center gap-6 max-w-md md:pr-12">
                    <h1 className="text-ink will-change-transform will-change-opacity hero-slide-right">
                        <span className="md:whitespace-nowrap">Excellence in Service</span>,{" "}
                        <span className="md:whitespace-nowrap">Commitment to</span>
                        <br className="hidden md:block" />
                        Compliance.
                    </h1>
                    <p
                        className="text-ink-muted text-[15px] leading-relaxed max-w-xs border-l-4 border-accent pl-4 will-change-transform will-change-opacity hero-slide-right"
                        style={{ animationDelay: '0.15s' }}
                    >
                        We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service.
                    </p>
                </div>

                {/* Right: Image — bleeds ~112px wider on desktop for a fuller feel */}
                <div
                    className="relative min-h-[300px] md:min-h-0 overflow-hidden md:-ml-14 md:-mr-14 mt-8 md:mt-0 will-change-transform will-change-opacity hero-slide-up"
                    style={{ animationDelay: '0.2s' }}
                >
                    <Image
                        src="/hero image.jpg"
                        alt="Professional team at KBRS & Associates"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
