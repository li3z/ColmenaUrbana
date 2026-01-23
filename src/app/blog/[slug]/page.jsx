'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '../../../components/layout/Layout.jsx';
import { blogPosts } from '../../../data/blogPosts.js';

export default function BlogPostPage({ params }) {
    // Unwrapping params is necessary in recent Next.js versions for client components or async server components
    const { slug } = React.use(params);
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <Layout
            title={`${post.title} - Blog HoniFarm`}
            description={post.excerpt}
        >
            <article className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
                        ← Volver al Blog
                    </Link>

                    <div className="bg-surface-1 rounded-3xl shadow-soft overflow-hidden">
                        <div className="h-64 md:h-96 w-full relative bg-gray-200">
                            {/* Placeholder for actual image integration */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                [Imagen: {post.title}]
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <span className="text-primary font-bold">{post.category}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>Por {post.author}</span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-secondary">{post.title}</h1>

                            <div
                                className="prose prose-lg text-gray-600 max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
}
