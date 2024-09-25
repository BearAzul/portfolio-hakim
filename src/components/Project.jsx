import { listProjects } from "../assets/data/listProjects.jsx";
import CardProject from "../common/CardProject.jsx";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="transition-all bg-gray-100 dark:bg-slate-800 w-full flex items-center justify-center min-h-[auto] lg:min-h-screen py-20"
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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {listProjects.map((project) => (
              <CardProject project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
