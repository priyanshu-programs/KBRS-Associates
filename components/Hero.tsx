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
            <div className="container-wide flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-0 md:items-stretch min-h-[calc(100vh-5rem)]">
                {/* Image — bleeds ~112px wider on desktop for a fuller feel. Order 1 on mobile, 2 on desktop */}
                <div
                    className="relative min-h-[40vh] sm:min-h-[500px] md:min-h-0 overflow-hidden md:-ml-14 md:-mr-14 md:mt-0 will-change-transform will-change-opacity hero-slide-up order-1 md:order-2"
                    style={{ animationDelay: '0.1s' }}
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

                {/* Text Content — vertically centered, left-aligned. Order 2 on mobile, 1 on desktop */}
                <div className="flex flex-col justify-center gap-6 max-w-md md:pr-12 order-2 md:order-1 pt-8 md:pt-0 pb-12 md:pb-0 px-4 md:px-0 mx-0 md:mx-auto lg:mx-0 w-full">
                    <h1 className="text-ink text-4xl leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] will-change-transform will-change-opacity hero-slide-right md:leading-[1.1]">
                        <span className="md:whitespace-nowrap">
                            Excellence in<br className="md:hidden" /> Service
                        </span>,{" "}
                        <span className="md:whitespace-nowrap">Commitment to</span>
                        <br className="hidden md:block" />
                        <span className="md:hidden">&nbsp;</span>Compliance.
                    </h1>
                    <p
                        className="text-ink-muted text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-sm md:max-w-xs border-l-4 border-accent pl-4 md:pl-5 will-change-transform will-change-opacity hero-slide-right"
                        style={{ animationDelay: '0.2s' }}
                    >
                        We transform client expectations into sustainable reality through a blend of subject matter expertise and exceptional service.
                    </p>
                </div>
            </div>
        </section>
    );
}
