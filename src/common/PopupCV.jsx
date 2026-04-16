import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Download, LoaderCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Document, Page } from "react-pdf";

const PopupCV = ({ cv, isOpen, close }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

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
      window.open(cv, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh]"
          >
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-slate-700 justify-between bg-white dark:bg-slate-900 z-10">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white">Curriculum Vitae</h2>
              <div className="flex gap-2 items-center">
                <button onClick={handleDownload} className="btn btn-accent btn-sm btn-square" title="Download CV">
                  <Download className="size-4" />
                </button>
                <button onClick={close} className="btn btn-sm btn-circle btn-ghost">
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-slate-800 flex justify-center p-2 md:p-4 custom-scrollbar">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-gray-100 dark:bg-slate-800">
                  <LoaderCircle className="animate-spin size-10 text-teal-600" />
                </div>
              )}

              <Document
                file={cv}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={null}
                className="flex flex-col items-center"
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(window.innerWidth * 0.9, 750)}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            </div>

            {numPages > 1 && (
              <div className="p-3 border-t border-gray-200 dark:border-slate-700 flex items-center justify-center gap-4 bg-white dark:bg-slate-900">
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(prev => prev - 1)}
                  className="btn btn-sm btn-soft btn-square"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <p className="text-sm dark:text-white">
                  Halaman {pageNumber} dari {numPages}
                </p>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(prev => prev + 1)}
                  className="btn btn-sm btn-square btn-soft"
                >
                  <ChevronRight className="size-6" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupCV;