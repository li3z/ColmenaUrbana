'use client';

import React, { useState } from 'react';
import Layout from '../../components/layout/Layout.jsx';
import { useCart } from '../../context/CartContext.jsx';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        transactionId: '',
        address: ''
    });
    const [submitted, setSubmitted] = useState(false);

    // Totals
    const subtotal = getCartTotal();
    const shipping = subtotal > 0 ? 5000 : 0; // Flat rate $5.000
    const total = subtotal + shipping;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to a backend
        console.log('Order Submitted:', { ...formData, cart, total });

        // Simulating success
        setSubmitted(true);
        setTimeout(() => {
            clearCart();
            // Optional: Redirect or reset
        }, 1000);
    };

    if (submitted) {
        return (
            <Layout title="Compra Exitosa - ColmenaUrbana">
                <div className="py-24 bg-surface-1 min-h-[60vh] flex items-center justify-center">
                    <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-lg mx-4">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 text-secondary">¡Gracias por tu Compra!</h1>
                        <p className="text-gray-600 mb-6">
                            Hemos recibido tu reporte de transferencia. Procesaremos tu pedido y te contactaremos a <strong>{formData.email}</strong> pronto.
                        </p>
                        <Link href="/" className="btn-primary inline-block">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title="Carrito de Compras - ColmenaUrbana">
            <div className="py-24 bg-surface-1">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-12 text-secondary text-center">Tu Carrito</h1>

                    {cart.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500 mb-8">Tu carrito está vacío.</p>
                            <Link href="/products" className="btn-primary">
                                Ver Productos
                            </Link>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Product List */}
                            <div className="bg-white p-6 rounded-3xl shadow-soft">
                                <h2 className="text-2xl font-bold mb-6 text-secondary">Productos</h2>
                                <div className="space-y-6">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex items-center gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                            <div className="w-24 h-24 bg-surface-2 rounded-xl p-2 flex-shrink-0">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-grow">
                                                <Link href={`/products/${item.slug}`} className="font-bold text-secondary hover:text-primary transition-colors">
                                                    {item.title}
                                                </Link>
                                                <p className="text-sm text-gray-500">{item.shortDesc}</p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <span className="font-bold text-primary">${item.price.toLocaleString('es-CL')}</span>
                                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="px-3 py-1 hover:bg-gray-50 text-gray-500"
                                                        >-</button>
                                                        <span className="px-3 py-1 font-medium text-secondary">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="px-3 py-1 hover:bg-gray-50 text-gray-500"
                                                        >+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Checkout Form & Summary */}
                            <div className="space-y-8">
                                {/* Order Summary */}
                                <div className="bg-white p-6 rounded-3xl shadow-soft">
                                    <h2 className="text-2xl font-bold mb-6 text-secondary">Resumen de Compra</h2>
                                    <div className="space-y-4 text-gray-600">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toLocaleString('es-CL')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Envío (Tarifa Plana)</span>
                                            <span>${shipping.toLocaleString('es-CL')}</span>
                                        </div>
                                        <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-xl text-secondary">
                                            <span>Total</span>
                                            <span>${total.toLocaleString('es-CL')}</span>
                                        </div>
                                        <p className="text-xs text-center text-gray-400 mt-4">* IVA incluido en todos los precios</p>
                                    </div>
                                </div>

                                {/* Payment & Form */}
                                <div className="bg-white p-6 rounded-3xl shadow-soft border-t-4 border-primary">
                                    <h2 className="text-2xl font-bold mb-6 text-secondary">Finalizar Compra</h2>

                                    <div className="bg-blue-50 p-4 rounded-xl mb-6 text-sm text-blue-800">
                                        <p className="font-bold mb-2">Datos para Transferencia:</p>
                                        <p>Banco: BancoEstado</p>
                                        <p>Tipo: Cuenta RUT / Vista</p>
                                        <p>Número: 12.345.678-9</p>
                                        <p>Nombre: ColmenaUrbana SpA</p>
                                        <p>RUT: 76.543.210-K</p>
                                        <p>Correo: pagos@colmenaurbana.cl</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Dirección de Envío</label>
                                            <input
                                                type="text"
                                                name="address"
                                                required
                                                placeholder="Calle, Número, Comuna, Ciudad"
                                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">ID Transacción / Comprobante</label>
                                            <input
                                                type="text"
                                                name="transactionId"
                                                required
                                                placeholder="Ej: 123456789"
                                                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                                onChange={handleInputChange}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Ingresa el código de operación o adjunta el comprobante al correo.</p>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-3 text-lg mt-4"
                                            disabled={cart.length === 0}
                                        >
                                            Reportar Pago y Pedir
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
