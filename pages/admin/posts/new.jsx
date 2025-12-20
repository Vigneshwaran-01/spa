// pages/admin/posts/new.js
'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import mysql from 'mysql2/promise';
import { Save, ArrowLeft, Eye, FileText, Image, Globe, Upload, X } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

// Dynamic import for the official Tiptap simple-editor template
const SimpleEditor = dynamic(
  () =>
    import('../../../components/tiptap-templates/simple/simple-editor').then(
      (mod) => mod.SimpleEditor,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
        <div className="border-b border-gray-300 p-2 bg-gray-50 h-12" />
        <div className="min-h-[300px] p-4 flex items-center justify-center">
          <span className="text-gray-500">Loading editor...</span>
        </div>
      </div>
    ),
  }
);

function NewPost({ categories }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    featuredHeading: '',
    shortDescription: '',
    content: '',
    featuredImage: '',
    featuredImageFile: null,
    published: false,
    metaTitle: '',
    metaDescription: '',
    keywords: '',
    author: 'Admin',
    category_id: '',
    canonicalUrl: '',
    customSchema: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleContentChange = useCallback((content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
  }, []);

  const generateSlugFromTitle = (title) => {
    if (!title) return '';
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const generateDefaultSchema = () => {
    const slug = generateSlugFromTitle(formData.title);
    const origin =
      typeof window !== 'undefined'
        ? `${window.location.protocol}//${window.location.host}`
        : 'https://example.com';

    const canonicalSlug = formData.canonicalUrl || slug;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${origin}/blog/${canonicalSlug}`,
      },
      headline: formData.metaTitle || formData.title,
      description: formData.metaDescription || formData.shortDescription,
      image:
        formData.featuredImage || `${origin}/images/blog-default.jpg`,
      author: {
        '@type': 'Organization',
        name: formData.author || 'Admin',
        url: origin,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Spam Cloud',
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      url: `${origin}/blog/${canonicalSlug}`,
    };

    return JSON.stringify(schema, null, 2);
  };

  const validateJsonSchema = (jsonString) => {
    try {
      JSON.parse(jsonString);
      return { valid: true, error: null };
    } catch (err) {
      return { valid: false, error: err.message };
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setIsUploadingImage(true);
    setError('');

    try {
      const uploadData = new FormData();
      uploadData.append('image', file);

      const response = await fetch('/api/upload/image', {
        method: 'POST',
        body: uploadData,
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to upload image');
      }

      setFormData((prev) => ({
        ...prev,
        featuredImage: data.imageUrl,
        featuredImageFile: file,
      }));
      setImagePreview(data.imageUrl);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError(err.message);
    } finally {
      setIsUploadingImage(false);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      featuredImage: '',
      featuredImageFile: null,
    }));
    setImagePreview('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    if (
      !formData.title ||
      !formData.content ||
      !formData.featuredHeading ||
      !formData.shortDescription ||
      !formData.category_id
    ) {
      setError(
        'Title, featured heading, short description, content, and category are required'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const slug = generateSlugFromTitle(formData.title);

      const payload = {
        title: formData.title,
        slug,
        excerpt: formData.shortDescription,
        content: formData.content,
        category_id: parseInt(formData.category_id, 10),
        featured_image: formData.featuredImage,
        author: formData.author || 'Admin',
        author_bio: '',
        published: !!formData.published,
        scheduled_for: null,
        status: formData.published ? 'published' : 'draft',
        seo_description: formData.metaDescription,
        seo_canonical_url: formData.canonicalUrl,
        schema_json:
          formData.customSchema ||
          generateDefaultSchema(),
      };

      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to create post');
      }

      setSuccess('Post created successfully!');
      setTimeout(() => {
        router.push('/admin/posts');
      }, 1500);
    } catch (err) {
      console.error('Error creating post:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FileText className="h-8 w-8 text-blue-500 mr-3" />
                Create New Blog Post
              </h1>
              <p className="text-gray-600 mt-2">Write and publish a new blog post</p>
            </div>
            <button
              type="button"
              onClick={() => router.push('/admin/posts')}
              className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Posts
            </button>
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your post title..."
                  required
                />
              </div>

              {/* Featured Heading */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Featured Heading *
                </label>
                <input
                  type="text"
                  name="featuredHeading"
                  value={formData.featuredHeading}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter a catchy heading for the blog card..."
                  required
                />
                <p className="text-sm text-gray-500 mt-2">
                  This heading will be displayed on blog cards and should be engaging
                </p>
              </div>

              {/* Short Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description *
                </label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  rows={2}
                  maxLength={120}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  placeholder="Brief description for blog card (max 120 characters)..."
                  required
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500">This will appear on blog cards</p>
                  <span className="text-xs text-gray-400">
                    {formData.shortDescription.length}/120
                  </span>
                </div>
              </div>

              {/* SEO & Schema */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">SEO & Schema Markup</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Meta Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Title <span className="text-xs text-gray-500">(SEO Title)</span>
                    </label>
                    <input
                      type="text"
                      name="metaTitle"
                      value={formData.metaTitle || formData.title}
                      onChange={handleChange}
                      maxLength={70}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="SEO-optimized title for search engines..."
                    />
                    <span className="text-xs text-gray-400">
                      {(formData.metaTitle || formData.title).length}/70
                    </span>
                  </div>

                  {/* Meta Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Description <span className="text-xs text-gray-500">(Search Preview)</span>
                    </label>
                    <textarea
                      name="metaDescription"
                      value={formData.metaDescription}
                      onChange={handleChange}
                      rows={3}
                      maxLength={160}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Description that appears in search results..."
                    />
                    <span className="text-xs text-gray-400">
                      {formData.metaDescription.length}/160
                    </span>
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keywords <span className="text-xs text-gray-500">(Comma separated)</span>
                    </label>
                    <input
                      type="text"
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="email security, spam filter, web security..."
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Author name..."
                    />
                  </div>

                  {/* Category (DB-backed) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category_id"
                      value={formData.category_id}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Canonical URL (slug only) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Canonical URL <span className="text-xs text-gray-500">(slug only)</span>
                    </label>
                    <input
                      type="text"
                      name="canonicalUrl"
                      value={formData.canonicalUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="enter-blog-slug"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      The canonical URL helps prevent duplicate content issues
                    </p>
                  </div>
                </div>

                {/* Custom JSON Schema */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Custom JSON-LD Schema <span className="text-xs text-orange-600">(Advanced)</span>
                    </label>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            customSchema: generateDefaultSchema(),
                          }))
                        }
                        className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-xs"
                      >
                        Generate Default
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, customSchema: '' }))
                        }
                        className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-xs"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <textarea
                    name="customSchema"
                    value={formData.customSchema}
                    onChange={handleChange}
                    rows={12}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200 font-mono text-sm"
                    placeholder="Paste or generate JSON-LD schema for this post..."
                  />
                  {formData.customSchema && (
                    <div className="mt-2">
                      {(() => {
                        const validation = validateJsonSchema(formData.customSchema);
                        return validation.valid ? (
                          <p className="text-xs text-green-600">✅ Valid JSON Schema</p>
                        ) : (
                          <p className="text-xs text-red-600">
                            ❌ Invalid JSON: {validation.error}
                          </p>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </div>

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Options */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Publish Options
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="published"
                      name="published"
                      checked={formData.published}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                      Publish immediately
                    </label>
                  </div>

                  <div className="text-sm text-gray-500">
                    {formData.published
                      ? '✅ This post will be published and visible to visitors'
                      : '📝 This post will be saved as a draft'}
                  </div>
                </div>
              </div>

              {/* Featured Image Upload */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Image className="h-5 w-5 mr-2" />
                  Featured Image
                </h3>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="featured-image-upload"
                    />

                    {!imagePreview && !formData.featuredImage ? (
                      <label htmlFor="featured-image-upload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Click to upload featured image</p>
                        <p className="text-sm text-gray-400">PNG, JPG, GIF up to 5MB</p>
                      </label>
                    ) : (
                      <div className="relative">
                        <img
                          src={imagePreview || formData.featuredImage}
                          alt="Featured image preview"
                          className="max-w-full h-48 object-cover rounded-lg mx-auto"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="mt-4">
                          <label
                            htmlFor="featured-image-upload"
                            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Change Image
                          </label>
                        </div>
                      </div>
                    )}

                    {isUploadingImage && (
                      <div className="mt-4">
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2" />
                          <span className="text-blue-600">Uploading...</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center text-gray-500 text-sm">or</div>
                  <input
                    type="url"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    placeholder="Enter image URL (https://example.com/image.jpg)"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors duration-200"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Publishing...' : 'Publish Post'}
                  </button>

                  {formData.title && (
                    <button
                      type="button"
                      onClick={() => {
                        const slug = generateSlugFromTitle(formData.title);
                        window.open(`/blog/${slug}`, '_blank');
                      }}
                      className="w-full flex items-center justify-center px-6 py-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition-colors duration-200"
                    >
                      <Eye className="h-5 w-5 mr-2" />
                      Preview Post
                    </button>
                  )}
                </div>
              </div>
            </div>
          
        </form>

        {/* Full-width Content Editor */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Content *
            </label>
          </div>

          <SimpleEditor
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Write your blog content here... Use the toolbar for rich formatting!"
          />
        </div>
      </div>
    </AdminLayout>
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
