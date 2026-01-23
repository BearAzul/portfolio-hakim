import { Link, useSearchParams } from "react-router"
import { useDataStore } from "../store/useDataStore.js";
import { useEffect, useState } from "react";
import DarkMode from "../common/DarkMode.jsx";
import PdfThumbnail from "../common/PdfThumbnail.jsx";
import { CircleArrowLeft, FileDown, StepForward, StepBack, Search } from "lucide-react"
import { motion } from "framer-motion"
import CountUp from "../common/CountUp.jsx";

const CertificatePage = () => {
  const { certificates, totalPages, totalData, fetchCertificates } = useDataStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const activeFilter = searchParams.get("level") || "Semua";

  const filters = [
    "Semua",
    "Universitas",
    "Online Course",
    "Bootcamp",
    "National",
    "Internasional"
  ]

  useEffect(() => {
    fetchCertificates(currentPage, activeFilter, searchTerm);
  }, [currentPage, activeFilter, searchTerm, fetchCertificates]);

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    setSearchParams({ page: 1, level: filter });
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams({ page, level: activeFilter });
  };

  return (
    <section id="certificate" className="flex items-start justify-center w-full min-h-screen py-10 transition-all bg-gray-200 dark:bg-slate-800">
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-medium dark:text-gray-100 flex items-center text-slate-800">
            <CircleArrowLeft className="size-5 mr-2" />
            Kembali
          </Link>

          <DarkMode display="flex" />

          <span className="text-gray-100 bg-teal-600 border-0 badge">
            <CountUp to={totalData} />
          </span>
        </div>
        <div className="mt-8 mb-4 text-center">
          <h1 className="text-xl font-semibold dark:text-gray-100 md:text-3xl text-slate-800">
            Sertifikat
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Beberapa sertifkat saya dari universitas dan kursus online
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full gap-1 mb-4 md:gap-3 md:flex-nowrap">
          {filters.map((filter, index) => (
            <motion.button key={index} className={`text-sm text-teal-600 py-2 px-3 rounded-md dark:text-gray-200 shadow-sm cursor-pointer hover:bg-teal-600 border border-teal-600 hover:text-gray-200 text-nowrap
                ${activeFilter === filter
                ? 'bg-teal-600 !text-gray-200'
                : ''}`}
              onClick={() => handleFilterChange(filter)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9, y: 1 }}
              transition={{ type: "spring", stiffness: 300 }}

            >{filter}</motion.button>
          ))}
        </div>

        <div className="mb-6 sm:mb-8 max-w-3xl mx-auto px-1">
          <label htmlFor="search" className="input w-full outline-none border border-teal-600 bg-transparent rounded-md shadow-md">
            <Search className="text-gray-500 dark:text-gray-200" />
            <input type="text" placeholder="Cari sertifikat ..." name="search" id="search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchParams({ page: 1, level: activeFilter, search: e.target.value });
              }}
            />
          </label>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {certificates.length === 0 ? (
            <div className="col-span-12 text-center py-10">
              <p className="text-slate-800 dark:text-gray-200">Sertifikat tidak ditemukan.</p>
            </div>
          ) :
            certificates.map((certificate, index) => (
              <motion.div className="col-span-12 space-y-2 md:col-span-6 lg:col-span-4" key={certificate._id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.2 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-xs font-medium md:text-sm dark:text-gray-200 text-slate-800">{certificate.title}</h1>
                  <a href={certificate.fileUrl} target="_blink" className="font-normal text-gray-100 bg-teal-600 border-0 shadow-sm btn btn-sm btn-square">
                    <FileDown className="size-4 md:size-5" />
                  </a>
                </div>
                <div className="overflow-hidden border-2 border-teal-600 rounded-lg shadow-md aspect-video">
                  <PdfThumbnail fileUrl={certificate.fileUrl} />
                </div>
              </motion.div>
            ))
          }
        </div>

        {certificates.length !== 0 && (
          <div className="flex items-center justify-center mt-8 join">
          <button
            type="button"
            className="join-item btn btn-sm btn-outline btn-success"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <StepBack className="size-4" />
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                type="button"
                key={pageNumber}
                className={`join-item btn btn-outline btn-sm btn-success ${currentPage === pageNumber
                  ? "btn-active text-primary-content dark:text-neutral"
                  : "text-neutral dark:text-primary-content"
                  }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            type="button"
            className="join-item btn btn-outline btn-sm btn-success"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <StepForward className="size-4" />
          </button>
        </div>
        )}
      </div>
    </section>
  )
}

export default CertificatePage