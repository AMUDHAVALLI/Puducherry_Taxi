import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

interface GooglePlacesAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  id: string;
  required?: boolean;
  "data-testid"?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export function GooglePlacesAutocomplete({
  value,
  onChange,
  placeholder,
  id,
  required,
  "data-testid": testId,
}: GooglePlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        return;
      }

      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        const checkGoogle = setInterval(() => {
          if (window.google && window.google.maps) {
            setIsLoaded(true);
            clearInterval(checkGoogle);
          }
        }, 100);
        return;
      }

      window.initMap = () => {
        setIsLoaded(true);
      };

      const script = document.createElement("script");
      // AIzaSyCd0Qf_ug74Q2UGRCf1TdHyXzcEUc97130
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD7a6B2GIu3y7hlPwdYy7I_uZeb3ipOzco&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "in" },
          fields: ["formatted_address", "geometry", "name"],
          types: ["establishment", "geocode"],
        }
      );

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        if (place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange]);

  return (
    <Input
      ref={inputRef}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      data-testid={testId}
    />
  );
}