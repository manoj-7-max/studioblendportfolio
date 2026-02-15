import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ServiceDetail } from "../components/ServiceDetail";
import { Toaster } from "../components/ui/sonner";
import { servicesData } from "../data/servicesData";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const handleServiceClick = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBackToHome = () => {
        setSelectedService(null);
    };

    return (
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {selectedService ? (
                    <ServiceDetail
                        key={selectedService}
                        {...servicesData[selectedService as keyof typeof servicesData]}
                        onBack={handleBackToHome}
                    />
                ) : (
                    <div key="home">
                        <Navigation />
                        <Hero />
                        <div id="about">
                            <About />
                        </div>
                        <div id="services">
                            <Services onServiceClick={handleServiceClick} />
                        </div>
                        <div id="work">
                            <Portfolio />
                        </div>
                        <Testimonials />
                        <div id="contact">
                            <Contact />
                        </div>
                        <Footer />
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
