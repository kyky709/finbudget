"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button, Input, Badge } from "@/components/ui";
import { subscribeToNewsletter } from "@/lib/supabase";

const schema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

type FormData = z.infer<typeof schema>;

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const result = await subscribeToNewsletter(data.email);

    if (result.success) {
      setStatus("success");
      setMessage(result.message);
      reset();
    } else {
      setStatus("error");
      setMessage(result.message);
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge className="mb-4">Newsletter</Badge>
          <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
            Restez informé
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Recevez nos conseils budget et les dernières nouveautés de FinBudget.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Votre adresse email"
                {...register("email")}
                error={errors.email?.message}
                disabled={status === "loading"}
              />
            </div>
            <Button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0"
            >
              {status === "loading" ? (
                <span className="animate-pulse">Envoi...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  S'inscrire
                </>
              )}
            </Button>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400"
            >
              <CheckCircle className="w-5 h-5" />
              <span>{message}</span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center justify-center gap-2 text-red-600 dark:text-red-400"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{message}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
