import { motion } from "framer-motion";

const SoftSkillBadge = ({ skill, index }) => {
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150 },
    },
  };

  return (
    <motion.div
      variants={badgeVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-4 py-2 dark:bg-slate-900 bg-gray-100 border border-teal-600/20 backdrop-blur-md rounded-full shadow-sm hover:border-cyan-600/40 grow"
    >
      <div className="btn btn-xs btn-secondary btn-circle pointer-events-none">
        {index + 1}
      </div>
      <span className="text-sm font-semibold text-base-content">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SoftSkillBadge;
