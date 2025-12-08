import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Servcices";
import HowItWorks from "./_components/HowItWorks";
import About from "./_components/About";
import Location from "./_components/Location";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <main className="bg-white flex-1 pt-16 md:pt-20">
      <Header />
      <HeroSection />
      <Services />
      <HowItWorks />
      <About />
      <Location />
      <Footer />
    </main>
  );
}