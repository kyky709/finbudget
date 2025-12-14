"use client";

import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export function AppMockup() {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-slate-900 rounded-[40px] p-3 shadow-2xl shadow-slate-900/50">
        {/* Screen */}
        <div className="w-full h-full bg-slate-800 rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 text-white text-xs">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-white rounded-sm">
                <div className="w-3/4 h-full bg-white rounded-sm" />
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="px-5 py-2">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-slate-400 text-sm">Bonjour, Marie</p>
                <p className="text-white text-lg font-semibold">Mon solde</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-sm font-medium">
                ML
              </div>
            </div>

            {/* Balance Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 mb-6">
              <p className="text-emerald-100 text-sm mb-1">Solde total</p>
              <p className="text-white text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                12 458,32 €
              </p>
              <div className="flex items-center gap-2 text-emerald-100 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5% ce mois</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="text-slate-400 text-xs">Revenus</span>
                </div>
                <p className="text-white font-semibold">+ 3 250 €</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <ArrowDownRight className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-slate-400 text-xs">Dépenses</span>
                </div>
                <p className="text-white font-semibold">- 1 847 €</p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <p className="text-white font-medium mb-3">Transactions récentes</p>
              <div className="space-y-3">
                {[
                  { name: "Carrefour", category: "Courses", amount: "-67,50 €", color: "bg-orange-500" },
                  { name: "Spotify", category: "Abonnement", amount: "-9,99 €", color: "bg-green-500" },
                  { name: "Salaire", category: "Revenus", amount: "+3 250 €", color: "bg-emerald-500" },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between bg-slate-700/30 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${tx.color} rounded-xl flex items-center justify-center text-white text-xs font-medium`}>
                        {tx.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{tx.name}</p>
                        <p className="text-slate-400 text-xs">{tx.category}</p>
                      </div>
                    </div>
                    <p className={`text-sm font-medium ${tx.amount.startsWith("+") ? "text-emerald-400" : "text-white"}`}>
                      {tx.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl" />
    </div>
  );
}
