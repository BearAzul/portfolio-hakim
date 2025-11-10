import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";

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
  }, [])


  return (
    <AnimatePresence>
      {isVisible &&
        <motion.button
          type="button"
          onClick={btn}
          className="fixed z-10 text-white bottom-6 rounded-sm right-6 btn btn-sm btn-error btn-square"
          aria-label="Button Top"

          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <ChevronUp className="md:size-5 size-4" />
        </motion.button>
      }
    </AnimatePresence>
  );
}

export default BtnTop;