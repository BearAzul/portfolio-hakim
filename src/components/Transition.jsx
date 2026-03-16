import { motion, AnimatePresence } from "framer-motion"

const Transition = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.5, ease: "easeInOut" }
        }}
        className='h-screen w-screen fixed dark:bg-slate-800 bg-gray-300 top-0 pointer-events-none'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition