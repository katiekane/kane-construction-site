class BootstrapHeader extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        let activePage = this.getAttribute('activePage');
        console.log(activePage);
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg header-bg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <svg class="kane-construction-logo"/>
            </a>
            <a class="navbar-brand" href="#">
               <h1 class="kane-con-text">Kane Construction</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="header-link ${activePage == 'Home' ? 'active-header-link' : ''}" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="header-link ${activePage == 'Contact' ? 'active-header-link' : ''}" href="#">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="header-link ${activePage == 'Gallery' ? 'active-header-link' : ''}" href="#">Gallery</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        `;
    }
}
customElements.define('bootstrap-header', BootstrapHeader);
