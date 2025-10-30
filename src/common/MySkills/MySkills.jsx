import CardSkill from "./CardSkill.jsx";
import PropTypes from "prop-types";


const HardSkills = ({ animate, skills }) => {
  return (
    <div
      className="items-center w-full gap-2 py-6 mx-auto md:flex"
      data-aos={animate}
    >
      <div className="flex-none">
        <h1 className="mb-6 font-bold md:-rotate-90 md:mb-0 text-slate-800 dark:text-gray-100">
          <span className="mr-2 bg-teal-500 sm:hidden">&nbsp;</span>Teknologi
        </h1>
      </div>

      <div className="flex-auto">
        <div className="flex overflow-x-hidden group gap-2">
          <div className="flex animate-loop-scroll md:flex-wrap gap-2 md:gap-4 text-slate-800 dark:text-gray-100 md:!animate-none group-hover:paused" aria-hidden="true">
            {skills.map((skill) => (
              <CardSkill
                key={skill._id + '-1'}
                skill={skill}
              />
            ))}
          </div>
          <div className="flex animate-loop-scroll md:flex-wrap gap-2 md:gap-4 text-slate-800 dark:text-gray-100 md:!animate-none group-hover:paused md:hidden" aria-hidden="true">
            {skills.map((skill) => (
              <CardSkill
                key={skill._id + '-2'}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftSkills = ({ animate, skills }) => {
  return (
    <div
      className="items-center w-full gap-2 py-6 mx-auto md:flex"
      data-aos={animate}
    >
      <div className="flex-none">
        <h1 className="mb-6 font-bold md:-rotate-90 md:mb-0 text-slate-800 dark:text-gray-100">
          <span className="mr-2 bg-teal-500 sm:hidden">&nbsp;</span>Interpersonal
        </h1>
      </div>
      <div className="flex-auto">
        <div className="flex flex-wrap gap-2 md:gap-4 text-slate-800 dark:text-gray-100">
          {skills.map((skill) => (
            <CardSkill
              key={skill._id}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

SoftSkills.propTypes = {
  animate: PropTypes.string,
  skills: PropTypes.array.isRequired,
};

HardSkills.propTypes = {
  animate: PropTypes.string,
  skills: PropTypes.array.isRequired,
};

export { HardSkills, SoftSkills };