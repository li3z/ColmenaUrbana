'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout.jsx';

export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: 'Polinización de Cultivos',
            description: 'Ofrecemos un servicio profesional de alquiler de colmenas para la polinización de cultivos en el Valle del Elqui y alrededores. Nuestras abejas fuertes y sanas garantizan un aumento significativo en la calidad y cantidad de su cosecha.',
            icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Apiterapia',
            description: 'Descubra los beneficios curativos de los productos de la colmena. Brindamos terapias con apitoxina, consumo de polen y propóleos para tratar diversas afecciones de forma natural, guiados por nuestro conocimiento ancestral y profesional.',
            icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Asesorías Apícolas',
            description: 'Compartimos nuestros 50+ años de experiencia familiar. Ofrecemos consultoría para nuevos apicultores, instalación de apiarios y manejo sanitario, adaptados a las condiciones climáticas del norte de Chile.',
            icon: (
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    return (
        <Layout title="Servicios - ColmenaUrbana" description="Servicios profesionales de apicultura en el Valle del Elqui.">
            <div className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase opacity-60 text-sm">Nuestro Trabajo</span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-secondary">Servicios Apícolas</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                            Combinamos tradición e innovación para ofrecer soluciones sostenibles.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.id} className="bg-surface-1 rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group">
                                <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <Link href="/contact" className="btn-outline w-full">
                                        Contáctanos
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
