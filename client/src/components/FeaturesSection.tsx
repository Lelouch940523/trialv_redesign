/**
 * Features Section Component
 * Design: Grid of feature cards with icons, hover effects, and clear descriptions
 * Style: Clean cards with subtle shadows and green accents
 */

import { motion } from "framer-motion";
import { 
  Brain, 
  Phone, 
  Shield, 
  Calendar, 
  LayoutDashboard, 
  Users, 
  Headphones 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Pre-screening",
    description: "TrialV.AI rapidly and accurately pre-screens patient data, identifying eligible candidates with speed and precision.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Phone,
    title: "Concurrent AI Calling",
    description: "24/7 medical-level AI outreach engages potential patients around the clock, significantly boosting contact rates.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Clinical-level AI Model",
    description: "Powered by a clinical-grade LLM, ensuring accurate, compliant, and secure medical interactions using exclusive hospital data.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated, optimized scheduling reduces no-shows and streamlines the entire patient journey from outreach to visit.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: LayoutDashboard,
    title: "Intuitive Dashboard",
    description: "Monitor key performance indicators, track study progress, and gain actionable insights from one centralized view.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Users,
    title: "Study Control",
    description: "Track enrollment progress against targets, manage study timelines, and oversee your entire trial portfolio with ease.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Headphones,
    title: "AI-Call Management",
    description: "Engage potential candidates effectively with automated outreach, and seamlessly track call statuses and recordings.",
    color: "from-indigo-500 to-blue-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] mb-6">
            Everything You Need for
            <span className="text-gradient"> Successful Trials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive AI-powered platform streamlines every aspect of clinical trial patient recruitment and management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover-lift ${
                index === features.length - 1 ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold font-[Poppins] mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
