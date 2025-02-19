"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2023-12-31T23:59:59").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Launching In</h2>
      <div className="flex justify-center space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl font-bold mb-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
            >
              {value}
            </motion.div>
            <div className="text-sm uppercase">{unit}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CountdownTimer

