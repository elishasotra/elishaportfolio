import { motion, useScroll, useSpring } from "framer-motion";

function ScrollSystem() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleY }}
      />

      <div className="scroll-system">
        <span>SCROLL</span>

        <div className="scroll-line">
          <motion.div style={{ scaleY }} />
        </div>

        <span>08</span>
      </div>
    </>
  );
}

export default ScrollSystem;
