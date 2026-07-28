"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, User } from "lucide-react";

const scheduleData = {
  "Day 1": [
    { time: "9:00 AM", session: "Registration & Check-in", speaker: "Team", location: "Main Hall", type: "Social" },
    { time: "10:00 AM", session: "Opening Ceremony", speaker: "John Doe", location: "Auditorium", type: "Keynote" },
    { time: "11:00 AM", session: "Keynote: Future of Tech", speaker: "Jane Smith", location: "Auditorium", type: "Keynote" },
    { time: "12:00 PM", session: "Problem Statement Reveal", speaker: "Team", location: "Main Hall", type: "Competition" },
    { time: "1:00 PM", session: "Lunch Break", speaker: "-", location: "Dining Hall", type: "Social" },
    { time: "2:00 PM", session: "Hacking Begins!", speaker: "-", location: "All Venues", type: "Competition" },
    { time: "4:00 PM", session: "Workshop: AI/ML Basics", speaker: "Dr. Alex Chen", location: "Room 101", type: "Technical" },
  ],
  "Day 2": [
    { time: "8:00 AM", session: "Breakfast", speaker: "-", location: "Dining Hall", type: "Social" },
    { time: "9:00 AM", session: "Hacking Continues", speaker: "-", location: "All Venues", type: "Competition" },
    { time: "11:00 AM", session: "Workshop: UI/UX Design", speaker: "Sarah Johnson", location: "Room 102", type: "Technical" },
    { time: "1:00 PM", session: "Lunch Break", speaker: "-", location: "Dining Hall", type: "Social" },
    { time: "3:00 PM", session: "Mid-point Check-in", speaker: "Team", location: "Main Hall", type: "Mentorship" },
    { time: "5:00 PM", session: "Workshop: Blockchain", speaker: "Mike Wilson", location: "Room 103", type: "Technical" },
  ],
  "Day 3": [
    { time: "8:00 AM", session: "Breakfast", speaker: "-", location: "Dining Hall", type: "Social" },
    { time: "9:00 AM", session: "Final Hacking", speaker: "-", location: "All Venues", type: "Competition" },
    { time: "12:00 PM", session: "Submissions Deadline", speaker: "-", location: "Online Portal", type: "Competition" },
    { time: "2:00 PM", session: "Project Presentations", speaker: "-", location: "Auditorium", type: "Competition" },
    { time: "5:00 PM", session: "Closing Ceremony", speaker: "Team", location: "Auditorium", type: "Keynote" },
    { time: "6:00 PM", session: "Prize Distribution", speaker: "Team", location: "Auditorium", type: "Keynote" },
    { time: "7:00 PM", session: "After-party", speaker: "-", location: "Main Hall", type: "Social" },
  ],
};

const typeColors: Record<string, string> = {
  Technical: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Keynote: "bg-green-500/20 text-green-400 border-green-500/30",
  Social: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Competition: "bg-red-500/20 text-red-400 border-red-500/30",
  Mentorship: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Day 1");

  return (
    <section id="schedule" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Event <span className="text-primary">Schedule</span></h2>
          <p className="text-text-secondary">Plan your hackathon journey with our detailed timeline.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface p-1 rounded-2xl border border-white/5">
            {Object.keys(scheduleData).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeDay === day ? "bg-primary text-white shadow-lg" : "text-text-secondary hover:text-white"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 md:w-32 flex-shrink-0">
                    <Clock size={18} className="text-primary" />
                    <span className="font-mono font-bold">{item.time}</span>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold">{item.session}</h4>
                      <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase border ${typeColors[item.type]}`}>
                        {item.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{item.speaker}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
