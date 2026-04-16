import { Link, useParams } from "react-router"
import { CircleArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { useDataStore } from "../store/useDataStore.js"
import { Github, ExternalLink, Dot, TabletSmartphone } from "lucide-react"
import { motion } from "framer-motion"
import { LoadingProjectById } from "../components/skeletons/LoadingProject.jsx"
import BtnLang from "../common/BtnLang.jsx"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ControlsZoom from "../common/ControlsZoom.jsx"
import DarkMode from "../common/DarkMode.jsx"

const DetailProjectPage = () => {
  const { id } = useParams()
  const { getProjectById, detailproject, isLoadingProject } = useDataStore()
  const [imageHover, setImageHover] = useState(null)

  useEffect(() => {
    getProjectById(id)
  }, [id, getProjectById])

  if (isLoadingProject) return <LoadingProjectById />

  const formatToDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }

  return (
    <section id="detailpage" className="flex items-start justify-center w-full min-h-screen py-10">
      <div className="container px-6 mx-auto md:max-w-2xl lg:max-w-5xl md:px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-medium dark:text-gray-100 flex items-center text-slate-800 gap-2">
            <motion.div
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <CircleArrowLeft className="size-5" />
            </motion.div>
            <span>Kembali</span>
          </Link>

          <DarkMode display="hidden" />

          <BtnLang />
        </div>
        <h1 className="text-2xl font-semibold mt-6 mb-2 notranslate">{detailproject.title}</h1>
        <p className="flex items-center text-sm text-gray-400 mb-6">{detailproject.projectType} <Dot /> {formatToDate(detailproject.projectDate)}</p>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:hidden">
            <figure className="hover-gallery rounded-lg aspect-3/2 cursor-pointer">
              {detailproject.projectImage?.map((img, index) => (
                <img key={index} src={img || `https://placehold.co/${200 + (index * 100)}`} alt="image project" className="h-full w-full object-cover" />
              ))}
            </figure>
          </div>

          <div className="col-span-12 hidden md:inline-block">
            <figure className="rounded-lg aspect-video overflow-hidden shadow-md relative">
              <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <>
                    <ControlsZoom />
                    <TransformComponent>
                      <img src={imageHover || detailproject.projectImage?.[0]} alt={detailproject.title} className="block object-cover w-full h-full" />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </figure>

          </div>

          {detailproject?.projectImage?.map((img, index) => (
            <div className={`col-span-3 hidden md:inline-block ${imageHover === img ? "image-full" : ""} cursor-pointer`} key={index}>
              <figure className="rounded-md aspect-video overflow-hidden shadow-md" onMouseEnter={() => setImageHover(img)}>
                <img src={img || "https://placehold.co/300"} alt={detailproject?.title + (index + 1)} className="object-cover block w-full h-full" />
              </figure>
              <div></div>
            </div>
          ))}


          <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:mr-8">
            <h2 className="mb-2 uppercase text-sm font-semibold">Tentang Project</h2>
            <p className="text-justify text-sm">{detailproject.description}</p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2">
            <h2 className="mb-2 uppercase text-sm font-semibold">Detail Proyek</h2>
            <div className={`border ${detailproject.status === "Done" ? "w-max" : "w-full"} dark:border-gray-700 rounded-lg border-gray-200`}>
              <table className="table text-gray-400">
                <tbody>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{detailproject.status}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>:</td>
                    <td>{detailproject.projectType}</td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>:</td>
                    <td>{formatToDate(detailproject.projectDate)}</td>
                  </tr>
                  <tr>
                    <td>Link</td>
                    <td>:</td>
                    <td>
                      {detailproject.status === "Done" && detailproject.projectType === "Web" && (
                        <div className="space-x-2 flex ">
                          <motion.a href={detailproject.repoUrl} target="_blank" className="btn btn-sm btn-outline btn-secondary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Github size={14} /> Sources
                          </motion.a>
                          <motion.a href={detailproject.projectUrl} target="_blank" className="btn btn-sm btn-outline btn-secondary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <ExternalLink size={14} /> Demo
                          </motion.a>
                        </div>
                      )}

                      {detailproject.status === "Done" && detailproject.projectType === "Mobile" && (
                        <div className="space-x-2 flex ">
                          <motion.a href={detailproject.projectUrl} target="_blank" className="btn btn-sm btn-outline btn-secondary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <TabletSmartphone size={14} /> Download
                          </motion.a>
                        </div>
                      )}

                      {detailproject.status !== "Done" && (
                        "Private"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-8">
            <h2 className="text-sm uppercase mb-2 font-semibold">Tech Stack:</h2>
            {detailproject.technologies?.map((tech, index) => (
              <div className="badge badge-soft badge-sm badge-primary dark:badge-secondary m-0.5" key={index}>{tech}</div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default DetailProjectPage