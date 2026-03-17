import { motion, AnimatePresence } from "framer-motion"


const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] }
}

const reverseIndex = (i) => {
  const totalSteps = 6
  return totalSteps - i - 1
}

const StairsEffect = () => {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-[100] flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(i) * 0.1
            }}
            className="h-full w-full dark:bg-teal-600 bg-slate-800 relative"
          />
        ))}
      </div>
    </>
  )
}

export default StairsEffect