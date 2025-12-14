"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Prêt à reprendre le contrôle de vos finances ?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 50 000 utilisateurs qui ont transformé leur
            relation avec l'argent.
          </p>

          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-slate-100 shadow-xl"
          >
            Créer mon compte gratuit
          </Button>

          <p className="mt-4 text-sm text-white/60">
            Pas de carte bancaire requise • Annulation à tout moment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
