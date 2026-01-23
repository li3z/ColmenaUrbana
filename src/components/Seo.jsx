import React from 'react';

export default function Seo({ title, description, canonical, schema }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Apiculture Business" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@apiculturebiz" />
      <meta name="twitter:creator" content="@apiculturebiz" />

      {/* Schema.org */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schema,
          }}
        />
      )}
    </>
  );
}