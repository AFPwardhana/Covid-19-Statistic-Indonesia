import React from "react";
import { Circle } from "react-leaflet";
const casesTypeColors = {
    jumlah_kasus: {
      hex: "#CC1034",
      multiplier: 800,
    },
    jumlah_sembuh: {
      hex: "#7dd71d",
      multiplier: 1200,
    },
    jumlah_meninggal: {
      hex: "#fb4443",
      multiplier: 2000,
    },
  };
export const showDataOnMap = (data, casesType = "jumlah_kasus") =>(
  
  data.map((prov) => {
    return (
      console.log(data),
    <Circle
      key ={prov.key}
      center={[prov.lokasi.lat, prov.lokasi.lon]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(prov[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
    </Circle>
  );})
);
