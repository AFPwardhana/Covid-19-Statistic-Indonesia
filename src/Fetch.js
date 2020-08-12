import '../src/Table.js';
import '../src/infoBox.js';
import '../src/Peta.js';
import "leaflet/dist/leaflet.css";

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
        //   renderPeta();
          console.log(dataIndo.update.total);
        }
      })
      .catch(error =>{
        console.error(error);
      });
    }

const renderTable = (datas)=>{
  const listProvinsi  = document.querySelector("#table");
  listProvinsi.innerHTML = "";;
  datas.forEach(provinsi => {
    listProvinsi.innerHTML += `
    <tr>
      <th scope="row">${provinsi.key}</th>
      <td>${provinsi.jumlah_kasus}</td>
      <td>${provinsi.jumlah_sembuh}</td>
      <td>${provinsi.jumlah_meninggal}</td>
    </tr>`

    // console.log(`${provinsi.key} + ${provinsi.jumlah_kasus} + ${provinsi.jumlah_sembuh} + ${provinsi.jumlah_meninggal}`);
  });
  
}

const renderCard = (isi)=>{
  const kasus  = document.querySelector(".extend-top p");
  const sembuh  = document.querySelector(".extend-middle p");
  const meninggal  = document.querySelector(".extend-bottom p");
  kasus.innerHTML = isi.jumlah_positif;
  sembuh.innerHTML = isi.jumlah_sembuh;
  meninggal.innerHTML = isi.jumlah_meninggal;
}
// const renderPeta = ()=>{
//     const petaIndo  = document.querySelector("#peta");
//     petaIndo.innerHTML = "<Peta />";
//     // ReactDOM.render(,document.getElementById(''));
// }
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