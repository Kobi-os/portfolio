import AboutMe from "./Components/about/AboutMe";
import Hero from "./Components/hero/Hero";
import Navbar from "./Components/navbar/Navbar";
import Services from "./Components/services/Services";
import Contact from "./Components/contact/Contact";
import "./app.scss";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About Me">
      <AboutMe/>
    </section>
    <section id="Services">
      <Services/>
    </section>
    <section id="Portfolio">
      Parallax
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
