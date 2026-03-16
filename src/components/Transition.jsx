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
        className='fixed bg-teal-600 pointer-events-none inset-0'
      >
        <div className="relative z-0">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition