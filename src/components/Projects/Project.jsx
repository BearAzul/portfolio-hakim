import "../../index.css";
import { listProjects } from "../../assets/data/listProjects.jsx";

const Project = () => {
  return (
    <>
      <section
        id="project"
        className="transition-all bg-gray-100 dark:bg-slate-800 w-full flex items-center justify-center min-h-[auto] lg:min-h-screen py-20"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="grid gap-10 px-6 md:px-4">
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
                <div key={project.id}>
                  <div
                    className="relative w-full h-full overflow-hidden border border-gray-400 rounded-md shadow-lg card"
                   
                    data-aos-delay={project.delay}
                    data-aos="zoom-out-down"
                  >
                    <img src={project.image} alt={project.name} className="block object-contain w-full h-full" />
                    <div className="overlay !w-full !h-full p-3 flex flex-col justify-between md:gap-5 gap-2 z-0">
                      <h2 className="text-lg font-semibold text-gray-100">
                        {project.title}
                      </h2>
                      <p className="text-sm text-justify text-white">
                        {project.description}
                      </p>

                      <div className="flex justify-start gap-2 flex-center">
                        <a
                          href={project.demo}
                          className="btnDemo"
                          target="_blank"
                        >
                          <span>Demo</span>
                          <i className="text-sm ri-external-link-line lg:text-base"></i>
                        </a>

                        <a href={project.sourceCode} className="btnDemo">
                          <span>Source Code</span>
                          <i className="text-sm ri-github-fill lg:text-base"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
