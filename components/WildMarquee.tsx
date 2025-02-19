"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "COMPOSE101 🚀",
  "evolving",
  "Join Now!",
  "Create 💡",
  "Boost Productivity ",
  "Collaborate",
  "Code Smarter 🤖",
  "Innovate 🔥",
  "Next-Gen",
  "Revolutionary",
  "LAUNCHING SOON",
];

let lastDirection = 1;
const getRandomDirection = () => {
  if (Math.random() > 0.95) lastDirection *= -1; // Change direction only 5% of the time
  return lastDirection * 0.5; // Slow down movement
};

const getRandomSpeed = () => Math.random() * 12 + 5;
const getRandomDelay = () => Math.random() * 5;

const MarqueeText = ({ direction, speed, children }) => {
  return (
    <motion.div
      initial={{ x: direction > 0 ? "100%" : "-100%" }}
      animate={{ x: direction > 0 ? "-100%" : "100%" }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        duration: 100 / speed,
        ease: "linear",
      }}
      className="whitespace-nowrap inline-block"
    >
      {children}
    </motion.div>
  );
};

const WildMarquee = () => {
  const [marquees, setMarquees] = useState([]);

  useEffect(() => {
    const newMarquees = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      direction: getRandomDirection(),
      speed: getRandomSpeed(),
      delay: getRandomDelay(),
    }));
    setMarquees(newMarquees);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-7] ">
      {marquees.map((marquee) => (
        <div
          key={marquee.id}
          className="absolute w-full whitespace-nowrap overflow-hidden"
          style={{
            top: `${marquee.id * 10}%`,
            transform: `rotate(${marquee.direction > 0 ? -2 : 2}deg)`,
          }}
        >
          <MarqueeText direction={marquee.direction} speed={marquee.speed}>
            {phrases.map((phrase, index) => (
              <span
                key={index}
                className={`
                  inline-block mx-4 text-4xl font-bold text-white
                  ${index % 2 === 0 ? "uppercase" : "lowercase"}
                  ${index % 3 === 0 ? "italic" : ""}
                  ${index % 4 === 0 ? "text-6xl" : ""}
                `}
                style={{
                  background: `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`,
                  WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                  textShadow: "0 0 5px rgba(255,255,255,0.5)",
                  filter: "blur(0.5px)",
                  animation: `glitch ${Math.random() * 2 + 1}s infinite`,
                }}
              >
                {phrase}
              </span>
            ))}
          </MarqueeText>
        </div>
      ))}
    </div>
  );
};

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

export default WildMarquee;
