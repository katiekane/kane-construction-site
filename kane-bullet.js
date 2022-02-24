class KaneBullet extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        let text = this.getAttribute('text');
        this.innerHTML = `
        <div style="display: flex; flex-direction: row;">
            <i class="bi bi-play-fill med-font dark"></i>
            <p class="expertise-items">${text}</p>
        </div>
        `;
    }
}
customElements.define('kane-bullet', KaneBullet);
