import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Chennai_Marina_Beach_hero_eb5c64a0.png";
import { Car, MapPin, Plane, Navigation } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceTypes = [
    {
      id: "local",
      label: "Local Rental",
      icon: Car,
      description: "Hourly packages for city travel",
    },
    {
      id: "outstation",
      label: "Outstation",
      icon: Navigation,
      description: "Inter-city trips across Tamil Nadu",
    },
    {
      id: "city",
      label: "City Ride",
      icon: MapPin,
      description: "Point-to-point city transfers",
    },
    {
      id: "airport",
      label: "Airport Transfer",
      icon: Plane,
      description: "Reliable airport pickups & drops",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-wide">
            Book Your Ride Easily
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium">
            Most Trusted Cab Rental Service from Chennai to Pondicherry
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {serviceTypes.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="p-4 bg-white/10 backdrop-blur-md border-white/20 hover-elevate active-elevate-2 cursor-pointer transition-all"
                  onClick={scrollToBooking}
                  data-testid={`card-service-${service.id}`}
                >
                  <Icon className="h-8 w-8 text-white mb-2 mx-auto" />
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {service.label}
                  </h3>
                  <p className="text-xs text-white/70">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full text-lg h-14 bg-orange hover:bg-orange/90"
            onClick={scrollToBooking}
            data-testid="button-hero-book"
          >
            Get Started - Book Now
          </Button>
        </div>
      </div>
    </section>
  );
}
