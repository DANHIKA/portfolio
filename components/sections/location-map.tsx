"use client";

import { Map, useMap } from "@/components/ui/map";
import { useEffect, useMemo } from "react";

function CitySelection({ center }: { center: { lat: number; lng: number } }) {
  const { map, isLoaded } = useMap();

  const geojsonData = useMemo(() => {
    // Generate a circular polygon around the center
    const radiusInKm = 4;
    const points = 64;
    const coords = [];
    const distanceX = radiusInKm / (111.32 * Math.cos((center.lat * Math.PI) / 180));
    const distanceY = radiusInKm / 110.574;

    for (let i = 0; i < points; i++) {
      const theta = (i / points) * (2 * Math.PI);
      const x = distanceX * Math.cos(theta);
      const y = distanceY * Math.sin(theta);
      coords.push([center.lng + x, center.lat + y]);
    }
    coords.push(coords[0]);

    return {
      type: "FeatureCollection" as const,
      features: [
        {
          type: "Feature" as const,
          properties: { name: "Lilongwe" },
          geometry: {
            type: "Polygon" as const,
            coordinates: [coords],
          },
        },
      ],
    };
  }, [center]);

  useEffect(() => {
    if (!map || !isLoaded) return;

    // Add source if it doesn't exist
    if (!map.getSource("city-selection")) {
      map.addSource("city-selection", {
        type: "geojson",
        data: geojsonData,
      });
    }

    // Add fill layer (the selection highlight)
    if (!map.getLayer("city-fill")) {
      map.addLayer({
        id: "city-fill",
        type: "fill",
        source: "city-selection",
        paint: {
          "fill-color": "hsl(160, 100%, 50%)", // Matches your primary color theme roughly
          "fill-opacity": 0.15,
        },
      });
    }

    // Add outline layer
    if (!map.getLayer("city-outline")) {
      map.addLayer({
        id: "city-outline",
        type: "line",
        source: "city-selection",
        paint: {
          "line-color": "hsl(160, 100%, 50%)",
          "line-width": 2,
          "line-opacity": 0.3,
        },
      });
    }

    return () => {
      if (map.getLayer("city-fill")) map.removeLayer("city-fill");
      if (map.getLayer("city-outline")) map.removeLayer("city-outline");
      if (map.getSource("city-selection")) map.removeSource("city-selection");
    };
  }, [map, isLoaded, geojsonData]);

  return null;
}

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
        <CitySelection center={position} />
      </Map>
    </div>
  );
}
