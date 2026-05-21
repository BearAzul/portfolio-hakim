import { ExternalLink, Github } from 'lucide-react';
import { motion } from "framer-motion"
import { Link } from "react-router"
import { MoveRight } from "lucide-react"

const CardProject = ({ project }) => {

  return (
    <div className="border rounded-lg shadow-md border-slate-800 dark:border-accent bg-gray-100 dark:bg-slate-800"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 row-span-2 overflow-hidden transition-all duration-500 ease-in-out border-b dark:border-accent border-slate-800">
          <div className="cursor-pointer overflow-hidden aspect-3/2 rounded-t-lg">
            <figure className="hover-gallery">
              {project.projectImage.map((img, index) => (
                <img src={img || `https://placehold.co/${300 + (index * 100)}`} alt={project.title} className="block object-cover w-full h-full" key={index} />
              ))}
            </figure>
          </div>
        </div>
        <div className="relative col-span-12 p-3 space-y-2">
          <div className="absolute flex items-center justify-center gap-2 -translate-x-1/2 -top-4 left-1/2">
            {project.status === "Done" && (
              <a href={project.projectUrl} target="_blank" className="px-2 py-1 text-sm transition-all bg-gray-100 border rounded-lg text-nowrap border-slate-800 hover:bg-slate-800 hover:text-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-200 dark:hover:text-slate-800 dark:hover:bg-gray-100 flex items-center gap-1 lg:tooltip lg:tooltip-left lg:tooltip-neutral" aria-label="link btn" data-tip="click me">
                <ExternalLink className="size-4" /> Demo
              </a>
            )}

            <a href={project.repoUrl} target="_blank" className="px-2 py-1 text-sm transition-all bg-gray-100 border rounded-lg text-nowrap border-slate-800 hover:bg-slate-800 hover:text-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:border-gray-200 dark:hover:text-slate-800 dark:hover:bg-gray-100 flex items-center gap-1 lg:tooltip lg:tooltip-right lg:tooltip-neutral" aria-label="repo btn" data-tip="click me">
              <Github className="size-4" /> Sources
            </a>
          </div>
          <h1 className="mt-2 text-sm font-semibold lg:mt-3 dark:text-gray-100 notranslate">{project.title}</h1>
          <p className="text-xs mt-2 line-clamp-2">{project.description}</p>
        </div>
        <div className="col-span-12 px-3 pb-3">
          <motion.button type="button" className="w-full" aria-label="btn_link"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to={`/projects/${project._id}`}
              className="flex items-center justify-between py-1.5 px-3 rounded-md text-sm shadow-md border bg-gray-200 border-gray-50 dark:bg-slate-900 dark:border-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-900"

            >
              <span className="text-center w-full">Lihat Selengkapnya</span> <MoveRight size={18} />
            </Link>
          </motion.button>

        </div>
      </div>
    </div >
  );
};

export default CardProject;
