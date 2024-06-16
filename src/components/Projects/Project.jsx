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
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6">
              {listProjects.map((project) => (
                <div key={project.id}>
                  <div
                    className="card relative w-full h-[200px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-md border border-gray-400 shadow-lg"
                    style={{ backgroundImage: `url(${project.image})` }}
                    data-aos-delay={project.delay}
                    data-aos="zoom-out-down"
                  >
                    <div className="overlay !w-full !h-full p-3 flex flex-col justify-end md:gap-5 gap-2 z-0">
                      <h2 className="text-xs font-semibold text-gray-100 md:text-lg">
                        {project.title}
                      </h2>
                      <p className="text-[7px] text-justify md:text-sm text-white">
                        {project.description}
                      </p>

                      <div className="flex flex-col justify-start gap-2 flex-center md:flex-row">
                        <a
                          href={project.demo}
                          className="btnDemo"
                          target="_blank"
                        >
                          <span>Demo</span>
                          <i className="ri-external-link-line text-[10px] md:text-sm lg:text-base"></i>
                        </a>

                        <a href={project.sourceCode} className="btnDemo">
                          <span>Source Code</span>
                          <i className="ri-github-fill text-[10px] md:text-sm lg:text-base"></i>
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
