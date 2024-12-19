import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Create the map
    const map = L.map("map").setView([40.4168, -3.7034], 13); // Madrid

    // Load the OpenStreetMap map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Example marker.
    L.marker([40.4168, -3.7034])
      .addTo(map)
      .bindPopup("This is an example park.")
      .openPopup();

    // You can add new markers here.
  }, []);

  return <div id="map" style={{ height: "500px" }}></div>;
};

export default MapComponent;
