import { useEffect, useState } from "react";

const BtnTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const handleTop = () => { 
    if (window.scrollY > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const btn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleTop);
    
    return () => {
      window.removeEventListener("scroll", handleTop);
    };
  })
  
  
  return (
    <button
      type="button"
      onClick={btn}
      className={`fixed z-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.5, 1.6, 0.4, 0.7)] bottom-6 rounded-sm py-1 right-6 bg-rose-500 hover:bg-rose-600 active:scale-95 ${
        isVisible ? "opacity-100 translate-y-0" : "translate-y-[100px]"
      }`}
    >
      <i className="px-2 ri-arrow-up-s-line md:text-2xl"></i>
    </button>
  );
}

export default BtnTop;