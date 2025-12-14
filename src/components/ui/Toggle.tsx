"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  leftLabel?: string;
  rightLabel?: string;
  badge?: string;
}

export function Toggle({ enabled, onChange, leftLabel, rightLabel, badge }: ToggleProps) {
  return (
    <div className="flex items-center gap-3">
      {leftLabel && (
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            !enabled ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
          )}
        >
          {leftLabel}
        </span>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={cn(
          "relative inline-flex h-7 w-12 items-center rounded-full transition-colors",
          enabled ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"
        )}
      >
        <motion.span
          layout
          className="inline-block h-5 w-5 rounded-full bg-white shadow-md"
          animate={{ x: enabled ? 26 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      {rightLabel && (
        <span
          className={cn(
            "text-sm font-medium transition-colors flex items-center gap-2",
            enabled ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"
          )}
        >
          {rightLabel}
          {badge && (
            <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
              {badge}
            </span>
          )}
        </span>
      )}
    </div>
  );
}
