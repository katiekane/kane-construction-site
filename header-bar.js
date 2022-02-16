class HeaderBar extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        let activePage = this.getAttribute('activePage');
        console.log(activePage);
        this.innerHTML = `
        <div class="header_section">
           <div class="kane_construction_logo_div">
                <IMG class="kane_construction_logo">
           </div>
           <div class="kane_con_text_div">
                <h1 class="kane_con_text">Kane Construction</h1>
           </div>
           <div class="header-bar">
                <a class="header_link ${activePage == 'Home' ? 'active_header_link' : ''}" href="index.html">Home</a>
                <a class="header_link ${activePage == 'Contact' ? 'active_header_link' : ''}" href="contact.html">Contact</a>
                <a class="header_link ${activePage == 'Gallery' ? 'active_header_link' : ''}" href="gallery.html">Gallery</a>
           </div>
        </div>
        `;
    }
}
customElements.define('header-bar', HeaderBar);