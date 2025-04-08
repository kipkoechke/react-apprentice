"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

function StairTransition() {
  const pathname = usePathname();
  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed top-0 right-0 left-0 z-40 flex h-screen w-screen">
            <Stairs />
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="bg-primary pointer-events-none fixed top-0 h-screen w-screen"
          />
        </div>
      </AnimatePresence>
    </div>
  );
}

export default StairTransition;
