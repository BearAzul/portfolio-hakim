import { useState, useEffect } from "react";
import DarkMode from "../common/DarkMode.jsx";
import { Menu, X } from "lucide-react";
import BtnLang from "../common/BtnLang.jsx";
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [showNav, setVisible] = useState(false);
  const [windowScroll, setScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#");

  const toggleNav = () => setVisible(!showNav);
  const closeNav = () => setVisible(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    let currentMenu = "#"

    const everySection = document.querySelectorAll(".scroll-section");
    const spyOffset = 150

    everySection.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= spyOffset) {
        currentMenu = "#" + section.id;
      }
    })

    if (window.scrollY < 300) {
      currentMenu = "#"
    }

    setActiveMenu(currentMenu);
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    {
      link: "#",
      title: "Utama",
    },
    {
      link: "#about",
      title: "Tentang"
    },
    {
      link: "#skills",
      title: "Kemampuan"
    },
    {
      link: "#project",
      title: "Proyek"
    },
    {
      link: "#contact",
      title: "Kontak"
    }
  ]
  return (
    <motion.header
      className={`fixed top-0 left-0 w-full flex items-center justify-center z-10 bg-transparent/40 ${windowScroll
        ? "backdrop-blur-sm shadow-lg bg-transparent/40 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-2xl lg:max-w-5xl rounded-lg mx-auto"
        : ""
        }`}
      initial={{ y: -100, x: 0 }}

      animate={{
        y: windowScroll ? 16 : 0,
      }}

      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6
      }}
    >
      <div className="container md:max-w-2xl lg:max-w-5xl">
        <div className="relative flex items-center justify-between">
          <div className="px-6 md:px-4">
            <a
              href="#home"
              className="flex items-center gap-1 py-4 md:gap-2 text-slate-800 dark:text-gray-100"
            >
              <p className="font-bold text-md md:text-xl notranslate">
                Akim<span className="text-teal-500">Dev.</span>
              </p>
            </a>
          </div>
          <div className="flex items-center gap-3 px-6 md:px-4 text-slate-800 dark:text-gray-100">
            <BtnLang />
            <nav
              className="hidden lg:inline-block"
            >
              <ul className="grid gap-4 lg:flex lg:gap-0">
                {menus.map((menu, index) => (
                  <li className="group" key={index}>
                    <a
                      href={menu.link}
                      className={`py-1 m-4 text-sm animate-underline text-slate-800 dark:text-gray-100 ${activeMenu === menu.link ? "navActive" : ""}`}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <DarkMode display="flex" />

            <button
              type="button"
              className="text-lg lg:hidden w-[20px] cursor-pointer"
              onClick={toggleNav}
              aria-label="Toggle Menu"
            >
              {showNav ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>


            <AnimatePresence>
              {showNav && (
                <motion.nav
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full right-0 mt-4 max-w-[160px] w-full bg-gray-100 dark:bg-slate-800 border border-teal-600 shadow-lg rounded-md overflow-hidden lg:hidden z-[60] py-2"
                >
                  <ul className="grid gap-4">
                    {menus.map((menu, index) => (
                      <motion.li
                        variants={itemVariants}
                        key={index}
                      >
                        <a
                          href={menu.link}
                          onClick={closeNav}
                          className={`py-1 m-4 text-sm animate-underline text-slate-800 dark:text-gray-200 ${activeMenu === menu.link ? "navActive" : ""}`}
                        >
                          {menu.title}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
