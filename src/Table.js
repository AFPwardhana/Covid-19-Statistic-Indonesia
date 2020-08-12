class Table extends HTMLElement {
    connectedCallback() {
        this.render();
  }
  render(){
    this.innerHTML = `
         <div class="col-lg-12 col-lg-offset-12">
          <input type="search" id="search"  class="form-control border-bottom" placeholder="Search">
        </div>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-striped results" >
          <thead>
              <tr class="table-info">
                  <th scope="col">Provinsi</th>
                  <th scope="col">Kasus</th>
                  <th scope="col">Sembuh</th>
                  <th scope="col">Meninggal</th>
              </tr> 
              <tr class="warning no-result">
                <td colspan="4"><i class="fa fa-warning"></i> No result</td>
              </tr> 
          </thead>
          <tbody  class="table-borderless " id="table">
          </tbody>
      </table>
      </div>
      
  `
  }
}
customElements.define("table-box", Table);