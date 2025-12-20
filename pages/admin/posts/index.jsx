"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Plus, Edit, Trash2, Eye, FileText, Calendar, User, Globe, RefreshCw } from 'lucide-react';
import AdminLayout from '../../../components/AdminLayout';

export default function Posts({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    recent: 0,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/posts');
      const data = await response.json();

      if (data.success) {
        setPosts(data.posts || []);
        calculateStats(data.posts || []);
      } else {
        setPosts([]);
        calculateStats([]);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      setPosts([]);
      calculateStats([]);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (postsData) => {
    const total = postsData.length;
    const published = postsData.filter((post) => post.published).length;
    const draft = postsData.filter((post) => !post.published).length;
    const recent = postsData.filter((post) => {
      const postDate = new Date(post.createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return postDate > weekAgo;
    }).length;

    setStats({ total, published, draft, recent });
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (postId) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: postId }),
      });

      if (response.ok) {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
        calculateStats(updatedPosts);
      } else {
        const errorMessage = await response.json();
        console.error('Failed to delete the post:', errorMessage.message);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-4" />
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FileText className="h-8 w-8 text-blue-500 mr-3" />
                Blog Post Management
              </h1>
              <p className="text-gray-600 mt-2">Create, edit, and manage your blog posts</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={fetchPosts}
                disabled={loading}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <Link
                href="/admin/posts/new"
                className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-3xl font-bold text-green-600">{stats.published}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Drafts</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.draft}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <Edit className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recent</p>
                <p className="text-3xl font-bold text-purple-600">{stats.recent}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 align-top">
                      <div>
                        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{post.title}</div>
                        <div className="text-sm text-gray-500 max-w-sm truncate">{post.excerpt}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{post.author?.username || 'Admin'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{formatDate(post.createdAt)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          post.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Post"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-green-600 hover:text-green-900"
                          title="View Post"
                          target="_blank"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete Post"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No blog posts found</div>
              <p className="text-gray-400 mb-6">
                {searchTerm
                  ? `No posts match your search for "${searchTerm}"`
                  : 'Create your first blog post to get started.'}
              </p>
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create First Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
