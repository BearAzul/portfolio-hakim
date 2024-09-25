import PropTypes from "prop-types"
const MiniCard = ({ skill }) => {
  return (
    <div>
      <figure>
        <img src={skill.image} alt={skill.name} />
      </figure>
      <div>
        <h3>{skill.name}</h3>
        <p>{skill.level}</p>
      </div>
    </div>
  );
};

MiniCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }),
}

export default MiniCard;
