import { Header } from "@/components/Header";
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
