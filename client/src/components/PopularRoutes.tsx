import { RouteCard } from "./RouteCard";

export function PopularRoutes() {
  const routes = [
    { from: "Chennai", to: "Pondicherry", duration: "2.5 hrs", startingPrice: "₹1,800" },
    { from: "Chennai", to: "Bangalore", duration: "6 hrs", startingPrice: "₹3,500" },
    { from: "Chennai", to: "Madurai", duration: "7 hrs", startingPrice: "₹4,200" },
    { from: "Chennai", to: "Tirupati", duration: "3 hrs", startingPrice: "₹2,100" },
    { from: "Chennai", to: "Coimbatore", duration: "7.5 hrs", startingPrice: "₹4,500" },
    { from: "Chennai", to: "Ooty", duration: "9 hrs", startingPrice: "₹5,400" },
    { from: "Chennai", to: "Kodaikanal", duration: "8.5 hrs", startingPrice: "₹5,100" },
    { from: "Chennai", to: "Vellore", duration: "2.5 hrs", startingPrice: "₹1,800" },
    { from: "Pondicherry", to: "Chennai", duration: "2.5 hrs", startingPrice: "₹1,800" },
  ];

  return (
    <section id="routes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase tracking-wide">Popular Routes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Quick booking for our most requested destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {routes.map((route) => (
            <RouteCard key={`${route.from}-${route.to}`} {...route} />
          ))}
        </div>
      </div>
    </section>
  );
}
