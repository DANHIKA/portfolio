"use client";

import { Map, MapMarker } from "@/components/ui/map";
import { motion } from "framer-motion";

export default function LocationMap() {
  // Coordinates for Lilongwe, Malawi
  const position = { lat: -13.9626, lng: 33.7741 }; 

  return (
    <div className="h-full w-full grayscale-[0.2] dark:grayscale-[0.5] contrast-[1.1]">
      <Map
        initialViewState={{
          latitude: position.lat,
          longitude: position.lng,
          zoom: 12,
        }}
        attributionControl={false}
        className="h-full w-full"
      >
        <MapMarker latitude={position.lat} longitude={position.lng}>
          <div className="relative flex h-12 w-12 items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute h-full w-full rounded-full bg-primary/40" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute h-6 w-6 rounded-full bg-primary/20 border border-primary/50" 
            />
            <div className="h-3 w-3 rounded-full bg-primary border-2 border-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10" />
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}
