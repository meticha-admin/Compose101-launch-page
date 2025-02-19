import { motion, useScroll, useTransform } from "framer-motion";
import WildMarquee from "./WildMarquee";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden "
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div className="w-full h-full bg-gradient-to-b from-transparent to-black opacity-50" />
      <WildMarquee />
      </motion.div>
      {/* <motion.h1
        className="text-6xl font-bold mb-4 relative z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
      >
        Compose101 is Evolving! 🚀
      </motion.h1>
      <motion.p
        className="text-2xl mb-8 relative z-10"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.4 },
          },
        }}
      >
        Get ready for a revolutionary way to create and collaborate
      </motion.p> */}
    </motion.section>
  );
};

export default Hero;
