import ScrollDown from "../common/ScrollDown.jsx";
import { useDataStore } from "../store/useDataStore.js";

const services = [
  {
    title: "Pengalaman",
    description: "2+ Tahun",
    icon: "ri-award-fill",
    link: "#",
  },
  {
    title: "Selesai / Sukses",
    description: "7 Proyek",
    icon: "ri-suitcase-fill",
    link: "#project",
  },
  {
    title: "Sertifikat",
    description: "7+",
    icon: "ri-verified-badge-line",
    link: "/certificates",
  }
]

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
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:row-span-3 md:col-span-6">
            <figure className="mx-auto overflow-hidden rounded-lg aspect-square lg:size-[300px] drop-shadow-md">
              <img
                src={about?.imageUrl}
                alt="image hakim"
                className="block object-cover w-full h-full"
              />
            </figure>
          </div>
          {services.map((service, index) => (
            <div key={index} className="col-span-4 md:col-span-2">
              <a href={service.link} className="cursor-pointer card" data-aos="fade-down" data-aos-delay={index * 100}>
                <i className={service.icon}></i>
                <h1 className="text-nowrap">{service.title}</h1>
                <p>{service.description}</p>
              </a>
            </div>
          ))}
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm text-justify text-slate-800 md:text-base dark:text-gray-100">
              {about?.description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center justify-between w-full">
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
