"use client";

import { Search, Filter, Download, ChevronDown } from "lucide-react";

const transactions = [
  { date: "14 Déc", name: "Carrefour", category: "Courses", amount: -67.50, color: "bg-orange-500" },
  { date: "14 Déc", name: "SNCF", category: "Transport", amount: -45.00, color: "bg-blue-500" },
  { date: "13 Déc", name: "Spotify", category: "Abonnement", amount: -9.99, color: "bg-green-500" },
  { date: "12 Déc", name: "Restaurant Le Petit", category: "Restaurant", amount: -32.50, color: "bg-pink-500" },
  { date: "10 Déc", name: "Salaire", category: "Revenus", amount: 3250.00, color: "bg-emerald-500" },
  { date: "08 Déc", name: "EDF", category: "Factures", amount: -89.00, color: "bg-yellow-500" },
  { date: "05 Déc", name: "Amazon", category: "Shopping", amount: -54.99, color: "bg-purple-500" },
];

export function TransactionsMockup() {
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
          app.finbudget.fr/transactions
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold">Transactions</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm w-48"
              />
            </div>
            <button className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Toutes", "Courses", "Abonnements", "Transport", "Revenus"].map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Catégorie</th>
                <th className="pb-3 font-medium text-right">Montant</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 text-sm text-slate-500 dark:text-slate-400">{tx.date}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${tx.color} rounded-xl flex items-center justify-center text-white text-sm font-medium`}>
                        {tx.name.charAt(0)}
                      </div>
                      <span className="font-medium">{tx.name}</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full text-sm">
                      {tx.category}
                    </span>
                  </td>
                  <td className={`py-4 text-right font-semibold ${tx.amount > 0 ? "text-emerald-500" : ""}`}>
                    {tx.amount > 0 ? "+" : ""}{tx.amount.toFixed(2)} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">Affichage de 7 sur 156 transactions</p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm">Précédent</button>
            <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm">2</button>
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm">3</button>
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-lg text-sm">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
