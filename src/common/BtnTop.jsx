import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"

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
      className={`fixed z-10 text-white transition-transform duration-500 ease-[cubic-bezier(0.5, 1.6, 0.4, 0.7)] bottom-6 rounded-sm right-6 btn btn-sm btn-error btn-square ${isVisible ? "opacity-100 translate-y-0" : "translate-y-[100px]"
        }`}
      aria-label="Button Top"
    >
      <ChevronUp className="md:size-5 size-4" />
    </button>
  );
}

export default BtnTop;