import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { format } from "date-fns";
import { CalendarIcon, Users, Briefcase, Luggage } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { GooglePlacesAutocomplete } from "./GooglePlacesAutocomplete";

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [bookingType, setBookingType] = useState("outstation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [packageType, setPackageType] = useState("");
  const [persons, setPersons] = useState("");
  const [luggage, setLuggage] = useState("");
  const [note, setNote] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [showPriceModal, setShowPriceModal] = useState(false);
  const { toast } = useToast();

  const vehicles = [
    { id: "swift", name: "Maruti Swift", capacity: "4 Seater", price: "₹12/km" },
    { id: "etios", name: "Toyota Etios", capacity: "4 Seater", price: "₹13/km" },
    { id: "ertiga", name: "Maruti Ertiga",capacity: "6-7 Seater", price: "₹18/km" },
    { id: "tempo", name: "Tempo Traveller", capacity: "12-17 Seater", price: "₹26/km" }
  ];

  useEffect(() => {
    const handleServiceTypeSelect = (event: any) => {
      setBookingType(event.detail);
    };
    window.addEventListener('selectServiceType', handleServiceTypeSelect);
    return () => {
      window.removeEventListener('selectServiceType', handleServiceTypeSelect);
    };
  }, []);

  const validateForm = () => {
    if (!name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!phone.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your WhatsApp number.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!date) {
      toast({
        title: "Validation Error",
        description: "Please select a date for your journey.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!time) {
      toast({
        title: "Validation Error",
        description: "Please select a time for your journey.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!pickup.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter pickup location.",
        variant: "destructive",
      });
      return false;
    }
    
    if (bookingType === "outstation" && !drop.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter drop location for outstation booking.",
        variant: "destructive",
      });
      return false;
    }
    
    if (bookingType === "local" && !packageType) {
      toast({
        title: "Validation Error",
        description: "Please select a package for local rental.",
        variant: "destructive",
      });
      return false;
    }
    
    if (!vehicle) {
      toast({
        title: "Validation Error",
        description: "Please select a vehicle.",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowPriceModal(true);
    }
  };
  
  const sendToWhatsApp = () => {
    const selectedVehicle = vehicles.find(v => v.id === vehicle);
    const messageLines = [
      "*New Booking Request*",
      "",
      `*Service Type:* ${bookingType.charAt(0).toUpperCase() + bookingType.slice(1)}`,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Date:* ${format(date!, "PPP")} at ${time}`,
      `*Pickup:* ${pickup}`
    ];
    
    if (bookingType === "outstation" && drop) {
      messageLines.push(`*Drop:* ${drop}`);
    }
    
    if (bookingType === "local" && packageType) {
      const packageLabels: Record<string, string> = {
        "2h20k": "2 Hours / 20 Km",
        "4h40k": "4 Hours / 40 Km",
        "8h80k": "8 Hours / 80 Km",
        "12h120k": "12 Hours / 120 Km"
      };
      messageLines.push(`*Package:* ${packageLabels[packageType]}`);
    }
    
    if (selectedVehicle) messageLines.push(`*Vehicle:* ${selectedVehicle.name} (${selectedVehicle.capacity})`);
    if (persons) messageLines.push(`*Persons:* ${persons}`);
    if (luggage) messageLines.push(`*Luggage:* ${luggage}`);
    if (note) messageLines.push(`*Notes:* ${note}`);
    
    const message = messageLines.join("\n");
    const whatsappNumber = "919500972091";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you shortly on WhatsApp to confirm your booking.",
    });
  };

  const handleDirectWhatsApp = () => {
    if (validateForm()) {
      sendToWhatsApp();
    }
  };

  return (
    <section id="booking" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 uppercase tracking-wide">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text animate-pulse">
              Book Your
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 ml-4">
              Taxi 🚖
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-medium animate-fade-in">Fill in your details and get instant fare estimate ⚡</p>
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Label>Pickup Date <span className="text-destructive">*</span></Label>
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
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Pickup Time <span className="text-destructive">*</span></Label>
                  <Input
                    id="time"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    data-testid="input-time"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location <span className="text-destructive">*</span></Label>
                  <GooglePlacesAutocomplete
                    id="pickup"
                    value={pickup}
                    onChange={setPickup}
                    placeholder="Enter pickup location"
                    data-testid="input-pickup"
                    required
                  />
                </div>

                {bookingType === "outstation" && (
                  <div className="space-y-2">
                    <Label htmlFor="drop">Drop Location <span className="text-destructive">*</span></Label>
                    <GooglePlacesAutocomplete
                      id="drop"
                      value={drop}
                      onChange={setDrop}
                      placeholder="Enter drop location"
                      data-testid="input-drop"
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
                  <Label htmlFor="vehicle">Select Vehicle <span className="text-destructive">*</span></Label>
                  <Select value={vehicle} onValueChange={setVehicle}>
                    <SelectTrigger data-testid="select-vehicle">
                      <SelectValue placeholder="Choose vehicle" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((v) => (
                        <SelectItem key={v.id} value={v.id}>
                          {v.name} - {v.capacity} ({v.price})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="persons">Number of Persons</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="persons" type="number" placeholder="0" className="pl-10" data-testid="input-persons" value={persons} onChange={(e) => setPersons(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="luggage">Luggage (Suitcases)</Label>
                  <div className="relative">
                    <Luggage className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="luggage" type="number" placeholder="0" className="pl-10" data-testid="input-luggage" value={luggage} onChange={(e) => setLuggage(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Additional Notes</Label>
                <Textarea id="note" placeholder="Any special requests or instructions..." data-testid="textarea-note" value={note} onChange={(e) => setNote(e.target.value)} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" className="flex-1" size="lg" data-testid="button-check-price">
                  Check Price & Book
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 gap-2 bg-green-50 hover:bg-green-100 border-green-200 hover:border-green-300"
                  onClick={handleDirectWhatsApp}
                  data-testid="button-whatsapp-booking"
                >
                  <SiWhatsapp className="h-5 w-5 text-green-500" />
                  Book via WhatsApp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Dialog open={showPriceModal} onOpenChange={setShowPriceModal}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Booking Summary</DialogTitle>
            </DialogHeader>
            <div className="space-y-3 py-3">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service Type:</span>
                  <span className="font-medium">{bookingType.charAt(0).toUpperCase() + bookingType.slice(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="font-medium">{date && format(date, "PPP")} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pickup:</span>
                  <span className="font-medium text-right">{pickup}</span>
                </div>
                {bookingType === "outstation" && drop && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Drop:</span>
                    <span className="font-medium text-right">{drop}</span>
                  </div>
                )}
                {bookingType === "local" && packageType && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Package:</span>
                    <span className="font-medium">{packageType === "2h20k" ? "2 Hours / 20 Km" : packageType === "4h40k" ? "4 Hours / 40 Km" : packageType === "8h80k" ? "8 Hours / 80 Km" : "12 Hours / 120 Km"}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vehicle:</span>
                  <span className="font-medium">{vehicles.find(v => v.id === vehicle)?.name} ({vehicles.find(v => v.id === vehicle)?.capacity})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rate:</span>
                  <span className="font-semibold text-lg text-primary">{vehicles.find(v => v.id === vehicle)?.price}</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Button onClick={() => { setShowPriceModal(false); sendToWhatsApp(); }} className="w-full" size="lg">
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Confirm & Send to WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
