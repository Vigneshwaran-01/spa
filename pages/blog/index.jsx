import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Search, ArrowUpRight, ChevronLeft, ChevronRight, Loader2, Mail, ArrowRight, CalendarDays 
} from 'lucide-react';

import { BackgroundBeams } from "../../components/ui/background-beams"; 
import { blogSchema } from '../../lib/data/schema';

// Helper for conditional classes
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BlogIndex({ initialData }) {
  // --- State ---
  const [posts, setPosts] = useState(initialData?.posts || []);
  const [pagination, setPagination] = useState(initialData?.pagination || {
    currentPage: 1, totalPages: 0, totalPosts: 0
  });
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to toggle "View All"

  // --- Fetch Logic ---
  const fetchPosts = async (page = 1, search = '') => {
  
    setIsLoading(true);
    setError(null);
    try {
      const apiUrl = `/api/posts?page=${page}&limit=100&search=${encodeURIComponent(search)}`;
     
      const response = await fetch(apiUrl);
     
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
    
      setPosts(data.posts || []);
      setPagination(data.pagination || { currentPage: page, totalPages: 0 });
    } catch (err) {
     
      setError(err.message);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch latest posts from the API on first mount so we see live DB data
  useEffect(() => {
    fetchPosts(1, '');
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') fetchPosts(1, e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  // --- Layout Logic ---
  // We split posts into: Featured (Index 0), Sidebar (Index 1-2), and Remaining (Index 3+)
  const featuredPost = posts[0];
  const sidePosts = posts.slice(1, 3);
  const remainingPosts = posts.slice(3);
  const topPosts = [featuredPost, ...sidePosts].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-600/30">
      <Head>
        <title>Spamcloud advice for Data protection and Web security</title>
        <meta name="description" content="Stay updated with SpamCloud’s latest updates on Data protection, web security, encryption, and this is how we protect businesses with reliable email protection" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      </Head>

      {/* =========================================
          HERO SECTION (Minimalist Pill Form)
         ========================================= */}
      <section className="relative w-full py-24 lg:py-36 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0  bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400z-0">
          <BackgroundBeams />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
           

            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Blogs
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
              Subscribe to learn about new product features, the latest in technology, and cybersecurity updates.
            </p>

            {/* Pill Form */}
            <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
              <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]">
                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className="w-full bg-transparent border-none text-slate-900 placeholder:text-slate-500 pl-12 pr-4 py-3 focus:ring-0 text-base outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-[#011333] hover:bg-blue-500  text-white font-medium py-3 px-6 rounded-full transition-all duration-200"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                We care about your data in our <span className="underline decoration-slate-700 hover:text-white cursor-pointer transition-colors">privacy policy</span>.
              </p>
            </form>
        </div>
      </section>

      {/* =========================================
          RECENT BLOG POSTS (Layout: 3-column card-style)
         ========================================= */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
  
  {/* Section Header */}
  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-white/10 pb-8">
    <h2 className="text-4xl font-bold text-white tracking-tight">Recent blog posts</h2>
    
    {/* Search Bar - Matches Theme */}
    <div className="relative w-full md:w-72 group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
      <input 
        type="text" 
        placeholder="Search..." 
        onKeyDown={handleSearch}
        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all"
      />
    </div>
  </div>

  {isLoading ? (
    <div className="flex justify-center py-20">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  ) : error ? (
    <div className="text-red-400 text-center py-10 bg-red-900/10 rounded-xl border border-red-900/20">
      {error}
    </div>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {topPosts.map((post) => (
        <a 
          href={`/blog/${post.slug}`} 
          key={post.id} 
          className="group flex flex-col h-full rounded-3xl overflow-hidden bg-slate-900/60 border border-white/5 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
        >
          {/* Image with hover overlay */}
          <div className="relative w-full aspect-[16/8] overflow-hidden">
            {post.featured_image ? (
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">No Image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-1 rounded-full bg-white text-slate-900 text-sm font-medium shadow">
                Read More
              </span>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 px-4 py-3">
            <div className="flex items-center text-xs text-slate-400 mb-3">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{formatDate(post.created_at)}</span>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2 mb-2.5">
              {post.excerpt}
            </p>
          </div>
        </a>
      ))}
    </div>
  )}

  {/* =========================================
      VIEW ALL BUTTON (Toggles the grid below)
     ========================================= */}
  <div className="mt-20 border-t border-white/10 pt-12">
    {!showAll ? (
      <div className="flex justify-start">
        <button 
          onClick={() => setShowAll(true)}
          className="group flex items-center gap-3 text-white font-semibold hover:text-blue-400 transition-colors"
        >
          View all blog posts 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    ) : (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <a 
              href={`/blog/${post.slug}`} 
              key={post.id} 
              className="group flex flex-col h-full rounded-3xl overflow-hidden bg-slate-900/60 border border-white/5 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
            >
              {/* Grid Item Card */}
              <div className="relative aspect-[16/8] w-full overflow-hidden">
                {post.featured_image ? (
                  <img 
                    src={post.featured_image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt={post.title}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">No Image</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-1 rounded-full bg-white text-slate-900 text-sm font-medium shadow">
                    Read More
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 px-5 py-4">
                <div className="flex items-center text-xs text-slate-400 mb-3">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{formatDate(post.created_at)}</span>
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">{post.title}</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
</div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/posts?limit=1000`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return { props: { initialData: data } };
  } catch (error) {
    return { props: { initialData: { posts: [], pagination: { currentPage: 1, totalPages: 0 } } } };
  }
}

export default BlogIndex;