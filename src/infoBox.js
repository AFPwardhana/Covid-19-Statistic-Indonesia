class InfoBox extends HTMLElement {
    connectedCallback() {
        this.render();
  }

  render(){
    this.innerHTML = `
    <div class="p-4 mb-3 bg-light rounded">
    <h4 class="totalKasus font-italic ">Kasus Di Indonesia</h4>
      <div class = app_stat>
        <div class="card extend-top">
          <h5>Kasus</h5>
          <p class="card-text"></p>
        </div>
        <div class="card extend-middle ">
          <h5>Sembuh</h5>
          <p class="card-text"></p>
        </div>
        <div class="card extend-bottom">
          <h5>Meninggal</h5>
          <p class="card-text"></p>
        </div>
    </div>

    
    <div id ="peta" class="p-4">
      <h4 class="font-italic">Archives</h4>
      
    </div>
    

    <div class="p-4">
      <h4 class="font-italic">Elsewhere</h4>
      
    </div>
  `
  }
}

 
customElements.define("info-box", InfoBox);