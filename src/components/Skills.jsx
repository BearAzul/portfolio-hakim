import { HardSkills, SoftSkills } from "../common/MySkills/MySkills.jsx";
import { useDataStore } from "../store/useDataStore.js";

const Skills = () => {
  const { hardSkills, softSkills } = useDataStore((state) => state.skills);
  
  return (
    <section
      id="skills"
      className="scroll-section transition-all bg-gray-100 dark:bg-slate-800 flex items-center justify-center lg:min-h-screen min-h-[auto] py-20 lg:py-0 w-full overflow-hidden"
    >
      <div className="container mx-auto space-y-10 md:max-w-2xl lg:max-w-5xl">
        <div className="text-center title">
          <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
            Kemampuan
          </h1>
          <p className="text-xs text-teal-600 md:text-sm">
            Level saya secara teknis
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-6">
          <HardSkills animate="fade-right" skills={hardSkills} />
          <SoftSkills animate="fade-left" skills={softSkills} />
        </div>
      </div>
    </section>

  );
};

export default Skills;
