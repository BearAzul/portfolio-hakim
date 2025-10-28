import PropTypes from "prop-types";

const CardSkill = ({ skill }) => {
  if (skill.imageUrl) {
    return (
      <div className="flex items-center gap-3 p-2 transition duration-300 border border-gray-400 rounded-lg shadow-md md:px-3 hover:bg-slate-900 hover:border-teal-600 hover:text-white">
        <div className="flex-none">
          <figure className="md:w-[30px] w-[20px] overflow-hidden rounded-sm">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="block object-cover w-full h-full"
            />
          </figure>
        </div>
        <div className="flex-auto">
          <h2 className="text-xs font-medium lg:text-base text-nowrap">{skill.name}</h2>
          <p className="text-xs !text-teal-500 dark:text-secondary">{skill.level}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex-none text-teal-600">
        <i className="ri-checkbox-circle-fill"></i>
      </div>
      <div className="flex-auto">
        <h2 className="text-sm font-semibold lg:text-lg text-wrap">{skill.name}</h2>
      </div>
    </div>
  );
};

CardSkill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string,
    imageUrl: PropTypes.string, // Dibuat opsional
  }).isRequired,
};

export default CardSkill;