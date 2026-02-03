import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-yellow-200/20 blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
                            100% Natural & Organic
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
                            Miel <span className="text-primary relative inline-block">
                                Pura
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                                </svg>
                            </span> <br />
                            Directa de la Colmena
                        </h1>
                        <p className="text-lg text-secondary/70 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Descubre el sabor auténtico de la naturaleza. Nuestra miel es recolectada artesanalmente para garantizar la máxima pureza y calidad en cada gota.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/products" className="btn-primary">
                                Nuestros Productos
                            </Link>
                            <Link href="/about" className="btn-outline">
                                Conócenos
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm font-medium">100% Organic</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm font-medium">Raw & Unfiltered</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 relative flex justify-center">
                        <div className="relative z-10 w-4/5 max-w-md rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/miel-manzanilla.webp"
                                alt="Frasco de Miel"
                                className="w-full h-auto object-cover transform scale-105"
                            />
                            {/* Floating Badge */}
                            <Link href="/products" className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow hidden md:block hover:scale-105 transition-transform cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">🍯</span>
                                    <div>
                                        <p className="text-xs text-gray-500 font-bold uppercase">Mejor Calidad</p>
                                        <p className="text-secondary font-bold">Miel Premium</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Decorative blob behind image */}
                        <div className="absolute inset-0 bg-primary/30 rounded-full filter blur-3xl opacity-20 transform translate-x-4 translate-y-4 -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
