import { useState } from "react";

const CardProject = ({ project }) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const toggleImageVisibility = () => {
    setIsImageVisible(!isImageVisible);
  };
  return (
    <div className="mb-6 border rounded-lg shadow-md border-slate-800 dark:border-accent break-inside-avoid">
      <div className="grid grid-cols-12">
        <div className={`col-span-12 row-span-2  dark:border-accent border-slate-800
                      transition-all duration-500 ease-in-out overflow-hidden
                      ${isImageVisible ? "max-h-[500px] border-b" : "max-h-0"}`}>
          <figure className="overflow-hidden rounded-t-lg aspect-3/2">
            <img src={project.projectImage} alt={project.title} className="block object-cover w-full h-full transition-all hover:scale-125" />
          </figure>
        </div>
        <div className="relative col-span-12 p-3 space-y-2">
          <button type="button" className="absolute -translate-x-1/2 border dark:border-accent border-primary hover:border-accent btn btn-sm btn-square -top-4 left-1/2 dark:btn-primary" onClick={toggleImageVisibility}>
            <i
              className={`text-lg ${isImageVisible
                  ? "ri-arrow-drop-up-line"
                  : "ri-arrow-drop-down-line"
                }`}
            ></i>
          </button>
          <h1 className="text-sm font-semibold dark:text-base-200">{project.title}</h1>
          <p className="text-xs text-justify dark:text-base-100">{project.description}</p>
        </div>
        <div className="col-span-12 p-3">
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-200 text-nowrap scrollbar-hide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex col-span-12 gap-2 p-3">
          <a href={project.projectUrl} target="_blank" className="font-normal btn btn-primary btn-sm btn-outline dark:btn-accent" >
            <i className="text-sm ri-external-link-line lg:text-base"></i> Demo
          </a>
          <a href={project.repoUrl} target="_blank" className="font-normal btn btn-sm btn-primary btn-outline dark:btn-accent">
            <i className="text-sm ri-github-fill lg:text-base"></i> Source
          </a>
        </div>
      </div>
    </div >
  );
};

export default CardProject;
