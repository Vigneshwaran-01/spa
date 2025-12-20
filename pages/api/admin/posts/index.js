import mysql from 'mysql2/promise';
import slugify from 'slugify';

export default async function handler(req, res) {
  // Allow GET for listing posts, and POST/PUT/DELETE for mutations
  if (!['GET', 'POST', 'PUT', 'DELETE'].includes(req.method)) {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let connection;

  try {
    // Create a database connection
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true',
    });

    // GET: Return list of posts for admin UI
    if (req.method === 'GET') {
      const [rows] = await connection.execute(
        `SELECT id, title, slug, excerpt, author, published, created_at
         FROM blog_posts
         ORDER BY created_at DESC`
      );

      const posts = rows.map((row) => ({
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt || '',
        published: !!row.published,
        createdAt: row.created_at,
        author: { username: row.author || 'Admin' },
      }));

      return res.status(200).json({ success: true, posts });
    }

    const {
      id,
      title,
      slug,
      content,
      excerpt,
      category_id,
      author,
      author_bio,
      featured_image,
      published,
      scheduled_for, // ISO 8601 format
      status,
      seo_description,
      seo_canonical_url,
      schema_json,
    } = req.body;

    // Validate and format scheduled_for date
    let formattedScheduledFor = null;
    if (scheduled_for) {
      try {
        // Check if it's a valid date string
        const scheduledDate = new Date(scheduled_for);
        if (isNaN(scheduledDate.getTime())) {
          return res.status(400).json({ message: 'Invalid scheduled date format' });
        }
        formattedScheduledFor = scheduledDate.toISOString();
      } catch (error) {
        return res.status(400).json({ message: 'Invalid scheduled date format' });
      }
    }

    // Validate and format featured_image URL
    let formattedFeaturedImage = null;
    if (featured_image) {
      // Remove any leading/trailing whitespace
      const cleanImageUrl = featured_image.trim();
      
      // If URL doesn't start with http://, https://, or /, add leading slash
      if (!cleanImageUrl.match(/^https?:\/\//) && !cleanImageUrl.startsWith('/')) {
        formattedFeaturedImage = '/' + cleanImageUrl;
      } else {
        formattedFeaturedImage = cleanImageUrl;
      }
    }

    // Generate a slug from the title if not provided
    const generatedSlug = slug ? slugify(slug, { lower: true }) : slugify(title || '', { lower: true });

    // POST: Create a new post
    if (req.method === 'POST') {
      // Validate required fields
      if (!title || !content || !category_id || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Insert the post into the database
      const [result] = await connection.execute(
        `INSERT INTO blog_posts 
         (title, slug, content, excerpt, category_id, author, author_bio, featured_image, published, scheduled_for, status, seo_description, seo_canonical_url, schema_json) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          title,
          generatedSlug,
          content,
          excerpt || null,
          category_id,
          author,
          author_bio,
          formattedFeaturedImage,
          published || false,
          formattedScheduledFor,
          status || 'draft',
          seo_description || null,
          seo_canonical_url || null,
          schema_json || null,
        ]
      );

      return res.status(201).json({
        id: result.insertId,
        slug: generatedSlug,
        message: 'Post created successfully',
      });
    }

    // PUT: Update an existing post
    if (req.method === 'PUT') {
      // Validate required fields
      if (!id || !title || !content || !category_id || !author) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      // Update the post in the database
      const [result] = await connection.execute(
        `UPDATE blog_posts 
         SET title = ?, slug = ?, content = ?, excerpt = ?, category_id = ?, author = ?, featured_image = ?, published = ?, scheduled_for = ?, status = ?, seo_description = ?, seo_canonical_url = ?, schema_json = ? 
         WHERE id = ?`,
        [
          title,
          generatedSlug,
          content,
          excerpt || null,
          category_id,
          author,
          formattedFeaturedImage,
          published || false,
          formattedScheduledFor,
          status || 'draft',
          seo_description || null,
          seo_canonical_url || null,
          schema_json || null,
          id,
        ]
      );

      // Check if the post was found and updated
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post updated successfully' });
    }

    // DELETE: Delete a post
    if (req.method === 'DELETE') {
      // Validate required fields
      if (!id) {
        return res.status(400).json({ message: 'Missing post ID' });
      }

      // Delete the post from the database
      const [result] = await connection.execute('DELETE FROM blog_posts WHERE id = ?', [id]);

      // Check if the post was found and deleted
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json({ message: 'Post deleted successfully' });
    }
  } catch (error) {
    console.error('Database Error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  } finally {
    // Close the database connection
    if (connection) {
      await connection.end();
    }
  }
}