"use client";

import { TrendingUp, TrendingDown, Wallet, PiggyBank, CreditCard, MoreHorizontal } from "lucide-react";

export function DashboardMockup() {
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
          app.finbudget.fr/dashboard
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Bonjour, Marie 👋</h2>
            <p className="text-slate-500 dark:text-slate-400">Voici un aperçu de vos finances</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-400">Décembre 2024</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Solde total", value: "12 458,32 €", icon: Wallet, trend: "+12.5%", up: true },
            { label: "Revenus", value: "3 250,00 €", icon: TrendingUp, trend: "+8.2%", up: true },
            { label: "Dépenses", value: "1 847,68 €", icon: CreditCard, trend: "-3.1%", up: false },
            { label: "Épargne", value: "1 402,32 €", icon: PiggyBank, trend: "+24%", up: true },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.up ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-space-grotesk)" }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-900 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Évolution du solde</h3>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            {/* Simplified Chart */}
            <div className="h-48 flex items-end gap-2">
              {[40, 65, 55, 80, 70, 90, 85, 95, 88, 100, 92, 105].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-md transition-all"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-slate-400">{["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5">
            <h3 className="font-semibold mb-4">Répartition des dépenses</h3>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="12" className="dark:stroke-slate-700" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="100.5 251.2" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="62.8 251.2" strokeDashoffset="-100.5" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="50.2 251.2" strokeDashoffset="-163.3" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">1 847€</span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                { label: "Logement", color: "bg-emerald-500", pct: "40%" },
                { label: "Alimentation", color: "bg-blue-500", pct: "25%" },
                { label: "Transport", color: "bg-amber-500", pct: "20%" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                  </div>
                  <span className="font-medium">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
