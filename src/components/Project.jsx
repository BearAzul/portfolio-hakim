import CardProject from "../common/CardProject.jsx";
import { useDataStore } from "../store/useDataStore.js";
import { motion } from "framer-motion"

const Project = () => {
  const { projects } = useDataStore((state) => state);

  return (
    <section
      id="project"
      className="scroll-section transition-all bg-gray-100 dark:bg-slate-800 w-full flex items-center justify-center min-h-auto lg:min-h-screen py-20"
    >
      <div className="container px-6 mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Proyek
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Beberapa proyek terakhir
          </p>
        </div>
        <div className="gap-6 grid grid-cols-12">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1
              }}
            >
              <CardProject project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
