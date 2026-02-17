import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Footer from "./components/Footer"

export default function Pages() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
