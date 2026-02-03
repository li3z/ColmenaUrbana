import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../../context/CartContext.jsx';

export default function ProductCard({ product, buyNowMode }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleCardClick = (e) => {
        if (typeof buyNowMode !== 'undefined' && buyNowMode) {
            e.preventDefault();
            handleAddToCart(e);
            window.location.href = '/cart'; // Force redirect after add
        }
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div
            className="card group h-full flex flex-col relative cursor-pointer"
            onClick={handleCardClick}
        >
            <Link href={`/products/${product.slug}`} className="relative overflow-hidden h-64 bg-surface-2 p-6 flex items-center justify-center group-hover:bg-white transition-colors duration-500 block">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm z-10">
                    Nuevo
                </div>
            </Link>

            <div className="p-6 flex-grow flex flex-col">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Natural</span>
                    <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>

                <Link href={`/products/${product.slug}`}>
                    <h3 className="font-bold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                        {product.title}
                    </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
                    {product.shortDesc}
                </p>

                <div className="flex items-center justify-between mt-auto gap-4">
                    <span className="text-xl font-bold text-secondary">${product.price.toLocaleString('es-CL')}</span>

                    <button
                        onClick={handleAddToCart}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${added ? 'bg-green-500 text-white' : 'bg-background border border-gray-200 text-secondary hover:bg-primary hover:border-primary hover:text-white'}`}
                        title="Agregar al Carrito"
                    >
                        {added ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
