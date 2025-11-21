import { VehicleCard } from "../VehicleCard";
import hatchbackImg from "@assets/generated_images/Hatchback_vehicle_showcase_9cf92ce3.png";

export default function VehicleCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <VehicleCard
        name="Hatchback"
        image={hatchbackImg}
        roundTripRate="₹12/km"
        oneWayRate="₹14/km"
        capacity={3}
        description="Compact yet comfortable AC cars that seat up to 3 people"
      />
    </div>
  );
}
