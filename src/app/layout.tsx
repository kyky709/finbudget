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
  },
  twitter: {
    card: "summary_large_image",
    title: "FinBudget - Application de Gestion de Budget Personnel",
    description:
      "Maîtrisez vos finances et simplifiez votre vie avec FinBudget.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
