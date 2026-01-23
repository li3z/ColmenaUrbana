'use client';

import React from 'react';
import Layout from '../../components/layout/Layout.jsx';
import ProductCard from '../../components/product/ProductCard.jsx';

export default function ProductsPage() {
    const products = [
        {
            id: 1,
            slug: 'miel-multifloral',
            title: 'Miel Multifloral Valle del Elqui',
            shortDesc: 'Miel 100% pura cosechada en el corazón del Valle. Sabor intenso y natural.',
            price: 15.00,
            image: '/images/miel_valle_elqui.png'
        },
        {
            id: 2,
            slug: 'propoleo-puro',
            title: 'Propóleo Puro (Tintura)',
            shortDesc: 'Potente antibiótico natural. Refuerza tu sistema inmune.',
            price: 18.50,
            image: '/images/propoleo_tincture.png'
        },
        {
            id: 3,
            slug: 'polen-abeja',
            title: 'Polen de Abeja',
            shortDesc: 'Superalimento energético rico en proteínas y vitaminas.',
            price: 22.00,
            image: '/images/polen_abeja.png'
        },
        {
            id: 4,
            slug: 'jalea-real',
            title: 'Jalea Real Fresca',
            shortDesc: 'El secreto de la vitalidad y longevidad de la colmena.',
            price: 35.00,
            image: '/images/jalea.jpg' // Revert to placeholder or existing
        }
    ];

    return (
        <Layout title="Tesoros de la Colmena - HoniFarm" description="Productos 100% puros de nuestras colmenas.">
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
