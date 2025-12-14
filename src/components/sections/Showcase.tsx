"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { TransactionsMockup } from "@/components/mockups/TransactionsMockup";
import { BudgetsMockup } from "@/components/mockups/BudgetsMockup";
import { GoalsMockup } from "@/components/mockups/GoalsMockup";

const tabs = [
  { id: "dashboard", label: "Dashboard", component: DashboardMockup },
  { id: "transactions", label: "Transactions", component: TransactionsMockup },
  { id: "budgets", label: "Budgets", component: BudgetsMockup },
  { id: "goals", label: "Objectifs", component: GoalsMockup },
];

export function Showcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const ActiveComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || DashboardMockup;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Découvrir l'app</Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Une interface{" "}
            <span className="text-emerald-500">pensée pour vous</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Découvrez nos différentes vues pour gérer tous les aspects de vos
            finances.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-slate-800 rounded-xl p-1.5 shadow-sm border border-slate-200 dark:border-slate-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-500 rounded-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mockup Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="bg-gradient-to-b from-emerald-500/5 to-transparent rounded-3xl p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
