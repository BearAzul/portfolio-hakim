import CardSkill from "./CardSkill.jsx";
import PropTypes from "prop-types";
import { listHardSkills, listSoftSkills } from "../../assets/data/listData.jsx";

const HardSkills = (props) => {
  return (
    <>
      <div
        className="w-full py-8 mx-auto transition duration-500 border border-gray-400 rounded-lg shadow-md card hover:!-translate-y-4"
        data-aos={props.animate}
      >
        <h1 className="font-bold text-center text-slate-800 dark:text-gray-100">
          Hard Skills
        </h1>
        <div className="grid grid-cols-2 gap-2 px-4 mt-6 md:gap-4 lg:px-8 text-slate-800 dark:text-gray-100">
          {listHardSkills.map((skill) => (
            <CardSkill
              skill={skill}
              key={skill.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const SoftSkills = (props) => {
  return (
    <>
      <div
        className="w-full py-8 mx-auto transition duration-500 border border-gray-400 rounded-lg shadow-md card hover:!-translate-y-4"
        data-aos={props.animate}
      >
        <h1 className="font-bold text-center text-slate-800 dark:text-gray-100">
          Soft Skills
        </h1>
        <div className="grid grid-cols-2 gap-2 px-4 mt-6 lg:px-8 md:gap-4 text-slate-800 dark:text-gray-100">
          {listSoftSkills.map((skill) => (
            <CardSkill skill={skill} key={skill.id} />
          ))}
        </div>
      </div>
    </>
  );
};

SoftSkills.propTypes = {
  animate: PropTypes.string,
};

HardSkills.propTypes = {
  animate: PropTypes.string,
};

export { HardSkills, SoftSkills };
