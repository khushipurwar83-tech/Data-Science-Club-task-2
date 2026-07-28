"use client";

import { motion } from "framer-motion";

const sponsors = {
  Platinum: ["TechCorp Inc.", "CloudSolutions LLC", "InnovateLabs"],
  Gold: ["DataStream AI", "SecureNet Systems", "BuildTech Group"],
  Silver: ["DevTool Pro", "CloudNova", "CodeCraft", "AgileWorks"],
  Bronze: ["TechVibes", "CodeHub", "DevSpace", "QuantumTech"],
};

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-4">Our <span className="text-primary">Sponsors</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Supporting the next generation of builders and innovators.
          </p>
        </div>

        <div className="space-y-20">
          {Object.entries(sponsors).map(([tier, list], tierIdx) => (
            <div key={tier}>
              <div className="flex items-center space-x-4 mb-10">
                <h3 className={`text-xl font-black uppercase tracking-[0.2em] ${
                  tier === "Platinum" ? "text-primary" : "text-text-secondary"
                }`}>{tier} Sponsors</h3>
                <div className="h-px flex-grow bg-white/10" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {list.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="glass h-32 rounded-2xl flex items-center justify-center p-6 group hover:border-white/20 transition-all duration-300 cursor-pointer"
                  >
                    {/* Placeholder for Logo */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-lg bg-white/5 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-xs font-black text-white/20">{name.charAt(0)}</span>
                      </div>
                      <span className="font-bold text-sm text-text-secondary group-hover:text-white transition-colors">
                        {name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
