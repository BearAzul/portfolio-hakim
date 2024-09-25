import React from 'react'
import ReactDOM from 'react-dom/client'
import "animate.css"
import "remixicon/fonts/remixicon.css"
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/Header/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Qualification from './components/Qualifications/Qualifications.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Project.jsx'
import Contact from './components/Contacts/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import BtnTop from './common/Buttons/BtnTop.jsx'
import './index.css'

AOS.init()
AOS.init({
  duration: 1000,
  once: true,
  delay: 300,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Qualification />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    <BtnTop />
  </React.StrictMode>,
)
