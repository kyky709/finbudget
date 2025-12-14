"use client";

import { Plus, Target, Plane, Car, Laptop, Gift } from "lucide-react";

const goals = [
  {
    name: "Voyage au Japon",
    icon: Plane,
    current: 2400,
    target: 5000,
    color: "from-pink-500 to-rose-500",
    deadline: "Été 2025"
  },
  {
    name: "Nouvelle voiture",
    icon: Car,
    current: 8500,
    target: 15000,
    color: "from-blue-500 to-indigo-500",
    deadline: "2026"
  },
  {
    name: "MacBook Pro",
    icon: Laptop,
    current: 1800,
    target: 2500,
    color: "from-slate-600 to-slate-800",
    deadline: "Mars 2025"
  },
  {
    name: "Fonds d'urgence",
    icon: Target,
    current: 4200,
    target: 6000,
    color: "from-emerald-500 to-teal-500",
    deadline: "En cours"
  },
];

export function GoalsMockup() {
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
          app.finbudget.fr/objectifs
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Objectifs d'épargne</h2>
            <p className="text-slate-500 dark:text-slate-400">Suivez vos projets et atteignez vos rêves</p>
          </div>
          <button className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-emerald-600 transition-colors">
            <Plus className="w-4 h-4" />
            Nouvel objectif
          </button>
        </div>

        {/* Total Savings */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-emerald-100 mb-1">Épargne totale</p>
              <p className="text-4xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                16 900 €
              </p>
            </div>
            <div className="text-right">
              <p className="text-emerald-100 mb-1">Objectif global</p>
              <p className="text-2xl font-semibold">28 500 €</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-emerald-100 mb-2">
              <span>Progression globale</span>
              <span>59%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: "59%" }} />
            </div>
          </div>
        </div>

        {/* Goal Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {goals.map((goal) => {
            const percentage = Math.round((goal.current / goal.target) * 100);
            return (
              <div key={goal.name} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-white`}>
                    <goal.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{goal.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{goal.deadline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-emerald-500" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {percentage}%
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${goal.color}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">{goal.current.toLocaleString()} €</span> économisés
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    sur {goal.target.toLocaleString()} €
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                  <button className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                    + Ajouter de l'argent
                  </button>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {(goal.target - goal.current).toLocaleString()} € restants
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
