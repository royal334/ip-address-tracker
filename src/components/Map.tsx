import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import {Icon} from 'leaflet'

type MapProps = {
     lat: number | undefined
     lng: number | undefined
}

function Map(props:MapProps) {

     const customIcon = new Icon({
          iconUrl: '/images/icon-location.svg',
          iconSize: [35, 45]
     })

     function RecenterMap({ lat, lng }: { lat: number; lng: number }) {
          const map = useMap();
          map.setView([lat, lng], 13); // Re-center the map to the new position
          return null;
     }


  return (
    <>
      <div className=''>
          {props.lat ===  undefined || props.lng === undefined ? 
          <div className="flex items-center justify-center h-[50vh]">
          <p className="text-2xl text-gray-500">The map will appears here</p>
         </div> :

          <MapContainer
          center={[props.lat, props.lng]}
          zoom={13}
          scrollWheelZoom={false}
          >
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <RecenterMap lat={props.lat} lng={props.lng} />
          <Marker position={[props.lat, props.lng]} icon={customIcon}>
          <Popup>
          This is the location.
          </Popup>
          </Marker>
          </MapContainer>

          } 

     </div>
    </>
  );
}

export default Map;
