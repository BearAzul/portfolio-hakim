import { motion } from "framer-motion";

const HardSkillCard = ({ skill }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col items-center p-5 rounded-2xl dark:bg-slate-900/5 bg-gray-100/5 border border-teal-600/40 backdrop-blur-xs hover:border-teal-600 hover:shadow-teal-600/30 shadow-md text-center"
    >
      <figure className="size-12">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="block object-contain size-full drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
        />
      </figure>

      <div className="relative z-10 mt-4">
        <h4 className="text-sm font-semibold text-base-content transition-colors">
          {skill.name}
        </h4>
        <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-accent group-hover:drop-shadow-accent transition-colors group-hover:drop-shadow-xs">
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

export default HardSkillCard;
