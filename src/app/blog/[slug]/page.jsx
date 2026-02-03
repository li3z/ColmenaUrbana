import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts.js';
import BlogPostClient from './BlogPostClient.jsx';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
