"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Hero from "./components/Hero";
import FeaturesPreview from "./components/FeaturesPreview";
import CallToAction from "./components/CallToAction";
import SocialLinks from "./components/SocialLinks";
import CountdownTimer from "./components/CountdownTimer";
import AnimatedBackground from "./components/AnimatedBackground";
import { ParticleBackground } from "./components/ParticleBackground";

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <Hero />
        {/*<CallToAction />
        <FeaturesPreview />
        <SocialLinks />
        <CountdownTimer /> */}
      </motion.div>
    </div>
  );
}

export default App;
