// pages/admin/posts/new.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import mysql from 'mysql2/promise';
import AdminLayout from '../../../components/AdminLayout';

const StableTiptapEditor = dynamic(
  () => import('../../../components/StableTiptapEditor'),
  {
    ssr: false,
    loading: () => <div className="min-h-[200px] px-4 py-3 text-sm text-slate-500">Loading editor...</div>,
  }
);

function NewPost({ categories }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category_id: '',
    featured_image: '',
    author: '',
    author_bio: '',
    published: false,
    scheduled_for: '',
    status: 'draft',
    seo_description: '',
    seo_canonical_url: '',
    schema_json: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/admin/posts');
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData.message);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#111827f7] min-h-screen">
      <AdminLayout>
        <div className="max-w-4xl mx-auto pt-[80px]">
          <h1 className="text-2xl font-bold mb-6 text-white">Create New Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic text fields (no content here) */}
            {[
              { label: 'Title', name: 'title', type: 'text', required: true },
              { label: 'Slug (optional)', name: 'slug', type: 'text' },
              { label: 'Discription', name: 'excerpt', type: 'textarea' },
              { label: 'Featured Image URL', name: 'featured_image', type: 'text' },
              { label: 'Author', name: 'author', type: 'text', required: true },
              { label: 'Author Bio', name: 'author_bio', type: 'text', required: true },
              { label: 'Scheduled For', name: 'scheduled_for', type: 'datetime-local' },
              { label: 'SEO Description', name: 'seo_description', type: 'textarea' },
              { label: 'Canonical URL', name: 'seo_canonical_url', type: 'text' },
              { label: 'Schema JSON-LD', name: 'schema_json', type: 'textarea' },
            ].map(({ label, name, type, required }) => (
              <div key={name}>
                <label className="block mb-2 text-white">{label}</label>
                {type === 'textarea' ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    rows={name === 'seo_description' || name === 'schema_json' ? '5' : '3'}
                    required={required}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required={required}
                  />
                )}
              </div>
            ))}

            {/* Content with rich text editor */}
            <div>
              <label className="block mb-2 text-white">Content</label>
              <div className="border rounded bg-white overflow-hidden">
                <StableTiptapEditor
                  value={formData.content}
                  onChange={(content) =>
                    setFormData((prev) => ({ ...prev, content }))
                  }
                  placeholder="Write your blog content here..."
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-white">Category</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-white">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="published" className="ml-2 block text-sm text-white">Published</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            >
              {isSubmitting ? 'Creating...' : 'Create Post'}
            </button>
          </form>
        </div>
      </AdminLayout>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.DATABASE_SSL === 'true'
    });

    const [categoriesResult] = await connection.execute(
      'SELECT id, name FROM blog_categories WHERE name IS NOT NULL'
    );

    const categories = categoriesResult.map(row => ({ id: row.id, name: row.name }));
    await connection.end();

    return { props: { categories: JSON.parse(JSON.stringify(categories)) } };
  } catch (error) {
    console.error('Database connection failed:', error);
    return { props: { categories: [] } };
  }
}

export default NewPost;
