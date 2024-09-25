import PropTypes from "prop-types";

const CardProject = ({ project }) => {
  return (
    <div
      className="relative w-full h-full overflow-hidden border border-gray-400 rounded-md shadow-lg card"
      data-aos-delay={project.delay}
      data-aos="zoom-out-down"
    >
      <img
        src={project.image}
        alt={project.name}
        className="block object-contain w-full h-full"
      />
      <div className="overlay !w-full !h-full p-3 flex flex-col justify-between md:gap-5 gap-2 z-0">
        <h2 className="text-lg font-semibold text-gray-100">{project.title}</h2>
        <p className="text-sm text-justify text-white">{project.description}</p>

        <div className="flex justify-start gap-2 flex-center">
          <a href={project.demo} className="btnDemo" target="_blank">
            <span>Demo</span>
            <i className="text-sm ri-external-link-line lg:text-base"></i>
          </a>

          <a href={project.sourceCode} className="btnDemo">
            <span>Source Code</span>
            <i className="text-sm ri-github-fill lg:text-base"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CardProject;
