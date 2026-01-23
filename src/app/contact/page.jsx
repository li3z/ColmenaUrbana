'use client';

import React from 'react';
import Layout from '../../components/layout/Layout.jsx';

export default function ContactPage() {
    return (
        <Layout title="Contacto - HoniFarm" description="Ponte en contacto con nosotros para pedidos o consultas.">
            <div className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-soft p-8 md:p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>

                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">Contáctanos</h1>

                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">Nombre</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-secondary mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="tu@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-secondary mb-2">Mensaje</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn-primary w-full md:w-auto">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
