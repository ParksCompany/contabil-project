import Header from "./_components/Header";
import HeroSection from "./_components/home/HeroSection";
import Services from "./_components/home/Services";
import HowItWorks from "./_components/home/HowItWorks";
import About from "./_components/home/About";
import Location from "./_components/home/Location";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white flex-1 pt-16 md:pt-20">
        <HeroSection />
        <Services />
        <HowItWorks />
        <About />
        <Location />
        <Footer />
      </main>
    </>
  );
}