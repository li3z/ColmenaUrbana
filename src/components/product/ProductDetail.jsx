import React from 'react';
import Link from 'next/link';
// import { useParams } from 'react-router-dom'; // NextJS uses generic params in page props, usually passed down.
import { generateSchema } from '../../utils/generateSchema';

export default function ProductDetail({ product }) {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="text-gray-600">
                    <span className="font-medium">€{product.price}</span>
                    <span className="ml-4">| <span className="text-sm">Product ID: {product.id}</span></span>
                </div>
            </div>
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />
            <div className="mb-6">
                <p className="text-gray-700">{product.longDesc}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Product Schema</h2>
                <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                    {JSON.stringify(generateSchema(product), null, 2)}
                </pre>
            </div>
            <div className="flex justify-between">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                    Add to Cart
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300">
                    Share
                </button>
            </div>
        </div>
    );
}
