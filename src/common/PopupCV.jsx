import { AnimatePresence, motion } from "framer-motion"
import { X, Download } from "lucide-react" // Tambah icon Download agar lebih keren

const PopupCV = ({ cv, isOpen, close }) => {
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(cv);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      link.setAttribute('download', 'CV_Adya_Abdu_Azizul_Hakim.pdf');

      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Gagal mendownload file:", error);
      window.open(cv, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-hidden">
     
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl md:max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
          >
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-slate-700 justify-between">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white text-nowrap">Curriculum Vitae</h2>
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleDownload}
                  className="btn btn-accent btn-sm btn-soft btn-square"
                >
                  <Download className="size-4" />
                </button>

                <button
                  onClick={close}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 dark:bg-slate-800 relative">
              <iframe
                src={`${cv}#toolbar=0`}
                title="Preview CV"
                className="w-full h-full border-none"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default PopupCV