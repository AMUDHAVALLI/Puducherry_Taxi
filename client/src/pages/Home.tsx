import { Header } from "@/components/Header";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Hero } from "@/components/Hero";
import { VehicleShowcase } from "@/components/VehicleShowcase";
import { PopularRoutes } from "@/components/PopularRoutes";
import { TrustSection } from "@/components/TrustSection";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Best Taxi Service in Puducherry | SafeRidePro"
        description="Book the best taxi service in Puducherry with SafeRidePro. Reliable outstation cabs, airport transfers, and local sightseeing at affordable rates. 24/7 customer support."
        keywords="puducherry taxi service, pondicherry cab booking, outstation taxi puducherry, chennai to pondicherry taxi, airport pickup pondicherry"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "SafeRidePro",
            "image": "https://AMUDHAVALLI.github.io/Puducherry_Taxi/og-image.jpg",
            "description": "Professional taxi service in Puducherry offering outstation cabs, airport transfers, and local sightseeing.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Puducherry",
              "addressRegion": "PY",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "11.9416",
              "longitude": "79.8083"
            },
            "url": "https://AMUDHAVALLI.github.io/Puducherry_Taxi/",
            "telephone": "+919018540000",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <TrustSection />
      <VehicleShowcase />
      <PopularRoutes />
      <BookingForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}
