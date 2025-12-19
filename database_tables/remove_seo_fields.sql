-- Migration to remove SEO title and SEO keywords from blog_posts table
-- Run this migration to remove the seo_title and seo_keywords columns

ALTER TABLE blog_posts 
DROP COLUMN IF EXISTS seo_title,
DROP COLUMN IF EXISTS seo_keywords;
