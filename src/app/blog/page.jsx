'use client';

import React from 'react';
import Layout from '../../components/layout/Layout.jsx';
import BlogPostPreview from '../../components/blog/BlogPostPreview.jsx';
import { blogPosts } from '../../data/blogPosts.js';

export default function BlogPage() {
    return (
        <Layout title="Blog - ColmenaUrbana" description="Noticias, consejos y recetas del mundo de la apicultura.">
            <div className="py-24 bg-surface-1">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Desde el Panal</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explora nuestros artículos sobre salud, recetas y la vida de nuestras abejas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                            <BlogPostPreview key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
