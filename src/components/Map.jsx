import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import CustomIcon from "../assets/icon-location.svg";

const UpdateMap = ({ lat, lng }) => {
  const map = useMap();
  map.setView([lat, lng], map.getZoom());
  return null;
};

const Map = ({ lat, lng }) => {
  const customIcon = new Icon({
    iconUrl: CustomIcon,
    iconSize: [30],
  });
  return (
    <MapContainer
      id="map"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          <b>Latitude: </b>
          {lat} <b>Longitude: </b>
          {lng}
        </Popup>
      </Marker>
      <UpdateMap lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Map;
