import React, { useEffect, useState } from 'react';
import Seo from '../Seo';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description, schema }) {
  const [canonical, setCanonical] = useState(null);

  useEffect(() => {
    setCanonical(window.location.href);
  }, []);

  return (
    <>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        schema={schema}
      />
      <Header />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </>
  );
}