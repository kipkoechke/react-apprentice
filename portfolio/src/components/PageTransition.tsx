"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="bg-primary top-o pointer-events-none fixed h-screen w-screen"
          />
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default PageTransition;
