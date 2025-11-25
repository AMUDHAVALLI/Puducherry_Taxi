import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Users, Briefcase, Luggage } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [bookingType, setBookingType] = useState("outstation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [packageType, setPackageType] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate mandatory fields
    if (!name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your WhatsApp number.",
        variant: "destructive",
      });
      return;
    }
    
    if (!date) {
      toast({
        title: "Validation Error",
        description: "Please select a date for your journey.",
        variant: "destructive",
      });
      return;
    }
    
    if (!pickup.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter pickup location.",
        variant: "destructive",
      });
      return;
    }
    
    if (bookingType === "outstation" && !drop.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter drop location for outstation booking.",
        variant: "destructive",
      });
      return;
    }
    
    if (bookingType === "local" && !packageType) {
      toast({
        title: "Validation Error",
        description: "Please select a package for local rental.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Booking submitted");
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly on WhatsApp to confirm your booking.",
    });
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase tracking-wide">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text animate-pulse">
              Book Your
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 ml-4">
              Taxi 🚖
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-in">Fill in your details and get instant fare estimate ⚡</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <Tabs value={bookingType} onValueChange={setBookingType} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="local" data-testid="tab-local">Local Rental</TabsTrigger>
                <TabsTrigger value="outstation" data-testid="tab-outstation">Outstation</TabsTrigger>
                <TabsTrigger value="city" data-testid="tab-city">City Ride</TabsTrigger>
                <TabsTrigger value="airport" data-testid="tab-airport">Airport</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name <span className="text-destructive">*</span></Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    data-testid="input-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp Number <span className="text-destructive">*</span></Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 80153 55460" 
                    data-testid="input-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Date & Time <span className="text-destructive">*</span></Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                        data-testid="button-date-picker"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location <span className="text-destructive">*</span></Label>
                  <Input 
                    id="pickup" 
                    placeholder="Enter pickup location" 
                    data-testid="input-pickup"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    required
                  />
                </div>

                {bookingType === "outstation" && (
                  <div className="space-y-2">
                    <Label htmlFor="drop">Drop Location <span className="text-destructive">*</span></Label>
                    <Input 
                      id="drop" 
                      placeholder="Enter drop location" 
                      data-testid="input-drop"
                      value={drop}
                      onChange={(e) => setDrop(e.target.value)}
                      required
                    />
                  </div>
                )}

                {bookingType === "local" && (
                  <div className="space-y-2">
                    <Label htmlFor="package">Select Package <span className="text-destructive">*</span></Label>
                    <Select value={packageType} onValueChange={setPackageType}>
                      <SelectTrigger data-testid="select-package">
                        <SelectValue placeholder="Choose package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2h20k">2 Hours / 20 Km</SelectItem>
                        <SelectItem value="4h40k">4 Hours / 40 Km</SelectItem>
                        <SelectItem value="8h80k">8 Hours / 80 Km</SelectItem>
                        <SelectItem value="12h120k">12 Hours / 120 Km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="persons">Number of Persons</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="persons" type="number" placeholder="0" className="pl-10" data-testid="input-persons" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="luggage">Luggage (Suitcases)</Label>
                  <div className="relative">
                    <Luggage className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="luggage" type="number" placeholder="0" className="pl-10" data-testid="input-luggage" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Additional Notes</Label>
                <Textarea id="note" placeholder="Any special requests or instructions..." data-testid="textarea-note" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="flex-1" size="lg" data-testid="button-check-price">
                  Check Price & Book
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 gap-2 bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300"
                  onClick={() => window.open("https://wa.me/918015355460", "_blank", "noopener,noreferrer")}
                  data-testid="button-whatsapp-booking"
                >
                  <SiWhatsapp className="h-5 w-5 text-green-500" />
                  Book via WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
