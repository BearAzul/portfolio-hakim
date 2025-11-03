import PropTypes from "prop-types"
import { motion } from "framer-motion"

const ScrollDown = (props) => {
  return (
    <motion.a
      href={props.link}
      className="flex items-center space-x-2 text-teal-600"
      aria-label="Scroll Down"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-end px-2 pt-1 pb-2 border border-teal-600 rounded-full">
        <p className="p-0 m-0 text-xs text-center animate-bounce">I</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium md:text-base">{props.query}</p>
        <i className="text-xl ri-arrow-down-line"></i>
      </div>
    </motion.a>
  );
}

ScrollDown.propTypes = {
  query: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ScrollDown