"use client";

import { Plus, MoreHorizontal } from "lucide-react";

const budgets = [
  { name: "Courses", spent: 320, limit: 400, color: "bg-orange-500" },
  { name: "Restaurant", spent: 150, limit: 200, color: "bg-pink-500" },
  { name: "Transport", spent: 85, limit: 150, color: "bg-blue-500" },
  { name: "Loisirs", spent: 180, limit: 150, color: "bg-purple-500", over: true },
  { name: "Abonnements", spent: 45, limit: 100, color: "bg-green-500" },
  { name: "Shopping", spent: 200, limit: 250, color: "bg-amber-500" },
];

export function BudgetsMockup() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
      {/* Browser Header */}
      <div className="bg-slate-100 dark:bg-slate-900 px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg px-4 py-1.5 text-sm text-slate-500 dark:text-slate-400">
          app.finbudget.fr/budgets
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Mes budgets</h2>
            <p className="text-slate-500 dark:text-slate-400">Décembre 2024 • 17 jours restants</p>
          </div>
          <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-600 transition-colors">
            <Plus className="w-4 h-4" />
            Nouveau budget
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Budget total</p>
            <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>1 250 €</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Dépensé</p>
            <p className="text-2xl font-bold text-amber-500" style={{ fontFamily: "var(--font-space-grotesk)" }}>980 €</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Restant</p>
            <p className="text-2xl font-bold text-emerald-500" style={{ fontFamily: "var(--font-space-grotesk)" }}>270 €</p>
          </div>
        </div>

        {/* Budget Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {budgets.map((budget) => {
            const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
            return (
              <div key={budget.name} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${budget.color} rounded-xl flex items-center justify-center text-white font-medium`}>
                      {budget.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{budget.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {budget.spent} € / {budget.limit} €
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-all ${
                      budget.over ? "bg-red-500" : budget.color
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className={`text-sm font-medium ${budget.over ? "text-red-500" : "text-slate-500 dark:text-slate-400"}`}>
                    {Math.round(percentage)}% utilisé
                  </span>
                  {budget.over && (
                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full">
                      Dépassé !
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
