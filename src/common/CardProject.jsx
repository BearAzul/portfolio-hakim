import { useId } from "react";
import { ExternalLink, Github } from 'lucide-react';

const CardProject = ({ project }) => {
  const zoomId = useId();

  return (
    <div className="mb-6 border rounded-lg shadow-md border-slate-800 dark:border-accent break-inside-avoid">
      <input type="checkbox" id={zoomId} className="hidden peer" />
      <div className="grid grid-cols-12">
        <div className="col-span-12 row-span-2 overflow-hidden transition-all duration-500 ease-in-out border-b dark:border-accent border-slate-800">
          <label htmlFor={zoomId} className="cursor-pointer">
            <figure className="overflow-hidden rounded-t-lg aspect-3/2">
              <img src={project.projectImage} alt={project.title} className="block object-cover w-full h-full transition-all hover:scale-125" />
            </figure>
          </label>
        </div>
        <div className="relative col-span-12 p-3 space-y-2">
          <div className="absolute flex items-center justify-center gap-2 -translate-x-1/2 -top-4 left-1/2">
            {project.status === "Done" && (
              <a href={project.projectUrl} target="_blank" className="px-2 py-1 text-sm transition-all bg-gray-100 border rounded-lg text-nowrap border-slate-800 hover:bg-slate-800 hover:text-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-200 dark:hover:text-slate-800 dark:hover:bg-gray-100 flex items-center gap-1 lg:tooltip lg:tooltip-left lg:tooltip-neutral" aria-label="link btn" data-tip="click me">
                <ExternalLink className="size-4" /> Demo
              </a>
            )}

            <a href={project.repoUrl} target="_blank" className="px-2 py-1 text-sm transition-all bg-gray-100 border rounded-lg text-nowrap border-slate-800 hover:bg-slate-800 hover:text-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-200 dark:hover:text-slate-800 dark:hover:bg-gray-100 flex items-center gap-1 lg:tooltip lg:tooltip-right lg:tooltip-neutral" aria-label="repo btn" data-tip="click me">
              <Github className="size-4" /> Source
            </a>
          </div>
          <h1 className="mt-2 text-sm font-semibold lg:mt-3 dark:text-gray-100">{project.title}</h1>
          <p className="text-xs text-justify dark:text-gray-100 text-slate-800">{project.description}</p>
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
      </div>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center invisible p-4 transition-all duration-300 opacity-0 bg-black/80 backdrop-blur-sm peer-checked:opacity-100 peer-checked:visible"
      >
        <img
          src={project.projectImage}
          alt={project.title}
          className="block object-contain max-w-[90vw] max-h-[90vh] z-10"
        />

        <label
          htmlFor={zoomId}
          className="absolute inset-0 cursor-pointer"
        ></label>
      </div>
    </div >
  );
};

export default CardProject;
