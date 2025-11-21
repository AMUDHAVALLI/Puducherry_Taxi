import { Shield, Clock, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TrustSection() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Customer Support",
      description: "Our support team is always at your service to help solve any problem",
    },
    {
      icon: Shield,
      title: "Verified Drivers",
      description: "All our driver-partners are background verified and trained professionals",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden charges. What you see is what you pay",
    },
    {
      icon: Star,
      title: "Trusted Service",
      description: "Most reliable cab service in Chennai and Pondicherry since years",
    },
  ];

  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase tracking-wide">Why Choose Chennai to Pondicherry Taxi?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            We provide chauffeur-driven A/C and Non-A/C cabs at the best price. We are known for our reliability from Chennai to Pondicherry and across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center hover-elevate transition-all" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-muted-foreground">
            Our chauffeurs are well-mannered and courteous in their interactions and have thorough knowledge of the local routes and travel destinations. Many of our customers return to avail our services on a regular basis.
          </p>
        </div>
      </div>
    </section>
  );
}
