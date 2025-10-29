import Lottie from "lottie-react"
import LoadingBar from "../assets/animations/Loading_Bar.json"
import DarkMode from "./DarkMode.jsx"

const Loading = () => {
  return (
    <div className="z-30 flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-slate-800">
      <div className="text-center">
        <DarkMode display="hidden" />
        <Lottie animationData={LoadingBar} />
      </div>
    </div>
  )
}

export default Loading