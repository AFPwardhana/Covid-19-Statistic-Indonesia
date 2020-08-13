import React, { useState, useEffect } from 'react';
// var ReactDOM = require('react-dom');
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "./util";

function Peta(provinsi) {
  
    return (
        <div >
        <LeafletMap  center={{lat: -3.843571, lng: 117.665106}} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(provinsi.provinsi)}
        </LeafletMap>
        </div>   
    ); 
}
export default Peta;
// ReactDOM.render(<Peta />,document.getElementById('peta'));
