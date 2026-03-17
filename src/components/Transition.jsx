import { motion } from "framer-motion"
import StairsEffect from "./StairsEffect.jsx"

const Transition = ({ children }) => {
  return (
    <div className="relative">
      <StairsEffect />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
        }}
        className="h-screen w-screen fixed bg-gray-200 dark:bg-slate-800 top-0 pointer-events-none z-[90]"
      />
      {children}
    </div>
  )
}

export default Transition