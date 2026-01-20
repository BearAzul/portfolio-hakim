import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export const CardRight = ({ title, element, address, years }) => {
  return (
    <div className="flex items-start justify-center gap-4 !text-slate-800">
      <div className="hidden w-full p-3 md:block grow">&nbsp;</div>
      <div className="relative flex flex-col items-center justify-center grow-0">
        <span className="w-[10px] h-[10px] rounded-full dark:bg-teal-600 bg-slate-800 block absolute top-2"></span>
        <span className="block w-[2px] h-[145px] bg-slate-400"></span>
      </div>
      <motion.div
        className="w-full p-3 border border-gray-400 rounded-lg shadow-md grow hover:border-teal-400 dark:text-gray-100"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
        viewport={{ once: true }}
      >

        <h1 className="text-base font-semibold lg:text-lg">
          {title}
        </h1>

        <p className="text-sm text-teal-600 dark:text-teal-400">
          {element}
        </p>
        <p className="mb-4 text-xs">{address}</p>

        <p className="text-sm flex items-center gap-2">
          <CalendarCheck className="size-4" />
          {years}
        </p>
      </motion.div>
    </div>
  );
};

export const CardLeft = ({ title, element, address, years }) => {
  return (
    <div className="flex items-start justify-center md:flex-row-reverse  gap-4 !text-slate-800">
      <div className="hidden md:block grow w-full p-3.5">&nbsp;</div>
      <div className="relative flex flex-col items-center justify-center grow-0">
        <span className="w-[10px] h-[10px] rounded-full dark:bg-teal-600 bg-slate-800 block absolute top-2"></span>
        <span className="block w-[2px] h-[145px] bg-slate-400"></span>
      </div>
      <motion.div
        className="w-full p-3 border border-gray-400 rounded-lg shadow-md grow hover:border-teal-400 dark:text-gray-100"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
        viewport={{ once: true }}
      >

        <h1 className="text-base font-semibold lg:text-lg">
          {title}
        </h1>

        <p className="text-sm text-teal-600 dark:text-teal-400">
          {element}
        </p>
        <p className="mb-4 text-xs">{address}</p>
        <p className="text-sm flex items-center gap-2">
          <CalendarCheck className="size-4" />
          {years}
        </p>
      </motion.div>
    </div>
  );
};

