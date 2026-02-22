import { Coffee } from "lucide-react"

const Support = () => {
  const openModal = () => {
    window.qr_modal.showModal();
  }
  return (
    <button type="button" aria-label="qr_btn" className="fixed bottom-80 lg:bottom-70 -left-20 rotate-90 btn btn-sm btn-secondary h-[60px] flex items-start cursor-pointer z-40 shadow-lg font-medium" onClick={openModal}>
      <span className="flex items-center py-1">Buy Me a Coffee <Coffee className="size-5 ml-2" /></span>
    </button>
  )
}

export default Support