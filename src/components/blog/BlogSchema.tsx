import React from 'react';
import { BlogPost } from '../../data/blogData';

interface BlogSchemaProps {
  post?: BlogPost;
  isIndex?: boolean;
}

export const BlogSchema: React.FC<BlogSchemaProps> = ({ post, isIndex }) => {
  if (isIndex) {
    const blogIndexSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://thegoanhouse.com/blog#blog",
      "name": "The Goan House Journal & Travel Guide",
      "description": "Insider guides, luxury travel tips, and curated itineraries for Arpora, Baga, and North Goa.",
      "url": "https://thegoanhouse.com/blog",
      "publisher": {
        "@type": "LodgingBusiness",
        "name": "The Goan House - 3 BHK Luxury Villa with Private Pool Goa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thegoanhouse.com/images/The-goan-house-logo.webp"
        }
      }
    };

    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thegoanhouse.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Goa Travel Journal & Blog",
          "item": "https://thegoanhouse.com/blog"
        }
      ]
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
      </>
    );
  }

  if (post) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `https://thegoanhouse.com/blog/${post.slug}#article`,
      "headline": post.title,
      "description": post.excerpt,
      "image": [
        `https://thegoanhouse.com${post.coverImage}`
      ],
      "datePublished": post.publishDate,
      "dateModified": post.lastUpdated,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "jobTitle": post.author.role
      },
      "publisher": {
        "@type": "LodgingBusiness",
        "name": "The Goan House - 3 BHK Luxury Villa with Private Pool Goa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://thegoanhouse.com/images/The-goan-house-logo.webp"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://thegoanhouse.com/blog/${post.slug}`
      },
      "keywords": post.keywords.join(", ")
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://thegoanhouse.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://thegoanhouse.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://thegoanhouse.com/blog/${post.slug}`
        }
      ]
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </>
    );
  }

  return null;
};
