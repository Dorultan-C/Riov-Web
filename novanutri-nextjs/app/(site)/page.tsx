import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Investors from "@/components/Investors";

export default function Home() {
  return (
    <main id="content" className="flex-1">
      <Hero />
      <Features />
      <Faq />
      <About />
      <Investors />
      <Contact />
    </main>
  );
}
