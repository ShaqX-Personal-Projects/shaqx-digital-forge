import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  canonical,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { language } = useLanguage();
  const baseUrl = "https://shaqx.com"; // Update with your actual domain
  
  const fullTitle = title ? `${title} | ShaqX` : "ShaqX - AI Marketing Platform | Social Media, SEO & Email | CVR 45847136";
  const metaDescription = description || "Lad AI skrive dine sociale opslag, e-mails, SEO-tekster og Google My Business indlæg. Spar tid og øg din synlighed online med smart marketing-automatisering. Start gratis i dag.";
  const metaKeywords = keywords || "AI marketing, sociale medier, email marketing, SEO tekster, Google My Business, marketing automatisering, content marketing, Danmark";
  
  const currentUrl = canonical || `${baseUrl}${window.location.pathname}`;
  const alternateUrl = language === "en" 
    ? `${baseUrl}${window.location.pathname}?lang=da`
    : `${baseUrl}${window.location.pathname}?lang=en`;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShaqX",
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    description: metaDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DK"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "info@shaqx.com"
    },
    sameAs: [
      // Add your social media profiles here
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="ShaqX" />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate Language URLs */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${window.location.pathname}?lang=en`} />
      <link rel="alternate" hrefLang="da" href={`${baseUrl}${window.location.pathname}?lang=da`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${window.location.pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="ShaqX" />
      <meta property="og:locale" content={language === "en" ? "en_US" : "da_DK"} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lovable_dev" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Performance & Security */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Additional Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
