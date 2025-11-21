import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { LoaderCircle } from "lucide-react"

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const PdfThumbnail = ({ fileUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

      <div className={isLoading || error ? 'hidden' : 'w-full h-full flex items-center justify-center'}>
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={330}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfThumbnail;