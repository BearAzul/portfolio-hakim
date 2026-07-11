import { motion } from "framer-motion";

const SkillSidebar = ({ categories, activeTabId, setActiveTabId }) => {
  return (
    <div className="xl:col-span-4 lg:col-span-5 col-span-12 h-max w-full flex lg:flex-col gap-3 lg:gap-1 bg-gray-100/10 p-3 lg:p-2 rounded-xl shadow-md dark:bg-slate-900/10 backdrop-blur-sm border border-teal-600/40 overflow-hidden overflow-x-scroll lg:overflow-hidden">
      {categories?.map((item, index) => {
        const isActive = activeTabId === item._id;

        return (
          <motion.button
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            key={item._id}
            onClick={() => setActiveTabId(item._id)}
            className={`group relative flex items-center gap-6 lg:gap-0 justify-between w-full px-5 py-4 text-left rounded-xl border text-nowrap
              ${
                isActive
                  ? "bg-gray-100 dark:bg-slate-900 shadow-md border-teal-600/50 dark:border-teal-500/30"
                  : "bg-transparent border-transparent hover:bg-gray-200/50 dark:hover:bg-slate-900/50"
              }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute left-0 top-1/4 bottom-1/4 w-1.5 rounded-r-full bg-teal-500"
              />
            )}

            <span
              className={`font-semibold tracking-wide transition-colors ${
                isActive
                  ? "text-teal-700 dark:text-teal-400"
                  : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
              }`}
            >
              {item.name}
            </span>

            <span
              className={`btn btn-xs btn-square ${
                isActive ? "btn-accent" : "btn-soft"
              }`}
            >
              {item.skillId.length}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default SkillSidebar;
