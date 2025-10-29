import Header from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Qualification from "./components/Qualifications.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BtnTop from "./common/BtnTop.jsx";
import { Helmet } from "react-helmet-async"
import { useState, useEffect, useCallback } from "react";
import Loading from "./common/Loading.jsx";
import { useDataStore } from "./store/useDataStore.js";


const App = () => {
  const isDataLoading = useDataStore((state) => state.isLoading);
  const fetchAllData = useDataStore((state) => state.fetchAllData);

  const [isUiLoading, setIsUiLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);
  const [isSlidingUp, setIsSlidingUp] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  useEffect(() => {
    if (isDataLoading === false) {
      setIsSlidingUp(true);

      const animationDuration = 700;
      setTimeout(() => {
        setIsUiLoading(false);
        setShowApp(true);
      }, animationDuration);
    }
  }, [isDataLoading]);
  

  return (
    <>
      <Helmet>
        <title>Adya Abdu Azizul Hakim — Frontend Developer</title>
        <meta name="description" content="Portofolio resmi Adya Abdu Azizul Hakim, seorang Frontend Web Developer yang berfokus pada pengembangan aplikasi modern dengan teknologi React.js, Node.js, dan Next.js" />
        <meta name="keywords" content="Adya Abdu Azizul Hakim, Web Developer, Frontend Developer, React, Node.js, Next.js, Portofolio Frontend Developer Kampung" />
        <meta name="author" content="Adya Abdu Azizul Hakim" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://akimdev.vercel.app" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Adya Abdu Azizul Hakim — Frontend Developer" />
        <meta property="og:description" content="Kunjungi portofolio profesional saya yang menampilkan proyek, keahlian, dan pengalaman sebagai Frontend Developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akimdev.vercel.app" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/103102235?v=4" />
        <meta property="og:site_name" content="AkimDev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adya Abdu Azizul Hakim — Frontend Developer" />
        <meta name="twitter:description" content="Portofolio resmi Adya Abdu Azizul Hakim, seorang pengembang web profesional." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/103102235?v=4" />
        <meta name="twitter:creator" content="@adya_abdu77" />

        <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/103102235?v=4" type="image/x-icon" />
      </Helmet>

      {isUiLoading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center 
                      bg-gray-100 dark:bg-slate-900 transition-transform 
                      duration-700 ease-out ${isSlidingUp ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
        >
          <Loading />
        </div>
      )}
      {showApp && (
        <>
          <Header />
          <Home />
          <About />
          <Qualification />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <BtnTop />
        </>
      )}
    </>
  );
};

export default App;
