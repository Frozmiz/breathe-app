import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for custom icons
import "leaflet/dist/leaflet.css";
import axios from "axios";

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

  const [nearbyParks, setNearbyParks] = useState([]);

  const [isLoadingParks, setIsLoadingParks] = useState(false);

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

  // Get parks near asking API
  useEffect(() => {
    if (userLocation) {

      setIsLoadingParks(true); // Inicia la carga

      const [latitude, longitude] = userLocation;
      const url = `https://overpass-api.de/api/interpreter?data=[out:json];(node["leisure"="park"](around:5000,${latitude},${longitude});way["leisure"="park"](around:5000,${latitude},${longitude});relation["leisure"="park"](around:5000,${latitude},${longitude}););out;`;
  
      axios
        .get(url)
        .then(async (response) => {
          const parks = [];
  
          // Procesar elementos devueltos
          const promises = response.data.elements.map(async (element) => {
            let parkName = element.tags.name || "Unnamed Park";
            let lat = null;
            let lon = null;
  
            if (element.type === "node") {
              // Si el elemento es un nodo, ya tiene lat/lon
              lat = element.lat;
              lon = element.lon;
            } else if (element.type === "way") {
              // Si el elemento es un "way", tomar el primer nodo para obtener su coordenada
              const nodeIds = element.nodes.join(",");
              const nodeUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(node(id:${nodeIds}););out;`;
  
              try {
                const nodeResponse = await axios.get(nodeUrl);
                const nodes = nodeResponse.data.elements;
                if (nodes.length > 0) {
                  lat = nodes[0].lat;
                  lon = nodes[0].lon;
                }
              } catch (err) {
                console.error("Error obteniendo nodos:", err);
              }
            }
  
            // Agregar parque solo si tiene coordenadas válidas
            if (lat && lon) {
              parks.push({ lat, lng: lon, name: parkName });
            }
          });
  
          // Esperar a que todas las promesas se resuelvan
          await Promise.all(promises);
  
          // Actualizar el estado con los parques procesados
          setNearbyParks(parks);
        })
        .catch((error) => {
          console.error("Error obteniendo parques:", error);
        })
        .finally(() => {
          setIsLoadingParks(false);
        });
    }
  }, [userLocation]);

  return (
    <div className="map-container mt-10 mx-auto max-w-7xl px-4">
      {isLoadingParks ? (
        <div className="flex flex-col justify-center items-center h-64 bg-green-100 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Icono temático */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
              alt="Tree icon"
              className="w-12 h-12 animate-spin-slow"
            />
            <p className="text-2xl font-semibold text-green-700">
              Finding nearby parks...
            </p>
          </div>
          <p className="mt-2 text-green-600 italic">
            Connecting you with nature 🌿
          </p>
        </div>
      ) : (
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
          {userLocation && <ChangeMapCenter position={userLocation} />}
          {userLocation && (
            <Marker position={userLocation} icon={userIcon}>
              <Popup>
                <b>You are here</b>
              </Popup>
            </Marker>
          )}
          {nearbyParks.map((park, index) =>
            park.lat && park.lng ? (
              <Marker key={index} position={[park.lat, park.lng]} icon={parkIcon}>
                <Popup>{park.name}</Popup>
              </Marker>
            ) : null
          )}
        </MapContainer>
      )}
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

export default Map;
