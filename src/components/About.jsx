import ScrollDown from "../common/ScrollDown.jsx";
import { useDataStore } from "../store/useDataStore.js";

const About = () => {
  const { about } = useDataStore((state) => state);

  return (
    <section
      id="about"
      className="flex items-center justify-center w-full py-20 transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
    >
      <div className="container px-6 mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Tentang Saya
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">Perkenalkan Saya</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="img-about w-full lg:w-[300px] h-full lg:h-[300px] mx-auto rounded-lg">
            <img
              src={about?.imageUrl}
              alt="image hakim"
              className="block object-cover w-full h-full rounded-lg drop-shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              <div className="card" data-aos="fade-down">
                <i className="ri-award-fill"></i>
                <h1>Pengalaman</h1>
                <p>2+ Tahun</p>
              </div>
              <div className="card" data-aos="fade-down" data-aos-delay="300">
                <i className="ri-suitcase-fill"></i>
                <h1>Selesai / Sukses</h1>
                <p>7 Proyek</p>
              </div>
              <div className="card" data-aos="fade-down" data-aos-delay="600">
                <i className="ri-customer-service-2-fill"></i>
                <h1>Layanan</h1>
                <p>Online 24/7</p>
              </div>
            </div>
            <div className="text-sm text-justify text-slate-800 md:text-base dark:text-gray-100">
              <p>
                {about?.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={about?.cvUrl}
                target="_blink"
                data-aos="fade-up"
          
                className="p-3 text-xs text-white rounded-lg shadow-md bg-slate-800 dark:bg-teal-600 hover:bg-teal-600 w-max md:text-sm active:scale-75"
                aria-label="Download CV"
              >
                Download CV
                <i className="ri-file-line ms-3"></i>
              </a>
              <ScrollDown link="#qualification" query="Pendidikan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
