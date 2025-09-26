import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'default',
  ...props
}) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `bg-white rounded-xl shadow-lg transition-all duration-300 ${paddingClasses[padding]} ${className}`;
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}