"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("July 28, 2026 09:00:00").getTime();

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
      {timeUnits.map((unit) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-24 md:w-28 md:h-32 glass rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-4xl md:text-5xl font-heading font-bold neon-text">
              {unit.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-text-secondary uppercase text-xs tracking-widest font-semibold">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
