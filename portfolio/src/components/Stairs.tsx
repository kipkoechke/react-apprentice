import { motion } from "framer-motion";

const stairAnitmation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index of the stairs
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

function Stairs() {
  return (
    <>
      {/* render 6 motion divs each representing a step of the stairs

  Each div will have the same animation defined by the stairsANimation
  
  */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnitmation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="bg-accent relative h-full w-full"
        />
      ))}
    </>
  );
}

export default Stairs;
