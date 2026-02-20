import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import Business from "@/components/Business";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Office from "@/components/Office";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-bg-primary">
            <Navbar />
            <main>
                <Hero />
                <Logos />
                <About />
                <Business />
                <Services />
                <Stats />
                <Team />
                <Office />
                <Testimonials />
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
}
