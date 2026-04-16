import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { LoaderCircle } from "lucide-react"

const PdfThumbnail = ({ fileUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function onDocumentLoadSuccess() {
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(loadError) {
    console.error("Error loading PDF:", loadError);
    setError("Gagal memuat PDF.");
    setIsLoading(false);
  }

  return (
    <div className="relative flex items-center justify-center object-cover w-full h-full bg-gray-50 dark:bg-gray-700">

      {isLoading && <LoaderCircle className='animate-spin size-8 text-secondary' />}


      {error && !isLoading && (
        <span className="p-2 text-xs text-center text-error">{error}</span>
      )}

      <div
        className={isLoading || error ? 'hidden' : 'w-full h-full flex items-center justify-center cursor-zoom-in'}
        onClick={() => setIsFullscreen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setIsFullscreen(true);
        }}
        aria-label="Buka pratinjau penuh"
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
        >
          <div className="flex h-full w-full items-center justify-center overflow-hidden">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={330}
            />
          </div>
        </Document>
      </div>

      {isFullscreen && !isLoading && !error && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsFullscreen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              setIsFullscreen(false);
            }
          }}
          aria-label="Tutup pratinjau penuh"
        >
          <div className="relative max-h-full max-w-full cursor-zoom-out">
            <Document file={fileUrl} loading={null}>
              <Page
                pageNumber={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                width={Math.min(900, window.innerWidth - 32)}
              />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfThumbnail;
