import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Importar Leaflet para los íconos personalizados
import "leaflet/dist/leaflet.css";

// Custom icon for user’s location
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149059.png", 
  iconSize: [40, 40],
  iconAnchor: [20, 40], 
  popupAnchor: [0, -40], 
});

// Tree icon for parks
const parkIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2373/2373927.png",
  iconSize: [30, 30], 
  iconAnchor: [15, 30], 
  popupAnchor: [0, -30], 
});

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  // Get the user’s location
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

  return (
    <div className="map-container mt-10 mx-auto max-w-7xl px-4">
      <MapContainer
        center={userLocation || [43.6117, 3.8777]} // We use the location of Montpellier if the user has no location
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        className="rounded-xl border-7 border-green-400 shadow-lg shadow-green-200"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Component to change the map center dynamically */}
        {userLocation && <ChangeMapCenter position={userLocation} />}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>
              <b>You are here</b>
            </Popup>
          </Marker>
        )}
        {/* Parks near with the icon */}
        {parkLocations.map((park, index) => (
          <Marker key={index} position={[park.lat, park.lng]} icon={parkIcon}>
            <Popup>{park.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// Component to change the map center dynamically
const ChangeMapCenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);
  return null;
};

// List of parks near Montpellier
const parkLocations = [
  { lat: 43.6381, lng: 3.8901, name: "Parc Zoologique de Lunaret" },
  { lat: 43.6150, lng: 3.8777, name: "Parc des Plantes" },
  { lat: 43.6029, lng: 3.8682, name: "Parc de la Guirlande" },
  { lat: 43.6062, lng: 3.8643, name: "Parc du Château de Flaugergues" },
  { lat: 43.6212, lng: 3.8486, name: "Parc Méric" },
  { lat: 43.6173, lng: 3.8986, name: "Parc Rimbaud" },
  { lat: 43.6224, lng: 3.8774, name: "Parc Jean Aicard" }
];

export default Map;