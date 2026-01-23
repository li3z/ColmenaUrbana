import '../index.css';
import ScrollToTop from '../components/layout/ScrollToTop.jsx';

export const metadata = {
    title: 'Apicultura Natural',
    description: 'Productos de miel natural y servicios de apicultura',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body suppressHydrationWarning>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}