import React, { useState } from 'react';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '../../data/blogData';
import { BlogSchema } from './BlogSchema';
import { PROPERTY_CONFIG } from '../../data/propertyData';
import { ArrowLeft, Clock, Calendar, ArrowRight, Search, Sparkles, MessageCircle, MapPin } from 'lucide-react';

interface BlogIndexProps {
  onNavigateHome: () => void;
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({
  onNavigateHome,
  onSelectPost,
  onOpenBooking
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Articles' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello! I was reading The Goan House blog and would like to check villa availability.");
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-sand-50 text-ocean-900 font-sans selection:bg-gold-500/20">
      <BlogSchema isIndex={true} />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-sand-50/90 backdrop-blur-md border-b border-sand-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ocean-900 hover:text-gold-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Villa Homepage</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Concierge</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-ocean-950 hover:bg-gold-500 text-sand-50 hover:text-ocean-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Book Villa
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-gradient-to-b from-sand-100/70 to-sand-50 relative overflow-hidden border-b border-sand-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sand-200/80 text-palm-800 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Goan House Journal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ocean-950 font-normal tracking-tight leading-tight mb-6">
            Insider Guides & Stories from <br />
            <span className="italic text-terracotta-600">Arpora, Baga & North Goa.</span>
          </h1>

          <p className="text-sand-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Curated travel itineraries, hidden culinary hotspots, and luxury villa tips written by locals and private concierge experts.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-sand-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, restaurants, beaches, tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-sand-200 text-sm text-ocean-950 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-gold-500/50 shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-ocean-950 text-sand-50 shadow-md scale-105'
                    : 'bg-white text-sand-600 hover:bg-sand-100 border border-sand-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Articles Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Featured Article Top Card (if all selected and no search) */}
        {selectedCategory === 'All Articles' && !searchQuery && featuredPost && (
          <div className="mb-16">
            <div
              onClick={() => onSelectPost(featuredPost.slug)}
              className="bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-lg hover:shadow-xl transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.coverImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-ocean-950/85 backdrop-blur-md text-gold-400 text-xs font-bold uppercase tracking-wider">
                    ★ Featured Guide
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-sand-400 mb-4">
                    <span className="px-2.5 py-0.5 rounded-md bg-sand-100 font-semibold text-ocean-900">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ocean-950 group-hover:text-terracotta-600 transition-colors leading-snug mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sand-500 text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-sand-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full border border-sand-200"
                    />
                    <div className="text-xs">
                      <p className="font-semibold text-ocean-950">{featuredPost.author.name}</p>
                      <p className="text-sand-400">{featuredPost.publishDate}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-terracotta-600 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              onClick={() => onSelectPost(post.slug)}
              className="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-ocean-950/80 backdrop-blur-md text-white text-[11px] font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-sand-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-medium text-ocean-950 group-hover:text-terracotta-600 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sand-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-sand-100 flex items-center justify-between text-xs">
                <span className="text-sand-400 font-light">{post.author.name}</span>
                <span className="font-semibold text-terracotta-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  <span>Read Post</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-base text-sand-500 mb-4">No articles found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All Articles');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-ocean-950 text-white text-xs font-semibold"
            >
              Clear Search Filters
            </button>
          </div>
        )}

      </main>

      {/* Direct Booking Conversion Banner */}
      <section className="bg-ocean-950 text-sand-100 py-16 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Arpora, North Goa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-4">
            Planning Your Luxury Stay in Goa?
          </h2>

          <p className="text-sand-300 text-sm sm:text-base font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Experience our 3 BHK private pool villa in Arpora. Book direct for the guaranteed lowest rates, zero booking commissions, and personalized concierge.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-ocean-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              Check Villa Rates & Availability
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all border border-white/20 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat with Host on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-ocean-950 text-sand-400 text-xs py-8 border-t border-white/5 text-center">
        <p>© {new Date().getFullYear()} The Goan House - 3 BHK Luxury Villa with Private Pool Goa. All rights reserved.</p>
      </footer>
    </div>
  );
};
