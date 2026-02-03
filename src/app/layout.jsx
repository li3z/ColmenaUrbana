import '../index.css';
import ScrollToTop from '../components/layout/ScrollToTop.jsx';
import { CartProvider } from '../context/CartContext.jsx';

export const metadata = {
    title: 'Apicultura Natural',
    description: 'Productos de miel natural y servicios de apicultura',
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