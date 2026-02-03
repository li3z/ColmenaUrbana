'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../../components/layout/Layout.jsx';

export default function BlogPostClient({ post }) {
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <Layout
            title={`${post.title} - Blog ColmenaUrbana`}
            description={post.excerpt}
        >
            <article className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
                        ← Volver al Blog
                    </Link>

                    <div className="bg-surface-1 rounded-3xl shadow-soft overflow-hidden">
                        <div className="h-64 md:h-96 w-full relative bg-gray-200">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
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
