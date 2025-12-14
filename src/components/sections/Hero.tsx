"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, Star } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { AppMockup } from "@/components/mockups/AppMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Application #1 de gestion de budget
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Maîtrisez vos finances,{" "}
              <span className="text-emerald-500">simplifiez votre vie</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Suivez vos dépenses, fixez des budgets intelligents et atteignez
              vos objectifs financiers — le tout dans une interface élégante et
              intuitive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button size="lg">Commencer gratuitement</Button>
              <Button variant="secondary" size="lg">
                <Play className="w-5 h-5" />
                Voir la démo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {["ML", "TR", "SM", "JP", "LC"].map((initials, index) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-medium"
                    style={{ zIndex: 5 - index }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  Rejoint par 50,000+ utilisateurs
                </p>
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                    4.9/5
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="animate-float">
              <AppMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
