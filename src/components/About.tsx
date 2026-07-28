"use client";

import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Lightbulb,
  Layers,
  Briefcase,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Target
} from "lucide-react";

const stats = [
  { icon: Users, label: "Participants", value: "500+", sub: "2025" },
  { icon: Cpu, label: "Projects Built", value: "200+", sub: "2025" },
  { icon: Trophy, label: "Winners", value: "12", sub: "Teams" },
  { icon: Layers, label: "Tech Tracks", value: "5+", sub: "Specializations" },
];

const highlights = [
  {
    title: "Hands-on Experience",
    desc: "Work with cutting-edge technologies and real-world tools."
  },
  {
    title: "Expert Mentorship",
    desc: "Get guidance from industry professionals from top tech firms."
  },
  {
    title: "Networking",
    desc: "Connect with 500+ like-minded developers and designers."
  },
  {
    title: "Career Growth",
    desc: "Post-hackathon internship opportunities and recruitment."
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Empowering the Next Generation of <span className="text-secondary">Innovators</span>
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                <span className="text-white font-semibold">Mission:</span> "Empower the next generation of innovators to build solutions that matter, fostering creativity, collaboration, and technical excellence."
              </p>
              <p>
                <span className="text-white font-semibold">Vision:</span> "Creating a global community where every idea has the potential to become reality."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass p-8 rounded-3xl flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
              >
                <stat.icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-text-secondary font-medium">{stat.label}</p>
                <p className="text-xs text-text-secondary/60 mt-2 uppercase tracking-widest">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Organizer Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Organized by <span className="text-primary">Data Science Club</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Empowering tech communities worldwide through impactful events and collaborative learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-2xl">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-text-secondary text-sm">
                To bridge the gap between academic learning and industry requirements through hands-on experience.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-text-secondary text-sm">
                Since 2024, we've helped over 1000+ students launch their projects and careers.
              </p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-text-secondary text-sm">
                Fostering an environment where crazy ideas are encouraged and developed into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
