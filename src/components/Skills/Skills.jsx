import "../../index.css";
import { HardSkills, SoftSkills } from "../../common/MySkills/MySkills.jsx";


const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="transition-all bg-gray-100 dark:bg-slate-800 flex items-center justify-center lg:min-h-screen min-h-[auto] py-20 lg:py-0 w-full overflow-hidden"
      >
        <div className="container mx-auto md:max-w-2xl lg:max-w-5xl">
          <div className="grid gap-10 px-6 md:px-4">
            <div className="text-center title">
              <h1 className="text-xl font-semibold md:text-3xl text-slate-800 dark:text-gray-100">
                Kemampuan
              </h1>
              <p className="text-xs text-teal-600 md:text-sm">
                Level saya secara teknis
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              <HardSkills animate="fade-right" />
              <SoftSkills animate="fade-left" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
