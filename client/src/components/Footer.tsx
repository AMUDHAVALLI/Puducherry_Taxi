import { Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  const services = ["Local Rental", "Outstation Ride", "City Ride", "Airport Transfer"];
  const popularRoutes = [
    "Chennai to Pondicherry",
    "Chennai to Bangalore",
    "Chennai to Madurai",
    "Chennai to Tirupati",
  ];

  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-black cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 px-2 py-1 rounded-xl hover:shadow-xl hover:shadow-yellow-500/20 group mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white font-extrabold px-3 py-1 rounded-2xl text-lg italic shadow-lg hover:shadow-xl transform hover:rotate-1 transition-all duration-300" style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                🚖 Pondicherry
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 font-extrabold text-lg ml-0 italic animate-pulse" style={{ fontFamily: 'serif' }}>
                to Chennai
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 font-black text-lg tracking-widest animate-bounce ml-2" style={{ fontFamily: 'serif', animationDuration: '2s' }}>
                T A X I ✨
              </span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Most trusted cab rental service from Chennai to Pondicherry. Available 24/7 for your travel needs.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" onClick={() => window.open("https://facebook.com")} data-testid="button-facebook">
                <SiFacebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open("https://instagram.com")} data-testid="button-instagram">
                <SiInstagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open("https://twitter.com")} data-testid="button-twitter">
                <SiX className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Routes</h4>
            <ul className="space-y-2">
              {popularRoutes.map((route) => (
                <li key={route}>
                  <a href="#routes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {route}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                <a href="tel:+918015355460" className="text-sm text-muted-foreground hover:text-primary">
                  +91 80153 55460
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                <a href="tel:+918015521177" className="text-sm text-muted-foreground hover:text-primary">
                  +91 80155 21177
                </a>
              </li>
              <li className="flex items-start gap-2">
                <SiWhatsapp className="h-4 w-4 mt-1 text-green-500" />
                <a href="https://wa.me/918015355460" className="text-sm text-muted-foreground hover:text-primary">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
                <a href="mailto:info@chennaiponderrytaxi.com" className="text-sm text-muted-foreground hover:text-primary">
                  info@chennaiponderrytaxi.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Chennai, Tamil Nadu
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chennai to Pondicherry Taxi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
