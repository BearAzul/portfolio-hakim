import { Link, useSearchParams } from "react-router";
import { useDataStore } from "../store/useDataStore.js";
import { useEffect, useState } from "react";
import PdfThumbnail from "../common/PdfThumbnail.jsx";
import { CircleArrowLeft, StepForward, StepBack, Search } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "../common/CountUp.jsx";
import BtnLang from "../common/BtnLang.jsx";
import LoadingCertificate from "../components/skeletons/LoadingCertificate.jsx";
import DarkMode from "../common/DarkMode.jsx";
import { DotPattern } from "../components/ui/DotPattern.jsx";
import { Analytics } from "@vercel/analytics/react";

const CertificatePage = () => {
  const {
    certificates,
    totalPages,
    totalData,
    fetchCertificates,
    isCertLoading,
  } = useDataStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const activeFilter = searchParams.get("level") || "Semua";

  const filters = [
    "Semua",
    "Universitas",
    "Kelas Online",
    "MSIB",
    "Nasional",
    "Internasional",
  ];

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

  const formatToDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  if (isCertLoading) return <LoadingCertificate />;

  return (
    <>
      <Analytics />
      <section
        id="certificate"
        className="flex items-start justify-center w-full min-h-screen py-10"
      >
        <DotPattern />
        <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4 relative">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-medium dark:text-gray-100 flex items-center text-slate-800 gap-2"
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <CircleArrowLeft className="size-5" />
              </motion.div>
              <span>Kembali</span>
            </Link>

            <DarkMode display="hidden" />

            <div className="flex items-center gap-4">
              <BtnLang />
              <span className="text-gray-100 bg-teal-600 border-0 badge">
                <CountUp to={totalData} />
              </span>
            </div>
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
              <motion.button
                key={index}
                className={`text-sm text-teal-600 py-2 px-3 rounded-md dark:text-gray-200 shadow-sm cursor-pointer hover:bg-teal-600 border border-teal-600 hover:text-gray-200 text-nowrap dark:bg-slate-800 bg-gray-100
                ${activeFilter === filter ? "bg-teal-600 text-gray-200!" : ""}`}
                onClick={() => handleFilterChange(filter)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="mb-6 sm:mb-8 max-w-3xl mx-auto px-1">
            <label
              htmlFor="search"
              className="input w-full outline-none border border-teal-600 rounded-md shadow-md dark:bg-slate-800 bg-gray-100"
            >
              <Search className="text-gray-500 dark:text-gray-200" />
              <input
                type="search"
                placeholder="Cari sertifikat ..."
                name="search"
                id="search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSearchParams({
                    page: 1,
                    level: activeFilter,
                    search: e.target.value,
                  });
                }}
              />
            </label>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {certificates.length === 0 ? (
              <div className="col-span-12 text-center py-10">
                <p className="text-slate-800 dark:text-gray-200">
                  Sertifikat tidak ditemukan.
                </p>
              </div>
            ) : (
              certificates.map((certificate, index) => (
                <motion.div
                  className="col-span-12 space-y-2 md:col-span-6 lg:col-span-4"
                  key={certificate._id}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: index * 0.2,
                  }}
                >
                  <div className="flex flex-col pt-3 px-3 rounded-lg border border-teal-600 h-full shadow-lg dark:bg-slate-900 bg-gray-100">
                    <div className="overflow-hidden aspect-3/2 rounded-lg border border-teal-600">
                      <PdfThumbnail fileUrl={certificate.fileUrl} />
                    </div>
                    <h1 className="text-sm font-semibold dark:text-gray-100 my-2 leading-tight">
                      {certificate.title}
                    </h1>
                    <div className="flex flex-col gap-3 mt-auto">
                      <div className="flex items-center justify-between">
                        <p className="text-xs">{certificate.level}</p>
                        <p className="text-xs font-semibold text-secondary">
                          {certificate.company}
                        </p>
                      </div>
                      <div className="flex py-2 items-center justify-between border-t border-teal-600">
                        <p className="text-xs text-gray-500">
                          {formatToDate(certificate.publishDate)}
                        </p>
                        {certificate.credential &&
                        certificate.credential !== "-" ? (
                          <a
                            href={certificate.credential}
                            className="link link-hover uppercase font-mono text-xs"
                            target="_blank"
                            aria-label="credential"
                          >
                            <div className="inline-grid *:[grid-area:1/1] mr-2">
                              <div className="status status-success animate-ping"></div>
                              <div className="status status-success"></div>
                            </div>
                            View Credential
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="link text-xs !no-underline text-gray-400 font-mono uppercase"
                            disabled={true}
                            aria-label="no credential"
                          >
                            <div className="inline-grid *:[grid-area:1/1] mr-2">
                              <div className="status status-error animate-ping"></div>
                              <div className="status status-error"></div>
                            </div>
                            No Credential
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {certificates.length !== 0 && (
            <div className="flex items-center justify-center mt-8 join w-max mx-auto dark:bg-slate-800 bg-gray-100">
              <button
                type="button"
                className="join-item btn btn-sm btn-outline btn-success"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="previous"
              >
                <StepBack className="size-4" />
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    type="button"
                    key={pageNumber}
                    className={`join-item btn btn-outline btn-sm btn-success ${
                      currentPage === pageNumber
                        ? "btn-success"
                        : "text-neutral dark:text-primary-content"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-label="current-page"
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
                aria-label="next"
              >
                <StepForward className="size-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CertificatePage;
