'use Client'
import Latest from "./components/home/Latest";
import About from "./components/home/about";
import HomeHero from "./components/home/homeHero";
import Investors from "./components/home/investors";
import News from "./components/home/news";
import WhyChooseUs from "./components/home/whyChooseUs";

export default function Home() {
  return (
   <main>
    <HomeHero/>
    <About/>
    <WhyChooseUs/>
    <Latest/>
    <Investors/>
    <News/>
   </main>
  )
}
