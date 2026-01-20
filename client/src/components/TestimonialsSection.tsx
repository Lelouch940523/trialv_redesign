/**
 * Testimonials Section Component
 * Design: Customer testimonials with logos and quotes
 * Style: Clean cards with subtle backgrounds
 */

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TrialV.AI has revolutionized our patient recruitment process. We've seen a 300% increase in enrollment efficiency while reducing our costs significantly.",
    author: "Dr. Sarah Chen",
    role: "Clinical Research Director",
    company: "Leading Biotech Company",
  },
  {
    quote: "The AI-powered calling system is incredibly effective. Patients respond positively to the natural conversations, and our team can focus on higher-value tasks.",
    author: "Michael Roberts",
    role: "VP of Clinical Operations",
    company: "Global Pharmaceutical",
  },
  {
    quote: "Implementation was seamless, and the results were immediate. TrialV.AI has become an essential part of our clinical trial infrastructure.",
    author: "Dr. Emily Watson",
    role: "Head of Patient Recruitment",
    company: "CRO Partner",
  },
];

const logos = [
  { name: "Stanford Medicine", initials: "SM" },
  { name: "Mayo Clinic", initials: "MC" },
  { name: "Johns Hopkins", initials: "JH" },
  { name: "Cleveland Clinic", initials: "CC" },
  { name: "Mass General", initials: "MG" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Developed by researchers at leading institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm font-bold">
                  {logo.initials}
                </div>
                <span className="text-sm font-medium hidden sm:inline">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Poppins] mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what clinical research professionals are saying about TrialV.AI.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover-lift"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
