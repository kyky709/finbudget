"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/constants";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">FAQ</Badge>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Questions{" "}
            <span className="text-emerald-500">fréquentes</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Tout ce que vous devez savoir sur FinBudget.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
              >
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left font-medium hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors group">
                  <span>{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-4 text-slate-600 dark:text-slate-400">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
