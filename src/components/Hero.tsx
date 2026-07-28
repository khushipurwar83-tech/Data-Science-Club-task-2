"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Build. Innovate. Transform.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-4">
            <span className="block">VIBE</span>
            <span className="animated-gradient-text">HACK 2026</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="h-10 mb-8">
            <p className="text-lg md:text-2xl text-text-secondary font-medium font-mono">
              {text}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-text-secondary/80 mb-10 leading-relaxed">
            Join the most anticipated hackathon of the year where innovators,
            developers, and designers come together to build solutions for a better tomorrow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="#register"
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 neon-glow hover:scale-105"
          >
            Register Now
          </a>
          <a
            href="#problems"
            className="w-full md:w-auto glass hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            View Problem Statements
          </a>
        </motion.div>

        <Countdown />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
