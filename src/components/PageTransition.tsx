import { motion } from "framer-motion";

type Props = { children: React.ReactNode };

export default function PageTransition({ children }: Props) {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}   // commence en bas et transparent
      animate={{ y: 0, opacity: 1 }}        // remonte et devient visible
      exit={{ opacity: 0 }}                 // léger fade-out quand on quitte
      transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01]}}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
