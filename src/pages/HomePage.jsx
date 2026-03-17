import Header from "../components/Navbar.jsx"
import Home from "../components/Home.jsx"
import About from "../components/About.jsx"
import Qualification from "../components/Qualifications.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Project.jsx"
import Contact from "../components/Contact.jsx"
import { useDataStore } from "../store/useDataStore.js"
import { useEffect } from "react"
import Loading from "../common/Loading.jsx"

const HomePage = () => {
  const { fetchAllData, isLoading } = useDataStore()

  useEffect(() => {
    fetchAllData()
  }, [])

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