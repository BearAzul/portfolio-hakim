import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"

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
        className={`relative items-center justify-center gap-2 p-1 text-xs border rounded-full h-max text-slate-500 border-teal-600 w-max drop-shadow-sm ${display} cursor-pointer`}
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        <Sun className="text-gray-300 size-3" />
        <Moon className="size-3" />
        <span
          className={`absolute transition-all duration-500 -translate-y-1/2 top-1/2 w-[18px] h-[18px] bg-teal-600 rounded-full left-[.1rem] ${theme === "dark"
            ? "translate-x-[1.24rem]"
            : ""
            }`}
        ></span>
      </button>
    </>
  );
};

export default DarkMode;