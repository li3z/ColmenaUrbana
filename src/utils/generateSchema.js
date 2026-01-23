export function generateSchema(product) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Apiculture Business",
    "image": "https://example.com/logo.png",
    "url": "https://apiculture-business.com",
    "telephone": "+56912345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Falsa 123",
      "addressLocality": "Santiago",
      "addressRegion": "Región Metropolitana",
      "postalCode": "12345",
      "addressCountry": "Chile"
    },
    "openingHours": "Mo-Su 09:00-18:00",
    "sameAs": [
      "https://www.facebook.com/apiculturebiz",
      "https://www.instagram.com/apiculturebiz"
    ],
    "description": "We offer high-quality honey, bee products, and educational workshops on apiculture."
  });
}