-- Migration to add missing fields to blog_posts table
-- Run this migration to add all missing fields that the application needs

ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS excerpt TEXT,
ADD COLUMN IF NOT EXISTS author VARCHAR(255),
ADD COLUMN IF NOT EXISTS author_bio TEXT,
ADD COLUMN IF NOT EXISTS featured_image VARCHAR(255),
ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS scheduled_for DATETIME,
ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'draft',
ADD COLUMN IF NOT EXISTS seo_description TEXT,
ADD COLUMN IF NOT EXISTS seo_canonical_url VARCHAR(500),
ADD COLUMN IF NOT EXISTS schema_json TEXT,
ADD COLUMN IF NOT EXISTS image_url VARCHAR(255);
