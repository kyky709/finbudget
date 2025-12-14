# FinBudget - Landing Page

<p align="center">
  <img src="public/icon.svg" alt="FinBudget Logo" width="80" height="80">
</p>

<p align="center">
  <strong>Maîtrisez vos finances, simplifiez votre vie</strong>
</p>

<p align="center">
  Landing page marketing pour <strong>FinBudget</strong>, une application SaaS fictive de gestion de budget personnel.<br>
  Ce projet est destiné à être présenté dans un portfolio de développeur web.
</p>

---

## Aperçu

FinBudget est une landing page moderne et performante qui présente une application de gestion financière personnelle avec :

- Design moderne inspiré des meilleures applications fintech
- Animations fluides et micro-interactions
- Mode sombre/clair
- Responsive design complet
- SEO optimisé

## Stack Technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| [Next.js](https://nextjs.org/) | 14+ | Framework React avec App Router |
| [TypeScript](https://www.typescriptlang.org/) | 5+ | Typage statique |
| [Tailwind CSS](https://tailwindcss.com/) | 4+ | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | 11+ | Animations |
| [Radix UI](https://www.radix-ui.com/) | - | Composants accessibles |
| [Lucide React](https://lucide.dev/) | - | Icônes SVG |
| [next-themes](https://github.com/pacocoursey/next-themes) | - | Gestion du thème |
| [React Hook Form](https://react-hook-form.com/) | - | Formulaires |
| [Zod](https://zod.dev/) | - | Validation |
| [Supabase](https://supabase.com/) | - | Backend (newsletter) |

## Fonctionnalités

### Sections de la Landing Page

1. **Header/Navigation** - Menu responsive avec comportement au scroll
2. **Hero Section** - Accroche principale avec mockup de l'application
3. **Logos/Trust Badges** - Preuves sociales
4. **Features** - 6 fonctionnalités clés avec icônes
5. **Comment ça marche** - 4 étapes en timeline
6. **Mockup Showcase** - 4 vues interactives de l'application
7. **Témoignages** - 3 avis clients
8. **Pricing** - 3 plans avec toggle mensuel/annuel
9. **FAQ** - Accordion accessible avec 6 questions
10. **CTA Final** - Appel à l'action
11. **Newsletter** - Formulaire avec intégration Supabase
12. **Footer** - Navigation complète

### Caractéristiques Techniques

- Dark/Light mode avec persistance
- Animations Framer Motion (scroll-triggered, hover, transitions)
- SEO optimisé (meta tags, Open Graph, Twitter Card, Schema.org)
- Accessibilité WCAG 2.1 AA (skip link, focus visible, ARIA)
- Support `prefers-reduced-motion`
- Images dynamiques OG/Twitter

## Installation

```bash
# Cloner le repository
git clone https://github.com/kyky709/finbudget.git

# Aller dans le dossier
cd finbudget

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

## Variables d'Environnement

Créer un fichier `.env.local` à la racine :

```env
NEXT_PUBLIC_SUPABASE_URL=votre_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_clé_anon_supabase
```

## Configuration Supabase

Exécuter ce SQL dans votre console Supabase pour créer la table newsletter :

```sql
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);
```

## Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Démarrer en production
npm run lint     # Linter ESLint
```

## Structure du Projet

```
finbudget/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux
│   │   ├── layout.tsx           # Layout principal + SEO
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── opengraph-image.tsx  # Image OG dynamique
│   │   └── twitter-image.tsx    # Image Twitter dynamique
│   ├── components/
│   │   ├── ui/                  # Composants réutilisables
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # Sections de la landing
│   │   ├── mockups/             # Mockups de l'application
│   │   └── providers/           # Context providers
│   └── lib/
│       ├── utils.ts             # Fonctions utilitaires
│       ├── constants.ts         # Données statiques
│       └── supabase.ts          # Client Supabase
├── public/
│   ├── icon.svg                 # Logo SVG
│   └── site.webmanifest         # PWA manifest
└── README.md
```

## Déploiement

### Vercel (Recommandé)

1. Connecter le repository GitHub à Vercel
2. Ajouter les variables d'environnement
3. Déployer

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kyky709/finbudget)

## Performance

Objectifs Lighthouse :

| Métrique | Objectif |
|----------|----------|
| Performance | > 90 |
| Accessibility | > 95 |
| Best Practices | > 90 |
| SEO | 100 |

## Licence

Ce projet est destiné à un usage de démonstration dans un portfolio.

---

<p align="center">
  Développé par <a href="https://github.com/kyky709">kyky709</a>
</p>
