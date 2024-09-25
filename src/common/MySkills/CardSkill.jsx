import PropTypes from "prop-types"

const CardSkill = ({skill}) => {
  return (
    <div className="flex gap-2">
      <div className="text-teal-600">
        <i className="ri-checkbox-circle-fill"></i>
      </div>
      <div className="w-full">
        <h2 className="text-sm font-semibold lg:text-lg">{skill.name}</h2>
        <p className="lg:text-xs text-[10px] !text-teal-500">{skill.level}</p>
      </div>
    </div>
  );
}

CardSkill.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string,
  }),
}

export default CardSkill;