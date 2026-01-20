/**
 * Metrics Section Component
 * Design: Showcase key metrics with animated counters and icons
 * Style: Grid layout with gradient backgrounds and visual impact
 */

import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingDown, 
  Clock, 
  MessageSquare, 
  Lock, 
  Globe 
} from "lucide-react";

const metrics = [
  {
    icon: Zap,
    value: "10x",
    label: "Faster Recruitment",
    description: "Dramatically cut trial timelines by accelerating patient enrollment",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingDown,
    value: "40%",
    label: "Cost Reduction",
    description: "Significantly lower patient recruitment expenses, boosting your ROI",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "AI Trial Acceleration",
    description: "Continuous, round-the-clock AI support to drive trial progress",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: MessageSquare,
    value: "<2s",
    label: "Instant AI Response",
    description: "Engage patients immediately with AI responses under 2 seconds",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Lock,
    value: "100%",
    label: "Data Privacy",
    description: "Ensure compliance and trust with a zero data access, privacy-first model",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Languages Supported",
    description: "Expand your reach with seamless support for diverse patient populations",
    gradient: "from-teal-500 to-cyan-600",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function MetricsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] mb-6">
            Unmatched Precision,
            <span className="text-gradient"> Unrivaled Speed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform delivers measurable results that transform your clinical trial operations.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              {/* Value */}
              <div className="text-4xl sm:text-5xl font-bold font-[Poppins] text-gradient mb-2">
                {metric.value}
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold font-[Poppins] mb-3">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {metric.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
