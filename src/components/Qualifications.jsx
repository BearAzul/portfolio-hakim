import { CardLeft, CardRight } from "../common/CardJourney.jsx";
import { useState } from "react";
import { useDataStore } from "../store/useDataStore.js";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";


const Qualifications = () => {
  const [isMove, setIsMove] = useState(false);
  const handleMove = () => {
    setIsMove(!isMove);
  };

  const { educations, experiences } = useDataStore((state) => state);

  return (

    <section
      id="qualification"
      className="scroll-section flex items-center justify-center w-full py-20 overflow-hidden transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
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
          <button type="button"
            onClick={handleMove}
            className={`transition duration-300 text-center text-sm lg:text-lg py-1 px-3 cursor-pointer flex items-center gap-2 ${isMove ? "text-slate-800 dark:text-gray-100" : "text-gray-100"
              }`}
          >
            <GraduationCap />
            Pendidikan
          </button>
          <button type="button"
            onClick={handleMove}
            className={`transition duration-300 text-center text-sm lg:text-lg py-1 px-3 cursor-pointer flex items-center gap-2 ${isMove ? "text-gray-100" : "text-slate-800 dark:text-gray-100"
              }`}
          >
            <BriefcaseBusiness />
            Pengalaman
          </button>
          <span
            className={`transition duration-300 absolute top-1/2 -translate-y-1/2 left-0 w-full h-full block bg-teal-600 -z-[1] rounded ${isMove ? "translate-x-[50%]" : "-translate-x-[50%]"
              }`}
          ></span>
        </div>
        <div className="container max-w-2xl mx-auto">
          <div className={`${isMove ? "hidden" : "block"} h-full`}>
            {educations && educations.map((education, index) => (
              index % 2 === 0 ? (
                <CardRight
                  key={education._id}
                  title={education.school}
                  elemen={education.major}
                  address={education.location}
                  years={education.years}
                />
              ) : (
                <CardLeft
                  key={education._id}
                  title={education.school}
                  elemen={education.major}
                  address={education.location}
                  years={education.years}
                />
              )
            ))}
          </div>
          <div className={`${isMove ? "block" : "hidden"} h-full`}>
            {experiences && experiences.map((experience, index) => (
              index % 2 === 0 ? (
                <CardLeft
                  key={experience._id}
                  title={experience.company}
                  elemen={experience.position}
                  address={experience.location}
                />
              ) : (
                <CardRight
                  key={experience._id}
                  title={experience.company}
                  elemen={experience.position}
                  address={experience.location}
                  years={experience.years}
                />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
