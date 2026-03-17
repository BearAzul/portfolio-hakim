import { useLocation, Routes, Route } from "react-router"
import { AnimatePresence } from "framer-motion"
import Transition from "../components/Transition.jsx"
import HomePage from "../pages/HomePage.jsx"
import CertificatePage from "../pages/CertificatePage.jsx"
import DetailProjectPage from "../pages/DetailProjectPage.jsx"
import NotFoundPage from "../pages/NotFoundPage.jsx"

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Transition>
              <HomePage />
            </Transition>
          }
        />
        <Route
          path="/certificates"
          element={
            <Transition>
              <CertificatePage />
            </Transition>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <Transition>
              <DetailProjectPage />
            </Transition>
          }
        />
        <Route
          path="*"
          element={
            <Transition>
              <NotFoundPage />
            </Transition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes