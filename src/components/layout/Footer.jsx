import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="text-2xl font-bold tracking-tight text-white">Colmena<span className="text-primary">Urbana</span></span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Cultivando dulzura natural desde 2010. Miel pura del Valle del Elqui a tu mesa.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Explorar</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Productos</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Privacidad</Link></li>
                            <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Términos</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>contacto@colmenaurbana.cl</li>
                            <li>+56 9 1234 5678</li>
                            <li>Ruta D-41, Valle del Elqui<br />Región de Coquimbo, Chile</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ColmenaUrbana. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
