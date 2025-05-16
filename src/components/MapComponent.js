import { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import MapLoadingOverlay from "./MapLoadingOverlay";

// Iconos personalizados
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const parkIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2373/2373927.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const ViewportHandler = ({ setNearbyParks, fetchedBoundsRef }) => {
  useMapEvents({
    moveend(e) {
      const bounds = e.target.getBounds();
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();

      const key = `${sw.lat.toFixed(3)},${sw.lng.toFixed(3)}_${ne.lat.toFixed(3)},${ne.lng.toFixed(3)}`;
      if (fetchedBoundsRef.current.has(key)) return;

      fetchedBoundsRef.current.add(key);

      const url = `https://overpass-api.de/api/interpreter?data=[out:json];
        (node["leisure"="park"](${sw.lat},${sw.lng},${ne.lat},${ne.lng});
         way["leisure"="park"](${sw.lat},${sw.lng},${ne.lat},${ne.lng});
         relation["leisure"="park"](${sw.lat},${sw.lng},${ne.lat},${ne.lng});
        );out center;`;

      axios.get(url).then((res) => {
        const elements = res.data.elements || [];

        const points = elements
          .map((el) => {
            if (el.type === "node" && el.lat && el.lon) {
              return { id: el.id, lat: el.lat, lon: el.lon, tags: el.tags || {} };
            }
            if ((el.type === "way" || el.type === "relation") && el.center) {
              return { id: el.id, lat: el.center.lat, lon: el.center.lon, tags: el.tags || {} };
            }
            return null;
          })
          .filter(Boolean);

        setNearbyParks((prev) => [...prev, ...points]);
      });
    }
  });

  return null;
};

const CenterButton = ({ userLocation }) => {
  const map = useMap();

  const handleClick = () => {
    if (userLocation) {
      map.setView(userLocation, 14);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-6 right-6 z-[1000] px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold shadow-md hover:bg-green-700 transition-all"
    >
      🌍 Back to serenity
    </button>
  );
};

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyParks, setNearbyParks] = useState([]);
  const fetchedBoundsRef = useRef(new Set());

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!userLocation) return <p>Loading map...</p>;

  return (
    <>
      <MapLoadingOverlay
        loading={!userLocation || nearbyParks.length === 0}
        parksCount={nearbyParks.length}
      />

      <MapContainer
        center={[userLocation[0], userLocation[1]]}
        zoom={13}
        scrollWheelZoom
        className="h-[70vh] w-full max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        <ViewportHandler
          setNearbyParks={setNearbyParks}
          fetchedBoundsRef={fetchedBoundsRef}
        />

        <Marker position={userLocation} icon={userIcon}>
          <Popup>You are here</Popup>
        </Marker>

        {nearbyParks.map((park) =>
          park.lat && park.lon && (
            <Marker
              key={park.id}
              position={[park.lat, park.lon]}
              icon={parkIcon}
            >
              <Popup>{park.tags?.name || "Unnamed Park"}</Popup>
            </Marker>
          )
        )}

        <CenterButton userLocation={userLocation} />
      </MapContainer>
    </>
  );
};

export default Map;
