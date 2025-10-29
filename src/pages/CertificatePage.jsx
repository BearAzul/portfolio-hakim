import { Link } from "react-router"
import { useDataStore } from "../store/useDataStore.js";
import { useState, useEffect } from "react";
import DarkMode from "../common/DarkMode.jsx";
import PdfThumbnail from "../common/PdfThumbnail.jsx";

const ITEMS_PER_PAGE = 6;

const CertificatePage = () => {
  const { certificates } = useDataStore((state) => state);

  const filters = [
    "Semua",
    "Universitas",
    "Online Course",
    "Bootcamp",
    "National",
    "Internasional"
  ]

  const [activeFilter, setActiveFilter] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredCertificates = activeFilter === "Semua"
    ? certificates
    : certificates.filter(cert => cert.level === activeFilter);

  const totalPages = Math.ceil(filteredCertificates.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentCertificates = filteredCertificates.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
  };

  return (
    <section id="certificate" className="transition-all dark:bg-slate-800 w-full flex items-start justify-center min-h-screen py-10 bg-gray-200">
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-medium dark:text-gray-100 text-nowrap text-slate-800">
            <i className="mr-2 text-lg ri-arrow-left-circle-line"></i>
            Kembali
          </Link>

          <DarkMode display="hidden" />
          
          <span className="text-gray-200 badge badge-secondary">{certificates.length}</span>
        </div>
        <div className="mt-8 mb-4 text-center title">
          <h1 className="text-xl font-semibold dark:text-gray-100 md:text-3xl text-slate-800">
            Sertifikat
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Beberapa sertifkat saya dari universitas dan kursus online
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-1 mb-6 md:gap-3 md:flex-nowrap">
          {filters.map((filter, index) => (
            <button key={index} className={`font-normal btn btn-sm dark:text-gray-200 hover:!text-gray-200 shadow-md
                ${activeFilter === filter
                ? 'btn-secondary text-gray-200'
                : 'btn-outline btn-secondary'}`}
              onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-6">
          {currentCertificates.map((certificate) => (
            <div className="col-span-12 space-y-2 md:col-span-6 lg:col-span-4" key={certificate._id}>
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-xs font-medium md:text-sm dark:text-gray-200 text-slate-800">{certificate.title}</h1>
                <a href={certificate.fileUrl} target="_blink" className="font-normal text-gray-200 btn btn-sm btn-square btn-secondary">
                  <i className="ri-file-download-line"></i>
                </a>
              </div>
              <div className="overflow-hidden border-2 border-teal-600 rounded-lg shadow-md aspect-video">
                <PdfThumbnail fileUrl={certificate.fileUrl} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8 join">
          <button
            className="hover:!text-gray-200 join-item btn btn-outline btn-sm btn-secondary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`join-item btn btn-outline btn-sm hover:!text-gray-200 ${pageNumber === currentPage
                  ? "btn-active btn-secondary !text-gray-200"
                  : "btn-secondary"
                  }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            className="join-item btn btn-outline btn-sm btn-secondary hover:!text-gray-200"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </section>
  )
}

export default CertificatePage