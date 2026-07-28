"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  Terminal,
  Link as LinkIcon,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Loader2
} from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  college: z.string().min(2, "College name is required"),
  year: z.string().min(1, "Year of study is required"),
  skills: z.string().min(1, "At least one skill is required"),
  github: z.string().url().optional().or(z.literal("")),
  linkedin: z.string().url().optional().or(z.literal("")),
  teamSize: z.string(),
  track: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Professional Info", icon: Briefcase },
  { id: 3, title: "Hackathon Prefs", icon: MapPin },
  { id: 4, title: "Review", icon: CheckCircle2 },
];

export default function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamSize: "1",
      track: "sustainability",
    },
  });

  const nextStep = async () => {
    const fields = currentStep === 1
      ? ["fullName", "email", "phone"]
      : currentStep === 2
      ? ["college", "year", "skills"]
      : ["teamSize", "track"];

    const isValid = await trigger(fields as any);
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6C63FF", "#00D4FF", "#FF6B9D"],
    });
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-3xl text-center"
        >
          <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-success" />
          </div>
          <h2 className="text-3xl font-heading font-bold mb-4">Registration Successful!</h2>
          <p className="text-text-secondary mb-8">
            Thank you for registering for Vibe Hack 2026. We've sent a confirmation email with further details.
          </p>
          <div className="bg-white/5 p-6 rounded-2xl text-left mb-8">
            <p className="text-xs text-text-secondary uppercase tracking-widest mb-2">Registration ID</p>
            <p className="text-2xl font-mono font-bold text-primary">VH2026-X7R9Y2</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="text-primary font-bold hover:underline"
          >
            Register Another Team Member
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section id="register" className="py-24 bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Secure Your <span className="text-primary">Spot</span></h2>
            <p className="text-text-secondary">Limited spots available. Complete the form to join the revolution.</p>
          </div>

          {/* Stepper */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.id ? "bg-primary text-white" : "bg-surface text-text-secondary"
                }`}>
                  <step.icon size={20} />
                </div>
                <span className={`text-[10px] uppercase font-bold mt-2 hidden md:block ${
                  currentStep >= step.id ? "text-primary" : "text-text-secondary"
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                        <input
                          {...register("fullName")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-primary focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.fullName && <p className="text-error text-xs mt-1">{errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                        <input
                          {...register("email")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-primary focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                      <input
                        {...register("phone")}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    {errors.phone && <p className="text-error text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary">College / University</label>
                    <input
                      {...register("college")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Tech University"
                    />
                    {errors.college && <p className="text-error text-xs mt-1">{errors.college.message}</p>}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">Year of Study</label>
                      <select
                        {...register("year")}
                        className="w-full bg-surface border border-white/10 rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                        <option value="grad">Graduate</option>
                      </select>
                      {errors.year && <p className="text-error text-xs mt-1">{errors.year.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">Key Skills (e.g. React, Python)</label>
                      <input
                        {...register("skills")}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors"
                        placeholder="React, Node.js, AI"
                      />
                      {errors.skills && <p className="text-error text-xs mt-1">{errors.skills.message}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">GitHub Profile (Optional)</label>
                      <div className="relative">
                        <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                        <input
                          {...register("github")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-primary focus:outline-none transition-colors"
                          placeholder="https://github.com/..."
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-text-secondary">LinkedIn Profile (Optional)</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                        <input
                          {...register("linkedin")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-primary focus:outline-none transition-colors"
                          placeholder="https://linkedin.com/in/..."
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary">Team Size</label>
                    <div className="grid grid-cols-4 gap-4">
                      {["1", "2", "3", "4"].map((size) => (
                        <label key={size} className="cursor-pointer">
                          <input
                            type="radio"
                            {...register("teamSize")}
                            value={size}
                            className="hidden peer"
                          />
                          <div className="w-full py-4 text-center rounded-xl border border-white/10 bg-white/5 peer-checked:bg-primary peer-checked:border-primary transition-all">
                            {size}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-text-secondary">Preferred Track</label>
                    <select
                      {...register("track")}
                      className="w-full bg-surface border border-white/10 rounded-xl py-3 px-4 focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="sustainability">Sustainability & Climate Tech</option>
                      <option value="healthcare">Healthcare & Wellbeing</option>
                      <option value="education">Education & Learning</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="social">Social Impact & Community</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 p-6 rounded-2xl space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-text-secondary">Name</span>
                      <span className="font-bold">{getValues("fullName")}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-text-secondary">Email</span>
                      <span className="font-bold">{getValues("email")}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-text-secondary">Team Size</span>
                      <span className="font-bold">{getValues("teamSize")} Person(s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Track</span>
                      <span className="font-bold capitalize">{getValues("track")}</span>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary text-center">
                    By submitting, you agree to the Vibe Hack Code of Conduct and Privacy Policy.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-text-secondary hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span>Back</span>
                </button>
              )}
              <div className="ml-auto flex items-center space-x-4">
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-primary px-8 py-3 rounded-xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform"
                  >
                    <span>Next Step</span>
                    <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary px-8 py-3 rounded-xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Complete Registration</span>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
