import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }

  return "light";
};

const DarkMode = ({ display }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        className={`relative items-center justify-center gap-2 py-[.22rem] px-[.35rem]  text-xs border rounded-full h-max text-slate-500 border-teal-600 w-max drop-shadow-sm ${display}`}
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        <i className="text-gray-300 ri-sun-line"></i>
        <i className="ri-moon-fill"></i>
        <span
          className={`absolute transition-all duration-500 -translate-y-1/2 top-1/2 w-[18px] h-[18px] bg-teal-600 rounded-full left-[.2rem] ${theme === "dark"
            ? "translate-x-[1.26rem]"
            : ""
            }`}
        ></span>
      </button>
    </>
  );
};

export default DarkMode;