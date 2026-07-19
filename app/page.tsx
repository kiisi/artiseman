import Image from "next/image";
import { Header } from "./components/layout/header";
import { FeaturedArtisans } from "./components/sections/featured-artisans";
import { WhyChooseUs } from "./components/sections/why-choose-us";
import { Hero } from "./components/sections/hero";
import { Testimonials } from "./components/sections/testimonials";
import { Footer } from "./components/layout/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedArtisans />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}
