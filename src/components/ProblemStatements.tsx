"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  Stethoscope,
  GraduationCap,
  Wallet,
  Globe,
  Search,
  ChevronRight,
  Filter
} from "lucide-react";

const categories = [
  { id: "all", label: "All Tracks", icon: Filter },
  { id: "sustainability", label: "Sustainability", icon: Leaf },
  { id: "healthcare", label: "Healthcare", icon: Stethoscope },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "finance", label: "Finance", icon: Wallet },
  { id: "social", label: "Social Impact", icon: Globe },
];

const problems = [
  {
    id: 1,
    category: "sustainability",
    title: "Smart Waste Management",
    difficulty: "Advanced",
    prize: "Best Innovation",
    desc: "Build an IoT-based system to optimize waste collection routes.",
    tech: ["IoT", "Data Analytics", "Web"],
  },
  {
    id: 2,
    category: "sustainability",
    title: "Renewable Energy Optimization",
    difficulty: "Intermediate",
    prize: "Best Impact",
    desc: "Create a solution to maximize solar/wind energy usage in cities.",
    tech: ["AI/ML", "Cloud", "Data Viz"],
  },
  {
    id: 3,
    category: "healthcare",
    title: "Mental Health Support App",
    difficulty: "Advanced",
    prize: "Best Design",
    desc: "AI platform for personalized mental health support.",
    tech: ["AI/ML", "Mobile", "Chatbot"],
  },
  {
    id: 4,
    category: "healthcare",
    title: "Patient Care Automation",
    difficulty: "Intermediate",
    prize: "Most Practical",
    desc: "Automate patient data management for hospital efficiency.",
    tech: ["Web", "Database", "AI"],
  },
  {
    id: 5,
    category: "education",
    title: "Adaptive Learning Platform",
    difficulty: "Advanced",
    prize: "Best Innovation",
    desc: "AI platform adapting to individual learning styles.",
    tech: ["AI/ML", "Web", "Mobile"],
  },
  {
    id: 6,
    category: "education",
    title: "Language Learning Assistant",
    difficulty: "Intermediate",
    prize: "People's Choice",
    desc: "Gamified interactive language learning tool.",
    tech: ["Web", "AI", "Speech Rec"],
  },
  {
    id: 7,
    category: "finance",
    title: "Financial Literacy for Youth",
    difficulty: "Beginner",
    prize: "Best Beginner",
    desc: "Gamified platform teaching financial concepts.",
    tech: ["Web", "Gamification"],
  },
  {
    id: 8,
    category: "finance",
    title: "Fraud Detection System",
    difficulty: "Advanced",
    prize: "Best Technical",
    desc: "AI-powered real-time financial fraud detection.",
    tech: ["AI/ML", "Data Analytics"],
  },
  {
    id: 9,
    category: "social",
    title: "Disaster Response Platform",
    difficulty: "Advanced",
    prize: "Best Impact",
    desc: "Coordinate disaster relief efforts with real-time data.",
    tech: ["Maps", "Web", "Real-time"],
  },
  {
    id: 10,
    category: "social",
    title: "Community Engagement App",
    difficulty: "Beginner",
    prize: "Most Practical",
    desc: "Connect volunteers with local initiatives.",
    tech: ["Web", "Social Features"],
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "text-success bg-success/10",
  Intermediate: "text-warning bg-warning/10",
  Advanced: "text-error bg-error/10",
};

export default function ProblemStatements() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProblems = problems.filter((p) => {
    const matchesTab = activeTab === "all" || p.category === activeTab;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="problems" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-4">Problem <span className="text-secondary">Statements</span></h2>
            <p className="text-text-secondary">Choose a challenge that excites you and build a solution that makes an impact.</p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-4 no-scrollbar">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.id
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-surface text-text-secondary hover:bg-surface-light border border-white/5"
              }`}
            >
              <tab.icon size={18} />
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProblems.map((problem) => (
              <motion.div
                key={problem.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass p-8 rounded-3xl flex flex-col h-full group hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${difficultyColors[problem.difficulty]}`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-accent text-sm font-semibold">{problem.prize}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{problem.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow">{problem.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {problem.tech.map((t) => (
                    <span key={t} className="bg-white/5 px-3 py-1 rounded-lg text-xs text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <button className="flex items-center justify-between w-full group/btn">
                  <span className="font-bold text-sm">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-secondary group-hover/btn:text-white transition-all">
                    <ChevronRight size={16} />
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
