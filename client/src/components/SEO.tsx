import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
  keywords?: string;
}

export default function SEO({ 
  title, 
  description, 
  name = "Chennai to Pondicherry Taxi", 
  type = "website",
  keywords
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${name}` : name}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title ? `${title} | ${name}` : name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${window.location.origin}/icon.svg`} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${name}` : name} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
