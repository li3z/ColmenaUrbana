'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout/Layout.jsx';

export default function AboutPage() {
    return (
        <Layout title="Nuestra Historia - HoniFarm" description="Tradición familiar en el Valle del Elqui.">
            <div className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Desde el Valle del Elqui</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 text-secondary">Raíces Profundas, Miel Pura</h1>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                            {/* Placeholder for family image */}
                            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="/images/familia_apicultora.webp" alt="Familia apicultora en Valle del Elqui" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-secondary">Más que Apicultores: Guardianes del Valle</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                En el corazón del árido pero fértil <strong>Valle del Elqui</strong>, nuestra historia se teje con el zumbido de las abejas. Somos una empresa familiar que ha aprendido a florecer en el desierto, al igual que nuestros apiarios.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                Liderados por nuestro fundador, <strong>Nutricionista y Apicultor con 25 años de experiencia</strong>, combinamos la ciencia de la alimentación con la sabiduría ancestral. Pero no estamos solos: somos herederos del conocimiento de un <strong>Agrónomo y Capacitador Apícola con más de 50 años de trayectoria</strong> en la región.
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface-1 rounded-3xl p-8 md:p-12 shadow-soft mb-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-secondary">Resiliencia y Artesanía</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Trabajamos de forma <strong>completamente artesanal</strong>, respetando los tiempos de la naturaleza y desafiando la sequía que golpea nuestra región. Cada gota de miel, cada gramo de propóleo y polen, es un testimonio de resistencia y amor por la tierra.
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    No solo producimos miel; elaboramos salud. Aprovechamos todos los subproductos de la colmena para ofrecerte lo mejor de la naturaleza, sin intermediarios ni procesos industriales.
                                </p>
                                <Link href="/contact" className="btn-primary">
                                    Contáctanos para saber más
                                </Link>
                            </div>
                            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                                {/* Placeholder for landscape image */}
                                <img src="/images/valle_elqui.jpg" alt="Paisaje Valle del Elqui" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
