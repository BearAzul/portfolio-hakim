import { X, ScanQrCode } from 'lucide-react';
import QRDana from "../assets/img/qr_code_10k.jpeg"

const QRCode = () => {
  const downloadQRCode = () => { 
    const link = document.createElement('a');
    link.href = QRDana;
    link.download = 'qr_code_dana_hakim.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <dialog id="qr_modal" className="modal modal-middle sm:modal-middle">
      <div className="modal-box w-full max-w-xs mx-auto">
        <div className="modal-action">
          <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.qr_modal.close()}>
            <X />
          </button>
        </div>
        <div className='text-center'>
          <span className='btn btn-sm btn-soft btn-square mb-2 btn-accent shadow-sm'>
            <ScanQrCode />
          </span>
          <h1 className='font-medium text-sm'>Scan to Donate</h1>
          <p className='text-gray-400 text-xs'>Print and scan this QR Code to support me as frontend web developer :V</p>
          <figure className='aspect-square overflow-hidden rounded-lg p-1 border my-3 size-50 mx-auto'>
            <img src={QRDana} alt="QR Code Dana" className='block rounded-md w-full h-full object-cover' />
          </figure>
          <button type='button' className="btn btn-sm dark:btn-accent btn-soft mt-2" onClick={downloadQRCode}>Download QR Code</button>
        </div>
      </div>
    </dialog>
  )
}

export default QRCode