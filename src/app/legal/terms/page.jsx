'use client';

import React from 'react';
import Layout from '../../../components/layout/Layout.jsx';

export default function TermsPage() {
    return (
        <Layout title="Términos y Condiciones - ColmenaUrbana" description="Términos y condiciones de uso y venta.">
            <div className="py-24 bg-surface-1">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-secondary">Términos y Condiciones</h1>

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>Última actualización: {new Date().toLocaleDateString('es-CL')}</p>

                        <h3>1. Ámbito de Aplicación</h3>
                        <p>Estos términos y condiciones regulan la venta de productos apícolas y el uso del sitio web <strong>ColmenaUrbana</strong>. Al utilizar este sitio, usted acepta estos términos en su totalidad.</p>

                        <h3>2. Productos</h3>
                        <p>Nuestros productos son 100% naturales y artesanales. Debido a esto, pueden existir ligeras variaciones en color o textura entre lotes, lo cual es señal de su pureza y falta de procesamiento industrial.</p>

                        <h3>3. Precios y Pagos</h3>
                        <p>Todos los precios están expresados en Pesos Chilenos (CLP) e incluyen IVA. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso.</p>

                        <h3>4. Envíos y Despachos</h3>
                        <p>Realizamos despachos a todo Chile. Los tiempos de entrega pueden variar según la región. ColmenaUrbana no se hace responsable por retrasos imputables a la empresa de transporte.</p>

                        <h3>5. Cambios y Devoluciones</h3>
                        <p>De acuerdo con la <strong>Ley del Consumidor (Sernac)</strong>, usted tiene derecho a la garantía legal (6x3) en caso de productos defectuosos.</p>
                        <ul>
                            <li>Si recibe un producto dañado (envase roto), contáctenos inmediatamente con fotos para gestionar el cambio o reembolso.</li>
                            <li>Por ser productos alimenticios, no aceptamos devoluciones por "arrepentimiento" una vez abierto el sello de seguridad, para garantizar la inocuidad.</li>
                        </ul>

                        <h3>6. Contacto</h3>
                        <p>Para cualquier duda o reclamo, puede escribirnos a contacto@colmenaurbana.cl.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
