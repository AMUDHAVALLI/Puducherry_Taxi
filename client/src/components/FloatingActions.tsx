import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { ArrowUp, Phone } from "lucide-react";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        onClick={() => window.open("https://wa.me/918015355460", "_blank", "noopener,noreferrer")}
      >
        <SiWhatsapp className="h-6 w-6 text-white" />
      </Button>

      {/* Call Button */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => window.open("tel:+918015355460")}
      >
        <Phone className="h-5 w-5 text-white" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          variant="secondary"
          className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}