"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is a hackathon?",
    a: "A hackathon is a 48-hour event where individuals or teams come together to build innovative solutions to real-world problems using technology."
  },
  {
    q: "Who can participate?",
    a: "Anyone with a passion for building! Students, professionals, developers, designers, and innovators of all skill levels are welcome."
  },
  {
    q: "Do I need a team?",
    a: "You can participate individually or in teams of up to 4 members. If you don't have a team, we'll have a team-building session at the start."
  },
  {
    q: "Is there any registration fee?",
    a: "No, Vibe Hack 2026 is completely free for all participants. We provide food, swag, and a great environment!"
  },
  {
    q: "Will there be food and accommodation?",
    a: "Yes! We provide meals, snacks, and drinks throughout the event. We also have designated rest areas for those staying overnight."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Frequently Asked <span className="text-secondary">Questions</span></h2>
          <p className="text-text-secondary">Everything you need to know about the event.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold">{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-text-secondary" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-secondary text-sm leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
