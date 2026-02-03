'use client';

import React from 'react';
import Layout from '../../components/layout/Layout.jsx';
import ProductCard from '../../components/product/ProductCard.jsx';

import { products } from '../../data/products.js';

export default function ProductsPage() {

    return (
        <Layout title="Tesoros de la Colmena - ColmenaUrbana" description="Productos 100% puros de nuestras colmenas.">
            <div className="py-24 bg-surface-1">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Tesoros de la Colmena</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Desde el Valle del Elqui a tu mesa. Descubre la pureza de nuestra miel y el poder de nuestros superalimentos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="h-full">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
