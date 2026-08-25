import React, { useEffect } from 'react';
import { BlogPost, BLOG_POSTS } from '../../data/blogData';
import { BlogSchema } from './BlogSchema';
import { PROPERTY_CONFIG } from '../../data/propertyData';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface BlogPostPageProps {
  post: BlogPost;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectPost: (slug: string) => void;
  onOpenBooking: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  post,
  onNavigateHome,
  onNavigateBlog,
  onSelectPost,
  onOpenBooking
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${post.title} | The Goan House Journal`;
  }, [post]);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello! I was reading your article "${post.title}" and would like to inquire about staying at The Goan House.`);
    window.open(`https://wa.me/${PROPERTY_CONFIG.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-sand-50 text-ocean-900 font-sans selection:bg-gold-500/20">
      <BlogSchema post={post} />

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-sand-50/90 backdrop-blur-md border-b border-sand-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateBlog}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-ocean-900 hover:text-gold-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>All Articles</span>
            </button>
            <span className="hidden sm:inline text-sand-300">|</span>
            <button
              onClick={onNavigateHome}
              className="hidden sm:inline-flex text-xs text-sand-500 hover:text-ocean-950 transition-colors"
            >
              Villa Home
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white border border-sand-200 hover:bg-sand-100 text-ocean-900 transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-ocean-950 hover:bg-gold-500 text-sand-50 hover:text-ocean-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Book Stay
            </button>
          </div>

        </div>
      </header>

      {/* Main Content Article Layout */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-sand-400 mb-6 flex-wrap">
          <button onClick={onNavigateHome} className="hover:text-ocean-950">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={onNavigateBlog} className="hover:text-ocean-950">Journal</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-sand-600 font-medium truncate max-w-xs">{post.category}</span>
        </nav>

        {/* Category & Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-sand-500 mb-4">
          <span className="px-3 py-1 rounded-full bg-sand-200/80 font-bold uppercase tracking-wider text-palm-800">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.publishDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-serif text-ocean-950 font-normal leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-sand-600 text-base sm:text-lg font-light leading-relaxed mb-8 border-l-2 border-gold-500 pl-4 italic">
          {post.excerpt}
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-3.5 pb-8 mb-8 border-b border-sand-200">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-11 h-11 rounded-full border border-sand-200 p-0.5 bg-white"
          />
          <div>
            <p className="text-sm font-semibold text-ocean-950">{post.author.name}</p>
            <p className="text-xs text-sand-400 font-light">{post.author.role}</p>
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-sand-200 mb-10">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        {/* Table of Contents */}
        {post.tableOfContents.length > 0 && (
          <div className="p-6 rounded-2xl bg-white border border-sand-200 mb-12 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-950 mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-gold-600" />
              <span>In This Guide:</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-terracotta-600 hover:text-ocean-950 font-medium transition-colors inline-block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-sand-700 leading-relaxed font-light space-y-8">
          
          <p className="text-base sm:text-lg leading-relaxed text-ocean-900/90 font-normal">
            {post.content.intro}
          </p>

          {post.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-ocean-950 font-normal mb-4">
                {section.heading}
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-sand-600">
                {section.body.map((para, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </div>

              {section.tipBox && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{section.tipBox}</span>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="pt-6 border-t border-sand-200">
            <h3 className="text-xl font-serif text-ocean-950 font-normal mb-3">Final Thoughts</h3>
            <p className="text-sm sm:text-base text-sand-600 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

        </div>

        {/* Integrated Conversion Card for The Goan House */}
        <div className="mt-14 p-8 rounded-3xl bg-ocean-950 text-sand-100 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Stay at The Goan House • Arpora, Goa</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal mb-3">
              Ready to Experience Quintessential Goan Luxury?
            </h3>

            <p className="text-sand-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
              Enjoy complete exclusivity with our 3 BHK private pool villa in Arpora. 32-foot private crystal pool, 3 bespoke suites (*Indigo, Terracotta, Clay*), 100% silent power backup, and capacity for up to 10 guests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-sand-200 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>5 Mins to Baga & Calangute</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero OTA Service Fees (Direct Rate)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>32ft Crystal Private Swimming Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Villa Host & Daily Caretaker</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-ocean-950 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Calculate Stay Price & Reserve
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all inline-flex items-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Host on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-sand-200">
            <h3 className="text-xl sm:text-2xl font-serif text-ocean-950 font-normal mb-6">
              More Stories from the Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onSelectPost(rel.slug)}
                  className="bg-white rounded-2xl p-5 border border-sand-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sand-400">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-serif font-medium text-ocean-950 group-hover:text-terracotta-600 transition-colors mt-1 mb-2">
                    {rel.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta-600">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </article>
    </div>
  );
};
