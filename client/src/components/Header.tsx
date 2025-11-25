import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navButtonClass = "text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:scale-105 hover:shadow-md active:scale-95 hover:text-primary";
  const mobileNavButtonClass = "text-left text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:scale-105 hover:shadow-md active:scale-95 hover:text-primary";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-background/95 via-primary/5 to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 group">
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-3xl cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95 px-4 py-2 rounded-xl hover:shadow-2xl hover:shadow-yellow-500/20 group">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 text-white font-extrabold px-4 py-2 rounded-2xl text-lg md:text-2xl italic shadow-lg hover:shadow-xl transform hover:rotate-1 transition-all duration-300" style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              🚖 Pondicherry
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 font-extrabold text-lg md:text-2xl ml-2 italic animate-pulse" style={{ fontFamily: 'serif' }}>
              to Chennai
            </span>
            <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 font-black text-xl md:text-3xl tracking-widest animate-bounce" style={{ fontFamily: 'serif', animationDuration: '2s' }}>
              T A X I ✨
            </span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToSection("services")}
            className={navButtonClass}
            data-testid="link-services"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("vehicles")}
            className={navButtonClass}
            data-testid="link-vehicles"
          >
            Vehicles
          </button>
          <button
            onClick={() => scrollToSection("routes")}
            className={navButtonClass}
            data-testid="link-routes"
          >
            Routes
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={navButtonClass}
            data-testid="link-about"
          >
            About
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:bg-green-100 hover:text-green-600 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
            onClick={() => window.open("tel:+918015355460")}
            data-testid="button-call"
          >
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:bg-green-100 transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95"
            onClick={() => window.open("https://wa.me/918015355460", "_blank", "noopener,noreferrer")}
            data-testid="button-whatsapp"
          >
            <SiWhatsapp className="h-5 w-5 text-green-500 hover:text-green-600" />
          </Button>
          <div className="relative">
            <Button
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-bold"
              data-testid="button-book-now"
            >
              Book Now
            </Button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
              50% OFF
            </span>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:rotate-180 active:scale-95"
                data-testid="button-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection("services")}
                  className={mobileNavButtonClass}
                  data-testid="mobile-link-services"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className={mobileNavButtonClass}
                  data-testid="mobile-link-vehicles"
                >
                  Vehicles
                </button>
                <button
                  onClick={() => scrollToSection("routes")}
                  className={mobileNavButtonClass}
                  data-testid="mobile-link-routes"
                >
                  Routes
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={mobileNavButtonClass}
                  data-testid="mobile-link-about"
                >
                  About
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
