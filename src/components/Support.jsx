

const Support = () => {
  const openModal = () => {
    window.qr_modal.showModal();
  }
  return (
    <button type="button" aria-label="qr_btn" className="fixed bottom-80 lg:bottom-70 -right-20 -rotate-90 btn btn-neutral h-[60px] flex items-start cursor-pointer z-40 shadow-lg" onClick={openModal}>
      <span>Buy Me a Coffee</span>
    </button>
  )
}

export default Support