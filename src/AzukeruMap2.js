import React,{useState} from 'react';
import GoogleMapReact from 'google-map-react';
import AzukeruMap3 from './AzukeruMap3';
import "./reset.css";



function AzukeruMap2() {

    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [address, setAddress] = useState(null);
    const [marker, setMarker] = useState(null);
    const [Info, setInfo] = useState(null);

    const defaultLatLng = {
        lat: 35.6809591,
        lng: 139.7673068,
    };

    const handleApiLoaded = (obj) => {
        setMap(obj.map);
        setMaps(obj.maps);
        setGeocoder(new obj.maps.Geocoder());
    };

    const search = () => {
        geocoder.geocode({
            address,
        }, (results, status) => {
            if (status === maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                if (marker) {
                    marker.setMap(null);
                }
                setMarker(new maps.Marker({
                    map,
                    position: results[0].geometry.location,
                }));
                setInfo(results[0].formatted_address);
                console.log(results[0].formatted_address);
                console.log(results[0].geometry.location.lat());
                console.log(results[0].geometry.location.lng());
            }
        });
    };

    return (
        <>
            <div id="AzukeruMap" style={{height: '600px', width: '100%' }}>
                <GoogleMapReact
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTLyFAxJqkD9w4Kr4Ju0MJNH_rrs3Ygnk&v=3.exp&libraries=drawing,geometry,places,visualization"
                    bootstrapURLKeys={{ key: "AIzaSyDTLyFAxJqkD9w4Kr4Ju0MJNH_rrs3Ygnk" }}
                    defaultCenter={defaultLatLng}
                    defaultZoom={16}
                    onGoogleApiLoaded={handleApiLoaded} />
                <input type="text" onChange={(e) => setAddress(e.target.value)} />
                <button type="button" onClick={search}>Search</button>
                <div>{Info}</div>
            </div>
            
            <AzukeruMap3/>


        </>
    );
}

export default AzukeruMap2
