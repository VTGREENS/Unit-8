import {Popup, Marker,} from 'react-leaflet'

const MapPointer = (props) => {
    const position = [props.restaurant.latitudeAndLongitude.latitude,props.restaurant.latitudeAndLongitude.longitude];
    
    // Try to make a function that loops through hour object and produces open hours display
    function openHours(hours){

    }
    // expected output [["Sunday", "Closed"], ["Monday", "8:00-6:00"]]

    return ( 
    <>
        <Marker position={position}>
            <Popup>
                <h4 style={{textAlign:"Center"}}>{props.restaurant.name}</h4>
                <h6 style={{ color: "green", textAlign: "center" }}>
                    Food Type: {props.restaurant.cuisine}
                </h6>
                <hr />
                <ul>
                <li>Sunday:{props.restaurant.hours.Sunday}</li>
                <li>Monday:{props.restaurant.hours.Monday}</li>
                <li>Tuesday:{props.restaurant.hours.Tuesday}</li>
                <li>Wednesday:{props.restaurant.hours.Wednesday}</li>
                <li>Thursday:{props.restaurant.hours.Thursday}</li>
                <li>Friday:{props.restaurant.hours.Friday}</li>
                <li>Saturday:{props.restaurant.hours.Saturday}</li>   
                </ul>
                <p>{props.restaurant.about}</p>
            </Popup>
        </Marker>
        
    </>
    );
}
 
export default MapPointer;