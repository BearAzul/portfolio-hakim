import PropTypes from "prop-types"

const ScrollDown = (props) => {
  return (
    <>
      <a
        href={props.link} data-aos="fade-up" data-aos-delay="300"
        className="flex items-center space-x-2 text-teal-600"
      >
        <div className="flex flex-col items-center justify-end px-2 pt-1 pb-2 border border-teal-600 rounded-full">
          <p className="p-0 m-0 text-xs text-center animate-bounce">I</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium md:text-base">{props.query}</p>
          <i className="text-xl ri-arrow-down-line"></i>
        </div>
      </a>
    </>
  );
}

ScrollDown.propTypes = {
  query: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ScrollDown