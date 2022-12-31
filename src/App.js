import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContactModal from "./components/ContactModal/ContactModal";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import HeroBanner from "./components/Home/HeroBanner";
import Projects from "./components/Projects/Projects";
import Technology from "./components/Technology/Technology";

function App() {
  AOS.init();
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <About />
      <Technology />
      {/* <Projects /> */}
      <Contact />
      <ContactModal />
      <Footer />
    </div>
  );
}

export default App;
