import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingNow from "./components/TrendingNow";
import ReasonsToJoin from "./components/ReasonsToJoin";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {<Navbar />}
      <Hero />
      <TrendingNow />
      <ReasonsToJoin />
      <FAQ />
      <Footer />
    </div>
  );
}
