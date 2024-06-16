import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);
  return (
    <>
      <button
        type="button"
        className="relative flex items-center justify-center gap-2 py-[.22rem] px-[.35rem]  text-xs border rounded-full h-max text-slate-500 border-teal-600 w-max drop-shadow-sm"
        onClick={toggleTheme}
      >
        <i className="text-gray-300 ri-sun-line"></i>
        <i className="ri-moon-fill"></i>
        <span
          className={`absolute transition-all duration-500 -translate-y-1/2 top-1/2 w-[18px] h-[18px] bg-teal-600 rounded-full left-[.2rem] ${
            theme === "dark"
              ? "translate-x-[1.26rem]"
              : ""
          }`}
        ></span>
      </button>
    </>
  );
};

export default DarkMode;
