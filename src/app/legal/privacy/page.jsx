'use client';

import React from 'react';
import Layout from '../../../components/layout/Layout.jsx';

export default function PrivacyPage() {
    return (
        <Layout title="Política de Privacidad - ColmenaUrbana" description="Política de privacidad y protección de datos.">
            <div className="py-24 bg-surface-1">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl font-bold mb-8 text-secondary">Política de Privacidad</h1>

                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p>Última actualización: {new Date().toLocaleDateString('es-CL')}</p>

                        <h3>1. Introducción</h3>
                        <p>En <strong>ColmenaUrbana</strong>, nos comprometemos a proteger su privacidad y sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información, en conformidad con la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> de Chile.</p>

                        <h3>2. Información que Recopilamos</h3>
                        <p>Podemos recopilar la siguiente información personal cuando interactúa con nuestro sitio web o realiza una compra:</p>
                        <ul>
                            <li>Información de contacto (nombre, correo electrónico, número de teléfono).</li>
                            <li>Información de envío y facturación (dirección, RUT).</li>
                        </ul>

                        <h3>3. Uso de la Información</h3>
                        <p>Utilizamos su información para:</p>
                        <ul>
                            <li>Procesar y enviar sus pedidos de miel y productos apícolas.</li>
                            <li>Comunicarnos con usted sobre el estado de su pedido.</li>
                            <li>Responder a sus consultas.</li>
                        </ul>

                        <h3>4. Protección de Datos</h3>
                        <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado, alteración o divulgación.</p>

                        <h3>5. Sus Derechos</h3>
                        <p>De acuerdo con la legislación chilena, usted tiene derecho a acceder, rectificar y cancelar sus datos personales. Puede ejercer estos derechos contactándonos en contacto@colmenaurbana.cl.</p>

                        <h3>6. Cookies</h3>
                        <p>Utilizamos cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar las cookies si lo prefiere.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
