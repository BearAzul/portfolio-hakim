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
        <div className="flex flex-wrap gap-2 md:gap-4 text-slate-800 dark:text-gray-100" aria-hidden="true">
          {skills.map((skill, i) => (
            <div key={i}>
              <CardSkill
                skill={skill}
                key={i}
              />
            </div>
          ))}
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
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 md:gap-4 text-slate-800 dark:text-gray-100">
          {skills.map((skill, i) => (
            <div key={i}>
              <CardSkill
                skill={skill}
              />
            </div>
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