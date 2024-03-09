import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

const icons = [
  {
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    href: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
  },
];

const App = () => {
  return (
    <>
      <Navbar icons={icons} />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer icons={icons} />
    </>
  );
};

export default App;
