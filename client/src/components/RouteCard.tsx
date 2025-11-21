import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface RouteCardProps {
  from: string;
  to: string;
  duration: string;
  startingPrice: string;
}

export function RouteCard({ from, to, duration, startingPrice }: RouteCardProps) {
  const handleBookRoute = () => {
    console.log(`Booking route: ${from} to ${to}`);
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer group" onClick={handleBookRoute} data-testid={`card-route-${from.toLowerCase()}-${to.toLowerCase()}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="font-semibold text-lg">{from}</span>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-semibold text-lg">{to}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground mb-1">Starting from</p>
            <p className="font-mono font-bold text-lg text-primary">{startingPrice}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
