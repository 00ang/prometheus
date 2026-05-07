import AgeGate from "@/components/AgeGate";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Hours from "@/components/Hours";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Brands />
        <Hours />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
