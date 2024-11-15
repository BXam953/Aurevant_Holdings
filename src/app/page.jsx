import Navbar from "./components/navbar";
import PageTemplate from "./components/pageTemplate";
import Landing from "./components/landing";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";

export default function Home() {
  return (
  <section className="flex flex-col justify-between">
    
    <PageTemplate className="flex flex-col justify-between bg-gradient-to-t from-soft-gold to-black" id="home">
        <Navbar />
        <Landing />
    </PageTemplate>
    <PageTemplate className=" h-screen" id="about">
      <About />
    </PageTemplate>
    <PageTemplate className=" h-screen" id="services">
      <Services />
    </PageTemplate>
    <PageTemplate className=" h-screen" id="contact">
      <Contact />
    </PageTemplate>
  </section>
  );
}
