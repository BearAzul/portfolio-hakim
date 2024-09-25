import Header from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Qualification from "./components/Qualifications.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
