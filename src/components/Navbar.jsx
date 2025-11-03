import { useState, useEffect } from "react";
import DarkMode from "../common/DarkMode.jsx";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [showNav, setVisible] = useState(false);
  const [windowScroll, setScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#");

  const toggleNav = () => {
    setVisible(!showNav);
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
      className={`transition-all bg-gray-100 lg:fixed sticky top-0 left-0 w-full flex items-center justify-center z-10 dark:bg-slate-800 ${windowScroll
        ? "bg-slate-100/40 backdrop-blur-sm shadow-md dark:bg-slate-800/40"
        : ""
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container md:max-w-2xl lg:max-w-5xl">
        <div className="relative flex items-center justify-between">
          <div className="px-6 md:px-4">
            <a
              href="#home"
              className="flex items-center gap-1 py-4 md:gap-2 text-slate-800 dark:text-gray-100"
            >
              <p className="font-bold text-md md:text-xl">
                Akim<span className="text-teal-500">Dev.</span>
              </p>
            </a>
          </div>
          <div className="flex items-center px-6 md:px-4 text-slate-800 dark:text-gray-100">
            <nav
              className={`bg-gray-100 dark:border-teal-600 dark:border dark:lg:border-none dark:bg-slate-800 dark:lg:bg-transparent absolute py-2 shadow-xl rounded max-w-[160px] w-full right-4 top-20 lg:bg-transparent xl:top-full lg:static lg:block lg:shadow-none lg:max-w-full transition duration-500 ${showNav ? "" : "hidden"
                }`}
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
              className="text-lg transition duration-500 lg:hidden ms-4 w-[20px]"
              onClick={toggleNav}
              aria-label="Toggle Menu"
            >
{showNav ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
