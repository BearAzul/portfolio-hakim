import { motion } from "framer-motion"

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"]
  }
}

const reverseIndex = (index) => {
  const totalSteps = 6
  return totalSteps - index - 1
}

const StairEffect = () => {
  return (

      <div>
        <div className="w-screen h-screen fixed flex pointer-events-none top-0 left-0 right-0 z-40">
          {[...Array(6)].map((_, index) => (
            <motion.div key={index} variants={stairAnimation}
              initial="initial" animate="animate" exit="exit"
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1
              }}
              className="h-full w-full dark:bg-slate-800 bg-gray-300 z-40"
            />
          ))}
        </div>

        <motion.div
          className="w-screen h-screen fixed dark:bg-slate-800 bg-gray-300 top-0 pointer-events-none"
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
          }}
        />
      </div>
  )
}

export default StairEffect