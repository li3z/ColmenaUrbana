'use client';

import React, { useRef } from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductCarousel({ products, buyNowMode = false }) {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            {/* Left Button */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hidden md:flex"
                aria-label="Previous"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map(product => (
                    <div
                        key={product.id}
                        className="min-w-[280px] md:min-w-[320px] snap-start h-full"
                    >
                        <ProductCard product={product} buyNowMode={buyNowMode} />
                    </div>
                ))}
            </div>

            {/* Right Button */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 hidden md:flex"
                aria-label="Next"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
