"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Gift, Award, Zap, Heart, UserPlus, Lightbulb } from "lucide-react";

const mainPrizes = [
  {
    rank: "2nd",
    amount: "$3,000",
    color: "from-gray-300 to-gray-500",
    icon: Award,
    perks: ["Silver Medal", "6-Month Mentorship", "Tech Swag"],
    delay: 0.2
  },
  {
    rank: "1st",
    amount: "$5,000",
    color: "from-yellow-400 to-yellow-600",
    icon: Trophy,
    perks: ["Gold Trophy", "Yearly Mentorship", "Premium Swag"],
    featured: true,
    delay: 0
  },
  {
    rank: "3rd",
    amount: "$1,500",
    color: "from-amber-600 to-amber-800",
    icon: Award,
    perks: ["Bronze Medal", "3-Month Mentorship", "Basic Swag"],
    delay: 0.4
  }
];

const specialPrizes = [
  { title: "Best Innovation", amount: "$1,000", icon: Lightbulb },
  { title: "Best Design", amount: "$1,000", icon: Star },
  { title: "People's Choice", amount: "$500", icon: Heart },
  { title: "Best Beginner", amount: "$500", icon: UserPlus },
  { title: "Most Practical", amount: "$500", icon: Zap },
  { title: "Best Technical", amount: "$500", icon: Gift },
];

export default function Prizes() {
  return (
    <section id="prizes" className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-4">Prizes & <span className="text-secondary">Rewards</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A total prize pool of <span className="text-white font-bold">$10,000+</span> along with mentorship and career opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto mb-20">
          {mainPrizes.map((prize, i) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.5 }}
              className={`glass rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group ${
                prize.featured ? "md:pb-16 md:pt-12 border-primary/40 ring-2 ring-primary/20" : "md:py-10"
              }`}
            >
              {prize.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary py-1 text-[10px] font-black uppercase tracking-widest">
                  Grand Winner
                </div>
              )}

              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                <prize.icon size={40} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-1">{prize.rank} Prize</h3>
              <div className={`text-4xl font-black mb-6 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                {prize.amount}
              </div>

              <ul className="space-y-3 mb-8 text-sm text-text-secondary w-full">
                {prize.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 font-bold transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialPrizes.map((prize, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                <prize.icon size={24} className="text-secondary" />
              </div>
              <h4 className="text-xs font-bold text-text-secondary uppercase mb-2 leading-tight">{prize.title}</h4>
              <div className="text-xl font-bold text-white">{prize.amount}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
