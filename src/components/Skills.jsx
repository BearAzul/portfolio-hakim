import { useState, useEffect } from "react";
import { useDataStore } from "../store/useDataStore.js";
import { motion, AnimatePresence } from "framer-motion";
import SkillSidebar from "../common/SkillSidebar.jsx";
import HardSkillCard from "../common/MySkills/HardSkillCard.jsx";
import SoftSkillBadge from "../common/MySkills/SoftSkillBadge.jsx";


const Skills = () => {
  const { categories } = useDataStore((state) => state);
  const [activeTabId, setActiveTabId] = useState(null);

  useEffect(() => {
    if (categories && categories.length > 0 && !activeTabId) {
      setActiveTabId(categories[0]._id);
    }
  }, [categories, activeTabId]);

  const activeCategory = categories?.find((c) => c._id === activeTabId);

  const hardSkills =
    activeCategory?.skillId.filter((s) => s.type === "Hard") || [];
  const softSkills =
    activeCategory?.skillId.filter((s) => s.type === "Soft") || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Jeda 0.1 detik antar item
      },
    },
  };

  return (
    <section
      id="skills"
      className="scroll-section min-h-auto py-20 w-full overflow-hidden bg-gray-100 dark:bg-slate-800"
    >
      <div className="container mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl relative px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center title"
        >
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Kemampuan
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Level saya secara teknis
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          <SkillSidebar
            categories={categories}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />

          <div className="xl:col-span-8 lg:col-span-7 col-span-12">
            <AnimatePresence mode="wait">
              {activeCategory ? (
                <div
                  key={activeCategory._id}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-200 flex items-center gap-4">
                      {activeCategory.name}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-[2px] flex-1 bg-teal-600 rounded-full origin-left"
                      />
                    </h3>
                  </div>

                  {activeCategory.skillId.length > 0 ? (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      {hardSkills.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {hardSkills.map((skill) => (
                            <HardSkillCard key={skill._id} skill={skill} />
                          ))}
                        </div>
                      )}

                      {softSkills.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {softSkills.map((skill, index) => (
                            <SoftSkillBadge
                              key={skill._id}
                              skill={skill}
                              index={index}
                            />
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-20 border border-dashed border-teal-600 rounded-xl bg-gray-100/10 dark:bg-slate-900/10 backdrop-blur-xs"
                    >
                      <p className="text-slate-500 font-mono text-sm">
                        /* No skills found in this sector */
                      </p>
                    </motion.div>
                  )}
                </div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
