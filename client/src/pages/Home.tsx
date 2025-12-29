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
        title="Chennai to Pondicherry Taxi - Trusted Cab & Car Rental Services"
        description="Book reliable taxi and cab services from Chennai to Pondicherry. Outstation trips, local rentals, airport transfers. 24/7 service, verified drivers, transparent pricing. Call +91 80153 55460"
        keywords="Chennai to Pondicherry taxi, Chennai Pondicherry cab, outstation taxi Chennai, car rental Chennai, airport taxi Chennai, local taxi rental, Chennai cab service, Pondicherry taxi booking"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Chennai to Pondicherry Taxi",
            "image": "https://chennaipondicherrytaxi.com/og-image.jpg",
            "description": "Book reliable taxi services from Chennai to Pondicherry. Outstation trips, local rentals, airport transfers with verified drivers and transparent pricing.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "TN",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0827",
              "longitude": "80.2707"
            },
            "url": "https://chennaipondicherrytaxi.com/",
            "telephone": "+918015355460",
            "priceRange": "₹₹"
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
