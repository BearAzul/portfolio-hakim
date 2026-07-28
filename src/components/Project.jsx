import {
  ArrowLeft,
  ArrowRight,
  Laptop,
  Monitor,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";
import CardProject from "../common/CardProject.jsx";
import { useDataStore } from "../store/useDataStore.js";
import { motion } from "framer-motion";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { useRef, useState } from "react";

const Project = () => {
  const { projects } = useDataStore((state) => state);

  const swiperRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Semua") return true;
    return project.projectType === activeFilter;
  });

  const getButtonClass = (filterType) => {
    const baseClass =
      "btn btn-sm shadow-sm btn-square md:btn-wide md:w-max md:px-4";
    if (activeFilter === filterType) {
      return `${baseClass} btn-primary dark:btn-accent`;
    }
    return `${baseClass} btn-soft btn-primary dark:btn-accent`;
  };

  return (
    <section
      id="project"
      className="scroll-section transition-colors bg-gray-100 dark:bg-slate-800 w-full flex items-center justify-center min-h-auto lg:min-h-screen py-20"
    >
      <div className="container px-6 mx-auto space-y-6 md:max-w-2xl lg:max-w-5xl md:px-4 relative">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Proyek
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Beberapa proyek terakhir
          </p>
        </div>

        <div className="flex items-end gap-1 justify-between">
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("Semua")}
              className={getButtonClass("Semua")}
            >
              <MonitorSmartphone className="size-5" />
              <span className="hidden sm:inline">Semua</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("Web")}
              className={getButtonClass("Web")}
            >
              <Monitor className="size-5" />
              <span className="hidden sm:inline">Desktop</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("Mobile")}
              className={getButtonClass("Mobile")}
            >
              <Smartphone className="size-5" />
              <span className="hidden sm:inline">Mobile</span>
            </motion.button>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-primary"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-primary"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="w-full relative pb-10">
          <Swiper
            key={activeFilter}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay, Grid]}
            spaceBetween={24}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                grid: {
                  rows: 2,
                  fill: "row"
                },
              },
              640: {
                slidesPerView: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
              1024: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
              },
            }}
            className="w-full h-full !pb-12"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <SwiperSlide key={project._id} className="h-auto">
                  <motion.div
                    className="h-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1,
                    }}
                  >
                    <CardProject project={project} />
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500 w-full py-10">
                Belum ada proyek di kategori ini.
              </p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
