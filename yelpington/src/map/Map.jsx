import {MapContainer, TileLayer} from 'react-leaflet'
import MapPointer from './MapPointer';
import restaurants from "../assests/resaurant.json"

const Map = (props) => {
    const position = [44.47, -73.2]
    return ( 
    <>
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {restaurants.map((restaurant, index)=> <MapPointer restaurant={restaurant} key={restaurant.id}/>)}
    </MapContainer>
    </>
    );
}
export default Map;
 