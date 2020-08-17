import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Table.js';
import '../src/infoBox.js';
import Peta from "../src/Peta.js";
import "leaflet/dist/leaflet.css";
import numeral from "numeral";

const main = () => {
const urlAPI = "https://data.covid19.go.id/public/api/update.json" , urlAPI2 ="https://data.covid19.go.id/public/api/prov.json";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

const getData = ()=>{
  fetch(proxyUrl + urlAPI2)
  .then(response => {return response.json();})
  .then(data =>
    { 
      if (data.error){
        console.log(data);
      }
      else{
        renderTable(data.list_data);
        renderPeta(data.list_data);
      }
    
    })
    .catch(error =>{
      console.error(error);
    });
    
  }
const getDataIndo = ()=>{
    fetch(proxyUrl + urlAPI)
    .then(response => {return response.json();})
    .then(dataIndo =>
      { 
        if (dataIndo.error){
          console.log(dataIndo);
        }
        else{
          renderCard(dataIndo.update.total);
         
        }
      })
      .catch(error =>{
        console.error(error);
      });
    }
const renderTable = (datas)=>{
  const listProvinsi  = document.querySelector("#table");
  listProvinsi.innerHTML = "";
  datas.map(provinsi => {
    listProvinsi.innerHTML += `
    <tr>
      <th scope="row">${provinsi.key}</th>
      <td>${numeral(provinsi.jumlah_kasus).format("0,0")}</td>
      <td>${numeral(provinsi.jumlah_sembuh).format("0,0")}</td>
      <td>${numeral(provinsi.jumlah_meninggal).format("0,0")}</td>
    </tr>`});
}
const renderCard = (isi)=>{
  $(".extend-top p").html(numeral(isi.jumlah_positif).format("0,0"));
  $(".extend-middle p").html(numeral(isi.jumlah_sembuh).format("0,0"));
  $(".extend-bottom p").html(numeral(isi.jumlah_meninggal).format("0,0"));
}

const renderPeta = (dataPeta)=>{
   ReactDOM.render(<Peta provinsi={dataPeta}  />,document.getElementById('peta'));
}
getData();
getDataIndo();

$(document).ready(function() {
  $("#search").keyup(function () {
    var searchTerm = $("#search").val();
    var listItem = $('.results tbody').children('tr');
    var searchSplit = searchTerm.replace(/ /, "'):containsi('")
    
  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
    
  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','false');
  });

  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
    $(this).attr('visible','true');
  });

  var jobCount = $('.results tbody tr[visible="true"]').length;
  console.log(jobCount);
  //   $('.counter').text(jobCount + ' item');

  if(jobCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
          });
});
}
export default main;