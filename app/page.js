import Latest from "./components/home/Latest";
import About from "./components/home/about";
import HomeHero from "./components/home/homeHero";
import WhyChooseUs from "./components/home/whyChooseUs";

export default function Home() {
  return (
   <main>
    <HomeHero/>
    <About/>
    <WhyChooseUs/>
    <Latest/>
   </main>
  )
}
