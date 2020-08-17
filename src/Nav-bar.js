class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mx-auto" href="#">COVID-19 Statistic Indonesia</a>
       </nav> `}
}

window.customElements.define("na-bar", NavBar);