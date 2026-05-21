import { Link } from "react-router"
import { CircleArrowLeft } from "lucide-react"
import DarkMode from "../common/DarkMode.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion"
import { DotPattern } from "../components/ui/DotPattern.jsx";

const NotFoundPage = () => {
  return (
    <section
      id="NotFoundPage"
      className="flex items-start justify-center w-full h-dvh py-10 bg-gray-200 dark:bg-slate-800"
    >
      <DotPattern />
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4 relative">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-medium dark:text-gray-100 flex items-center text-slate-800 gap-2"
          >
            <motion.div
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <CircleArrowLeft className="size-5" />
            </motion.div>
            <span>Kembali</span>
          </Link>

          <DarkMode display="hidden" />
        </div>

        <div className="block mx-auto text-center h-80 w-80 sm:w-100 sm:h-100">
          <DotLottieReact src="/assets/animations/cat_laugh.lottie" loop autoplay />
        </div>
        <p className="font-semibold sm:text-base text-sm text-center">
          Yahahahaaa, Apa yang lu cari bro? Gak ada apa-apa disini, pergi sana!
        </p>
      </div>
    </section>
  );
}

export default NotFoundPage