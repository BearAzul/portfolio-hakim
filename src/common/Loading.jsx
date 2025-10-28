import Lottie from "lottie-react"
import LoadingBar from "../assets/animations/Loading_Bar.json"

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-800">
      <div className="text-center">
        <Lottie animationData={LoadingBar} />
      </div>
    </div>
  )
}

export default Loading