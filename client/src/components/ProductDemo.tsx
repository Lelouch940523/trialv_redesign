/**
 * Product Demo Section Component
 * Design: Showcase product screenshots with feature highlights
 * Style: Alternating layout with images and descriptions
 */

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const demoSections = [
  {
    title: "Intelligent Dashboard",
    subtitle: "Your Clinical Trial at a Glance",
    description: "Monitor key performance indicators, track study progress, and gain actionable insights—all from one centralized view. Our intuitive dashboard provides real-time visibility into your entire trial portfolio.",
    features: [
      "Real-time enrollment tracking",
      "AI-powered analytics and insights",
      "Customizable KPI monitoring",
      "Multi-study portfolio management",
    ],
    image: "/images/product-demo.png",
    imageAlt: "TrialV.AI Dashboard Interface",
    reverse: false,
  },
  {
    title: "AI-Powered Calling",
    subtitle: "24/7 Patient Engagement",
    description: "Our clinical-grade AI conducts natural, empathetic conversations with patients around the clock. Real-time transcription, sentiment analysis, and smart response suggestions ensure every interaction is optimized.",
    features: [
      "Natural language conversations",
      "Real-time sentiment analysis",
      "Automatic call transcription",
      "Smart scheduling integration",
    ],
    image: "/images/ai-calling-demo.png",
    imageAlt: "TrialV.AI Calling Interface",
    reverse: true,
  },
];

export default function ProductDemo() {
  return (
    <section id="demo" className="py-24 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Product Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] mb-6">
            See <span className="text-gradient">TrialV.AI</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how our platform transforms clinical trial recruitment with intelligent automation and real-time insights.
          </p>
        </motion.div>

        {/* Demo Sections */}
        <div className="space-y-32">
          {demoSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                section.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={section.reverse ? "lg:col-start-2" : ""}>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {section.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold font-[Poppins] mt-2 mb-6">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {section.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative ${section.reverse ? "lg:col-start-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {/* Background Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />
                  
                  {/* Image Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute -z-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl ${
                    section.reverse ? "-right-20 -bottom-20" : "-left-20 -top-20"
                  }`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
