import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { 
  Search, ArrowUpRight, ChevronLeft, ChevronRight, Loader2, Mail, ArrowRight 
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
      const response = await fetch(`/api/posts?page=${page}&search=${encodeURIComponent(search)}`);
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
          RECENT BLOG POSTS (Layout: 1 Big Left, 2 Right)
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
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
      
      {/* =========================================
          LEFT COLUMN: Featured Big Post
         ========================================= */}
      {featuredPost && (
        <a href={`/blog/${featuredPost.slug}`} className="group flex flex-col gap-6">
          {/* Image Container */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-800 shadow-2xl shadow-black/50 border border-white/5">
             {featuredPost.featured_image ? (
              <img 
                src={featuredPost.featured_image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
             ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">No Image</div>
             )}
          </div>
          
          {/* Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="text-blue-500 font-bold text-xs uppercase tracking-wider">Featured</span>
              <span className="w-1 h-1 rounded-full bg-slate-600"/>
              <span className="text-slate-400 font-medium">{formatDate(featuredPost.created_at)}</span>
            </div>
            
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              <ArrowUpRight className="w-6 h-6 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
            </div>

            <p className="text-slate-400 text-base leading-relaxed line-clamp-3 mb-5">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex gap-2">
               <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300">Design</span>
               <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300">Research</span>
            </div>
          </div>
        </a>
      )}

      {/* =========================================
          RIGHT COLUMN: Stacked Side Posts
          (Image Left, Content Right layout)
         ========================================= */}
      <div className="flex flex-col gap-10">
        {sidePosts.map((post) => (
          <a href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col md:flex-row gap-6 items-start">
            
            {/* Small Image */}
            <div className="relative w-full md:w-72 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl bg-slate-800 border border-white/5 shadow-lg">
              {post.featured_image ? (
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-600">No Image</div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center py-1">
              <div className="flex items-center gap-2 text-xs mb-2">
                <span className="text-blue-500 font-bold uppercase tracking-wider">Latest</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-500">{formatDate(post.created_at)}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex gap-2">
                <span className="px-2.5 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-[10px] font-medium text-slate-400">Strategy</span>
              </div>
            </div>
          </a>
        ))}
      </div>
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
      // ... (Your existing grid code for remaining posts) ...
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
         {/* ... render remainingPosts grid here ... */}
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {remainingPosts.map((post) => (
                <a href={`/blog/${post.slug}`} key={post.id} className="group block">
                  {/* Grid Item Card */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-800 mb-4 border border-white/5">
                    <img src={post.featured_image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt=""/>
                  </div>
                  <div className="text-blue-500 text-xs font-bold mb-2 uppercase">{formatDate(post.created_at)}</div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h4>
                  <p className="text-slate-400 text-sm line-clamp-2">{post.excerpt}</p>
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
    const response = await fetch(`${baseUrl}/api/posts`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    return { props: { initialData: data } };
  } catch (error) {
    return { props: { initialData: { posts: [], pagination: { currentPage: 1, totalPages: 0 } } } };
  }
}

export default BlogIndex;