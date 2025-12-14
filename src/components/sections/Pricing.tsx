"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/constants";
import { Button, Badge, Toggle, Card } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-900/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Tarifs</Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Choisissez votre{" "}
            <span className="text-emerald-500">plan</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Commencez gratuitement et évoluez selon vos besoins.
          </p>

          {/* Toggle */}
          <div className="flex justify-center">
            <Toggle
              enabled={isAnnual}
              onChange={setIsAnnual}
              leftLabel="Mensuel"
              rightLabel="Annuel"
              badge="-20%"
            />
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              // Pulse animation for Pro card
              animate={
                plan.popular
                  ? {
                      scale: [1, 1.02, 1],
                    }
                  : undefined
              }
              {...(plan.popular && {
                transition: {
                  scale: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                },
              })}
              className={cn(
                "relative",
                plan.popular && "md:-mt-4 md:mb-4"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}
              <Card
                hover={false}
                className={cn(
                  "h-full flex flex-col",
                  plan.popular &&
                    "border-2 border-emerald-500 shadow-lg shadow-emerald-500/10"
                )}
              >
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <motion.span
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold text-slate-900 dark:text-white"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {isAnnual
                        ? plan.annualPrice === 0
                          ? "0"
                          : Math.round(plan.annualPrice / 12)
                        : plan.monthlyPrice}
                      €
                    </motion.span>
                    <span className="text-slate-500 dark:text-slate-400">
                      /mois
                    </span>
                  </div>
                  {isAnnual && plan.annualPrice > 0 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-emerald-600 dark:text-emerald-400 mt-1"
                    >
                      {plan.annualPrice}€ facturé annuellement
                    </motion.p>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
