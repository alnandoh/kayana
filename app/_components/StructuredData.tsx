const StructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": ["WebSite", "Store"],
      name: "Kayana",
      url: "https://kayananusantara.com",
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  };
  
  export default StructuredData;