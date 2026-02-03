import '../index.css';
import ScrollToTop from '../components/layout/ScrollToTop.jsx';
import { CartProvider } from '../context/CartContext.jsx';

export const metadata = {
    title: 'ColmenaUrbana - Miel del Valle del Elqui',
    description: 'Productos de miel natural, propóleo y servicios de apicultura en el Valle del Elqui, Chile.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body suppressHydrationWarning>
                <CartProvider>
                    <ScrollToTop />
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}