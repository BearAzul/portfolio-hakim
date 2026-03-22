import Header from "../components/Navbar.jsx"
import Home from "../components/Home.jsx"
import About from "../components/About.jsx"
import Qualification from "../components/Qualifications.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Project.jsx"
import Contact from "../components/Contact.jsx"
import { useDataStore } from "../store/useDataStore.js"
import LoadingHome from "../components/skeletons/LoadingHome.jsx"

const HomePage = () => {
  const { isLoading } = useDataStore()

  if(true) return <LoadingHome />

  return (
    <>
      <Header />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default HomePage