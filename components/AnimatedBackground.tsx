"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import WildMarquee from "./WildMarquee"

const colors = ["#4A00E0", "#8E2DE2", "#3A0CA3", "#4361EE"]

const AnimatedBackground = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 1500) // Change color every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[0] overflow-hidden"
      animate={{
        background: `linear-gradient(45deg, ${colors[currentColorIndex]}, ${
          colors[(currentColorIndex + 1) % colors.length]
        })`,
      }}
      transition={{ duration: 5, ease: "linear" }}
    >
      <div className="absolute inset-0 backdrop-blur-[50px]" />
    </motion.div>
  )
}

export default AnimatedBackground

