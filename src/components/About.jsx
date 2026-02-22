import ScrollDown from "../common/ScrollDown.jsx";
import { useDataStore } from "../store/useDataStore.js";
import { motion } from "framer-motion";
import { History, Briefcase, FileBadge, FileUser } from "lucide-react"


const About = () => {
  const { about, totalData, projects } = useDataStore((state) => state);

  const services = [
    {
      title: "Pemahaman",
      description: "2+ Tahun",
      icon: <History />,
      link: "#",
    },
    {
      title: "Proyek Selesai",
      description: `${projects.length} Proyek`,
      icon: <Briefcase />,
      link: "#project",
    },
    {
      title: "Sertifikat",
      description: `${totalData}+`,
      icon: <FileBadge />,
      link: "/certificates",
    }
  ]

  return (
    <section
      id="about"
      className="scroll-section flex items-center justify-center w-full py-20 transition-all bg-gray-100 dark:bg-slate-800 lg:min-h-screen lg:py-0"
    >
      <div className="container px-6 mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Tentang Saya
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">Perkenalkan Saya</p>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:row-span-3 md:col-span-6 mx-auto">
            <motion.div
              className="hover-3d"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <figure className="overflow-hidden rounded-lg aspect-square lg:size-[300px] drop-shadow-md"
            >
              <img
                src={about?.imageUrl}
                alt="image hakim"
                className="block object-cover w-full h-full"
              />
              </figure>
              
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </motion.div> 
          </div>
          {services.map((service, index) => (
            <motion.div key={index}
              className="col-span-4 md:col-span-2 lg:tooltip tooltip-success"
              data-tip="click me"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
            >
              <a href={service.link} className="cursor-pointer card flex flex-col items-center"
              >
                {service.icon}
                <h1 className="text-center mt-1 text-nowrap">{service.title}</h1>
                <p>{service.description}</p>
              </a>
            </motion.div>
          ))}
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm text-justify text-slate-800 md:text-base dark:text-gray-100">
              {about?.description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center justify-between w-full">
              <motion.a
                href={about?.cvUrl}
                target="_blink"
                className="p-3 text-xs text-white rounded-lg shadow-md bg-slate-800 dark:bg-teal-600 hover:bg-teal-600 w-max md:text-sm flex items-center"
                aria-label="Download CV"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.9, y: 1 }}
                viewport={{ once: true }}
              >
                Download CV
                <FileUser className="size-5 ml-2" />
              </motion.a>
              <ScrollDown link="#qualification" query="Pendidikan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
