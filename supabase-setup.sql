-- Script SQL à exécuter dans la console Supabase (SQL Editor)
-- URL: https://supabase.com/dashboard/project/ucgiyoktaxnilwizlksd/sql

-- Création de la table newsletter_subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activation de Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre les insertions anonymes (pour le formulaire public)
CREATE POLICY "Allow anonymous inserts" ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);

-- Politique pour permettre la lecture aux utilisateurs authentifiés (admin)
CREATE POLICY "Allow authenticated reads" ON newsletter_subscribers
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Index pour optimiser les recherches par email
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
