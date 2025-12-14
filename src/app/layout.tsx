import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinBudget - Application de Gestion de Budget Personnel",
  description:
    "Maîtrisez vos finances et simplifiez votre vie avec FinBudget. Suivez vos dépenses, fixez des budgets intelligents et atteignez vos objectifs financiers.",
  keywords: [
    "gestion budget",
    "finances personnelles",
    "suivi dépenses",
    "épargne",
    "application budget",
    "fintech",
  ],
  authors: [{ name: "FinBudget" }],
  openGraph: {
    title: "FinBudget - Application de Gestion de Budget Personnel",
    description:
      "Maîtrisez vos finances et simplifiez votre vie avec FinBudget. L'application #1 de gestion de budget.",
    url: "https://finbudget.fr",
    siteName: "FinBudget",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinBudget - Application de Gestion de Budget Personnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinBudget - Application de Gestion de Budget Personnel",
    description:
      "Maîtrisez vos finances et simplifiez votre vie avec FinBudget.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

// Schema.org JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "FinBudget",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web",
      "description": "Application de gestion de budget personnel. Suivez vos dépenses, fixez des budgets intelligents et atteignez vos objectifs financiers.",
      "url": "https://finbudget.fr",
      "offers": [
        {
          "@type": "Offer",
          "name": "Gratuit",
          "price": "0",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Pro",
          "price": "9",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31"
        },
        {
          "@type": "Offer",
          "name": "Famille",
          "price": "19",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "50000",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "FinBudget est-il vraiment gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui ! Notre plan gratuit est disponible sans limite de temps avec toutes les fonctionnalités essentielles. Vous pouvez l'utiliser aussi longtemps que vous le souhaitez."
          }
        },
        {
          "@type": "Question",
          "name": "Mes données sont-elles sécurisées ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolument. Nous utilisons un chiffrement AES-256 de niveau bancaire et sommes en conformité totale avec le RGPD. Vos données ne sont jamais vendues à des tiers."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je connecter plusieurs banques ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, avec les plans Pro et Famille vous pouvez connecter un nombre illimité de comptes bancaires de différentes banques pour avoir une vue unifiée de vos finances."
          }
        },
        {
          "@type": "Question",
          "name": "Comment fonctionne la synchronisation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vos transactions sont synchronisées automatiquement plusieurs fois par jour. Vous pouvez également déclencher une synchronisation manuelle à tout moment."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je annuler mon abonnement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, sans engagement. Vous pouvez annuler votre abonnement à tout moment et vous repassez automatiquement au plan gratuit à la fin de votre période de facturation."
          }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il une application mobile ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Notre application web est entièrement responsive et fonctionne parfaitement sur mobile. Une application native iOS/Android est prévue pour 2025."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "name": "FinBudget",
      "url": "https://finbudget.fr",
      "logo": "https://finbudget.fr/icon.svg",
      "sameAs": [
        "https://twitter.com/finbudget",
        "https://linkedin.com/company/finbudget",
        "https://instagram.com/finbudget"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
