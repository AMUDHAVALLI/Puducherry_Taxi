import { VehicleCard } from "./VehicleCard";
import swiftImg from "@assets/generated_images/Maruti_Swift_hatchback_bfdc9598.png";
import etiosImg from "@assets/generated_images/Toyota_Etios_sedan_5ee3d9ea.png";
import ertigaImg from "@assets/generated_images/Maruti_Ertiga_MPV_8c47f1e4.png";
import tempoImg from "@assets/generated_images/Tempo_traveller_showcase_f765b583.png";

export function VehicleShowcase() {
  const vehicles = [
    {
      name: "Maruti Swift",
      image: swiftImg,
      roundTripRate: "₹12/km",
      oneWayRate: "₹14/km",
      capacity: 4,
      description: "Compact yet comfortable AC cars that seat up to 4 people and give you good travel experience",
    },
    {
      name: "Toyota Etios",
      image: etiosImg,
      roundTripRate: "₹13/km",
      oneWayRate: "₹15/km",
      capacity: 4,
      description: "Top rated drivers, and best cars with extra legroom and boot space",
    },
    {
      name: "Maruti Ertiga",
      image: ertigaImg,
      roundTripRate: "₹18/km",
      oneWayRate: "₹22/km",
      capacity: 7,
      description: "Perfect choice for long trips with plenty of room for everyone including your luggage",
    },
    {
      name: "Tempo Traveller",
      image: tempoImg,
      roundTripRate: "₹26/km",
      oneWayRate: "₹30/km",
      capacity: 12,
      description: "Perfect choice for group trips with plenty of room for everyone including luggage",
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase tracking-wide">Our Fleet</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Choose from our range of well-maintained vehicles for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
