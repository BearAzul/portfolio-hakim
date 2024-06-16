import "../../index.css";
import { useState, useEffect } from "react";
import DarkMode from "../../common/Buttons/DarkMode"

const Header = () => {
  const [showNav, setVisible] = useState(false);
  const [windowScroll, setScroll] = useState(false);

  const toggleNav = () => {
    setVisible(!showNav);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`animate__animated animate__fadeInDown transition-all bg-gray-100 lg:fixed sticky top-0 left-0 w-full flex items-center justify-center z-10 dark:bg-slate-800 ${
          windowScroll
            ? "bg-opacity-40 backdrop-blur-md shadow-md dark:bg-opacity-40"
            : ""
        }`}
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
                className={`bg-gray-100 dark:border-teal-600 dark:border dark:lg:border-none dark:bg-slate-800 dark:lg:bg-transparent absolute py-2 shadow-xl rounded max-w-[160px] w-full right-4 top-20 lg:bg-transparent xl:top-full lg:static lg:block lg:shadow-none lg:max-w-full transition duration-500 ${
                  showNav ? "" : "hidden"
                }`}
              >
                <ul className="grid gap-4 lg:flex lg:gap-0">
                  <li className="group">
                    <a
                      href="#"
                      className="py-1 m-4 text-sm btn-effect text-slate-800 dark:text-gray-100"
                    >
                      Utama
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="py-1 m-4 text-sm btn-effect text-slate-800 dark:text-gray-100"
                    >
                      Tentang
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#skills"
                      className="py-1 m-4 text-sm btn-effect text-slate-800 dark:text-gray-100"
                    >
                      Kemampuan
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#project"
                      className="py-1 m-4 text-sm btn-effect text-slate-800 dark:text-gray-100"
                    >
                      Proyek
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="py-1 m-4 text-sm btn-effect text-slate-800 dark:text-gray-100"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </nav>

              <DarkMode />

              <button
                type="button"
                className="text-lg transition duration-500 lg:hidden ms-4 w-[20px]"
                onClick={toggleNav}
              >
                <i
                  className={`${showNav ? "ri-close-line" : "ri-menu-line"}`}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
