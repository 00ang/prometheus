import AgeGate from "@/components/AgeGate";
import TopDealsBar from "@/components/TopDealsBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Deals from "@/components/Deals";
import About from "@/components/About";
import Products from "@/components/Products";
import Featured from "@/components/Featured";
import StundenglassShowcase from "@/components/StundenglassShowcase";
import Reviews from "@/components/Reviews";
import Brands from "@/components/Brands";
import BlogPreview from "@/components/BlogPreview";
import Hours from "@/components/Hours";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <TopDealsBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Deals />
        <About />
        <Products />
        <Featured />
        <StundenglassShowcase />
        <Reviews />
        <Brands />
        <BlogPreview />
        <Hours />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
