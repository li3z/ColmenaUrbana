import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 min-w-[2.5rem] bg-primary rounded-full flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.95-1.477.125.045c.87.317 1.62.903 2.147 1.666L17.15 11l.006.002.348-.12c.57-.215 1.14-.383 1.706-.51L12 14.5l-7.21-4.128c.566.126 1.136.295 1.706.51l.348.12.006-.002-.072.134c.527-.763 1.277-1.349 2.147-1.666L9.05 11 12 11z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-secondary">Colmena<span className="text-primary-600">Urbana</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {['Inicio', 'Nosotros', 'Servicios', 'Productos', 'Blog', 'Contacto'].map((item) => {
                        const links = {
                            'Inicio': '/',
                            'Nosotros': '/about',
                            'Servicios': '/services',
                            'Productos': '/products',
                            'Blog': '/blog',
                            'Contacto': '/contact'
                        };
                        return (
                            <Link
                                key={item}
                                href={links[item] || `/${item.toLowerCase()}`}
                                className="text-sm font-medium text-secondary/80 hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {item}
                            </Link>
                        );
                    })}
                    <Link href="/cart" className="btn-primary py-2 px-6 flex items-center gap-2">
                        <span>Carrito</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>
                </nav>

                <div className="md:hidden flex items-center gap-4">
                    <Link href="/cart" className="text-secondary p-2 relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </Link>
                    <button
                        className="text-secondary p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col space-y-4">
                    {['Inicio', 'Nosotros', 'Servicios', 'Productos', 'Blog', 'Contacto'].map((item) => {
                        const links = {
                            'Inicio': '/',
                            'Nosotros': '/about',
                            'Servicios': '/services',
                            'Productos': '/products',
                            'Blog': '/blog',
                            'Contacto': '/contact'
                        };
                        return (
                            <Link
                                key={item}
                                href={links[item] || `/${item.toLowerCase()}`}
                                className="text-secondary font-medium hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Header;
