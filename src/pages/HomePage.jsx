import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Intro from "../intro/Intro";
export default function HomePage() {
  return (
    <>
      <Intro />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
