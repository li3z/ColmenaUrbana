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
    const [showSeasonModal, setShowSeasonModal] = useState(true);
    const [stockVerified, setStockVerified] = useState(false);

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

    const getWhatsAppUrl = () => {
        const phone = '56935409432';
        let message = "Hola! Me gustaría verificar el stock de los siguientes productos antes de transferir:\n\n";
        cart.forEach(item => {
            message += `- ${item.title} (x${item.quantity})\n`;
        });
        message += `\nTotal estimado: $${total.toLocaleString('es-CL')}`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send this data to a backend
        console.log('Order Submitted:', { ...formData, cart, total, stockVerified });

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
            {/* Seasonal Warning Modal */}
            {showSeasonModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-fade-in relative">
                        <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-center text-secondary mb-4">¡Aviso Importante!</h3>
                        <p className="text-gray-600 text-center mb-8 text-lg">
                            Los productos apícolas son <strong>por temporadas</strong>. <br />
                            Por favor, asegúrate de que haya stock disponible contactándonos antes de realizar el pago.
                        </p>
                        <button
                            onClick={() => setShowSeasonModal(false)}
                            className="w-full btn-primary py-3 text-lg"
                        >
                            Aceptar y Continuar
                        </button>
                    </div>
                </div>
            )}

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
                                        <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0 relative">
                                            <div className="w-full sm:w-24 h-32 sm:h-24 bg-surface-2 rounded-xl p-2 flex-shrink-0 flex items-center justify-center">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex-grow w-full">
                                                <div className="flex justify-between items-start">
                                                    <Link href={`/products/${item.slug}`} className="font-bold text-secondary hover:text-primary transition-colors text-lg sm:text-base">
                                                        {item.title}
                                                    </Link>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="sm:hidden text-gray-400 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-1">{item.shortDesc}</p>
                                                <div className="flex items-center justify-between mt-4 sm:justify-start sm:gap-6">
                                                    <span className="font-bold text-primary text-lg">${item.price.toLocaleString('es-CL')}</span>
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
                                                className="hidden sm:block text-gray-400 hover:text-red-500 transition-colors p-2"
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

                                    {/* Stock Check CTA */}
                                    <div className="bg-green-50 p-6 rounded-3xl mb-8 border border-green-100">
                                        <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-2.778-1.366-3.138-1.522-.361-.156-.623-.234-.885.156-.262.39-1.011 1.272-1.238 1.533-.226.262-.454.292-.816.11-1.838-.923-3.048-1.631-4.269-3.739-.322-.559.321-.518.919-1.706.108-.216.054-.406-.027-.57-.082-.164-.727-1.753-.996-2.401-.261-.628-.526-.541-.722-.551-.186-.009-.4-.009-.613-.009s-.559.081-.852.398c-.293.318-1.119 1.093-1.119 2.666 0 1.573 1.144 3.092 1.303 3.303.159.211 2.261 3.444 5.474 4.831 2.128.919 2.964.918 3.992.86 1.134-.065 2.778-1.134 3.169-2.229.392-1.095.392-2.031.274-2.231z" /></svg>
                                            Paso 1: Verificar Stock
                                        </h3>
                                        <p className="text-sm text-green-700 mb-4">
                                            Antes de transferir, confirma disponibilidad enviándonos tu lista de compra por WhatsApp.
                                        </p>
                                        <a
                                            href={getWhatsAppUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm"
                                        >
                                            Verificar Stock en WhatsApp
                                        </a>
                                    </div>

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

                                        {/* Legal Checkbox */}
                                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className="flex items-center h-6">
                                                <input
                                                    id="stock-verified"
                                                    type="checkbox"
                                                    checked={stockVerified}
                                                    onChange={(e) => setStockVerified(e.target.checked)}
                                                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                                                />
                                            </div>
                                            <label htmlFor="stock-verified" className="text-sm text-gray-600 cursor-pointer select-none">
                                                Declaración: Confirmo que <strong>he verificado el stock</strong> de los productos vía WhatsApp o Telegram antes de reportar este pago.
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            className={`w-full py-3 text-lg mt-4 font-bold rounded-xl transition-all ${stockVerified && cart.length > 0
                                                    ? 'btn-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                }`}
                                            disabled={!stockVerified || cart.length === 0}
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
