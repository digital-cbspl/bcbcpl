"use client";

import { motion, useIsPresent } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      key={isPresent ? "enter" : "exit"}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      exit={{ opacity: 1 }} // No exit animation so it never repeats
    >
      {children}
    </motion.div>
  );
}
