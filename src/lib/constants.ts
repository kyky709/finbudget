import {
  Activity,
  PieChart,
  Target,
  Wallet,
  BarChart3,
  Shield,
  type LucideIcon
} from "lucide-react";

// Features
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Activity,
    title: "Suivi en temps réel",
    description: "Visualisez instantanément toutes vos dépenses avec des graphiques dynamiques."
  },
  {
    icon: PieChart,
    title: "Budgets intelligents",
    description: "Créez des budgets personnalisés par catégorie et recevez des alertes."
  },
  {
    icon: Target,
    title: "Objectifs d'épargne",
    description: "Définissez vos objectifs et suivez votre progression de façon gamifiée."
  },
  {
    icon: Wallet,
    title: "Multi-comptes",
    description: "Centralisez tous vos comptes bancaires dans une vue unifiée."
  },
  {
    icon: BarChart3,
    title: "Rapports détaillés",
    description: "Analysez vos habitudes avec des rapports hebdomadaires et mensuels."
  },
  {
    icon: Shield,
    title: "Sécurité maximale",
    description: "Vos données protégées par un chiffrement de niveau bancaire et 2FA."
  }
];

// Steps (Comment ça marche)
export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: "01",
    title: "Créez votre compte",
    description: "Inscription gratuite en 30 secondes avec email ou Google. Aucune carte bancaire requise."
  },
  {
    number: "02",
    title: "Connectez vos comptes",
    description: "Liez vos comptes bancaires en toute sécurité ou ajoutez vos transactions manuellement."
  },
  {
    number: "03",
    title: "Configurez vos budgets",
    description: "Définissez vos limites de dépenses par catégorie et vos objectifs d'épargne."
  },
  {
    number: "04",
    title: "Suivez et optimisez",
    description: "Recevez des insights personnalisés et regardez votre épargne grandir."
  }
];

// Testimonials
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    role: "Designer Freelance",
    content: "Enfin une app qui me permet de voir où passe mon argent ! J'ai économisé 300€ dès le premier mois.",
    avatar: "ML"
  },
  {
    name: "Thomas R.",
    role: "Chef de Projet",
    content: "Simple, efficace, beau. Les graphiques sont un vrai plaisir et les alertes budget m'ont sauvé plus d'une fois.",
    avatar: "TR"
  },
  {
    name: "Sophie M.",
    role: "Étudiante",
    content: "Grâce à FinBudget, j'ai enfin pu mettre de côté pour mon voyage. L'approche gamifiée est vraiment motivante !",
    avatar: "SM"
  }
];

// Pricing Plans
export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Gratuit",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Pour commencer à gérer son budget",
    features: [
      "1 compte bancaire",
      "3 budgets maximum",
      "Historique 3 mois",
      "1 objectif d'épargne",
      "Rapports basiques",
      "Support email"
    ],
    cta: "Commencer gratuitement"
  },
  {
    name: "Pro",
    monthlyPrice: 9,
    annualPrice: 86,
    description: "Pour une gestion avancée",
    features: [
      "Comptes illimités",
      "Budgets illimités",
      "Historique illimité",
      "Objectifs illimités",
      "Rapports avancés + Export",
      "Support prioritaire"
    ],
    cta: "Essayer Pro",
    popular: true
  },
  {
    name: "Famille",
    monthlyPrice: 19,
    annualPrice: 182,
    description: "Pour gérer en famille",
    features: [
      "Comptes illimités",
      "Budgets illimités + partagés",
      "Historique illimité",
      "Objectifs illimités",
      "Rapports avancés + Export",
      "Jusqu'à 5 membres",
      "Support dédié"
    ],
    cta: "Choisir Famille"
  }
];

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "FinBudget est-il vraiment gratuit ?",
    answer: "Oui ! Notre plan gratuit est disponible sans limite de temps avec toutes les fonctionnalités essentielles. Vous pouvez l'utiliser aussi longtemps que vous le souhaitez."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous utilisons un chiffrement AES-256 de niveau bancaire et sommes en conformité totale avec le RGPD. Vos données ne sont jamais vendues à des tiers."
  },
  {
    question: "Puis-je connecter plusieurs banques ?",
    answer: "Oui, avec les plans Pro et Famille vous pouvez connecter un nombre illimité de comptes bancaires de différentes banques pour avoir une vue unifiée de vos finances."
  },
  {
    question: "Comment fonctionne la synchronisation ?",
    answer: "Vos transactions sont synchronisées automatiquement plusieurs fois par jour. Vous pouvez également déclencher une synchronisation manuelle à tout moment."
  },
  {
    question: "Puis-je annuler mon abonnement ?",
    answer: "Oui, sans engagement. Vous pouvez annuler votre abonnement à tout moment et vous repassez automatiquement au plan gratuit à la fin de votre période de facturation."
  },
  {
    question: "Y a-t-il une application mobile ?",
    answer: "Notre application web est entièrement responsive et fonctionne parfaitement sur mobile. Une application native iOS/Android est prévue pour 2025."
  }
];

// Logos (Trust badges)
export const trustLogos = [
  "TechCrunch",
  "Les Échos",
  "Forbes France",
  "Le Figaro",
  "BFM Business"
];

// Navigation Links
export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "À propos" }
];

// Footer Links
export const footerLinks = {
  produit: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#", label: "Changelog" }
  ],
  entreprise: [
    { href: "#about", label: "À propos" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Carrières" },
    { href: "#", label: "Contact" }
  ],
  legal: [
    { href: "#", label: "CGU" },
    { href: "#", label: "Confidentialité" },
    { href: "#", label: "Cookies" },
    { href: "#", label: "Mentions légales" }
  ]
};
