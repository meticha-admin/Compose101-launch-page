"use client";

import { motion } from "framer-motion";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

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

const getRandomDirection = () => (Math.random() > 0.5 ? 1 : -1) * 0.5;
const getRandomSpeed = () => Math.random() * 12 + 5;
const getRandomDelay = () => Math.random() * 5;
const getRandomColor = () => `hsl(${Math.random() * 360}, 100%, 50%)`;

const MarqueeText = ({ direction, speed, isStopped, onClick, children }) => (
  <motion.div
    initial={{ x: direction > 0 ? "100%" : "-100%" }}
    animate={
      isStopped
        ? { x: "0%" } // Stop animation
        : { x: direction > 0 ? "-100%" : "100%" }
    }
    transition={{
      repeat: isStopped ? 0 : Number.POSITIVE_INFINITY,
      repeatType: "loop",
      duration: 100 / speed,
      ease: "linear",
    }}
    className="whitespace-nowrap inline-block cursor-pointer"
    onClick={onClick}
  >
    {children}
  </motion.div>
);

const WildMarquee = () => {
  const [marquees, setMarquees] = useState([]);
  const [colors, setColors] = useState([]);
  const [stoppedMarquees, setStoppedMarquees] = useState({});

  const marqueesRef = useRef([]);

  useLayoutEffect(() => {
    const generateMarquees = () => {
      if (marqueesRef.current.length === 0) {
        marqueesRef.current = Array.from({ length: 10 }, (_, i) => ({
          id: i,
          direction: getRandomDirection(),
          speed: getRandomSpeed(),
          delay: getRandomDelay(),
        }));
      }
      setMarquees([...marqueesRef.current]);
    };

    generateMarquees();

    const handleResize = () => {
      generateMarquees();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Generate random colors for each phrase
    setColors(phrases.map(() => [getRandomColor(), getRandomColor()]));
  }, []);

  const toggleMarquee = (id) => {
    setStoppedMarquees((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle stopped state
    }));
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-7]">
      {marquees.map((marquee) => (
        <div
          key={marquee.id}
          className="absolute w-full whitespace-nowrap overflow-hidden"
          style={{
            top: `${marquee.id * 10}%`,
            transform: `rotate(${marquee.direction > 0 ? -2 : 2}deg)`,
          }}
        >
          <MarqueeText
            direction={marquee.direction}
            speed={marquee.speed}
            isStopped={!!stoppedMarquees[marquee.id]}
            onClick={() => toggleMarquee(marquee.id)}
          >
            {phrases.map((phrase, index) => (
              <span
                key={index}
                className={`inline-block mx-4 text-4xl font-bold text-white ${
                  index % 2 === 0 ? "uppercase" : "lowercase"
                } ${index % 3 === 0 ? "italic" : ""} ${
                  index % 4 === 0 ? "text-6xl" : ""
                }`}
                style={{
                  background: colors[index]
                    ? `linear-gradient(45deg, ${colors[index][0]}, ${colors[index][1]})`
                    : "transparent",
                  WebkitBackgroundClip: "text",
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

export default WildMarquee;
