import PropTypes from "prop-types"
const MiniCard = ({ skill }) => {
  return (
    <div className="flex items-center gap-3 px-2 py-3 transition duration-300 border border-gray-400 rounded-lg shadow md:px-5 hover:bg-primary hover:border-secondary hover:text-white dark:hover:bg-slate-900">
      <figure className="md:w-[30px] w-[20px] overflow-hidden rounded-none">
        <img src={skill.icon} alt={skill.name} className="block object-cover w-full h-full" />
      </figure>
      <div>
        <h3 className="text-xs font-medium lg:text-base">{skill.name}</h3>
        <p className="text-xs text-secondary">{skill.level}</p>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }),
}

export default MiniCard;
