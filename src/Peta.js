var React = require('react');
var ReactDOM = require('react-dom');
import { Map as LeafletMap, TileLayer } from "react-leaflet";



// lat: -3.843571, 
//       lng: 117.665106,
function Peta() {
    return (
        <div className = "peta">
            <LeafletMap>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        </LeafletMap>
        </div>   
    ); 
}
export default Peta;
ReactDOM.render(<Peta />,document.getElementById('peta'));
