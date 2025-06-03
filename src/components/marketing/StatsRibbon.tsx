"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    value: "7,500+",
    label: "vetted experts",
    icon: Users,
  },
  {
    value: "$2.1M",
    label: "Stripe payouts processed",
    icon: DollarSign,
  },
  {
    value: "24h",
    label: "Avg. turnaround from brief to insight",
    icon: Clock,
  },
  {
    value: "90%",
    label: "Insights approved by vendors",
    icon: CheckCircle,
  },
];

export function StatsRibbon() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-xl sm:rounded-2xl bg-card/70 backdrop-blur-md shadow-sm p-3 sm:p-4 md:p-6 text-center"
            >
              <div className="flex flex-col items-center">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-600 mb-1.5 sm:mb-2 md:mb-3" />
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-0.5 sm:mb-1"
                >
                  {stat.value}
                </motion.div>
                <p className="text-xs sm:text-sm md:text-sm text-muted-foreground leading-tight text-center">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
