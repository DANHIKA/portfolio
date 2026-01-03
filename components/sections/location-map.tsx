"use client";

import { Map, MapMarker } from "@/components/ui/map";
import { motion } from "framer-motion";

export default function LocationMap() {
  // Coordinates for Lilongwe, Malawi
  const position = { lat: -13.9626, lng: 33.7741 }; 

  return (
    <div className="h-full w-full grayscale-[0.2] dark:grayscale-[0.5] contrast-[1.1] [&_.maplibregl-ctrl-attrib]:hidden [&_.maplibregl-ctrl-logo]:hidden">
      <Map
        center={[position.lng, position.lat]}
        zoom={12}
        attributionControl={false}
      >
        <MapMarker latitude={position.lat} longitude={position.lng}>
          <div className="relative flex items-center justify-center pointer-events-none">
            {/* Large selection area highlight */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute h-[250px] w-[250px] rounded-full bg-primary/10 border border-primary/20 backdrop-blur-[2px]" 
            />
            {/* Subtle pulsing ring to indicate center of selection */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute h-[180px] w-[180px] rounded-full bg-primary/5 border border-primary/10" 
            />
            {/* Very faint inner circle */}
            <div className="h-4 w-4 rounded-full bg-primary/20 blur-sm" />
          </div>
        </MapMarker>
      </Map>
    </div>
  );
}
