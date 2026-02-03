'use client';

import React from 'react';
import Layout from '../../components/layout/Layout.jsx';

export default function ShopPage() {
    return (
        <Layout title="Tienda - ColmenaUrbana" description="Compra nuestros productos de miel directamente.">
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-secondary mb-4">Tienda Online</h1>
                    <p className="text-xl text-gray-500">Próximamente...</p>
                </div>
            </div>
        </Layout>
    );
}
