import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Business from "@/components/Business";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";

export default function HomePage() {
    return (
        <div className="relative min-h-screen bg-bg-primary overflow-x-clip w-full max-w-[100vw]">
            <Navbar />
            <main>
                <Hero />
                <Vision />
                <About />
                <Team />
                <Business />
                <Services />
            </main>
            <Footer />
        </div>
    );
}
