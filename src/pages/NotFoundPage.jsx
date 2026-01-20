import { Link, useRouteError } from "react-router"
import { CircleArrowLeft } from "lucide-react"
import DarkMode from "../common/DarkMode.jsx";
import Lottie from "lottie-react"
import NotFoundAnimation from "../assets/animations/lolcat.json"

export default function NotFoundPage() {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <section id="NotFoundPage" className="flex items-start justify-center w-full h-dvh py-10 bg-gray-200 dark:bg-slate-800">
        <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-medium dark:text-gray-100 flex items-center text-slate-800">
              <CircleArrowLeft className="size-5 mr-2" />
              Kembali
            </Link>

            <DarkMode display="hidden" />
          </div>

          <div className="block mx-auto text-center h-80 w-80 sm:w-100 sm:h-100">
            <Lottie animationData={NotFoundAnimation} />
          </div>
          <p className="font-semibold sm:text-base text-sm text-center">Yahahahaaa, Apa yang lu cari bro? Gak apa-apa disini, pergi sana!</p>
        </div>

      </section>
    );
  }
}