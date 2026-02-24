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
        <div className="min-h-screen bg-bg-primary">
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
