import React from "react";
import { Circle , Popup } from "react-leaflet";
import numeral from "numeral";

export const showDataOnMap = (data ) =>(
  data.map(prov => {
    return (
      <Circle
      key ={prov.key}
      center={[prov.lokasi.lat, prov.lokasi.lon]}
      color={"#CC1034"}
      fillColor={"#CC1034"}
      fillOpacity={0.4}
      radius={
        Math.sqrt(prov["jumlah_kasus"]) * 800
      }
    >
      <Popup>
        <div className="info-container">
          <div className="info-name">{prov.key}</div>
          <div className="info-confirmed">
            Jumlah Kasus: {numeral(prov.jumlah_kasus).format("0,0")}
          </div>
          <div className="info-recovered">
            Jumlah Sembuh: {numeral(prov.jumlah_sembuh).format("0,0")}
          </div>
          <div className="info-deaths">
            Jumlah Meninggal: {numeral(prov.jumlah_meninggal).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  );})
);
