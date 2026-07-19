import Image from "next/image";
import { Header } from "./components/layout/header";
import { FeaturedArtisans } from "./components/sections/featured-artisans";
import { WhyChooseUs } from "./components/sections/why-choose-us";
import { Hero } from "./components/sections/hero";
import { Testimonials } from "./components/sections/testimonials";
import { Footer } from "./components/layout/footer";
import { Categories } from "./components/sections/categories";
import { FAQ } from "./components/sections/faq";
import { CTASection } from "./components/sections/cta-section";
import { Stats } from "./components/sections/stats";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <FeaturedArtisans />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
