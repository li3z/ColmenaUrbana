'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout/Layout.jsx';
import HeroSection from '../components/layout/HeroSection.jsx';
import ProductCard from '../components/product/ProductCard.jsx';
import BlogPostPreview from '../components/blog/BlogPostPreview.jsx';
import { generateSchema } from '../utils/generateSchema.js';
import { blogPosts } from '../data/blogPosts.js';

export default function HomePage() {
    const products = [
        {
            id: 1,
            slug: 'miel-multifloral',
            title: 'Miel Multifloral Valle del Elqui',
            shortDesc: 'Miel 100% pura cosechada en el corazón del Valle. Sabor intenso y natural.',
            price: 15.00,
            image: '/images/miel_valle_elqui.png' // New generated image
        },
        {
            id: 2,
            slug: 'propoleo-puro',
            title: 'Propóleo Puro (Tintura)',
            shortDesc: 'Potente antibiótico natural. Refuerza tu sistema inmune.',
            price: 18.50,
            image: '/images/propoleo_tincture.png' // New generated image
        },
        {
            id: 3,
            slug: 'polen-abeja',
            title: 'Polen de Abeja',
            shortDesc: 'Superalimento energético rico en proteínas y vitaminas.',
            price: 22.00,
            image: '/images/polen_abeja.png' // New generated image
        }
    ];

    const services = [
        {
            id: 1,
            title: 'Polinización de Cultivos',
            description: 'Servicio de alquiler de colmenas para polinización de cultivos, mejorando el rendimiento agrícola de forma natural.'
        },
        {
            id: 2,
            title: 'Apiterapia',
            description: 'Tratamientos naturales utilizando productos de la colmena como apitoxina, polen y jalea real para el bienestar.'
        },
        {
            id: 3,
            title: 'Asesorías Apícolas',
            description: 'Consultoría profesional familiar. Más de 50 años de experiencia en el Valle del Elqui.'
        }
    ];

    const schema = generateSchema({
        type: 'LocalBusiness',
        name: 'HoniFarm',
        description: 'Una empresa especializada en productos de apicultura y miel natural del Valle del Elqui.',
        url: 'https://honifarm.com',
        logo: 'https://honifarm.com/logo.png'
    });

    return (
        <Layout
            title="HoniFarm - Miel y Apicultura del Valle del Elqui"
            description="Productos de miel natural, propóleo y servicios de apicultura en el Valle del Elqui."
            schema={schema}
        >
            <HeroSection />

            {/* Products Section */}
            <section className="py-24 bg-surface-1 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase opacity-60 text-sm">Nuestro Catálogo</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Tesoros de la Colmena</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <div key={product.id} className="h-full">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/products" className="btn-outline">Ver Todo el Catálogo</Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute top-0 left-1/2 -ml-96 -mt-20 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl -z-10"></div>

                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Servicios</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2">Cuidamos de la Naturaleza</h2>
                        </div>
                        <p className="text-gray-600 max-w-md mb-2">
                            Ofrecemos servicios integrales desde la polinización hasta terapias naturales, con la experiencia única del Valle del Elqui.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.id} className="bg-surface-1 rounded-3xl p-8 shadow-soft border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all">
                                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                                <Link href="/services" className="text-primary font-bold uppercase text-sm tracking-wider hover:underline">
                                    Ver Detalle →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-24 bg-surface-1">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Desde el Panal (Blog)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map(post => (
                            <BlogPostPreview key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
