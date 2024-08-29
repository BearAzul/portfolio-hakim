import "../../index.css";
import { CardLeft, CardRight } from "../../common/CardJourney/CardJourney.jsx";
import { useState } from "react";
import SertifikatGamelab from "../../assets/files/Sertifikat - MSIB GameLab [PT. Educa Sisfomedia Indonesia].zip";

const Qualifications = () => {
  const [isMove, setIsMove] = useState(false);
  const handleMove = () => {
    setIsMove(!isMove);
  };
  return (
    <>
      <section
        id="qualification"
        className="flex items-center justify-center w-full py-20 overflow-hidden transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
      >
        <div className="container px-6 mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl md:px-4">
          <div className="text-center title">
            <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
              Kualifikasi
            </h1>
            <p className="text-xs text-teal-600 md:text-sm">
              Perjalanan pendidikan saya
            </p>
          </div>
          <div className="relative z-[1] bg-transparent flex items-center justify-center mx-auto rounded w-max text-slate-800 gap-4 dark:text-gray-100 text-center overflow-hidden">
            <button
              onClick={handleMove}
              className={`transition duration-300  text-center text-sm lg:text-lg py-1 px-3 ${
                isMove ? "text-slate-800 dark:text-gray-100" : "text-gray-100"
              }`}
            >
              <i className="ri-graduation-cap-fill me-3"></i>
              Pendidikan
            </button>
            <button
              onClick={handleMove}
              className={`transition duration-300 text-center text-sm lg:text-lg py-1 px-3 ${
                isMove ? "text-gray-100" : "text-slate-800 dark:text-gray-100"
              }`}
            >
              <i className="ri-briefcase-4-fill me-3"></i>
              Pengalaman
            </button>
            <span
              className={`transition duration-300 absolute top-1/2 -translate-y-1/2 left-0 w-full h-full block bg-teal-600 -z-[1] rounded ${
                isMove ? "translate-x-[50%]" : "-translate-x-[50%]"
              }`}
            ></span>
          </div>
          <div className="container max-w-2xl mx-auto">
            <div className={`${isMove ? "hidden" : "block"} h-full`}>
              <CardRight
                delay={0}
                title="Universitas Semarang"
                elemen="Teknik Informatika - S1"
                address="Tlogosari - Kota Semarang"
                years="2021 - Sekarang"
                display="hidden"
              />
              <CardLeft
                delay={300}
                title="SMA Negeri 01 Weleri"
                elemen="Matematika dan IPA"
                address="Weleri - Kendal"
                years="2018 - 2021"
                display="hidden"
              />
              <CardRight
                delay={600}
                title="SMP Negeri 01 Gringsing"
                elemen="kelas A/B"
                address="Gringsing - Batang"
                years="2015 - 2018"
                display="hidden"
              />
              <CardLeft
                delay={900}
                title="MI Al Hidayah Plelen"
                address="Plelen - Batang"
                years="2009 - 2015"
                display="hidden"
              />
              <CardRight
                delay={1200}
                title="RA Al Hidayah Plelen"
                address="Plelen - Batang"
                years="2008 - 2009"
                display="hidden"
              />
            </div>
            <div className={`${isMove ? "block" : "hidden"} h-full`}>
              <CardRight
                delay={0}
                title="MSIB Studi Independen - GameLab Indonesia"
                elemen="Frontend Developer"
                address="Salatiga - Kota Salatiga"
                years="16 Februari -  30 Juni 2024"
                display="block"
                download={SertifikatGamelab}
              />
              {/* Pengalaman yang akan Datang */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualifications;
