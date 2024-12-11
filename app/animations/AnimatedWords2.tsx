import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedWords2Props = {
  title: string;
  style: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  const wordAnimation2 = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.2, 0.65, 0.3, 0.9],
        duration: 1,
      },
    }
  }

  return <h1 aria-label={title} role="heading">
    <motion.span className={style} ref={ref}>
      {
        title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            className="flex items-center justify-center overflow-hidden last:-mr-10 pb-2 sm:pb-0"
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            <motion.span
              className="-mb-2 inline-block overflow-hidden "
              variants={wordAnimation2}
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))
      }
    </motion.span>
  </h1>
};

export default AnimatedWords2;
