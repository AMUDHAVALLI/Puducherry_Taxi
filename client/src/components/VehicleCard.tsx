import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface VehicleCardProps {
  name: string;
  image: string;
  roundTripRate: string;
  oneWayRate: string;
  capacity: number;
  description: string;
}

export function VehicleCard({
  name,
  image,
  roundTripRate,
  oneWayRate,
  capacity,
  description,
}: VehicleCardProps) {
  const handleSelect = () => {
    console.log(`Vehicle ${name} selected`);
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all h-full flex flex-col" data-testid={`card-vehicle-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold">{name}</h3>
          <Badge variant="secondary" className="gap-1">
            <Users className="h-3 w-3" />
            {capacity}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Round Trip</span>
            <span className="font-mono font-semibold text-primary">
              {roundTripRate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">One-Way</span>
            <span className="font-mono font-semibold text-primary">
              {oneWayRate}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" onClick={handleSelect} data-testid={`button-select-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          Select Vehicle
        </Button>
      </CardFooter>
    </Card>
  );
}
