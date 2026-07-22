import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Areas from "@/components/Areas";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteForm />
        <Testimonials />
        <Gallery />
        <Services />
        <WhyChooseUs />
        <Areas />
        <ContactBanner />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
