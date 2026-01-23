import React from 'react';
import Link from 'next/link';

const BlogPostPreview = ({ post }) => {
  return (
    <article className="card group h-full">
      <div className="relative overflow-hidden h-56">
        <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={post.image || '/images/miel-manzanilla.jpg'} // Fallback if no image
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-primary font-bold mb-2">{post.category || 'General'}</div>
        <h3 className="text-xl font-bold mb-2 text-secondary group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-bold text-secondary gap-2 group/btn">
          Leer Más
          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostPreview;