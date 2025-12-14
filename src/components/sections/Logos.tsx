"use client";

import { motion } from "framer-motion";
import { trustLogos } from "@/lib/constants";

export function Logos() {
  // Double the logos for infinite scroll effect
  const duplicatedLogos = [...trustLogos, ...trustLogos];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-8"
        >
          Ils parlent de nous
        </motion.p>

        {/* Desktop: Static display */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ opacity: 1 }}
              className="opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              <span className="text-xl md:text-2xl font-bold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Infinite horizontal carousel */}
        <div className="md:hidden relative">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{
              x: [0, -50 * trustLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="text-xl font-bold text-slate-400 dark:text-slate-500 opacity-50 flex-shrink-0"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
