import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useStyles from "./useStyles";

const Map = ({ lat, long }) => {
  const classes = useStyles();
  return (
    <>
      <MapContainer
        className={classes.mapContainer}
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
