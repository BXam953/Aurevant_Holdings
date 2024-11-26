import Navbar from "./components/navbar";
import PageTemplate from "./components/pageTemplate";
import Landing from "./components/landing";
import About from "./components/about backup";
import Services from "./components/services";
import Contact from "./components/contact";

export default function Home() {
  return (
  <section className="flex flex-col justify-between gap-36 md:gap-0">
    
    <PageTemplate classes="h-screen" id="home">
        <Navbar/>
        <Landing/>
    </PageTemplate>
    <PageTemplate classes=" min-h-screen lg:h-screen" id="about">
      <About />
    </PageTemplate>
    <PageTemplate classes="min-h-screen lg:h-screen" id="services">
      <Services />
    </PageTemplate>
    <PageTemplate classes="min-h-screen md:h-screen" id="contact">
      <Contact />
    </PageTemplate>
  </section>
  );
}
