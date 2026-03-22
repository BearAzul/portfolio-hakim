import { Coffee } from "lucide-react"
import { motion } from "framer-motion"

const Support = () => {
  const openModal = () => {
    window.qr_modal.showModal();
  }

  return (
    <motion.button type="button" aria-label="qr_btn" className="fixed bottom-80 lg:bottom-70 -left-20 rotate-90 btn btn-sm btn-secondary h-[60px] flex items-start cursor-pointer z-40 shadow-lg font-medium" onClick={openModal}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring", stiffness: 300,
        damping: 10,
        delay: 1.5
      }}
    >
      <span className="flex items-center py-1">Buy Me a Coffee <Coffee className="size-5 ml-2" /></span>
    </motion.button>
  )
}

export default Support