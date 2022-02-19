class HeaderBar extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        let activePage = this.getAttribute('activePage');
        console.log(activePage);
        this.innerHTML = `
        <div class="header-section">
           <div class="kane-construction-logo-div">
                <IMG class="kane-construction-logo">
           </div>
           <div class="kane-con-text-div">
                <h1 class="kane-con-text">Kane Construction</h1>
           </div>
           <div class="header-bar">
                <a class="header-link ${activePage == 'Home' ? 'active-header-link' : ''}" href="index.html">Home</a>
                <a class="header-link ${activePage == 'Contact' ? 'active-header-link' : ''}" href="contact.html">Contact</a>
                <a class="header-link ${activePage == 'Gallery' ? 'active-header-link' : ''}" href="gallery.html">Gallery</a>
           </div>
        </div>
        `;
    }
}
customElements.define('header-bar', HeaderBar);