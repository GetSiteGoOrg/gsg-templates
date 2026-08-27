import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import WhyUs from "@/components/WhyUs";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Departments />
        <WhyUs />
        <Team />
        <Process />
        <Testimonials />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}